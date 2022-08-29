import React from "react";
import * as C from "./styles"

const FormDate = ({setMes, arrayCurrentMonth, currentMonth}) => {
  return (
    <>
      <C.Container>
        <C.InputContent>Mes
          <C.Select 
          defaultValue={arrayCurrentMonth[currentMonth]}
          onChange={(e) => setMes(e.target.value)}
          >
            
            {
              arrayCurrentMonth.map(((item, index) => (
                <C.Option key={index}>{item}</C.Option>
              )))
            }
          </C.Select>
        </C.InputContent>
      </C.Container>
    </>
  )
}

export default FormDate