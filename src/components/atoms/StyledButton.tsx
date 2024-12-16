import React from "react";

type ButtonProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const StyledButton: React.FC<ButtonProps> = ({ disabled, children, onClick }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: disabled ? '#6c757d' : '#007bff',
        color: 'white',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      {children}
    </button>
  );
};

export default StyledButton;
