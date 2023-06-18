import { useParams } from "react-router-dom";

import { arts } from "../db";
const ArtDetail = () => {
  const params = useParams();
  let { artId } = params;

  console.log("art: ", arts[artId], artId);
  return (
    <>
      <div>ID: {arts[artId - 1].id}</div>
      <div>NAME: {arts[artId - 1].name}</div>
      <img
        src={`${process.env.PUBLIC_URL}/${arts[artId - 1].url}`}
        width={500}
      />
    </>
  );
};

export default ArtDetail;
