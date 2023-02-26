export type News = {
  id: string;
  title: string;
  completed: boolean;
};

export type FetchNewsError = {
  message: string;
};