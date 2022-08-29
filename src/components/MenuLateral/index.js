import React, {useState} from "react";
import {Container} from './styles'
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar'

const MenuLateral = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderBar = () => setSidebar(!sidebar)
  
  return(
    <Container>
      <FaBars onClick={showSiderBar}/>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )

}

export default MenuLateral