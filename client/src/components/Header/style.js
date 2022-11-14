import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 60px;
    align-items: center;
    justify-content: space-between; 
    border-bottom: solid #d9d9d9;
`;

export const Logo = styled.img`
    height: 50px;
    margin-left: 50px;
`;

export const Account = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 60px;
`;

export const LoginButton = styled.div`
    position: absolute;
    right: 120px;
    display: block;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
`;
