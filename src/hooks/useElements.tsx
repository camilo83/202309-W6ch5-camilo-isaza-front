import { useCallback, useMemo } from 'react';
import { Repo } from '../services/repoElements';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadElementsThunk,
  createElementThunk,
  updateElementThunk,
  deleteElementThunk,
} from '../slices/elements/elementsThunks';
import { AppDispatch, RootState } from '../store/store';
import { setPage } from '../slices/elements/elementsSlice';

export function useElements() {
  const dispatch = useDispatch<AppDispatch>();
  const { elements, elementsStateOption, page } = useSelector(
    (state: RootState) => state.elementsState
  );

  const repo = useMemo(() => new Repo(), []);

  const loadElements = useCallback(async () => {
    try {
      dispatch(loadElementsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addElement = async (element: Partial<Element> & { id: string }) => {
    try {
      dispatch(
        createElementThunk({
          repo,
          newElement: element,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateElement = async (
    id: Element['id'],
    element: Partial<Element>
  ) => {
    try {
      dispatch(
        updateElementThunk({
          id,
          repo,
          updatedElement: element,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteElement = async (id: Element['id']) => {
    try {
      dispatch(
        deleteElementThunk({
          id,
          repo,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleChangePage = (increment: number) => {
    dispatch(setPage(page + increment));
  };

  return {
    loadElements,
    addElement,
    updateElement,
    deleteElement,
    elements,
    page,
    elementsStateOption,
    handleChangePage,
  };
}
