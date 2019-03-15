import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import 'firebase/database';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/addon/edit/closebrackets';
import { Controlled as CodeMirror } from 'react-codemirror2';

import useThrottle from '../../hooks/useThrottle';
import useProject from '../../hooks/useProject';
import UserContext from '../../contexts/User';

const THEMES = ['monokai', 'solarized', 'oceanic-next'];

const options = {
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  autoCloseBrackets: true,
};

function EditPane() {
  const { project, isLoading } = useProject();
  const [value, setValue] = useState(null);
  const [theme, setTheme] = useState(THEMES[0]);
  const user = useContext(UserContext);
  const pushToDatabase = useThrottle(values => {
    firebase
      .database()
      .ref(`projects/${project.uid}`)
      .child('data')
      .set(values.slice(-1)[0]);
  }, 500);

  if (isLoading) return 'loading...';
  if (!value && !isLoading) setValue(project.data);
  const isEditable = user.uid === project.currentEditor;
  const isOwner = user.uid === project.owner;

  const currentOptions = {
    ...options,
    theme,
    mode: project.language,
    readOnly: !isEditable,
  };

  function onBeforeChange(editor, data, value) {
    if (isEditable) {
      pushToDatabase(value);
      setValue(value);
    }
  }

  function onThemeChange(e) {
    setTheme(e.target.value);
  }

  function onEditorChange(e) {
    firebase
      .database()
      .ref(`projects/${project.uid}`)
      .child('currentEditor')
      .set(e.target.value);
  }

  const editorSelect = () => (
    <select value={project.currentEditor} onChange={onEditorChange}>
      {project.editors.map(editor => (
        <option value={editor.uid} key={editor.uid}>
          {editor.displayName}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <select value={theme} onChange={onThemeChange}>
        <option value="solarized">solarized</option>
        <option value="monokai">monokai</option>
        <option value="oceanic-next">oceanic-next</option>
      </select>
      {isOwner && editorSelect()}
      <CodeMirror
        value={isEditable ? value : project.data}
        options={currentOptions}
        onBeforeChange={onBeforeChange}
      />
    </>
  );
}

export default EditPane;
