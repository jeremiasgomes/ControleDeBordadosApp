import React, { useEffect, useState } from 'react'
import FormCadastroItens from '../../components/FormCadastroItens'
import GridCadastroItens from '../../components/GridCadastro'
import Header from '../../components/Header'
import { crudBordadoService } from '../../services/api/CrudBordado/crudBordadoService'
import { url } from '../../services/Url/url'
import GlobalStyle from '../../styles/global'

function Cadastro() {
  
  const [tipoBordadoList, setTipoBordadoList] = useState([])
  
  useEffect(() => {
    crudBordadoService.getAll(url.tipoBordado)
      .then((result) => {
        setTipoBordadoList(result)
      })
  }, [])

  return (
    <>
      <Header />
      <FormCadastroItens ListaBordados={tipoBordadoList} setListaBordados={setTipoBordadoList}/>
      <GridCadastroItens ListaBordados={tipoBordadoList} setListaBordados={setTipoBordadoList}/>
      <GlobalStyle />
    </>
  )
}

export default Cadastro