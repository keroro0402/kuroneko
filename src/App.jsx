import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  let [pageTitle, setTitlr] = useState('KuroNeko');
  let [flg, setFlg] = useState(false);
  const url = document.location.href;
  window.onload = () => {
    if (url.indexOf('?login') == -1) {
      setFlg(true);
    }
  };

  return (
    <>
      <Header props={{ title1: pageTitle }} />
      {flg ? (
        <Nav props={{ title1: pageTitle }} />
      ) : (
        <Login props={{ title1: pageTitle }} />
      )}
      <Footer props={{ title1: pageTitle }} />
    </>
  );
}
export default App;
