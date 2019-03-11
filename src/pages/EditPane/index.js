import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/addon/edit/closebrackets';
import { Controlled as CodeMirror } from 'react-codemirror2';
import useProject from '../../hooks/useProject';

const THEMES = ['monokai', 'solarized', 'oceanic-next'];

const options = {
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  autoCloseBrackets: true,
};

function EditPane() {
  const [value, setValue] = useState('function() {}');
  const [theme, setTheme] = useState(THEMES[0]);
  const { project, isLoading } = useProject();

  function onBeforeChange(editor, data, value) {
    setValue(value);
  }

  function onThemeChange(e) {
    setTheme(e.target.value);
  }

  if (isLoading) {
    return 'loading...';
  }

  return (
    <>
      <select value={theme} onChange={onThemeChange}>
        <option value="solarized">solarized</option>
        <option value="monokai">monokai</option>
        <option value="oceanic-next">oceanic-next</option>
      </select>
      <CodeMirror
        value={value}
        options={{ ...options, mode: project.language, theme }}
        onBeforeChange={onBeforeChange}
      />
    </>
  );
}

export default EditPane;
