import styled from "@emotion/styled";

export const CardBody = styled.div`
  display: inline-flex;
`;
export const Card = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #999;
  margin: 0 20px;
  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
