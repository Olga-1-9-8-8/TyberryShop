import styles from './AboutItem.module.css';

const AboutItem = (props) => {
    return (
    <div className={styles.itemAboutCompany}>
        <h3 className={styles.itemAboutCompanyTitle}>{props.name}</h3>
    </div>
    )
}

export default AboutItem;