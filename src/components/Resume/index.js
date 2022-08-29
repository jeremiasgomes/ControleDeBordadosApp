import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styles'
import {
  GiMoneyStack
} from 'react-icons/gi'


const Resume = ({total}) => {
  return (
      <C.Container>
          <ResumeItem title="Entradas" Icon={GiMoneyStack} value={total}/>
      </C.Container>
  )
} 

export default Resume