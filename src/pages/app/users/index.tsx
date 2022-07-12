import React, { ReactElement } from "react";
import {
  Body,
  Pagina,
} from '../../../styles/pages/Users'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import {useSession } from "next-auth/client"

import Layout from '../../../components/Layout'
import AppLayout from '../../../components/Layout/App_Layout';
import Tabela from '../../../components/Pages/Tabelas/Users'
import Navegacao from '../../../components/Pages/Navegacao/Users'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllIcon from '@material-ui/icons/AllInbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

function Users() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Pagina>
        <Body>
          <div className= {"navegacao"}>
            <h1>Lista de Usuarios</h1>
            <Navegacao/>
          </div>
          <Grid component={Paper} elevation={6} className= {"conteudo"}>
            <div className="conteudo_interno">
              <div className={"root"}>
                <h1>Usuarios</h1>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                  >
                    <Tab label="ALL" icon={<AllIcon />} {...a11yProps(0)} />
                    <Tab label="Associados" icon={<FavoriteIcon />} {...a11yProps(1)} />
                    <Tab label="ADM" icon={<PersonPinIcon />} {...a11yProps(2)} />
                    <Tab label="Pendetes" icon={<HelpIcon />} {...a11yProps(3)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}> 
                  <Tabela/> 
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Four
                </TabPanel>
              </div>
            </div>
          </Grid>
         </Body>
    </Pagina>
  );
}

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AppLayout>
        {page}
      </AppLayout>
    </Layout>
  )
}

export default Users