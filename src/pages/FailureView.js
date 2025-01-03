import React, { useContext } from "react";
import failureViewImage from "../images/failure-view-img.svg";
import {
  Button,
  FailureViewContainer,
  Heading,
  Image,
} from "../styled-components/Wrapper";
import ListContext from "../context/ListContext";

const FailureView = () => {
  const { handleRetry } = useContext(ListContext);

  return (
    <FailureViewContainer>
      <div>
        <Image src={failureViewImage} alt="failure view" />
      </div>
      <Heading>Something went wrong. Please try again</Heading>
      <div>
        <Button type="button" onClick={handleRetry}>
          Try Again
        </Button>
      </div>
    </FailureViewContainer>
  );
};

export default FailureView;
