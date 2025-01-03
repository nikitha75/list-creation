import React, { useContext } from "react";
import {
  ListItemCard,
  Heading,
  ArrowIconContainer,
} from "../styled-components/Wrapper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ListContext from "../context/ListContext";

const ListItem = ({ item, isChecked }) => {
  const { description, id, list_number, name } = item;
  const { setList1, setList2, setList3, setListsTotal } =
    useContext(ListContext);

  const handleAddListItem = (listName, itemId) => {
    setList3((prevState) => {
      const updatedList3 = [...prevState, item];
      setListsTotal((prevState) => ({
        ...prevState,
        list3: updatedList3.length,
      }));
      return updatedList3;
    });
    if (listName === "list1") {
      setList1((prevState) => {
        const updatedList1 = prevState.filter((item) => item.id !== itemId);
        setListsTotal((prevState) => ({
          ...prevState,
          list1: updatedList1.length,
        }));
        return updatedList1;
      });
    } else if (listName === "list2") {
      setList2((prevState) => {
        const updatedList2 = prevState.filter((item) => item.id !== itemId);
        setListsTotal((prevState) => ({
          ...prevState,
          list2: updatedList2.length,
        }));
        return updatedList2;
      });
    }
  };

  return (
    <ListItemCard>
      <Heading fontSize="large">{name}</Heading>
      <p>{description}</p>
      {isChecked && (
        <ArrowIconContainer>
          {list_number === 1 ? (
            <FaArrowRight
              size={20}
              color="#6e6f71"
              onClick={() => handleAddListItem("list1", id)}
            />
          ) : (
            <FaArrowLeft
              size={20}
              color="#6e6f71"
              onClick={() => handleAddListItem("list2", id)}
            />
          )}
        </ArrowIconContainer>
      )}
    </ListItemCard>
  );
};

export default ListItem;
