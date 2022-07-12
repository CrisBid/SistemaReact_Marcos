import React from 'react'
import {
  Body,
  Pagina,
} from '../../../../../../styles/pages/Fazendas'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import {useSession } from "next-auth/client"

import Header from '../../../../../../components/Header'
import Sidebar from '../../../../../../components/Sidebar'
import Tabela from '../../../../../../components/Pages/Tabelas/Fazendas/Produtos'
import Navegacao from '../../../../../../components/Pages/Navegacao/Fazendas/Pagina_Fazenda/Produtos'

const Fazendas: React.FC = () => {
  const [session, loading] = useSession()
  return (
    <Pagina>
    <Header/>
    <Sidebar/>
      {session && (
      <Body>
        <div className= {"navegacao"}>
          <h1>Todas os Produtos</h1>
          <Navegacao/>
        </div>
        <Grid component={Paper} elevation={6} className= {"conteudo"}>
          <div className = {"conteudo_interno"}>
            <Tabela/>
          </div>
        </Grid>
      </Body>
      )}
      {!session && (
        <Body/>
      )}
    </Pagina>
  )
}

export default Fazendas