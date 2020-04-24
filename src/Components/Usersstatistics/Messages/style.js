import styled from "styled-components";

export const MessagesContainer = styled.div`
  margin-top: 15px;
  background: #0075bc;
  color: #fff;
  padding: 15px 20px 15px 10px;
  text-align: right;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transition-duration, 0.5s ease;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 12px;
  svg {
    width: 35px;
    height: 30px;
  }

  &::before {
    content: "";
    height: 50px;
    background: white;
    width: 10px;
    right: 14px;
    position: absolute;
  }
  &:hover {
    background: #0288da;
  }
`;
