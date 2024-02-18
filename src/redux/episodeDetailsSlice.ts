import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEpisodeDetails } from '../service/TvmazeService';
import { Episode } from '../type/Episode';
import {
  AsyncThunkConfig,
  GetThunkAPI,
} from '@reduxjs/toolkit/dist/createAsyncThunk';

type EpisodeState = {
  data: Episode | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: EpisodeState = {
  data: null,
  isLoading: false,
  error: null,
};

const episodeDetailsSlice = createSlice({
  name: 'episodeDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodeDetails.pending, (state: EpisodeState) => {
        state.isLoading = true;
      })
      .addCase(
        fetchEpisodeDetails.fulfilled,
        (state: EpisodeState, action: PayloadAction<Episode>) => {
          state.isLoading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchEpisodeDetails.rejected, (state: EpisodeState) => {
        state.isLoading = false;
        state.error = 'Something went wrong!';
        state.data = null;
      });
  },
});

export const fetchEpisodeDetails = createAsyncThunk(
  'episodeDetails/fetch',
  async (id: number, thunkAPI: GetThunkAPI<AsyncThunkConfig>) => {
    try {
      const episodeDetails = await getEpisodeDetails(id);
      return episodeDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export default episodeDetailsSlice.reducer;
