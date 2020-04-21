import styled from "styled-components";

export const FooterStyle = styled.div`
  text-align: center;
  background: #f1f1f1;
  color: #868181;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-direction: column;
  /* position: absolute; */
  left: 0;
  bottom: 0;
  right: 0;
  position: relative;
`;

export const FooterUl = styled.ul`
  color: #868181;
`;

export const FooterListItem = styled.li``;

export const ListItemAnchor = styled.a`
  color: #e62116;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

export const FooterLogo = styled.img`
  position: absolute;
  left: 15px;
  top: 20px;
  height: 30px;
  /* opacity: 0.6; */
`;
