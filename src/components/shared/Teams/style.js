import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 100%;
  height: ${(props) => `${props.size + 50}%`};
  width: ${(props) => `${props.size + 50}%`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 4vh;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  // border: 10px solid red;

  &:hover {
    height: ${(props) => `${props.size + 60}%`};
    width: ${(props) => `${props.size + 60}%`};
  }
`;

export const Designation = styled.div`
  font-size: 100%;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 100%;
  }
`;
