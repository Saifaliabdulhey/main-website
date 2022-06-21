import React, {useState, useEffect} from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import AOS from "aos";

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
        AOS.init({
        });
      }, []);

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                    <div className="head_button_container">
                    <h1 data-aos="fade-right" data-aos-offset="100" data-aos-duration="1800">Wellcome to Naruto</h1>
                    <p data-aos="fade-left" data-aos-offset="100" data-aos-duration="2000">We are here to help you with every thing you need! Just buy anything then you'll got your offer and special discount!</p>
                    <button data-aos-offset="100" data-aos="fade-up" data-aos-duration="3000"
                    data-aos-anchor-placement="bottom-bottom" className="head_button">About Naruto</button>
                    </div>
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
