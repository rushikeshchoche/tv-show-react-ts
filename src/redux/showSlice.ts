import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShowEpisodeList, getShowInfo } from '../service/TvmazeService';
import { Show } from '../type/Show';
import {
  AsyncThunkConfig,
  GetThunkAPI,
} from '@reduxjs/toolkit/dist/createAsyncThunk';
import { DEFAULT_ERROR_MSG } from '../utils/constants';

type ShowState = {
  data: Show | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: ShowState = {
  data: null,
  isLoading: false,
  error: null,
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShow.pending, (state: ShowState) => {
        state.isLoading = true;
      })
      .addCase(
        fetchShow.fulfilled,
        (state: ShowState, action: PayloadAction<Show>) => {
          state.isLoading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchShow.rejected, (state: ShowState) => {
        state.isLoading = false;
        state.error = DEFAULT_ERROR_MSG;
        state.data = null;
      });
  },
});

export const fetchShow = createAsyncThunk(
  'show/fetch',
  async (id: number, thunkAPI: GetThunkAPI<AsyncThunkConfig>) => {
    try {
      const show = await getShowInfo(id);
      const episodes = await getShowEpisodeList(id);
      return {
        ...show,
        episodes,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export default showSlice.reducer;
