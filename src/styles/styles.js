import styled from "@emotion/styled";

export const Navigation = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  padding: 0 50px;
  background-color: #fff;
  > div {
    font-size: 20px;
    margin: 0 5px;
    cursor: pointer;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 1000vh;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid #eee;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#eee, #aaa);
`;

export const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border: 2px solid black;
    width: 700px;
  }
`;
