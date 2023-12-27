import React from 'react';
interface DividerProps {
    width: string;
    borderRadius: string;
    color: string;
    height: string;
    align?: 'left' | 'center' | 'right';
  }

  const Divider: React.FC<DividerProps> = ({ width, borderRadius, color, height, align }) => {
    const dividerStyle: React.CSSProperties = {
      width,
      borderRadius,
      backgroundColor: color,
      height,
      margin: 0,
    };
    if (align === 'left') {
        dividerStyle.marginRight = 'auto'; // Align to the left by pushing to the right
      } else if (align === 'center') {
        dividerStyle.margin = 'auto'; // Center align by using auto margins
      } else if (align === 'right') {
        dividerStyle.marginLeft = 'auto'; // Align to the right by pushing to the left
      }
    
    return <div style={dividerStyle}></div>;
  };
  
  export default Divider;