import { fetchNewsById, fetchPhotoById } from "../services/services";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useAppDispatch } from "../hooks/redux-hooks";
import { selectNewsById } from "../store/news-slice";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPhotosById } from "../store/photos-slice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NewsDetails = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { id } = useParams<{ id: string }>() as any;
  const newsId = parseInt(id);
  const dispatch = useAppDispatch();
  const news = useSelector(selectNewsById(newsId));
  const photo = useSelector(selectPhotosById(newsId));

  useEffect(() => {
    dispatch(fetchNewsById(newsId));
    dispatch(fetchPhotoById(newsId));
  }, [dispatch, newsId]);

  const item = { ...news, ...photo };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="flex">
        <div className="flex-col">
          <Card sx={{ maxWidth: 285 }} key={item.id}>
            <IconButton aria-label="more info">
              <Link to={`/all-news`}>
                <ArrowBackIcon />
              </Link>
            </IconButton>
            <CardContent>
              <Typography
                className="font-['Montserrat']"
                variant="body2"
                color="text.secondary"
              >
                {item.title}
              </Typography>
              <div>{item.url && <img src={item.url} alt={item.title} />}</div>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className="font-['Montserrat']" paragraph>
                  {item.body}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
