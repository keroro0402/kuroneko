import './Nav.scss';
import Button from 'react-bootstrap/Button'; // react用bootstrap（ボタンコンポーネント）をインポート
import { useState } from 'react';
export default ({ props }) => {
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container'>
          <a>
            <Button>{props.title1}</Button>
          </a>
        </div>
      </nav>
    </>
  );
};
