import { Link } from 'react-router-dom';
import { Element } from '../../model/element';
import './card.scss';

type PropsType = {
  element: Element;
};
export function Card({ element }: PropsType) {
  return (
    <>
      <Link to={'/details/' + element.id} style={{ textDecoration: 'none' }}>
        <div className="card">
          <div className="element-header">
            <p> {element.id}</p>
            <p className="element-mass">{element.atomic_mass}</p>
          </div>
          <div className="element-symbol">
            <p>{element.symbol}</p>
          </div>
          <div className="element-name">
            <p> {element.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
