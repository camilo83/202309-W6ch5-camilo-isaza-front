/* import { Link } from 'react-router-dom'; */
import './card.scss';
import { Scientist } from '../../model/scientist';

type PropsType = {
  scientist: Scientist;
};
export function ScientistCard({ scientist }: PropsType) {
  return (
    <>
      {/*       <Link to={'/details/' + element.id} style={{ textDecoration: 'none' }}> */}
      <div className="card">
        <div className="element-header">
          <p> {scientist.name}</p>
        </div>
        <div className="element-symbol">
          <img src={scientist.imageUrl} alt="" width={250} />
        </div>
        <div className="element-name">
          <p className="element-mass">{scientist.nationality}</p>
          <p>{scientist.specialityArea}</p>
          <p> {scientist.nobels}</p>
        </div>
      </div>
      {/*    </Link> */}
    </>
  );
}
