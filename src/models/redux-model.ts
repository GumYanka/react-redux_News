export interface NewsPayload {
  id: NewsId;
  userId: number;
  title: string;
  body: string;
}

export type NewsId = string;

export interface NewsArray {
  news: NewsPayload[];
}
