import {
  HeaderContainer,
  Logo,
  NavContainer,
  NavItem,
  LinkItem,
  ProfileIconContainer,
  Profile,
} from "./HeaderStyledComponents";

import React, { useState } from "react";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("available");
  const handleNavClick = (nav) => {
    setSelectedNav(nav);
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...WGpBNJmxrFwXs1M3EMoAJtligthvFp9...k5"
        alt="logo"
      />
      <NavContainer>
        <LinkItem to="/lms-available">
          <NavItem
            active={selectedNav === "available"}
            onClick={() => handleNavClick("available")}
          >
            Available Courses
          </NavItem>
        </LinkItem>
        <LinkItem to="/lms-premium">
          <NavItem
            active={selectedNav === "premium"}
            onClick={() => handleNavClick("premium")}
          >
            Premium Courses
          </NavItem>
        </LinkItem>
        <LinkItem to="/lms-certificates">
          <NavItem
            active={selectedNav === "certificates"}
            onClick={() => handleNavClick("certificates")}
          >
            Achieved Certificates
          </NavItem>
        </LinkItem>
        <LinkItem to="/lms-score">
          <NavItem
            active={selectedNav === "score"}
            onClick={() => handleNavClick("score")}
          >
            Learning Score
          </NavItem>
        </LinkItem>
      </NavContainer>
      <ProfileIconContainer>
        <h4>User</h4>
        <Profile
          src="https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"
          alt="profile"
        />
      </ProfileIconContainer>
    </HeaderContainer>
  );
};

export default Header;
