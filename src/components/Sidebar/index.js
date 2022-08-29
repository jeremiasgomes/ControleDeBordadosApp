import React from 'react'
import {Container, Content} from './styles'
import SidebarItem from '../SidebarItem'
import {FaTimes, FaHome} from 'react-icons/fa'
import { MdAddTask } from "react-icons/md";

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }
    
    return(
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar}/>
            <Content>
                <SidebarItem Icon={FaHome} Page="/" Text="Cadastro Bordados" />
                <SidebarItem Icon={MdAddTask} Page="cadastro" Text="Cadastro Tipo de Bordado"/>
            </Content>
        </Container>
    )
}

export default Sidebar
