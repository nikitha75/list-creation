import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Button,
  HeadingContainer,
  Heading,
  Container,
  Loader,
  FlexContainer,
} from "../styled-components/Wrapper";
import ListContext from "../context/ListContext";
import List from "../components/List";
import ListCreation from "../components/ListCreation";
import FailureView from "./FailureView";

const Home = () => {
  const {
    list1,
    list2,
    setList3,
    isLoading,
    isSuccess,
    listsTotal,
    isChecked,
    setIsChecked,
    listsChecked,
    setListsChecked,
    getListData,
    setListsTotal,
  } = useContext(ListContext);

  const handleListSelection = (event) => {
    const { name, checked } = event.target;
    setListsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleCreateList = () => {
    if (listsChecked.list1 === true && listsChecked.list2 === true) {
      setIsChecked(true);
    }
  };

  const handleCancel = () => {
    setIsChecked(false);
    setListsChecked({ list1: false, list2: false });
    setList3([]);
    setListsTotal((prevState) => ({
      ...prevState,
      list3: 0,
    }));
    getListData();
  };

  const handleUpdate = () => {
    setIsChecked(false);
    setListsChecked({ list1: false, list2: false });
    setList3([]);
    setListsTotal((prevState) => ({
      ...prevState,
      list3: 0,
    }));
  };

  return (
    <div>
      {isLoading ? (
        <Loader>
          <ClipLoader color="#3996ff" size={50} />
        </Loader>
      ) : isLoading === false && isSuccess ? (
        <div>
          <HeadingContainer>
            <Heading fontSize="30px">List Creation</Heading>
            <Button type="button" onClick={handleCreateList}>
              Create a new list
            </Button>
          </HeadingContainer>
          <Container $justifycontent={isChecked ? "center" : "flex-start"}>
            <List
              list={list1}
              listId="list1"
              listName="list1"
              listLabel="List 1"
              listChecked={listsChecked.list1}
              handleListSelection={handleListSelection}
              isChecked={isChecked}
              listTotal={listsTotal.list1}
            />
            {isChecked && <ListCreation listTotal={listsTotal.list3} />}
            <List
              list={list2}
              listId="list2"
              listName="list2"
              listLabel="List 2"
              listChecked={listsChecked.list2}
              handleListSelection={handleListSelection}
              isChecked={isChecked}
              listTotal={listsTotal.list2}
            />
          </Container>
          {isChecked && (
            <FlexContainer>
              <div>
                <Button
                  type="button"
                  $backgroundColor="transparent"
                  $color="#616267"
                  $border="1.7px solid #3f3f3f"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
              <div>
                <Button type="button" onClick={handleUpdate}>
                  Update
                </Button>
              </div>
            </FlexContainer>
          )}
        </div>
      ) : (
        <FailureView />
      )}
    </div>
  );
};

export default Home;
