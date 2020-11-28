import React from 'react';

function KbnButton({ type = 'button', disabled = false, value = '' }: KbnButtonProps) {
  const classes = (type: 'text' | 'button') => {
    return type === 'button' ? 'kbn-button' : 'kbn-button-text'
  }

  return (
    <button type='button' className={classes(type)} disabled={disabled}>
      {value}
    </button>
  );
}

export interface KbnButtonProps {
  type?: 'text' | 'button'
  disabled?: boolean
  value?: string
}

export default KbnButton;
