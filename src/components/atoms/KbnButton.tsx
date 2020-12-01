import React from 'react';
import styles from './KbnButton.module.css'

function KbnButton({ type = 'button', disabled = false, value = '', onClick = () => console.log("clicked")}: KbnButtonProps) {
  const classes = (type: 'text' | 'button') => {
    return type === 'button' ? 'kbnButton' : 'kbnButtonText'
  }

  return (
    <button type='button' className={styles[classes(type)]} disabled={disabled} onClick={onClick} >
      {value}
    </button>
  );
}

export interface KbnButtonProps {
  type?: 'text' | 'button'
  disabled?: boolean
  value?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default KbnButton;
