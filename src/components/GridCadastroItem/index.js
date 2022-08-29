import React from "react";
import * as C from './styles'
import {
  FaTrash,
  FaEdit,
} from "react-icons/fa"

const GridCadastroItens = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.nome}</C.Td>
      <C.Td alignCenter>{parseFloat(item.valor).toFixed(2)}</C.Td>
      <C.Td alignCenter>
        <FaEdit
        title="Editar"
         color="teal" 
         onClick={() => onDelete(item.id)} />
        <FaTrash
         title="Deletar"
         color="#DC143C" 
         onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  )
}

export default GridCadastroItens