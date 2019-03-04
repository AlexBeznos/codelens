import React, { useState, useRef } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import data from './data';

function EditPane() {
  const [value, setValue] = useState(Value.fromJSON(data));
  const editorRef = useRef();

  const onChange = (change) => {
    console.log('_______________');
    console.log(change.operations.toJS());
    setValue(change.value);
  }

  return (
    <Editor
      placeholder="Enter some text..."
      ref={editorRef}
      value={value}
      onChange={onChange}
    />
  )
}

export default EditPane;
