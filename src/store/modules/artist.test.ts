import reducer, {
  searchArtists,
  searchArtistsSuccess,
  searchArtistsFailure,
  searchSingleArtistSuccess,
  searchSingleArtistTopTracksSuccess,
  searchSingleArtistAlbumsSuccess,
  playTrack,
  ArtistsState,
  initialState,
} from "./artist";
import { artist, artistAlbums, artists, topTracks } from "./test.data";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test("should handle loading state being set to true", () => {
  const previousState: ArtistsState = initialState;

  expect(reducer(previousState, searchArtists())).toEqual({
    ...initialState,
    isLoading: true,
  });
});

test("should handle error state and set loading to false", () => {
  const previousState: ArtistsState = initialState;

  expect(reducer(previousState, searchArtistsFailure())).toEqual({
    ...initialState,
    isLoading: false,
    hasError: true,
  });
});

test("should handle currentTrack value being set", () => {
  const previousState: ArtistsState = initialState;
  const track = "https://mymusic.song";

  expect(reducer(previousState, playTrack(track))).toEqual({
    ...initialState,
    currentTrack: track,
  });
});

test("should handle a lists of artist being added to the state", () => {
  const previousState: ArtistsState = initialState;

  expect(reducer(previousState, searchArtistsSuccess(artists))).toEqual({
    ...initialState,
    artists: artists
      .map((item: { artist: any }) => item.artist)
      .filter(
        (value: { id: any }, index: any, self: any[]) =>
          index === self.findIndex((elem: { id: any }) => elem.id === value.id)
      ),
  });
});

// test("should handle a todo being added to an existing list", () => {
//   const previousState: Todo[] = [
//     { text: "Run the tests", completed: true, id: 0 },
//   ];

//   expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
//     { text: "Run the tests", completed: true, id: 0 },
//     { text: "Use Redux", completed: false, id: 1 },
//   ]);
// });

test("should handle the profile of a single artist being added to the state", () => {
  const previousState: ArtistsState = initialState;

  expect(reducer(previousState, searchSingleArtistSuccess(artist))).toEqual({
    ...initialState,
    artist,
  });
});

test("should handle a lists of top tracks by an artist being added to the state", () => {
  const previousState: ArtistsState = initialState;

  expect(
    reducer(previousState, searchSingleArtistTopTracksSuccess(topTracks))
  ).toEqual({
    ...initialState,
    artistTopTracks: topTracks,
  });
});

test("should handle a lists of albums by an artist being added to the state", () => {
  const previousState: ArtistsState = initialState;

  expect(
    reducer(previousState, searchSingleArtistAlbumsSuccess(artistAlbums))
  ).toEqual({
    ...initialState,
    artistAlbums,
  });
});
