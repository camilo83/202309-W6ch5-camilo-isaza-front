import { useEffect } from 'react';
import './experiments.scss';
import { useExperiments } from '../../hooks/useExperiment';
import { Experiment } from '../../model/experiments';
import { ExperimentCard } from '../experimentCard/experimentCard';

export function ExperimentsList() {
  const { loadExperiments, experiment } = useExperiments();

  useEffect(() => {
    console.log('useEffect is running');
    loadExperiments();
  }, [loadExperiments]);

  return (
    <>
      <ul className="elements-list">
        {experiment.map((item: Experiment) => (
          <ExperimentCard experiment={item} key={item.id}></ExperimentCard>
        ))}
      </ul>
    </>
  );
}
