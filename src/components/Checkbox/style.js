import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  label {
    font-size: 16px;
    font-weight: 300;
    padding-left: 5px;
  }
`;

export const Error = styled.div`
  font-size: 14px;
  p {
    margin: 0px;
    padding-left: 5px;
    color: #ff3e41;
  }
`;
