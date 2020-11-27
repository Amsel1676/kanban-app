import React from 'react';

function KbnButton({ type = 'button', disabled = false }: KbnButtonProps) {
  const classes = (type: 'text' | 'button') => {
    return type === 'button' ? 'kbn-button' : 'kbn-button-text'
  }

  return (
    <button type='button' className={classes(type)} disabled={disabled}>test</button>
  );
}

export interface KbnButtonProps {
  type?: 'text' | 'button'
  disabled?: boolean
}

export default KbnButton;
