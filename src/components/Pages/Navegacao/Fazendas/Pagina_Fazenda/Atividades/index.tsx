import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import { 
  Home,
  Eco
} from '@material-ui/icons';

import { useRouter } from 'next/router'

import {
    Conteudo
  } from '../../../../../../styles/components/Navegacao'

export default function Navegacao() {
  const router = useRouter()

  return (
    <Conteudo>
    <Breadcrumbs aria-label="Fazendas">
      <IconButton aria-label="novo item" onClick={() => router.push('/app/home')}>
        <Home className={"icon"} />
      </IconButton>
      <Link
        color="inherit"
        onClick={() => router.push('/app/fazendas')}
        className={"link"}
      >
        <Eco className={"icon"} />
        Fazendas
      </Link>
      <Link
        color="inherit"
        onClick={() => router.push('/app/fazendas/pagina_fazenda')}
        className={"link"}
      >
        Pagina Fazenda
      </Link>
      <Typography color="textPrimary" className={"link"}>
        Atividades
      </Typography>
    </Breadcrumbs>
    </Conteudo>
  );
}