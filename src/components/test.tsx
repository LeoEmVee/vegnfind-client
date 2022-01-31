import React from 'react';

interface IFTestComponent {
  name: any;
}

function Test({ name }: IFTestComponent) {
  return <div>{name}</div>;
}

export default Test;
