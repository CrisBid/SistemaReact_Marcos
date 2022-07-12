import React, { useEffect, useState, useCallback }from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CreateIcon from '@material-ui/icons/Create'

import {Pagina} from '../../../../styles/components/Modal'

import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import SaveIcon from '@material-ui/icons/Save'

import { useRouter } from 'next/router'
import Link from 'next/link'

import {EnhancedTableHead, Data } from './Components/EnhancedTableHead'
import EnhancedTableToolbar from './Components/EnhancedTableToolbar'

export default function Tabela(){

  function createData(
    id: number,
    proprietario: string,
    municipio: string,
    administrador: string,
    name: string,
    funcao: string,

  ): Data {
    return { id, proprietario, municipio, administrador, name, funcao};
  }


  const farms = [
    createData(1,'Geraleite', 'Admin', 'São Gotardo','Admin', 'a'),
  ];
  
  interface Data {
    id: number,
    proprietario: string,
    municipio: string,
    administrador: string,
    name: string;
    funcao: string;
  }
  
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  type Order = 'asc' | 'desc';
  
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [filterFn, setFilterFn] = React.useState<any>({ fn: (rows:any) => { return rows; } })
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const router = useRouter()
    const { id } = router.query
    
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
                      <Input id="component-1" value={"Geraleite"} onChange={handleChangeName} />
                  </FormControl>
                  <FormControl className={"input"}> 
                      <InputLabel htmlFor="component-2">Proprietario</InputLabel>
                      <Input id="component-2" value={"Jose"} onChange={handleChangeOwner} />
                  </FormControl>
                  <FormControl className={"input"}>
                      <InputLabel htmlFor="component-3">Municipio</InputLabel>
                      <Input id="component-3" value={"São Gotardo"} onChange={handleChangeCounty} />
                  </FormControl>
                  <FormControl className={"input"}>
                      <InputLabel htmlFor="component-4">Preço do Diesel</InputLabel>
                      <Input id="component-4" type="number" value={3.14} onChange={handleChangeDiesel} />
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

    if (farms) {
  
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const newSelecteds = farms?.map((n:any) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: string[] = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      setSelected(newSelected);
    };
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (id: string) => selected.indexOf(id) !== -1;
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, farms?.length - page * rowsPerPage);
  
    return (
      <div className={"root"}>
          <EnhancedTableToolbar numSelected={selected} />
          <TableContainer>
            <Table
              className={"table"}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={farms?.length}
              />
              <TableBody>
                {stableSort(farms, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row:any, index) => {
                    const isItemSelected = isSelected(row?.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row?.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row?.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          Geraleite
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row"  align = "left" >Adnin</TableCell>
                        <TableCell component="th" id={labelId} scope="row" >São Gotardo</TableCell>
                        <TableCell component="th" id={labelId} scope="row" >Admin</TableCell>
                        <TableCell component="th" id={labelId} scope="row" align = "right"><Tooltip title="Editar"><Button onClick={handleOpen}><CreateIcon/></Button></Tooltip><Tooltip title="Acessar Página"><Button><Link href="/app/fazendas/pagina_fazenda/[id]" as={`/app/fazendas/pagina_fazenda/${1}`}><ArrowForwardIosIcon/></Link></Button></Tooltip></TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={farms?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
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
  else{ 
    return (
      <div className={"root"}>
          <EnhancedTableToolbar numSelected={selected} />
          <TableContainer>
            <Table
              className={"table"}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <TableBody>
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    );
  }
  }
  return EnhancedTable();
}