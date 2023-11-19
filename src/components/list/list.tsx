import { useEffect } from 'react';
import { Card } from '../card/card';
import { useElements } from '../../hooks/useElements';
import './list.scss';
import { Element } from '../../model/element';
import { Page } from '../paging/paging';

export function List() {
  const { loadElements, elements, page } = useElements();

  useEffect(() => {
    loadElements();
  }, [loadElements]);
  return (
    <>
      <Page></Page>
      <ul className="elements-list">
        {elements.slice((page - 1) * 18, page * 18).map((item: Element) => (
          <Card element={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
