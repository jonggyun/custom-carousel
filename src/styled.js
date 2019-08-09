import styled from "styled-components";

const rowHeight = "40px";

export const Wrapper = styled.nav`
  height: ${rowHeight};
  background-color: skyblue;
  overflow: hidden;
  position: relative;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: height;

  transition: ${({ isFirst }) => (isFirst ? "0" : "1s")};
  transform: ${({ currentIndex }) => `translateY(${-40 * currentIndex}px)`};
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  height: ${rowHeight};
`;
