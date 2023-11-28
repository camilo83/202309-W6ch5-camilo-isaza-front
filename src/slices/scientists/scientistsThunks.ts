import { createAsyncThunk } from '@reduxjs/toolkit';
import { RepoScientists } from '../../services/repoScientists';
import { Scientist } from '../../model/scientist';

export const loadScientistsThunk = createAsyncThunk<
  Scientist[],
  RepoScientists
>('scientists/load', async (repo) => {
  const Scientists = await repo.getScientists();
  return Scientists;
});

type Params = {
  repo: RepoScientists;
  newScientist: Partial<Scientist>;
};

export const createScientistThunk = createAsyncThunk<Scientist, Params>(
  'scientists/create',
  async ({ repo, newScientist }) => {
    const finalScientist = await repo.createScientist(newScientist);
    return finalScientist;
  }
);

export const updateScientistThunk = createAsyncThunk<
  Scientist,
  {
    repo: RepoScientists;
    id: Scientist['id'];
    updatedScientist: Partial<Scientist>;
  }
>('scientist/update', async ({ repo, id, updatedScientist }) => {
  const finalScientist = await repo.updateScientist(id, updatedScientist);
  return finalScientist;
});

export const deletScientistThunk = createAsyncThunk<
  Scientist['id'],
  {
    repo: RepoScientists;
    id: Scientist['id'];
  }
>('scientist/delete', async ({ repo, id }) => {
  await repo.deleteScientist(id);
  return id;
});
