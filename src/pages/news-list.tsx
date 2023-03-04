import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  fetchNews,
  deleteNewsAsync,
  fetchPhotosAsync,
} from "../services/services";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { selectNews, selectPage, loadMoreNews } from "../store/news-slice";
import { loadMorePhotos, selectPhotos } from "../store/photos-slice";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";

const theme = createTheme();

const NewsList = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);
  const news = useAppSelector(selectNews);
  const page = useAppSelector(selectPage);
  const pagePhotos = useAppSelector(selectPage);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchNews(page));
    dispatch(fetchPhotosAsync(pagePhotos));
  }, [dispatch, pagePhotos, page]);

  const handleLoadMoreClick = () => {
    dispatch(loadMoreNews());
    dispatch(loadMorePhotos());
    dispatch(fetchNews(page + 1));
    dispatch(fetchPhotosAsync(pagePhotos + 1));
  };

  const combinedArray = news.map((arr1: string[] | any) => ({
    ...arr1,
    ...photos.find((arr2: any) => arr2.id === arr1.id),
  }));

  const handleDeleteClick = (id: number) => {
    dispatch(deleteNewsAsync(id));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-6 grid-flow-row auto-cols-min mt-12">
          {combinedArray?.map((item: any) => {
            return (
              <Card className="flex" sx={{ maxWidth: 345 }} key={item.id}>
                <CardContent className="flex flex-col justify-between">
                  <div className="flex text-center">
                    <Typography className="font-['Montserrat']">
                      {item.title}
                    </Typography>
                  </div>
                  <div className="flex">
                    {item.url && <img src={item.url} alt={item.title} />}
                  </div>
                  <div className="flex flex-row justify-end">
                    <IconButton aria-label="more info">
                      <Link to={`/news/${item.id}`}>
                        <ReadMoreIcon />
                      </Link>
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon onClick={() => handleDeleteClick(item.id)} />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-end mt-5 mb-8">
          <Button
            onClick={handleLoadMoreClick}
            className="font-['Montserrat']"
            variant="contained"
          >
            {t("load-more")}
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NewsList;
