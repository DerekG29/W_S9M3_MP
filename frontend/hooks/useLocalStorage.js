import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setLocalValue = value => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  
  return [value, setLocalValue];
}

export default useLocalStorage;