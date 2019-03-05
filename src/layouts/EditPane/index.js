import React, { useState, useRef } from 'react';
import useThrottle from '../../hooks/useThrottle';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import data from './data';

function EditPane() {
  const editorRef = useRef();
  const [value, setValue] = useState(() => Value.fromJSON(data));
  const pushOperation = useThrottle(operations => {
    console.log('send it', operations);
  }, 500);

  function onChange(change) {
    change.operations
      .filter(e => e.get('type') !== 'set_selection')
      .toJS()
      .forEach(pushOperation);

    setValue(change.value);
  }

  return (
    <Editor
      placeholder="Enter some text..."
      ref={editorRef}
      value={value}
      onChange={onChange}
    />
  );
}

export default EditPane;
