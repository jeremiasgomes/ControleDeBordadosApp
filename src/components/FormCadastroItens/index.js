import React, { useState} from "react";
import { NotificationManager } from "react-notifications";
import { crudBordadoService } from "../../services/api/CrudBordado/crudBordadoService";
import { url } from "../../services/Url/url";
import * as C from './styles'

const FormCadastroItensTipoBordado = ({ListaBordados, setListaBordados}) => {
	
	const [descricao, setDescricao] = useState("")
	const [valorUnit, setValorUnit] = useState("")
	
	const dadosTipobordado = {
		nome: descricao,
		valor: parseFloat(valorUnit).toFixed(2)
	}
	const handleAdd = () => {

		if(!descricao){
			NotificationManager.warning('Campo Descrição tipo de bordado vazio!', 'Atenção')
			return
		}

		if(!valorUnit){
			NotificationManager.warning('Campo Valor Unitário vazio!', 'Atenção')
			return
		}
		
		crudBordadoService.create(url.tipoBordado, dadosTipobordado)
		.then((result) => {
			setListaBordados((ListaBordados) => [...ListaBordados, result])
			
		})
		
		NotificationManager.success('Salvando...!')
		setDescricao("")
		setValorUnit("")
	}


	return (
		<C.Container>
			
			<C.InputContent>
				<C.Label>Descrição Tipo de Bordado</C.Label>
				<C.Input type="text" value={descricao} placeholder="Frente, Bolso etc..." onChange={(e) => setDescricao(e.target.value)} />
			</C.InputContent>
			
			<C.InputContent>
				<C.Label> Valor Unitário</C.Label>
				<C.Input type="number" value={valorUnit} placeholder="R$ 1,00" onChange={(e) => {setValorUnit(e.target.value)}} />
			</C.InputContent>
		
			<C.InputContent>
				<C.Button onkey onClick={handleAdd}>Adicionar</C.Button>
			</C.InputContent>

		</C.Container>
	)
}

export default FormCadastroItensTipoBordado