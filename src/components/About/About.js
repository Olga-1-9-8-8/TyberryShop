import { Timeline } from 'antd';
import 'antd/dist/antd.css';
import styles from './About.module.css';
import AboutItem from './AboutItem/AboutItem';




const About = () => {
    return (
    <section className={styles.aboutCompanyWrapper}>
        <h2 className={styles.aboutCompanyTitle}>О Компании</h2>
        <div className = {styles.aboutCompany}>
            <AboutItem name = 'Быстрая доставка'/>
            <AboutItem name = 'Надежная компания'/>
            <AboutItem name = '10 лет на рынке'/>
            <AboutItem name = 'Скидки и Акции'/>
        </div>
        <div className={styles.payTermTitle}>
          <h4>Условия Оплаты</h4>
            <Timeline>
              <Timeline.Item >Любая платежная система Мира</Timeline.Item>
              <Timeline.Item>Любой валютой Мир</Timeline.Item>
              <Timeline.Item>Можно платить Картой</Timeline.Item>
              <Timeline.Item>Можно платить Наличными</Timeline.Item>
           </Timeline>
        </div>
      </section>
    );

}

          

export default About;