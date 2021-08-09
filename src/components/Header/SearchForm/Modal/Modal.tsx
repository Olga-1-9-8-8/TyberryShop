import { Dispatch, SetStateAction } from 'react';
import styles from './Modal.module.css';

interface Props {
  active: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const Modal: React.FC<Props> = ({ active, setIsActive }) => {
  const closeModalWindow = () => {
    setIsActive((active: boolean) => !active);
  };
  const clickOnModalDiv = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (active === false) {
    return <></>;
  }

  return (
    <div className={styles.modalWrapper} onClick={closeModalWindow}>
      <div className={styles.modalWrapper__modal} onClick={clickOnModalDiv}>
        <div className={styles.modalWrapper__modalResult}>
          Поиск не дал результатов. Попробуйте изменить запрос
        </div>
        <button
          onClick={closeModalWindow}
          className={styles.modalWrapper__button}
          type="button"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
