import { Checkbox } from './styles';
import { useRef } from 'react';
import { useChoose } from '../../hooks/choose';

export const CheckComponent = () => {
  const input = useRef();
  const { currentChoose, handleChoose } = useChoose(false);

  return (
    <Checkbox currentChoose={currentChoose}>
      <span className='monthly'>Monthly</span>
      <input
        ref={input}
        onClick={() => {
          handleChoose(input.current.checked);
        }}
        type="checkbox"
      />
      <span className='yearly'>Yearly</span>
    </Checkbox>
  );
};