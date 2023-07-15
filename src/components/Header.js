import { useNavigate } from "react-router-dom";
import * as SC from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const handleOnClickLink = (route, params = "") => {
    navigate(`/${route}${params}`);
  };
  return (
    <SC.Navigation>
      <div
        onClick={() => {
          handleOnClickLink("");
        }}
      >
        HOME
      </div>
      <div
        onClick={() => {
          handleOnClickLink("slider");
        }}
      >
        Slider
      </div>
    </SC.Navigation>
  );
};

export default Header;
