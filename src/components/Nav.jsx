import './Nav.scss';
import { Button, ButtonToolbar } from 'react-bootstrap'; // react用bootstrap（ボタンコンポーネント）をインポート
import { useState } from 'react';
export default ({ props }) => {
  let [flg, setFlg] = useState(false);
  const showSubNav = () => {
    setFlg((flg = !flg));
  };
  return (
    // フラグメント
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container'>
          <a className='navbar-brand' href='./'>
            {props.title1}
          </a>
          <Button
            onClick={() => {
              showSubNav();
            }}
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbar-content'
          >
            <span className='navbar-toggler-icon'></span>
          </Button>
          <div
            className='collapse navbar-collapse'
            id='navbar-content'
            // インラインスタイル適応
            style={{ display: flg ? 'block' : 'none' }}
          >
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link nav__link' href='./'>
                  TOP
                </a>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <form>
                  <input type='text' />
                  <button>検索</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
