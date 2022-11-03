import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { userSignOut } from "../../utils/firebase";
import CardIcon from "../../components/card-icon/card-icon";
import CardDropdown from "../../components/card-dropdown/card-dropdown";
import "./navigation.styles.scss";
import { ToggleContext } from "../../contexts/toggleContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen } = useContext(ToggleContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CardIcon />
        </div>
        {isCardOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
