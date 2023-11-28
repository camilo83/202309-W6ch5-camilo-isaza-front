import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Scientist } from '../../model/scientist';
import {
  loadScientistsThunk,
  updateScientistThunk,
  createScientistThunk,
  deletScientistThunk,
} from './scientistsThunks';

type ScientistState = {
  scientists: Scientist[];
  scientistStateOption: 'idle' | 'loading' | 'error';
};

const initialState: ScientistState = {
  scientists: [],
  scientistStateOption: 'idle',
};
const scientistsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadScientistsThunk.pending, (state: ScientistState) => {
      state.scientistStateOption = 'loading';
      return state;
    }),
      builder.addCase(loadScientistsThunk.fulfilled, (state, { payload }) => {
        state.scientists = payload;
        state.scientistStateOption = 'idle';
        return state;
      }),
      builder.addCase(loadScientistsThunk.rejected, (state: ScientistState) => {
        state.scientistStateOption = 'error';
        return state;
      });
    builder.addCase(
      createScientistThunk.fulfilled,
      (state: ScientistState, { payload }: PayloadAction<Scientist>) => {
        state.scientists.push(payload);
        return state;
      }
    ),
      builder.addCase(
        updateScientistThunk.fulfilled,
        (state: ScientistState, { payload }: PayloadAction<Scientist>) => {
          state.scientists[
            state.scientists.findIndex((item) => item.id === payload.id)
          ] = payload;
          return state;
        }
      ),
      builder.addCase(
        deletScientistThunk.fulfilled,
        (
          state: ScientistState,
          { payload }: PayloadAction<Scientist['id']>
        ) => {
          state.scientists.splice(
            state.scientists.findIndex((item) => item.id === payload),
            1
          );
          return state;
        }
      );
  },
});

export default scientistsSlice.reducer;
