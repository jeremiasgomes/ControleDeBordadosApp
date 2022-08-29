import React from "react"
import { FaBullseye } from "react-icons/fa"
import { NotificationManager } from "react-notifications"
import { crudBordadoService } from "../../services/api/CrudBordado/crudBordadoService"
import { url } from "../../services/Url/url"
import GridItem from "../GridItem"
import * as C from "./styles"

const Grid = ({ bordadosDoMes, setBordadosDoMes}) => {
 
  //console.log('Grid: ',bordadosDoMes)
  
  const onDelete = (id) => {
    crudBordadoService.deleteById(url.bordadosDoMes, id)
      .then((result) => {
        if (id >= 0) {
          setBordadosDoMes((
            bordado => bordado.filter(
              bordadoItem => bordadoItem.id !== id
            )))
          NotificationManager.success('Deletado com sucesso!', 'Atenção!')

        }
      })
  }

  const InvertePosicao = bordadosDoMes?.slice(0).reverse()
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={30}>Cliente</C.Th>
          <C.Th width={20} alignCenter>Tipo</C.Th>
          <C.Th width={10} alignCenter>Qtd Peça</C.Th>
          <C.Th width={15} alignCenter>Valor Uni</C.Th>
          <C.Th width={15} alignCenter>Total</C.Th>
          <C.Th width={15} alignCenter>Ações</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {InvertePosicao?.map((item, index) => (
          <GridItem key={index} listaBordadosItem={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  )
}

export default Grid