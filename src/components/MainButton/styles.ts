import styled from "styled-components";
import handtalk from "../../assets/handtalk.png";

export const Container = styled.div`
  background-image: url(${handtalk});
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-size: contain;
  width: 35px;
  height: 35px;

  position: fixed;
  right: 0px;
  bottom: 30%;
`;