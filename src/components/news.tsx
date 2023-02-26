import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { postAPI, putAPI } from "../interfaces/service";
import { NewsPayload } from "../interfaces/interface";
import Modal from "@material-ui/core/Modal";
import CachedIcon from "@mui/icons-material/Cached";

type INews = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  editObj: NewsPayload;
  setNewsList: (arr: string[]) => void;
  setEditObj: (news: NewsPayload) => void;
  newsList: string[];
};

const News: React.FC<INews> = (props) => {
  const { setIsOpen, isOpen, editObj, setNewsList, newsList, setEditObj } =
    props;

  const [value, setValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (editObj.title) {
      setValue(editObj.title);
    }
  }, [editObj.title]);

  // CLOSE modal
  const handleClose = () => {
    setIsOpen(false);
    setValue("");
    setEditObj({ userId: 0, title: "", body: "", id: 0 });
  };

  const putRequest = async () => {
    const newObj = { ...editObj, title: value };
    try {
      const newsRes = await putAPI(newObj);
      if (newsRes.data) {
        const finIndex = newsList.findIndex(
          (item: any) => item.id === newsRes.data.id
        );
        newsList[finIndex] = newsRes.data;
        const updatedList = [...newsList];
        setNewsList(updatedList);
        console.log({
          msg: "News Updated Successfully",
          color: "success",
        });
      }
    } catch (error) {
      console.log({ msg: "Something went wrong", color: "danger" });
    }
  };

  const newsRequest = async () => {
    try {
      const news = {
        title: value,
        body: "",
        userId: 1,
      } as NewsPayload;
      const newsRes = await postAPI(news);
      if (newsRes.data) {
        newsList.splice(0, 0, newsRes.data);
        const updatedList = [...newsList];
        setNewsList(updatedList);
        console.log({ msg: "News Added Successfully", color: "success" });
      }
    } catch (error) {
      console.log({ msg: "Something went wrong", color: "danger" });
    }
  };

  const onSubmit = async () => {
    setLoader(true);
    if (editObj.title) {
      await putRequest();
    } else {
      await newsRequest();
    }
    setLoader(false);
    handleClose();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div className="modal-header">
            <div className="mx-auto">
              {editObj.title ? "Edit News" : "Add New News"}
            </div>
          </div>
          <div>
            <div>
              <label>News Title</label>
              <div className="input-group mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  data-testid="title-input"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="News title"
                />
              </div>
            </div>
          </div>
          <div>
            <Button disabled={loader} variant="outlined" onClick={handleClose}>
              Close
            </Button>
            <Button
              data-testId="add-button"
              className="add-btn"
              disabled={loader}
              onClick={onSubmit}
            >
              {loader ? <CachedIcon /> : "Save"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default News;
