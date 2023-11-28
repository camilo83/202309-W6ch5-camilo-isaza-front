import { useCallback, useMemo } from 'react';
import { RepoScientists } from '../services/repoScientists';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadScientistsThunk,
  updateScientistThunk,
  createScientistThunk,
  deletScientistThunk,
} from '../slices/scientists/scientistsThunks';
import { AppDispatch, RootState } from '../store/store';
import { Scientist } from '../model/scientist';

export function useScientists() {
  const dispatch = useDispatch<AppDispatch>();
  const { scientists, scientistStateOption } = useSelector(
    (state: RootState) => state.scientistsState
  );

  const repo = useMemo(() => new RepoScientists(), []);

  const loadScientists = useCallback(async () => {
    try {
      dispatch(loadScientistsThunk(repo));
    } catch (error) {}
  }, [repo]);

  const addScientist = async (scientist: Partial<Scientist>) => {
    try {
      dispatch(
        createScientistThunk({
          repo,
          newScientist: scientist,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateScientist = async (
    id: Scientist['id'],
    scientist: Partial<Scientist>
  ) => {
    try {
      dispatch(
        updateScientistThunk({
          id,
          repo,
          updatedScientist: scientist,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteScientist = async (id: Scientist['id']) => {
    try {
      dispatch(
        deletScientistThunk({
          id,
          repo,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    scientists,
    scientistStateOption,
    loadScientists,
    updateScientist,
    addScientist,
    deleteScientist,
  };
}
