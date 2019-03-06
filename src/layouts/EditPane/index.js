import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/ruby/ruby';
import { Controlled as CodeMirror } from 'react-codemirror2';

const THEMES = ['monokai', 'solarized'];
const MODES = ['javascript', 'ruby'];

const options = {
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
};

function EditPane() {
  const [value, setValue] = useState('function() {}');
  const [mode, setMode] = useState(MODES[0]);
  const [theme, setTheme] = useState(THEMES[0]);

  function onBeforeChange(editor, data, value) {
    setValue(value);
  }

  function onModeChange(e) {
    setMode(e.target.value);
  }

  function onThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <>
      <select value={mode} onChange={onModeChange}>
        <option value="javascript">javascript</option>
        <option value="ruby">ruby</option>
      </select>
      <select value={theme} onChange={onThemeChange}>
        <option value="solarized">solarized</option>
        <option value="monokai">monokai</option>
      </select>
      <CodeMirror
        value={value}
        options={{ ...options, mode, theme }}
        onBeforeChange={onBeforeChange}
      />
    </>
  );
}

export default EditPane;
