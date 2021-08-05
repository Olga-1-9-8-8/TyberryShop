import React from 'react';
import styles from './Button.module.css';

interface Props {
  text: string;
  handler: (e: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = ({ text, handler }) => {
  return (
    <button type="submit" onClick={handler} className={styles.button}>
      {text}
    </button>
  );
};
