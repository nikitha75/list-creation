import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ListContext from "./context/ListContext";

const App = () => {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [listsTotal, setListsTotal] = useState({
    list1: 0,
    list2: 0,
    list3: 0,
  });
  const [listsChecked, setListsChecked] = useState({
    list1: false,
    list2: false,
  });

  const getListData = async () => {
    try {
      const url = process.env.REACT_APP_URL;
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      if (response.ok) {
        setIsLoading(false);
        setIsSuccess(true);
        const data = await response.json();
        setList(data.lists);
        const list1 = data.lists.filter((item) => item.list_number === 1);
        const list2 = data.lists.filter((item) => item.list_number === 2);
        setListsTotal((prevState) => ({
          ...prevState,
          list1: list1.length,
          list2: list2.length,
        }));
        setList1(list1);
        setList2(list2);
      }
    } catch (err) {
      setIsLoading(false);
      setIsSuccess(false);
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  const handleRetry = () => {
    getListData();
  };

  return (
    <ListContext.Provider
      value={{
        list1,
        list2,
        list3,
        list,
        setList,
        setList1,
        setList2,
        setList3,
        isLoading,
        setIsLoading,
        isSuccess,
        setIsSuccess,
        listsTotal,
        setListsTotal,
        handleRetry,
        getListData,
        isChecked,
        setIsChecked,
        listsChecked,
        setListsChecked,
      }}
    >
      <Home />
    </ListContext.Provider>
  );
};

export default App;
