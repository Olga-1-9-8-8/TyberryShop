import styles from './AboutItem.module.css';

interface Props {
  name: string;
}

export const AboutItem: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.itemAboutCompany}>
      <h3 className={styles.itemAboutCompanyTitle}>{name}</h3>
    </div>
  );
};
