import './Button.css';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size,
  backgroundColor,
  borderColor,
  textColor,
  onClick,
  children,
}) => {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor,
    color: textColor,
    borderRadius: '55px',
    padding: size === 'small' ? '5px 20px' : size === 'medium' ? '56px 200px' : '560px 2000px',
  };

  return (
    <button
      className="button"
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;