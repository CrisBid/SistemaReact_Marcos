import React, { ReactElement } from "react";
import {
  Body,
  Pagina,
  BoxContainer,
} from '../../../styles/pages/Home'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {useSession } from "next-auth/client"
import Router from 'next/router'

import Layout from '../../../components/Layout'
import AppLayout from '../../../components/Layout/App_Layout';
import Fazendas from "../../../components/Pages/Graficos/Home/Pagina_Fazenda/Fazendas";
import Dias from "../../../components/Pages/Graficos/Home/Pagina_Fazenda/Dias";
import Calendario from "../../../components/Pages/Calendarios";
import { LatestOrders } from "../../../components/Pages/Tabelas/Home/latest-orders";

function Home() {
  const [session, loading] = useSession()
  return (
    <Pagina>
      <Body>
        <div className= {"navegacao"}>
          <h1>Bem Vindo</h1>
        </div>
        <BoxContainer>
          <div>
            <Grid component={Paper} elevation={6} className= {"box-g"}>
              <div className= {"box"}>
                <div className= {"box-grafico"}>
                  <Fazendas/>
                </div>
                <div className= {"box-text"}>
                  <h1>1.200 FARMS</h1>
                  <p>Suas fazendas cadastradas</p>
                </div>
              </div>
              <div className= {"linha"}/>
              <div className= {"box-link"}>
                <a>Acessar Fazendas<ArrowForwardIcon/></a>
              </div>
            </Grid>
          </div>
          <div>
            <Grid component={Paper} elevation={6} className= {"box-g"}>
              <div className= {"box"}>
                <div className= {"box-grafico"}>
                  <Dias/>
                </div>
                <div className= {"box-text"}>
                  <h1>15 DIAS</h1>
                  <p>Dias uteis do mes</p>
                </div>
              </div>
              <div className= {"linha"}/>
              <div className= {"box-link"}>
                <a>Acessar Calendario<ArrowForwardIcon/></a>
              </div>
            </Grid>
          </div>
        </BoxContainer>
        <div className= {"collun"}>
          <Grid component={Paper} elevation={6} className= {"conteudo"}>
            <div className="conteudo_interno">
              <LatestOrders/>
            </div>
          </Grid>
          <Grid component={Paper} elevation={6} className= {"conteudo-lateral"}>
            <div className="conteudo_interno">
              <Calendario/>
            </div>
          </Grid>
        </div>
      </Body>
    </Pagina>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AppLayout>
        {page}
      </AppLayout>
    </Layout>
  )
}

export default Home