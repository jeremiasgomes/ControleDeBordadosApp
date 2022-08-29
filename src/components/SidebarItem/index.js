import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const SidebarItem = ({Icon, Page, Text}) => {
    return(
        <Container>
            <Icon/>
            <Link to={Page}>{Text}</Link>
        </Container>
    )
}

export default SidebarItem