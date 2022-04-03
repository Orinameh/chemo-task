import styled from "styled-components";

const UtilContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem;

  p {
    font-size: 2rem;
  }
`;
export const Util = ({ text, testId }) => {
  return (
    <UtilContainer>
      <p data-testid={testId}>{text}</p>
    </UtilContainer>
  );
};