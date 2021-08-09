import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal } from './Modal/Modal';
import styles from './Search.module.css';

export const SearchForm: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isActive, setIsActive] = useState(false);
  const changeTextIntut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const leaveItem = () => {
    setSearch('');
  };

  const openModalWindow = () => {
    setIsActive((isActive) => !isActive);
  };

  const enterOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch('');
      openModalWindow();
    }
  };

  return (
    <div className={styles.searchForm}>
      <input
        type="text"
        onChange={changeTextIntut}
        onBlur={leaveItem}
        onKeyDown={enterOnInput}
        placeholder="Найди свой товар..."
        value={search}
      />
      <div className={styles.icon} onClick={openModalWindow}>
        <FontAwesomeIcon icon={faSearch} size="lg" color="black" />
      </div>
      <Modal active={isActive} setIsActive={setIsActive} />
    </div>
  );
};
