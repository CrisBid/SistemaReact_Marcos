import React, { ReactElement }from 'react'
import {
  Body,
  Pagina,
} from '../../../styles/pages/Fazendas'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Tabela from '../../../components/Pages/Tabelas/Fazendas'
import Navegacao from '../../../components/Pages/Navegacao/Fazendas'
import Layout from '../../../components/Layout'
import AppLayout from '../../../components/Layout/App_Layout';

function Fazendas() {

  return (
    <Pagina>
      <Body>
        <div className= {"navegacao"}>
          <h1>Todas as Fazendas</h1>
          <Navegacao/>
        </div>
        <Grid component={Paper} elevation={6} className= {"conteudo"}>
          <div className = {"conteudo_interno"}>
            <Tabela/>
          </div>
        </Grid>
      </Body>
    </Pagina>
  )
}

Fazendas.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AppLayout>
        {page}
      </AppLayout>
    </Layout>
  )
}

export default Fazendas