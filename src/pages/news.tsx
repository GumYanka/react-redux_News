import { useState } from "react";
import { NewsPayload } from "../interfaces/interface";
import NewsList from "@/components/news-list";
import New from "@/components/news";

const News = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editObj, setEditObj] = useState<NewsPayload>({
    userId: 0,
    title: "",
    body: "",
    id: 0,
  });
  const [newsList, setNewsList] = useState<string[]>([]);
  return (
    <>
      <main>
        <NewsList
          setIsOpen={setIsOpen}
          setEditObj={setEditObj}
          setNewsList={setNewsList}
          newsList={newsList}
        />
        <New
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          editObj={editObj}
          setEditObj={setEditObj}
          setNewsList={setNewsList}
          newsList={newsList}
        />
      </main>
    </>
  );
};

export default News;
