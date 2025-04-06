import './Input.css';

import { ComponentProps } from 'react';

import { Flex } from '../../Flex';

interface InputProps extends ComponentProps<'input'> {
  title?: string;
  comment?: string;
  error?: string;
}
export const Input = ({ title, comment, error, ...rest }: InputProps) => {
  return (
    <label className={`input-label ${error ? 'input-label-error' : ''}`}>
      <Flex direction="column">
        {title && <h4>{title}</h4>}
        <input {...rest} />
        {comment && <p className="input-comment">{comment}</p>}
        {error && (
          <p className="input-error">
            Ошибка:&nbsp;
            {error}
          </p>
        )}
      </Flex>
    </label>
  );
};
