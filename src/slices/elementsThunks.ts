import { createAsyncThunk } from '@reduxjs/toolkit';
import { Repo } from '../services/repo';
import { Element } from '../model/element';

export const loadElementsThunk = createAsyncThunk<Element[], Repo>(
  'elements/load',
  async (repo) => {
    const Elements = await repo.getElements();
    return Elements;
  }
);

type Params = {
  repo: Repo;
  newElement: Partial<Element>;
};

export const createElementThunk = createAsyncThunk<Element, Params>(
  'elements/create',
  async ({ repo, newElement }) => {
    const finalElement = await repo.createElement(newElement);
    return finalElement;
  }
);

export const updateElementThunk = createAsyncThunk<
  Element,
  {
    repo: Repo;
    id: Element['id'];
    updatedElement: Partial<Element>;
  }
>('elements/update', async ({ repo, id, updatedElement }) => {
  const finalElement = await repo.updateElement(id, updatedElement);
  return finalElement;
});

export const deleteElementThunk = createAsyncThunk<
  Element['id'],
  {
    repo: Repo;
    id: Element['id'];
  }
>('elements/delete', async ({ repo, id }) => {
  await repo.deleteElement(id);
  return id;
});
