import { useParams } from "react-router-dom";

import { paintings } from "../db";
const PaintingDetail = () => {
  const params = useParams();
  let { artId } = params;

  console.log("paintings: ", paintings[artId], artId);
  return (
    <>
      <div>ID: {paintings[artId - 1].id}</div>
      <div>NAME: {paintings[artId - 1].name}</div>
      <img
        src={`${process.env.PUBLIC_URL}/${paintings[artId - 1].url}`}
        width={500}
      />
    </>
  );
};

export default PaintingDetail;
