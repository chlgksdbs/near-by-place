import styled from "@emotion/styled";
import {LiftUp} from "../../styles/common";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    justify-content: space-around;
`;

export const SideBar = styled.div`
    width: 90px;
    height: 70vh;
    margin-top: 80px;
    border-right: 2px solid #000;
`;

export const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
`;

export const Menu = styled.div`
    font-weight: bold;
    cursor: pointer;
    
    ${LiftUp}
`;

export const InfoContainer = styled.div`
    
`;
