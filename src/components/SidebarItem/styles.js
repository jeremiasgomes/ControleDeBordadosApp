import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #00a0a0;
    font-size: 20px;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;

    > a{
        color: #fff;
        text-decoration: none
    }
    > svg {
        margin: 0 20px;
    }
    
    &:hover{
        background-color: #009090;
    }
`;