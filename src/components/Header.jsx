import './Header.scss';
import Button from 'react-bootstrap/Button'; // react用bootstrap（ボタンコンポーネント）をインポート
import { useState } from 'react';
export default () => {
  let [pageTitle, setTitlr] = useState('KuroNeko');
  return (
    <>
      <header className='py-4 header'>
        <div className='container text-center header__inner'>
          <h1 className='header__ttl'>{pageTitle}</h1>
        </div>
      </header>
    </>
  );
};
