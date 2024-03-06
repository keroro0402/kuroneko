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
      <p>これはログインページです！！</p>
    </>
  );
};
