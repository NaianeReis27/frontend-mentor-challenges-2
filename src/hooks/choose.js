import { useState } from 'react';

export const useChoose = (initialChoose = false) => {
  const [currentChoose, setCurrentChoose] = useState(false);

  const handleChoose = (choose) => {
    setCurrentChoose(choose);
  };

  return {
    currentChoose,
    handleChoose,
  };
};