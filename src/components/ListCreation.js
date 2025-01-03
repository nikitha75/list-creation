import React, { useContext } from "react";
import {
  ListContainer,
  ListHeading,
  ListItemCard,
  Heading,
  ListFlexContainer,
  ArrowIconContainer,
} from "../styled-components/Wrapper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ListContext from "../context/ListContext";

const ListCreation = ({ listTotal }) => {
  const { list3, setList1, setList2, setList3, setListsTotal, isChecked } =
    useContext(ListContext);

  const handleMoveListItem = (listName, item) => {
    setList3((prevState) => {
      const updatedList3 = prevState.filter(
        (listItem) => listItem.id !== item.id
      );
      setListsTotal((prevState) => ({
        ...prevState,
        list3: updatedList3.length,
      }));
      return updatedList3;
    });

    if (listName === "list1") {
      setList1((prevState) => {
        const updatedList1 = [...prevState, item];
        setListsTotal((prevState) => ({
          ...prevState,
          list1: updatedList1.length,
        }));
        return updatedList1;
      });
    } else if (listName === "list2") {
      setList2((prevState) => {
        const updatedList2 = [...prevState, item];
        setListsTotal((prevState) => ({
          ...prevState,
          list2: updatedList2.length,
        }));
        return updatedList2;
      });
    }
  };

  return (
    <div>
      <ListContainer>
        <ListHeading>List 3 ({listTotal})</ListHeading>
        <ListFlexContainer>
          {list3.length > 0 &&
            list3.map((item) => {
              const { description, id, list_number, name } = item;
              return (
                <ListItemCard key={id}>
                  <Heading fontSize="large">{name}</Heading>
                  <p>{description}</p>
                  {isChecked && (
                    <ArrowIconContainer>
                      {list_number === 1 ? (
                        <FaArrowRight
                          size={20}
                          color="#6e6f71"
                          onClick={() => handleMoveListItem("list2", item)}
                        />
                      ) : (
                        <FaArrowLeft
                          size={20}
                          color="#6e6f71"
                          onClick={() => handleMoveListItem("list1", item)}
                        />
                      )}
                    </ArrowIconContainer>
                  )}
                </ListItemCard>
              );
            })}
        </ListFlexContainer>
      </ListContainer>
    </div>
  );
};

export default ListCreation;
