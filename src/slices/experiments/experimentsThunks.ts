import { createAsyncThunk } from '@reduxjs/toolkit';
import { RepoExperiments } from '../../services/repoExperiments';
import { Experiment } from '../../model/experiments';

export const loadExperimentThunk = createAsyncThunk<
  Experiment[],
  RepoExperiments
>('experiment/load', async (repo) => {
  const Experiment = await repo.getExperiment();
  return Experiment;
});

type Params = {
  repo: RepoExperiments;
  newExperiment: Partial<Experiment>;
};

export const createExperimentThunk = createAsyncThunk<Experiment, Params>(
  'experiment/create',
  async ({ repo, newExperiment }) => {
    const finalExperiment = await repo.createExperiment(newExperiment);
    return finalExperiment;
  }
);

export const updateExperimentThunk = createAsyncThunk<
  Experiment,
  {
    repo: RepoExperiments;
    id: Experiment['id'];
    updatedExperiment: Partial<Experiment>;
  }
>('experiment/update', async ({ repo, id, updatedExperiment }) => {
  const finalExperiment = await repo.updateExperiment(id, updatedExperiment);
  return finalExperiment;
});

export const deletExperimentThunk = createAsyncThunk<
  Experiment['id'],
  {
    repo: RepoExperiments;
    id: Experiment['id'];
  }
>('experiment/delete', async ({ repo, id }) => {
  await repo.deleteExperiment(id);
  return id;
});
