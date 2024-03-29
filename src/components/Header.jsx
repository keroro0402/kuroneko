import './Header.scss';
// props使用
export default ({ props }) => {
  return (
    <>
      {/* クラス名付与 */}
      <header className='py-4 header'>
        <div className='container text-center header__inner'>
          <h1 className='header__ttl'>{props.title1}</h1>
        </div>
      </header>
    </>
  );
};
