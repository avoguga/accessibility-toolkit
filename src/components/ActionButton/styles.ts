import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 80px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;

  align-items: center;
  justify-content: space-between;
  p {
    margin: 5px;
    margin-left: 10px;
    font-weight: bold;
  }
  color: #404040;
  cursor: pointer;
`;

export const MyIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
  margin-right: 10px;
  margin-left: 10px;
`;
