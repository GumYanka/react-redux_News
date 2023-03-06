export type NewsPayload= {
  id: number;
  userId: number;
  title: string;
  body: string;
  limit: number;
  page: number;
}

export interface NewsArray {
  news: NewsPayload[];
  status: 'loading' | 'succeeded';
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  limit: number;
  page: number;
}

export interface PhotosState {
  photos: Photo[];
  error: string | null;
  selectedPhotosId: null,
  page: number;
}

export interface updateFieldObject {
    fieldName: string;
    value: string;
}