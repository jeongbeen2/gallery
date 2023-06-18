import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleOnClickLink = (route, params = "") => {
    navigate(`/${route}${params}`);
  };
  return (
    <ul>
      <li
        onClick={() => {
          handleOnClickLink("card");
        }}
      >
        card
      </li>
      <li
        onClick={() => {
          handleOnClickLink("");
        }}
      >
        home
      </li>
      <li
        onClick={() => {
          handleOnClickLink("ArtDetail", "/1");
        }}
      >
        Art Detail
      </li>
    </ul>
  );
};

export default Header;
