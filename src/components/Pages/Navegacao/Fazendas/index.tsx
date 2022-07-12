import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'

import { useRouter } from 'next/router'

import {
    Conteudo
  } from '../../../../styles/components/Navegacao'

export default function Navegacao() {
  const router = useRouter()

  return (
    <Conteudo>
    <Breadcrumbs aria-label="Users">
      <IconButton aria-label="novo item" onClick={() => router.push('/app/home')}>
        <HomeIcon className={"icon"} />
      </IconButton>
      <Typography color="textPrimary" className={"link"}>
        Fazendas
      </Typography>
    </Breadcrumbs>
    </Conteudo>
  );
}