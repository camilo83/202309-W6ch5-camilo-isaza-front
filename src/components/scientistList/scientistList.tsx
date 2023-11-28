import { useEffect } from 'react';
import { ScientistCard } from '../scientistCard/scientistCard';
import './list.scss';
import { useScientists } from '../../hooks/useScientists';
import { Scientist } from '../../model/scientist';

export function ScientistList() {
  const { loadScientists, scientists } = useScientists();

  useEffect(() => {
    console.log('useEffect is running');
    loadScientists();
  }, [loadScientists]);

  return (
    <>
      <ul className="elements-list">
        {scientists.map((item: Scientist) => (
          <ScientistCard scientist={item} key={item.id}></ScientistCard>
        ))}
      </ul>
    </>
  );
}
