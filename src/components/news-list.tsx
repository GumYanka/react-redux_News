import React, { useEffect, useState } from "react";
import { getNewsAPI, deleteNewsAPI } from "../interfaces/service";
import { NewsPayload } from "../interfaces/interface";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

type IProps = {
  setIsOpen: (isOpen: boolean) => void;
  setEditObj: (news: NewsPayload) => void;
  setNewsList: (arr: string[]) => void;
  newsList: string[];
};

const NewsList: React.FC<IProps> = (props) => {
  const { setIsOpen, setEditObj, newsList, setNewsList } = props;
  const [loader, setLoader] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(0);

  useEffect(() => {
    getData();
  }, []);

  // Add new news
  const openModal = () => {
    setIsOpen(true);
  };

  // EDIT News
  const editNews = (id: number) => {
    openModal();
    const filter = newsList.filter((item: any) => item.id === id)[0] as any;
    setEditObj(filter);
  };

  // Delete News
  const deleteNews = async (id: number) => {
    setLoader(true);
    setEditId(id);
    try {
      const response = await deleteNewsAPI(id);
      if (response.data) {
        const filter = newsList.filter((item: any) => item.id !== id);
        setNewsList([...filter]);
        console.log({
          msg: "News deleted successfully.",
          color: "success",
        });
      }
    } catch (error) {
      console.log({ msg: "Something went wrong", color: "danger" });
    }
    setEditId(0);
    setLoader(false);
  };

  // GET News list
  const getData = async () => {
    try {
      const response = await getNewsAPI();
      setNewsList(response.data);
    } catch (error) {
      console.log({ msg: "Something went wrong", color: "danger" });
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Button className="add-btn" onClick={() => openModal()}>
          Add New News
        </Button>
      </div>
      <div className="main mt-3 table-responsive">
        <table className="table divide-gray-200 divide-y min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th scope="column1">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {newsList.slice(0, 25).map((item: any, index: number) => (
              <tr
                key={index}
                className="bg-white divide-x space-x-5 divide-gray-200 hover:bg-gray-50 transition"
              >
                <td>{item.title}</td>
                <td>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => editNews(item.id)}
                  >
                    <ModeEditOutlineIcon fontSize="small" />
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => deleteNews(item.id)}
                  >
                    {editId === item.id && loader ? (
                      <CachedIcon fontSize="small" color="primary" />
                    ) : (
                      <DeleteIcon fontSize="small" color="error" />
                    )}
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsList;
