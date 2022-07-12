import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import AddIcon from '@material-ui/icons/Add'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import TModal from '../../../../../Modal/Fazendas'

import { useRouter } from 'next/router'

import { 
  Botoes,
  Pagina1,
  Selecionados
} from '../../../../../../../styles/components/Tabelas/Fazendas/Talhoes/Safras/Insumos';

interface SelecaoProps {
    numSelected1: number;
  }

interface EnhancedTableToolbarProps {
    numSelected: number;
  }

function Botoes_de_Acao(){
  const router = useRouter()
  return(
    <Botoes>
          <Tooltip title="Novo Item" className={"botoes"}>
            <IconButton aria-label="novo item">
              <TModal/>
            </IconButton>
          </Tooltip>
    </Botoes>

  )
}

function Selecao(){
  return(
    <Selecionados>
      <div className= {"Edit_buttons"}>
        <Tooltip title="Deletar">
          <IconButton aria-label="delete">
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
  )
}

function NSelecao(){
  return(
    <Selecionados>
      <div className= {"Espacamento"}>
      </div>
    </Selecionados>
  )
}
  
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {{
  const { numSelected } = props;
    return (
      <Toolbar>  
        <Pagina1>
        <div className={"Itens"}>
          <Typography className={"titlep"} variant="h6" id="tableTitle" component="div">
            Todos as Colheitas
          </Typography>
        </div>
        <div className={"Itens1"}>
          {numSelected > 0 ? (
            <Selecao/>
          ) : (
            <NSelecao/>
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