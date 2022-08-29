import React from "react"
import * as C from "./styles"

import {
    FaTrash,
    FaEdit,
} from "react-icons/fa"

const GridItem = ({ listaBordadosItem, onDelete }) => {
    return (
        <C.Tr>
            <C.Td>{listaBordadosItem.cliente}</C.Td>
            <C.Td alingCenter>{listaBordadosItem.tipo}</C.Td>
            <C.Td alingCenter>{listaBordadosItem.qtd_peca}</C.Td>
            <C.Td alingCenter>{parseFloat(listaBordadosItem.valor_unit).toFixed(2)}</C.Td>
            <C.Td alingCenter>{parseFloat(listaBordadosItem.total_peca).toFixed(2)}</C.Td>
            <C.Td alingCenter>
                <FaEdit
                title="Editar"
                color="teal"
                //onClick={() => onEdit(listaBordadosItem.id) } Tem que implementar
                /> 
                <FaTrash
                title="Deletar"
                color="#DC143C"
                onClick={() => onDelete(listaBordadosItem.id) } /> 
            </C.Td>
        </C.Tr>
    )
}

export default GridItem