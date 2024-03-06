import './Footer.scss';
// props使用
export default ({ props }) => {
  let linkItemArray = [
    {
      name: 'TOP',
      url: '#',
    },
    {
      name: 'News',
      url: '#1',
    },
    {
      name: 'About',
      url: '#2',
    },
  ];

  return (
    <>
      <footer className='py-1 bg-dark text-light footer'>
        <div className='container text-center'>
          <ul className='nav'>
            {linkItemArray.map((item) => {
              return (
                <li key={item.name} className='nav-item'>
                  <a href={item.url} className='nav-link'>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className='footer__ttl'>
            <a href='./'>{props.title1}</a>
          </p>
        </div>
      </footer>
    </>
  );
};
