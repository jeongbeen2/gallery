import { arts } from "../../db";
import * as SC from "./styles";
const Card = () => {
  return (
    <>
      <SC.CardBody>
        {arts.map((art) => {
          return (
            <SC.Card>
              <img src={art.url} />
            </SC.Card>
          );
        })}
      </SC.CardBody>
    </>
  );
};

export default Card;
