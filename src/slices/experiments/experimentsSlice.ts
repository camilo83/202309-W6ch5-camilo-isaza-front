import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Experiment } from '../../model/experiments';
import {
  loadExperimentThunk,
  updateExperimentThunk,
  createExperimentThunk,
  deletExperimentThunk,
} from './experimentsThunks';

type ExperimentState = {
  experiment: Experiment[];
  experimentStateOption: 'idle' | 'loading' | 'error';
};

const initialState: ExperimentState = {
  experiment: [],
  experimentStateOption: 'idle',
};
const ExperimentSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadExperimentThunk.pending, (state: ExperimentState) => {
      state.experimentStateOption = 'loading';
      return state;
    }),
      builder.addCase(loadExperimentThunk.fulfilled, (state, { payload }) => {
        state.experiment = payload;
        state.experimentStateOption = 'idle';
        return state;
      }),
      builder.addCase(
        loadExperimentThunk.rejected,
        (state: ExperimentState) => {
          state.experimentStateOption = 'error';
          return state;
        }
      );
    builder.addCase(
      createExperimentThunk.fulfilled,
      (state: ExperimentState, { payload }: PayloadAction<Experiment>) => {
        state.experiment.push(payload);
        return state;
      }
    ),
      builder.addCase(
        updateExperimentThunk.fulfilled,
        (state: ExperimentState, { payload }: PayloadAction<Experiment>) => {
          state.experiment[
            state.experiment.findIndex((item) => item.id === payload.id)
          ] = payload;
          return state;
        }
      ),
      builder.addCase(
        deletExperimentThunk.fulfilled,
        (
          state: ExperimentState,
          { payload }: PayloadAction<Experiment['id']>
        ) => {
          state.experiment.splice(
            state.experiment.findIndex((item) => item.id === payload),
            1
          );
          return state;
        }
      );
  },
});

export default ExperimentSlice.reducer;
