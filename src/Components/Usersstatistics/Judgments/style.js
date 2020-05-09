import styled from "styled-components";

export const JudgmentsContainer = styled.div`
  margin-top: 15px;
  background: #ff5f4f;
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
    margin-bottom: 5px;
  }

  &::before {
    content: "";
    height: 50px;
    background: white;
    width: 10px;
    right: 0px;
    position: absolute;
  }
  &:hover {
    background: #0288da;
  }
`;
