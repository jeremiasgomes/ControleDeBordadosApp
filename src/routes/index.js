import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'

const Routers = ({
  entrada,
  saida,
  total,
  handleAdd,
  transactionsList,
  setTransactionsList
}) => {

  let tipoBordado = []
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <Home
              entrada={entrada}
              saida={saida}
              total={total}
              handleAdd={handleAdd}
              transactionsList={transactionsList}
              setTransactionsList={setTransactionsList}
              listaTiboBordado={tipoBordado}
            />
          }
        />
        <Route path='cadastro'
          element={
            <Cadastro
              listaTiboBordado={tipoBordado}
            />
          }
        />
      </Routes>
      <NotificationContainer/>
    </BrowserRouter>
  )
}

export default Routers