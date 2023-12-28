import React, { useState } from 'react';
import './TestimonialSlider.css';
import Divider from '../Components/Divider';

interface TestimonialData {
  name: string;
  position: string;
  review: string;
  image: any; // Можно использовать более конкретный тип, например string
}


interface TestimonialSliderProps {
    data: TestimonialData[];
    width: string; 
    height: string;
  }
  const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ data, width, height }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isLastSlide = currentIndex === data.length - 1;

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
  };

  return (
    <div className="testimonial-slider" >
      <div className="testimonial-container"style={{width, height}}>
        <div className="background-gradient" />
        <div className="content">
          <h2 className='reviewHeader'>What our customer are saying</h2>
          <Divider width={'56px'} borderRadius={'6px'} color={'#FFF'} height={'2px'} align='center'></Divider>
          <div className="testimonial">
  <img src={data[currentIndex].image} alt="User" className="avatar" />
  <div className='aboutUser'>
    <span className='nameText'>{data[currentIndex].name}</span>
    <span className='dopInfo'>{data[currentIndex].position}</span>
  </div>
  <p className='reviewText'>{data[currentIndex].review}</p>
</div>
        </div>
      </div>
      <div className="controls">
      <img src="larrow.svg" alt="Previos" onClick={handlePrev} className="arrow" style={{ opacity: currentIndex === 0 ? 0.3 : 1.0 }}/>
        {data.map((_, index) => (
  <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
))}
        <img src="rarrow.svg" alt="Next" onClick={handleNext} className="arrow" style={{ opacity: isLastSlide ? 0.3 : 1.0 }}/>
      </div>
    </div>
  );
};

export default TestimonialSlider;