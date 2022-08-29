import React, { useState } from 'react'
import bordadosPdf from '../../Reports/Bordados/bordadosPdf'
import {NotificationManager} from 'react-notifications'
import Grid from '../Grid'
import * as C from './styles'
import { FaFilePdf } from 'react-icons/fa'
import { crudBordadoService } from '../../services/api/CrudBordado/crudBordadoService'
import { url } from '../../services/Url/url'

const Form = ({
	selectMes,
	bordadosDoMes,
	setBordadosDoMes,
	totalBodados,
	arrayCurrentMonth,
	tipoBordado,
	transactionsList
}) => {
	const [cliente, setCliente] = useState("")
	const [tipo, setTipo] = useState("")
	const [qtdPeca, setQtdPeca] = useState("")

	const listaTiboBordado = tipoBordado

	let valorU = 0
	let totalP = 0


	const handleSave = () => {
		if (listaTiboBordado === null) {
			NotificationManager.warning('Primeiro cadastre um tipo de bordado!', 'Atenção')
			
			return
		}
		if (!cliente) {
			NotificationManager.warning('Campo Cliente vazio', 'Atenção')
			
			return
		}
		else if (!tipo || tipo === 'Selecione') {
			NotificationManager.warning('Selecione um Tipo de Bordado!', 'Atenção')
			return
		}
		else if (qtdPeca < 1) {
			NotificationManager.warning('Quantidade de peças tem que ser maior que 0!', 'Atenção')
			return
		}
		
		
		listaTiboBordado?.filter(item => {
			if (item.nome === tipo) {
				valorU = parseFloat(item.valor).toFixed(2)
				totalP = parseFloat(item.valor * qtdPeca).toFixed(2)
			}
			return 0
		})

		const transaction = {
			mes: selectMes === '' ? arrayCurrentMonth : selectMes,
			cliente: cliente,
			tipo: tipo,
			qtd_peca: qtdPeca,
			valor_unit: parseFloat(valorU),
			total_peca: parseFloat(totalP)
		}
		
		handleAdd(transaction)

		setCliente("")
		setTipo("")
		setQtdPeca("")

	}

	const handleAdd = (dataBordado) => {
		 crudBordadoService.create(url.bordadosDoMes, dataBordado)
		 	.then((result) => {
		 		setBordadosDoMes(bordadosDoMes => [...bordadosDoMes, dataBordado])
		 	})
		
	}

	return (
		<>
			<C.Container>
				<C.InputContent>
					<C.Label>Cliente</C.Label>
					<C.Input value={cliente} onChange={(e) => setCliente(e.target.value)} />
				</C.InputContent>

				<C.InputContent>
					<C.Label>Tipo</C.Label>
					<C.Select onChange={(e) => setTipo(e.target.value)}>
						<C.Option >Selecione</C.Option>
						{listaTiboBordado?.map((item, index) => (
							<C.Option key={index}>{item.nome}</C.Option>
						))}
					</C.Select>
				</C.InputContent>

				<C.InputContent>
					<C.Label>Qtd Peça</C.Label>
					<C.Input type="number" value={qtdPeca} onChange={(e) => setQtdPeca(e.target.value)} />
				</C.InputContent>

				<C.Button onClick={handleSave}>Adicionar</C.Button>
				<C.Button onClick={(e) => bordadosPdf(bordadosDoMes, totalBodados)}><FaFilePdf/>Gerar PDF</C.Button>
			</C.Container>
			
			<Grid
				bordadosDoMes={bordadosDoMes}
				setBordadosDoMes={setBordadosDoMes}
				arrayCurrentMonth={arrayCurrentMonth}
				itens={transactionsList}
				/>
				
		</>
		
	)
}

export default Form