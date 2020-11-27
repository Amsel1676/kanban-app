import React from 'react';

export interface Props {
  type?: 'text' | 'button'
}

function KbnButton({ type = 'button' }: Props) {
  const classes = (type: any) => {
    return type === 'button' ? 'kbn-button' : 'kbn-button-text'
  }

  return (
    <button type='button' className={classes(type)}>test</button>
  );
}

KbnButton.defaultProps = {
  type: 'button'
}

export default KbnButton;
