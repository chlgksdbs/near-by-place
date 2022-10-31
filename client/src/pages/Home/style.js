import styled from "@emotion/styled";

export const Container = styled.div`
    overflow-y: hidden;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    align-items: center;
`;

export const CardTitle = styled.div`
    margin-top: 20px;
`;

export const CardBox = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
`;

export const MoreButton = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    font-weight: 500;
    margin-top: 15px;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
  
  & > div {
      margin-right: 6px;
  }
`;
