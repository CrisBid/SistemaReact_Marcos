import React from 'react'
import {
  Body,
  Pagina,
} from '../../../../../../../styles/pages/Fazendas/Pagina_Fazenda/Talhoes/Safras/Insumos'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Header from '../../../../../../../components/Header'
import Sidebar from '../../../../../../../components/Sidebar'
import Tabela from '../../../../../../../components/Pages/Tabelas/Fazendas/Colheitas'
import Navegacao from '../../../../../../../components/Pages/Navegacao/Fazendas/Pagina_Fazenda/Talhoes/Safras/Colheita'


const Insumos: React.FC = () => {
  return (
    <Pagina>
    <Header/>
    <Sidebar/>
      <Body>
        <div className= {"navegacao"}>
          <h1>Todos as Colheitas</h1>
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

export default Insumos