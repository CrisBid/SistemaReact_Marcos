import React, { ReactElement , useEffect} from "react";
import Image from 'next/image'
import {
  Body,
  Pagina,
} from '../../../styles/pages/Perfil'
import { 
  WorkOutline,
  LocationOn,
  Person,
  Event
} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllIcon from '@material-ui/icons/AllInbox';
import LockIcon from '@material-ui/icons/Lock';
import PaymentIcon from '@material-ui/icons/Payment';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../../../components/Layout'
import AppLayout from '../../../components/Layout/App_Layout';
import Navegacao from '../../../components/Pages/Navegacao/Perfil'
import avatar from '../../../../public/Avatar/pessoa.jpg'

import Perfil_Info from '../../../components/Pages/Tabelas/Perfil/Abas/Geral'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

function Perfil(){
  const [value, setValue] = React.useState(0); 

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Pagina>
      <Body>
        <div className= {"navegacao"}>
          <h1>Seu Perfil</h1>
          <Navegacao/>
        </div>
        <div className= "container">
          <div className="coluna">
            <div className="boxContainer">
              <Grid component={Paper} elevation={6} className= {"box"}>
                <div className= {"box_interno"}>
                  <p className= "titulo">Perfil</p>
                  <div className= {"avatar_box"}>
                    <Image
                      src={avatar}
                      alt="My Image"
                      width={150}
                      height={150}
                      className= {"avatar"}
                    />
                  </div>
                  <p className= "nome">"Admin</p>
                  <p className= "permissao">ADM</p>
                  <Button>Editar</Button>
                </div>
              </Grid>
            </div>
            <div className="boxContainer">
              <Grid component={Paper} elevation={6} className= {"box"}>
                <div className= {"box_interno_informacoes"}>
                  <p className= "titulo">Informações</p>
                  <p className= "info"><Person className= "icon"/>Admin</p>
                  <p className= "info"><LocationOn className= "icon"/>Rio Paraniba</p>
                  <p className= "info"><WorkOutline className= "icon"/>
                    Administrador
                    {/*usuario?.image!['role']*/}
                  </p>
                  <p className= "info"><Event className= "icon"/>xx/xx</p>
                </div>
              </Grid>
            </div>
          </div>
          <div className="coluna_2">
            <div className="boxContainer_tabela">
              <Grid component={Paper} elevation={6} className= {"box"}>
                <div className= {"box_interno"}>
                  <div className={"root"}>
                    <AppBar position="static" color="default">
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                      >
                        <Tab label="Geral" icon={<Person />} {...a11yProps(0)} />
                        <Tab label="Segurança" icon={<LockIcon />} {...a11yProps(1)} />
                        <Tab label="Plano" icon={<PaymentIcon />} {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}> 
                      <Perfil_Info/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Perfil_Info/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <Perfil_Info/>
                    </TabPanel>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </Body>
    </Pagina>
  )
}

Perfil.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AppLayout>
        {page}
      </AppLayout>
    </Layout>
  )
}

export default Perfil