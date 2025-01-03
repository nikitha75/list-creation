import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.$backgroundColor || "#3c82f5"};
  color: ${(props) => props.$color || "#ffffff"};
  border: ${(props) => props.$border || "none"};
  border-radius: 5px;
  padding: 8px 18px;
  cursor: pointer;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Heading = styled.h1`
  font-size: ${(props) => props.fontSize || "large"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 40px;
  @media (min-width: 1160px) {
    flex-direction: row;
    justify-content: ${(props) => props.$justifycontent || "flex-start"};
    gap: 15px;
    padding: 40px;
  }
`;

export const ListContainer = styled.ul`
  background-color: #eff6ff;
  border-radius: 7px;
  padding: 20px;
  width: 314px;
  height: 100vh;
  overflow: auto;
`;

export const ListHeading = styled.h1`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px 0 20px 0;
  font-size: 20px;
`;

export const ListItemCard = styled.li`
  border: 1px solid #bfc3c8;
  border-radius: 12px;
  padding: 30px;
  width: 250px;
  list-style-type: none;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ListFlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ArrowIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;
