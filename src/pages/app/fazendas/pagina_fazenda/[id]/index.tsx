import React, { useState, useEffect,  useCallback} from 'react'
import {
  Body,
  Pagina,
  BoxContainer
} from '../../../../../styles/pages/Fazendas/Pagina_Fazenda'
import { 
  WorkOutline,
  LocationOn,
  Person,
  Event
} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Image from 'next/image'

import { useRouter } from 'next/router'
import api from "../../../../../api/axios"
import {useSession } from "next-auth/client"

import Header from '../../../../../components/Header'
import Sidebar from '../../../../../components/Sidebar'
import Grafico from "../../../../../components/Pages/Graficos/Fazendas/Barras"
import GraficoRedondoTalhoes from "../../../../../components/Pages/Graficos/Fazendas/Pagina_Fazenda/Talhoes"
import GraficoRedondoDias from "../../../../../components/Pages/Graficos/Fazendas/Pagina_Fazenda/Dias"
import GraficoRedondoCustos from "../../../../../components/Pages/Graficos/Fazendas/Pagina_Fazenda/Custos"
import GraficoRedondoProducao from "../../../../../components/Pages/Graficos/Fazendas/Pagina_Fazenda/Producao"
import Navegacao from '../../../../../components/Pages/Navegacao/Fazendas/Pagina_Fazenda'
import avatar from '../../../../../../public/Avatar/pessoa.jpg'

import useSWR, { SWRConfig } from "swr";

/*const fetcher = (url:any) => fetch(url).then((res) => res.json());
const API:any = process.env.NEXT_PUBLIC_AXIOS_URL + "/api/farms";

export async function getServerSideProps() {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo
      }
    }
  };
}*/


function Pagina_Fazenda(){

  const router = useRouter()

  const {id} = router.query



  return (
    <Pagina>
    <Header/>
    <Sidebar/>
      <Body>
        <div className= {"navegacao"}>
          <Navegacao/>
        </div>
        <div className= {"titulo"}>
          <h1>Gerenciamento da Geraleite</h1>
        </div>
        <div className={"pagina"}>
          <div className= {"coluna_1"}>
            <div className="boxContainer">
                <Grid component={Paper} elevation={6} className= {"box"}>
                  <div className= {"box_interno"}>
                    <p className= "titulo">Administrador</p>
                    <div className= {"avatar_box"}>
                      <Image
                        src={avatar}
                        alt="My Image"
                        width={150}
                        height={150}
                        className= {"avatar"}
                      />
                    </div>
                    <p className= "nome">Marcos</p>
                    <p className= "permissao">Administrador</p>
                    <Button>Teste1</Button>
                    <Button>Teste2</Button>
                  </div>
                </Grid>
              </div>
              <div className="boxContainer">
                <Grid component={Paper} elevation={6} className= {"box"}>
                  <div className= {"box_interno_informacoes"}>
                    <p className= "titulo">Informações</p>
                    <p className= "info"><Person className= "icon"/>Geraleite</p>
                    <p className= "info"><LocationOn className= "icon"/>São Gotardo</p>
                    <p className= "info"><WorkOutline className= "icon"/>Admin</p>
                    <p className= "info"><Event className= "icon"/>xx/xx</p>
                  </div>
                </Grid>
              </div>
            </div>
          <div className={"coluna_2"}>
            <BoxContainer>
              <div>
              <Grid component={Paper} elevation={6} className= {"box"}>
                <Button onClick={() => router.push(`/app/fazendas/pagina_fazenda/cadastramentos/${id}`)} className= {"button"}>Cadastramentos</Button>
              </Grid>
              </div>
              <div>
              <Grid component={Paper} elevation={6} className= {"box"}>
                <Button onClick={() => router.push(`/app/fazendas/pagina_fazenda/planejamento/${id}`)} className= {"button"}>Planejamento</Button>
              </Grid>
              </div>
              <div>
              <Grid component={Paper} elevation={6} className= {"box"}>
                <Button onClick={() => router.push(`/app/fazendas/pagina_fazenda/operacional/${id}`)} className= {"button"}>Operacional</Button>
              </Grid>
              </div>
              <div>
              <Grid component={Paper} elevation={6} className= {"box"}>
                <Button onClick={() => router.push(`/app/fazendas/pagina_fazenda/finaceiro/${id}`)} className= {"button"}>Finaceiro</Button>
              </Grid>
              </div>
            </BoxContainer>
            <Grid component={Paper} elevation={6} className= {"conteudo"}>
              <div className = {"conteudo_interno"}>
                <BoxContainer className = {"conteudo_interno_box"}>
                  <div>
                    <Grid component={Paper} elevation={6} className= {"box"}>
                      <GraficoRedondoTalhoes/>
                    </Grid>
                  </div>
                  <div>
                    <Grid component={Paper} elevation={6} className= {"box"}>
                      <GraficoRedondoDias/>
                    </Grid>
                  </div>
                  <div>
                    <Grid component={Paper} elevation={6} className= {"box"}>
                      <GraficoRedondoProducao/>
                    </Grid>
                  </div>
                  <div>
                    <Grid component={Paper} elevation={6} className= {"box"}>
                      <GraficoRedondoCustos/>
                    </Grid>
                  </div>
                </BoxContainer>      
                <Grafico/>
              </div>
            </Grid>
          </div>
        </div>
      </Body>
    </Pagina>
  )
}

/*export async function getStaticProps() {
  const router = useRouter()
  const {id} = router.query
  const data = await api.get(`api/farms/${id}`)

  return {
    props: {
      data
    },
  }
}*/

export default Pagina_Fazenda