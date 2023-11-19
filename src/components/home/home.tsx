import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export function HomeList() {
  const [homePaginated, setHomePaginated] = useState(1);

  const handleChangeHomePage = (increment: number) => {
    homePaginated === 1
      ? increment === 1
        ? setHomePaginated(homePaginated + increment)
        : setHomePaginated(homePaginated)
      : increment === -1
      ? setHomePaginated(homePaginated + increment)
      : setHomePaginated(homePaginated);
  };

  return (
    <>
      <div className="homePage-info">
        <div className="back-arrow">
          {homePaginated === 2 && (
            <p onClick={() => handleChangeHomePage(-1)}>
              <img src="./flecha.png" alt="" />
            </p>
          )}
        </div>
        <div className="info">
          {homePaginated === 1 ? (
            <div>
              <Link to={'/elements/'} style={{ textDecoration: 'none' }}>
                ELEMENTOS
              </Link>
            </div>
          ) : (
            <div>
              <Link to={'/create/'} style={{ textDecoration: 'none' }}>
                CREATE ELEMENT
              </Link>
            </div>
          )}
        </div>
        <div className="next-arrow">
          {homePaginated === 1 && (
            <p onClick={() => handleChangeHomePage(+1)}>
              <img src="./flecha.png" alt="" />
            </p>
          )}
        </div>
      </div>
    </>
  );
}
