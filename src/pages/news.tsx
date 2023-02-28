import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchNews } from "../store/news-actions";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";

const News = () => {
  // const [news_id, setNews_id] = useState("");
  const [click, setClick] = useState(false);
  const dispatch = useAppDispatch();
  const allNews = useAppSelector((state: RootState) => state.news);
  // const particularNews = useAppSelector(
  //   (state: { news: any }) => state.news.particular_news
  // );
  const clickHandler = () => {
    dispatch(fetchNews());
    setClick(true);
  };

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, []);

  // const searchHandler = (news_id: string) => {
  //   dispatch(fetchParticularNews(news_id));
  // };

  // const checkNews = (): boolean => {
  //   if (click && allNews.length === 0) {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <>
      {/* <div>
        <label>Enter the todo id : </label>
        <input
          onChange={(event) => {
            setNews_id(event.target.value);
          }}
          type="number"
        ></input>
        <button onClick={() => searchHandler(news_id)}> Find </button>
        <div>
          <h3>Particular TODO </h3>
          {checkParticularNews() && (
            <div className="todo-container" key={particularNews.id}>
              <p className="todo-child1">{particularNews.id}</p>
              <p className="todo-child2">{particularNews.userId}</p>
              <p className="todo-child3">{particularNews.title}</p>
              <p className="todo-child4">{particularNews.completed}</p>
            </div>
          )}
        </div>
      </div> */}
      <div>
        <button onClick={clickHandler}>All News</button>

        {/* {allNews.map((news: NewsPayload) => (
            <div key={news.id}>
              <p>{news.body}</p>
              <p>{news.userId}</p>
              <p>{news.title}</p>
            </div>
          ))} */}
      </div>
    </>
  );
};
export default News;
