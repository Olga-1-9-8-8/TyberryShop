import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import React, { useState } from 'react';
import styles from './Search.module.css';

export const SearchForm: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeTextIntut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const leaveItem = () => {
    setSearch('');
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const enterOnIput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch('');
      showModal();
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.searchForm}>
      <input
        type="text"
        onChange={changeTextIntut}
        onBlur={leaveItem}
        onKeyDown={enterOnIput}
        placeholder="Найди свой товар..."
        value={search}
      />
      <div className={styles.icon}>
        <FontAwesomeIcon
          onClick={showModal}
          icon={faSearch}
          size="lg"
          color="black"
        />
      </div>
      <Modal
        title="Поиск"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>По запросу {search} ничего не найдено</p>
      </Modal>
    </div>
  );
};
