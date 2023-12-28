import React, { useState } from "react";

interface CardProps {
  width: number;
  height: number;
  image: string;
  title: string;
  text: string;
  onLinkClick: () => void;
}

const Card: React.FC<CardProps> = ({ width, height, image, title, text, onLinkClick }) => {
  const [linkHovered, setLinkHovered] = useState(false);

  const handleLinkHover = () => {
    setLinkHovered(true);
  };

  const handleLinkLeave = () => {
    setLinkHovered(false);
  };

  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
      </div>
      <div style={{ padding: "16px", margin: "0px 32px"}}>
        <h2 className="header">{title}</h2>
        <p className="textik">{text}</p>
        <a className="link1"
          href="#"
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
          onClick={onLinkClick} // Добавляем обработчик клика на ссылку
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: linkHovered ? "darkblue" : "blue",
          }}
        >
          Read more &nbsp;
          <img src="sarrow.svg" alt="Next"/>
        </a>
      </div>
    </div>
  );
};

import Button from '../Button';

interface CardListProps {
  initialCardWidth: number;
  initialCardHeight: number;
  shownCards: {image: string;
    title: string;
    text: string;
    onLinkClick: () => void;}[];
  hiddenCards: {image: string;
    title: string;
    text: string;
    onLinkClick: () => void;}[];
    cardSpacing?: number;
    rowSpacing?: number;
}

const CardList: React.FC<CardListProps> = ({ initialCardWidth, initialCardHeight, shownCards, hiddenCards, cardSpacing, rowSpacing }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="CardSection">
      <div style={{ display: "flex", flexWrap: "wrap", gap: `${cardSpacing}px`}} className="RowOfCards">
        {shownCards.map((card, index) => (
          <div style={{ marginBottom: `${rowSpacing}px` }}>
          <Card key={index} {...card} width={initialCardWidth} height={initialCardHeight} />
        </div>
        ))}
      </div>
      {showAll &&
        <div style={{ display: "flex", flexWrap: "wrap",  gap: `${cardSpacing}px` }}>
          {hiddenCards.map((card, index) => (
            <div style={{ marginBottom: `${rowSpacing}px` }}>
            <Card key={index} {...card} width={initialCardWidth} height={initialCardHeight} />
          </div>
          ))}
        </div>
      }
      <div className="button-wrapper"><Button
        backgroundColor='#ffffff' 
        borderColor='#458FF6' 
        textColor='#458FF6' 
        width='200px' 
        height='56px' 
        borderRadius='55px'
        onClick={handleShowAll}
      >
        {showAll ? "Hide" : "Show all"}
      </Button>
      </div>
    </div>
  );
};

export default CardList;