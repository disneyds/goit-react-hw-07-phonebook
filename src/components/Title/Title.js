import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Title() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="Title"
      unmountOnExit
    >
      <h1>Контакты</h1>
    </CSSTransition>
  );
}
