import React from 'react';
import styles from './ProfileInput.module.css';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  placeholder: string;
}

export const ProfileInput: React.FC<Props> = ({
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        min-length="4"
        max-length="30"
        required
      />
    </div>
  );
};
