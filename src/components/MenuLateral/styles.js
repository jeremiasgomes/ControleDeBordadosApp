import styled from "styled-components";

export const Container = styled.div`
    height: 20px;
    display:flex;
    background-color: teal;
    //background-color: #1a202c;
    //box-shadow: 0 0 20px 3px;

    > svg{
        position: fixed;
        color: white;
        width:30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }
`;