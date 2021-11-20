import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: ${(props) => props.widthDiv};
  margin-right: ${(props) => props.marginRigth};
  border-radius: 8px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  background-color: #fff;
  div {
    padding-left: 10px;
    p {
      margin: 0px;
      font-size: 14px;
      color: #ff3e41;
    }
  }
`;

export const InputContainer = styled.input`
  background: transparent;
  border: none;
  color: #121212;
  margin: 5px 0px 5px 10px;
  outline: 0;
  display: flex;
  transition: 0ms.5s;
  width: 80%;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff3e41;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #300eff;

    &::placeholder {
      color: #555;
    }
  }
`;
