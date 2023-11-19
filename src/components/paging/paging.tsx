import { useElements } from '../../hooks/useElements';
import './paging.scss';

export function Page() {
  const { page, handleChangePage, elements } = useElements();

  return (
    <>
      <div className="arrows">
        {page > 1 && (
          <p onClick={() => handleChangePage(-1)} role="button">
            <img
              className="left-arrow"
              src="../arrow.png/"
              alt="Previous Page"
            />
          </p>
        )}
        {page < elements.length / 18 && (
          <p onClick={() => handleChangePage(+1)} role="button">
            <img className="right-arrow" src="../arrow.png" alt="Next Page" />
          </p>
        )}
      </div>
    </>
  );
}
