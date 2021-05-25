import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import img1 from '../../../pictures/slider1.jpg';
import img2 from '../../../pictures/slider2.jpg';
import img3 from '../../../pictures/slider3.jpg';
import styles from "./Slider.module.css";



export const Slider = () => {
    
    const slideres = [img1,img2,img3];
    const [current,setCurrent] = useState(0);
    const length = slideres.length;


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const previosSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };


    return (
        
        <section className ={styles.slider}>
                <FontAwesomeIcon icon={faArrowCircleLeft} onClick = {previosSlide} className={styles.lefrArrow}  size="2x" color = "rgba(0,0,0,0.3)" />
               
                {slideres.map((slide, index) => {
                    
                    return(
                        <div className ={index === current ? 'slide active' : 'slide'} key ={index}>
                            {index === current && (<img src={slide} alt="BigSale"/>)}
                             
                        </div>    
                    )
                })}
                <FontAwesomeIcon icon={faArrowCircleRight} onClick= {nextSlide} className={styles.rightArrow}  size="2x" color = "rgba(0,0,0,0.3)"/>

        </section>
    
    )
}





