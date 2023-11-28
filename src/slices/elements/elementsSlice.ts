import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Element } from '../../model/element';
import {
  loadElementsThunk,
  createElementThunk,
  updateElementThunk,
  deleteElementThunk,
} from './elementsThunks';

type ElementsState = {
  elements: Element[];
  elementsStateOption: 'idle' | 'loading' | 'error';
  page: number;
};

const initialState: ElementsState = {
  elements: [],
  elementsStateOption: 'idle',
  page: 1,
};
const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadElementsThunk.pending, (state: ElementsState) => {
      state.elementsStateOption = 'loading';
      return state;
    }),
      builder.addCase(loadElementsThunk.fulfilled, (state, { payload }) => {
        state.elements = payload;
        state.elementsStateOption = 'idle';
        return state;
      }),
      builder.addCase(loadElementsThunk.rejected, (state: ElementsState) => {
        state.elementsStateOption = 'error';
        return state;
      });
    builder.addCase(
      createElementThunk.fulfilled,
      (state: ElementsState, { payload }: PayloadAction<Element>) => {
        state.elements.push(payload);
        return state;
      }
    ),
      builder.addCase(
        updateElementThunk.fulfilled,
        (state: ElementsState, { payload }: PayloadAction<Element>) => {
          state.elements[
            state.elements.findIndex((item) => item.id === payload.id)
          ] = payload;
          return state;
        }
      ),
      builder.addCase(
        deleteElementThunk.fulfilled,
        (state: ElementsState, { payload }: PayloadAction<Element['id']>) => {
          state.elements.splice(
            state.elements.findIndex((item) => item.id === payload),
            1
          );
          return state;
        }
      );
  },
});

export default elementsSlice.reducer;
export const { setPage } = elementsSlice.actions;
