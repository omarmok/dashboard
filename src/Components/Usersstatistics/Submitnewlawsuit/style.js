import styled from "styled-components";

export const SubmitnewlawsuitContainer = styled.div`
  background: #00c269;
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
  svg {
    width: 50px;
    height: 50px;
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
    background: #04d173;
  }
`;
