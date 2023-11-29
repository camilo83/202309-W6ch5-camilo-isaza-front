/* import { Link } from 'react-router-dom'; */
import './card.scss';

import { Experiment } from '../../model/experiments';

type PropsType = {
  experiment: Experiment;
};
export function ExperimentCard({ experiment }: PropsType) {
  return (
    <>
      <div className="card">
        <div className="element-header">
          <p> {experiment.name}</p>
        </div>
        {/*  <div className="element-symbol">
          <img src={experiment.experimentImage.url} alt="" width={250} />
        </div> */}
        <div className="element-name">
          <p className="element-mass">{experiment.author.name}</p>
        </div>
      </div>
    </>
  );
}
