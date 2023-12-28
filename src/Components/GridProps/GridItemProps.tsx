import React from 'react';

interface GridItemProps {
  image: string;
  title: string;
  text: string;
  width: string;
  height: string;
  backgroundColor: string
}


const GridItem: React.FC<GridItemProps> = ({ image, title, text, width, height, backgroundColor}) => {
  return (
    <div className="GridItem" style={{width, height, margin: '20px', borderRadius: '20px', backgroundColor, padding: '59px 0px 0px 37px' }}>
      <img src={image} alt={title} />
      <p className='header'>{title}</p>
      <p className='text1'>{text}</p>
    </div>
  );
}

export default GridItem;