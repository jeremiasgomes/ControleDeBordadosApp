import React from "react";
import MenuLateral from "../MenuLateral";
import * as C from "./styles"

const Header = () => {
    return(
        <C.Container>
            <MenuLateral/>
            <C.Header>
                <C.Title>Controle de Bordados</C.Title>
            </C.Header>
        </C.Container>
    )
}

export default Header