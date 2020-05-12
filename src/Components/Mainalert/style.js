import styled from "styled-components";
export const Anchor = styled.a`
  color: #fff;
  background: #ff5f4f;
  font-family: "BukraAlt_Bold";

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    margin-top: 32px;
  }
`;

export const Description = styled.div`
  color: #ff5f4f;
  font-weight: 600;
`;
