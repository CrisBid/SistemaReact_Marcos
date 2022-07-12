import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { 
  Pagina, 
  Cabecario, 
  Borda, 
  Borda_Fina
} from '../../../../styles/components/Lista/Fazendas';

export default function Lista() {
  const [checked, setChecked] = React.useState([1]);
  var value1 = "Fazenda Geraleite";
  var value2 = "Jose";
  var value3 = "São Gotardo";
  var value4 = "Administrador";

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

  return (
    <>
    <Pagina>
      <Cabecario>
        <Checkbox/>
        <Button>Nome</Button>
        <Button>Proprietário</Button>
        <Button>Município</Button>
        <Button>Administrador</Button>
      </Cabecario>
      <Borda/>
      <List dense className={"root"}>
      {[5, 6].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <>
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} className={"secao"}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                className={"checkbox"}
              />
            </ListItemIcon>
            <ListItemText primary={`${value1}`} className={"primeiro"}/>
            <ListItemText primary={`${value2}`} className={"segundo"}/>
            <ListItemText primary={`${value3}`} className={"terceiro"}/>
            <ListItemText primary={`${value4}`} className={"quarto"}/>
          </ListItem>
          <Borda_Fina/>
          </>
          );
      })}
    </List>
    </Pagina>
    </>
  );
}