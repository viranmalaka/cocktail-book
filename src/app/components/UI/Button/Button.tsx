import React from 'react';

import './Buttons.styles.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  buttonType?: 'text' | 'icon';
};

const Button = ({ children, onClick, className: classNameProp, buttonType }: ButtonProps) => {
  let className = `${classNameProp || ''} cb-btn`;
  if (buttonType === 'icon') {
    className += ' cb-btn-icon';
  } else {
    className += ' cb-btn-text';
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
