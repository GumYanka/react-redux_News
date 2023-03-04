import { Photo, PhotosState } from '../models/redux-model';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PhotosState = {
  photos: [],
  error: null,
  selectedPhotosId: null,
  page: 1,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    getPhotosSuccess(state:PhotosState, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
     selectPhoto(state:PhotosState, action: PayloadAction<any>) {
      state.selectedPhotosId = action.payload;
    },
     loadMorePhotos: (state:PhotosState) => {
      state.page += 1;
    },
  },
});

export const selectPhotos = (state: Photo[] | any) => state.photos.photos; 
export const selectPhotosPage = (state: Photo[] | any) => state?.photos?.page; 
export const selectPhotosById = (photoId:number) => createSelector(
  selectPhotos,
  photo => photo.find((photo:any) => photo.id === photoId)
);

export const { getPhotosSuccess, selectPhoto, loadMorePhotos } = photosSlice.actions;

export default photosSlice.reducer;