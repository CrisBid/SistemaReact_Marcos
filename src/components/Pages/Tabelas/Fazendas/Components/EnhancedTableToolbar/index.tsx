import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import {useSession } from "next-auth/client"
import api from "../../../../../../api/axios";

import { 
  Botoes,
  Pagina1,
  Selecionados
} from '../../../../../../styles/components/Tabelas/Fazendas'
import TModal from '../../../../Modal/Fazendas'
import { Button, Icon } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay';

interface EnhancedTableToolbarProps {
    numSelected: string[];
  }

function Botoes_de_Acao(){
  return(
    <Botoes>
      <Tooltip title="Reaload" className={"botoes"}>
        <IconButton aria-label="Reload" onClick={(Reload)}>
          <ReplayIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Novo Item" className={"botoes"}>
        <IconButton aria-label="novo item">
          <TModal/>
        </IconButton>
      </Tooltip>
    </Botoes>

  )
}

function Reload() {
  location.reload();
};

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;
  const [session] = useSession()
  const token = session?.accessToken
  async function DeleteEnhancedTableToolbar() {
    const id = numSelected[0]
    await api.delete(`api/farms/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    console.log(id)
  }
  {
  const { numSelected } = props;
    return (
      <Toolbar>  
        <Pagina1>
        <div className={"Itens"}>
          <Typography className={"titlep"} variant="h6" id="tableTitle" component="div">
            Todas as Fazendas
          </Typography>
        </div>
        <div className={"Itens1"}>
          {numSelected.length != 0 ? (
            <Selecionados>
              <div className= {"Edit_buttons"}>
                <Tooltip title="Deletar">
                  <IconButton aria-label="delete" onClick={DeleteEnhancedTableToolbar}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Duplicar">
                  <IconButton aria-label="copy">
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </Selecionados>
          ) : (
            <Selecionados>
              <div className= {"Espacamento"}>
              </div>
            </Selecionados>
          )}
        </div>
        <div className={"Itens2"}>
          <Tooltip title="Funçoes">
            <Botoes_de_Acao/>
          </Tooltip>
        </div>
        </Pagina1>
      </Toolbar>
    );
  };
}
export default EnhancedTableToolbar