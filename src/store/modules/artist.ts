import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { http } from "../../api/client";

export interface ArtistsState {
  artists: any[];
  artist: any;
  artistTopTracks: any[];
  artistAlbums: any[];
  isLoading: boolean;
  error: any;
  hasError: boolean;
  status: string;
  currentTrack: string;
}

export const initialState: ArtistsState = {
  artists: [],
  artist: {},
  artistTopTracks: [],
  artistAlbums: [],
  isLoading: false,
  error: {},
  hasError: true,
  status: "",
  currentTrack: "",
};

export const artistsSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    searchArtists: (state) => {
      state.isLoading = true;
    },
    searchArtistsSuccess: (state, action) => {
      state.isLoading = false;
      state.artists = action.payload
        .map((item: { artist: any }) => item.artist)
        .filter(
          (value: { id: any }, index: any, self: any[]) =>
            index ===
            self.findIndex((elem: { id: any }) => elem.id === value.id)
        );
    },
    searchArtistsFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    searchSingleArtistSuccess: (state, action) => {
      state.isLoading = false;
      state.artist = action.payload;
    },
    searchSingleArtistTopTracksSuccess: (state, action) => {
      state.isLoading = false;
      state.artistTopTracks = action.payload;
    },
    searchSingleArtistAlbumsSuccess: (state, action) => {
      state.isLoading = false;
      state.artistAlbums = action.payload;
    },
    playTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const {
  searchArtists,
  searchArtistsSuccess,
  searchArtistsFailure,
  searchSingleArtistSuccess,
  searchSingleArtistTopTracksSuccess,
  searchSingleArtistAlbumsSuccess,
  playTrack,
} = artistsSlice.actions;

export const artistsSelector = (state: RootState) => state.artist;

export function fetchArtists(searchParam?: string) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(searchArtists());

    try {
      const {
        data: { data },
      } = await http.get(
        `/search?q=artist:"${searchParam ? searchParam : "eminem"}"`
      );

      dispatch(searchArtistsSuccess(data));
    } catch (error) {
      dispatch(searchArtistsFailure());
    }
  };
}

export function fetchSingleArtist(id: string) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(searchArtists());

    try {
      const { data } = await http.get(`/artist/${id}`);

      dispatch(searchSingleArtistSuccess(data));
    } catch (error) {
      dispatch(searchArtistsFailure());
    }
  };
}

export function fetchSingleArtistTopTracks(id: string) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(searchArtists());

    try {
      const {
        data: { data },
      } = await http.get(`/artist/${id}/top?limit=5`);

      dispatch(searchSingleArtistTopTracksSuccess(data));
    } catch (error) {
      dispatch(searchArtistsFailure());
    }
  };
}

export function fetchSingleArtistAlbums(id: string) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(searchArtists());

    try {
      const {
        data: { data },
      } = await http.get(`/artist/${id}/albums`);

      dispatch(searchSingleArtistAlbumsSuccess(data));
    } catch (error) {
      dispatch(searchArtistsFailure());
    }
  };
}

export default artistsSlice.reducer;
