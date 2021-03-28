import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";

import "../css/home.css";

function ContentSideBar(props) {
  return (
    <div className="content-container">
      <div className="side-bar">
        <div className="icons">
          <HomeWorkOutlinedIcon />
          <StorefrontOutlinedIcon />
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default ContentSideBar;
