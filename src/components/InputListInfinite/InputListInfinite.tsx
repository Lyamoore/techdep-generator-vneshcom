import './InputListInfinite.css';

import { useRef, useState } from 'react';

import { Flex } from '../Flex';
import { ActionIcon } from '../ui/ActionIcon/ActionIcon';
import { Input } from '../ui/Input/Input';

interface InputListInfiniteProps {
  title: string;
  name: string;
  placeholder?: string;
}
export const InputListInfinite = ({ title, name, placeholder = '' }: InputListInfiniteProps) => {
  const [inputIds, setInputIds] = useState<number[]>([1]);
  const lastIdRef = useRef<number>(1);

  const addId = () => {
    setInputIds(prev => [...prev, lastIdRef.current + 1]);
    lastIdRef.current += 1;
  };
  const removeId = (idToRemove: number) => {
    setInputIds(prev => prev.filter(id => id !== idToRemove));
  };
  return (
    <Flex direction="column" gap="8px">
      <Flex justify="space-between" align="center">
        <h4>{title}</h4>
        <ActionIcon style={{ border: '1px solid #D9D9D9' }} onClick={addId}>
          {/* Заменить это на соответствующие иконки, пока оставил так, чтобы избежать конфликтов */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8L11 8" stroke="#D9D9D9" strokeLinecap="round" />
            <path d="M8 11L8 5" stroke="#D9D9D9" strokeLinecap="round" />
          </svg>
        </ActionIcon>
      </Flex>
      {inputIds.map(id => (
        <Flex key={id} justify="space-between" align="center">
          <Input name={name} placeholder={placeholder} style={{ width: '80%' }} />
          <ActionIcon style={{ border: '1px solid #D9D9D9', padding: '4px' }} onClick={() => removeId(id)}>
            {/* Заменить это на соответствующие иконки, пока оставил так, чтобы избежать конфликтов */}
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.87891 6.12109L6.12155 1.87845" stroke="#D9D9D9" strokeLinecap="round" />
              <path d="M6.12155 6.12155L1.87891 1.87891" stroke="#D9D9D9" strokeLinecap="round" />
            </svg>
          </ActionIcon>
        </Flex>
      ))}
    </Flex>
  );
};
