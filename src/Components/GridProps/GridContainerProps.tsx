import React from 'react';
import GridItem from './GridItemProps';

interface GridContainerProps {
  items: { image: string, title: string, text: string }[]; width: string; height: string; backgroundColor: string;
}

const GridContainer: React.FC<GridContainerProps> = ({ items, width, height, backgroundColor}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '20px;' }}>
      {items.map((item, index) => (
        <div key={index}>
          <GridItem
            image={item.image}
            title={item.title}
            text={item.text}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
          />
        </div>
      ))}
    </div>
  );
}

export default GridContainer;