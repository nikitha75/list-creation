import React from "react";
import {
  ListContainer,
  ListFlexContainer,
  ListHeading,
} from "../styled-components/Wrapper";
import ListItem from "../components/ListItem";

const List = ({
  list,
  listId,
  listName,
  listLabel,
  listChecked,
  handleListSelection,
  isChecked,
  listTotal,
}) => {
  return (
    <ListContainer>
      <ListHeading>
        {!isChecked && (
          <input
            type="checkbox"
            id={listId}
            name={listName}
            value={listChecked}
            onChange={handleListSelection}
          />
        )}
        <label htmlFor={listId}>
          {listLabel} ({listTotal})
        </label>
      </ListHeading>
      <ListFlexContainer>
        {list.map((item) => {
          return <ListItem key={item.id} item={item} isChecked={isChecked} />;
        })}
      </ListFlexContainer>
    </ListContainer>
  );
};

export default List;
