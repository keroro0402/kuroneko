import './Nav.scss';
import Button from 'react-bootstrap/Button'; // react用bootstrap（ボタンコンポーネント）をインポート
import { useState } from 'react';
export default ({ title }) => {
  return (
    <>
      <p>ここは{title}です</p>
    </>
  );
};
