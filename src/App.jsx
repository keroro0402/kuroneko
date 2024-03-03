import Header from './components/Header';
import Nav from './components/Nav';
import { useState } from 'react';
function App() {
  let [pageTitle, setTitlr] = useState('KuroNeko');
  return (
    <>
      <Header props={{ title1: pageTitle }} />
      <Nav props={{ title1: pageTitle }} />
    </>
  );
}
export default App;
