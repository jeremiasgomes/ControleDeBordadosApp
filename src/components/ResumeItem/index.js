import React from 'react'
import * as C from './styled'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon/>
      </C.Header>
      <C.Total>R$ {value}</C.Total>
    </C.Container> 
  )
}

export default ResumeItem