import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { color } from '@material-ui/system';

function not(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: number[], b: number[]) {
  return [...a, ...not(b, a)];
}

export default function ListaRelatorios() {
  const [checked, setChecked] = React.useState<number[]>([]);
  const [left, setLeft] = React.useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
  const [right, setRight] = React.useState<number[]>([7, 8, 9, 10, 11, 12, 13]);
  const [age, setAge] = React.useState('');

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: number[]) => intersection(checked, items).length;

  const handleToggleAll = (items: number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: number[]) => (
    <Card>
      <CardHeader
        className={"cardHeader"}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={"list"} dense component="div" role="list">
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <>
      <Grid
      container
      marginY="4vh"
      width="80%"
      alignItems="center"
      justifyContent="center"
      className={"root"}
      flexDirection="column"
      >
        <div className='Titulo'>
            <h2>
              Relatorios
            </h2>
        </div>
        <Grid
          container
          marginX="8vw"
          marginY="4vh"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Grid
           alignItems="center"
           justifyContent="center"
           marginRight="2vw"
          >
            <div>
              <h3>
                Dados
              </h3>
            </div>
          </Grid>
          <Grid
           marginLeft="2vw"
          >
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Item 1</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Talhão 1</MenuItem>
                <MenuItem value={20}>Talhão 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
          >
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Item 2</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Talhão 1</MenuItem>
                <MenuItem value={20}>Talhão 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
           alignItems="center"
           justifyContent="center"
           marginRight="2vw"
          >
            <div>
              <h3>
                Diferenca
              </h3>
            </div>
          </Grid>
        </Grid>

        <Grid
        container
        display="flex"
        marginX="8vw"
        marginY="4vh"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        className={"root"}
        flexDirection="row"
        >
          <Grid 
            display="flex"
            height="100%"
            flexDirection="column"
          >
            <Grid marginY="2vh">
              <p>Nome</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Area</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Line</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Produção</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Variação</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Tipo de Poda</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Mes</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Ano</p>
            </Grid>
          </Grid>
          <div>
            <Grid item>{customList('Item 1', left)}</Grid>
          </div>
          <div>
            <Grid item>{customList('Item 2', right)}</Grid>
          </div>
          <Grid 
            display="flex"
            height="100%"
            flexDirection="column"
            line-height="1.5"
          >
            <Grid marginY="2vh">
              <p>******</p>
            </Grid>
            <Grid marginY="2vh">
              <p>+10</p>
            </Grid>
            <Grid marginY="2vh">
              <p>+20</p>
            </Grid>
            <Grid marginY="2vh">
              <p>-5</p>
            </Grid>
            <Grid marginY="2vh">
              <p>+10</p>
            </Grid>
            <Grid marginY="2vh">
              <p>Padão</p>
            </Grid>
            <Grid marginY="2vh">
              <p>10</p>
            </Grid>
            <Grid marginY="2vh">
              <p>2010</p>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}
