import React from "react";
import { NotificationManager } from "react-notifications";
import { crudBordadoService } from "../../services/api/CrudBordado/crudBordadoService";
import { url } from "../../services/Url/url";
import GridCadastroItens from "../GridCadastroItem";
import * as C from './styles'

const GridCadastro = ({ ListaBordados, setListaBordados }) => {
  const onDelete = (id) => {
    crudBordadoService.deleteById(url.tipoBordado, id)
      .then((result) => {
        if (id > 0){
          setListaBordados(tipoBordado => {
            return tipoBordado.filter(tipoBordadoItem => tipoBordadoItem.id !== id)
          })
        }
        NotificationManager.success('Deletado com sucesso!', 'Atenção!')
      })
  }

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descição</C.Th>
          <C.Th alignCenter width={40}>Valor unitário</C.Th>
          <C.Th alignCenter width={20}>Ações</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {ListaBordados?.map((item) => (
          <GridCadastroItens key={item.id} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  )
}

export default GridCadastro