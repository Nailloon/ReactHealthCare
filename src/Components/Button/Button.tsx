import './Button.css';

interface ButtonProps {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  onClick?: () => void;
  width: string;
  height: string;
  borderRadius?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  borderColor,
  textColor,
  borderRadius,
  width,
  height,
  onClick,
  children,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor,
    color: textColor,
    borderRadius: borderRadius,
    height,
    width,
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