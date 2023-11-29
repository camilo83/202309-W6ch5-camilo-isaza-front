import { useCallback, useMemo } from 'react';
import { RepoExperiments } from '../services/repoExperiments';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadExperimentThunk,
  updateExperimentThunk,
  createExperimentThunk,
  deletExperimentThunk,
} from '../slices/experiments/experimentsThunks';
import { AppDispatch, RootState } from '../store/store';
import { Experiment } from '../model/experiments';

export function useExperiments() {
  const dispatch = useDispatch<AppDispatch>();
  const { experiment, experimentStateOption } = useSelector(
    (state: RootState) => state.experimentState
  );

  const repo = useMemo(() => new RepoExperiments(), []);

  const loadExperiments = useCallback(async () => {
    try {
      dispatch(loadExperimentThunk(repo));
    } catch (error) {}
  }, [repo]);

  const addExperiment = async (experiment: Partial<Experiment>) => {
    try {
      dispatch(
        createExperimentThunk({
          repo,
          newExperiment: experiment,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateExperiment = async (
    id: Experiment['id'],
    experiment: Partial<Experiment>
  ) => {
    try {
      dispatch(
        updateExperimentThunk({
          id,
          repo,
          updatedExperiment: experiment,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteExperiment = async (id: Experiment['id']) => {
    try {
      dispatch(
        deletExperimentThunk({
          id,
          repo,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    experiment,
    experimentStateOption,
    loadExperiments,
    updateExperiment,
    addExperiment,
    deleteExperiment,
  };
}
