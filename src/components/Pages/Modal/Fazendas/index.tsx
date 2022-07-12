import React, {useEffect} from 'react'
import {Pagina} from '../../../../styles/components/Modal'

import Modal from '@material-ui/core/Modal'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

import {useSession } from "next-auth/client"

export default function SimpleModal() {
  
  const newFarms = async () => {
    const article = { 
      name: name,
      owner: owner,
      county: county,
      diesel_price: diesel_price, 
    };
    setOpen(false);
  };
  const [article, setArticleId] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = React.useState<string>();
  const [owner, setOwner] = React.useState<string>();
  const [county, setCounty] = React.useState<string>();
  const [diesel_price, setDiesel_price] = React.useState<string>();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(event.target.value);
  };
  const handleChangeCounty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCounty(event.target.value);
  };
  const handleChangeDiesel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiesel_price(event.target.value);
  };

  const body = (
      <Pagina>
        <div className={'paper'}>
            <div className = {"conteudo_interno"}>
              <div className = {'cabecario'}>
              <h1>Cadastro de Nova Fazenda</h1>
                  <div className = {'close'}>
                    <IconButton onClick={handleClose} className = {'close'}>
                        <CloseIcon />
                    </IconButton>
                  </div>
                </div>
                <form className={"root"} noValidate autoComplete="off">
                <FormControl className={"input"}>
                    <InputLabel htmlFor="component-1">Nome</InputLabel>
                    <Input id="component-1" value={name} onChange={handleChangeName} />
                </FormControl>
                <FormControl className={"input"}> 
                    <InputLabel htmlFor="component-2">Proprietario</InputLabel>
                    <Input id="component-2" value={owner} onChange={handleChangeOwner} />
                </FormControl>
                <FormControl className={"input"}>
                    <InputLabel htmlFor="component-3">Municipio</InputLabel>
                    <Input id="component-3" value={county} onChange={handleChangeCounty} />
                </FormControl>
                <FormControl className={"input"}>
                    <InputLabel htmlFor="component-4">Preço do Diesel</InputLabel>
                    <Input id="component-4" type="number" value={diesel_price} onChange={handleChangeDiesel} />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={"button"}
                    startIcon={<SaveIcon />}
                    onClick={newFarms}
                    >
                    Cadastrar
                </Button>
                </form>
            </div>
        </div>
    </Pagina>
  );

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddIcon/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
