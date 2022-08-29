import React, { useEffect, useState } from 'react'
import FormDate from '../../components/FomDate'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Resume from '../../components/Resume'
import manipulaDate from '../../date/date'
import { crudBordadoService } from '../../services/api/CrudBordado/crudBordadoService'
import { url } from '../../services/Url/url'
import GlobalStyle from '../../styles/global'

const Home = () => {

  const arrayMonths = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const arrayCurrentMonth = []
  const [mes, setMes] = useState('')
  const [bordadosDoMes, setBordadosDoMes] = useState([])
  const [tipoBordado, setTipoBordado] = useState([])
  const [total, setTotal] = useState(0)

  let currentMonth = 0
  let dataMesBordado = []

  currentMonth = parseInt(manipulaDate(2)) //Mes Atual

  for (let i = 0; i <= currentMonth; i++)
    arrayCurrentMonth.push(arrayMonths[i])


  useEffect(() => {
    crudBordadoService.getAllMonth(url.bordadosDoMes, mes === '' ? arrayCurrentMonth[currentMonth] : mes)
      .then((result) => {
        setBordadosDoMes(result)
      })

    crudBordadoService.getAll(url.tipoBordado)
      .then((result) => {

        setTipoBordado(result)
      })

  }, [mes])

  useEffect(() => {
    setTotal((bordadosDoMes
      .reduce((total, valor) => total + parseFloat(valor.total_peca), 0)).toFixed(2))
  })

  //console.log('Home: ',bordadosDoMes)

  return (
    <>
      <Header />
      {<Resume total={total} />}

      {<FormDate
        setMes={setMes}
        arrayCurrentMonth={arrayCurrentMonth} currentMonth={currentMonth} />}

      {<Form
        selectMes={mes}
        bordadosDoMes={bordadosDoMes}
        setBordadosDoMes={setBordadosDoMes}
        totalBodados={total}
        tipoBordado={tipoBordado}
        arrayCurrentMonth={arrayCurrentMonth[currentMonth]}
        transactionsList={dataMesBordado}
      />}
      <GlobalStyle />
    </>
  )
}

export default Home