import React from "react";
import {
  FooterStyle,
  FooterLogo,
  FooterUl,
  FooterListItem,
  ListItemAnchor,
} from "./style.js";
import FooterLogoimage from "../../images/YouTubeLogo.svg";

function Footer() {
  return (
    <FooterStyle>
      <FooterUl className="d-flex">
        <FooterListItem>
          <ListItemAnchor href="/" className="nav-link active">
            تواصل معنا
          </ListItemAnchor>
        </FooterListItem>
        <FooterListItem>
          <ListItemAnchor href="/contact" className="nav-link ">
            البريد الإلكتروني
          </ListItemAnchor>
        </FooterListItem>

        <FooterListItem>
          <ListItemAnchor href="/contact" className="nav-link ">
            سياسة الخصوصية
          </ListItemAnchor>
        </FooterListItem>
      </FooterUl>
      كافة الحقوق محفوظة © 2020
      <div>
        <FooterLogo src={FooterLogoimage} />
      </div>
    </FooterStyle>
  );
}

export default Footer;
