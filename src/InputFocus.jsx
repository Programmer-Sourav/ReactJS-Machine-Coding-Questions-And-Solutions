import React, { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element on mount
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Focus on me" />;
}

export default InputFocus;
