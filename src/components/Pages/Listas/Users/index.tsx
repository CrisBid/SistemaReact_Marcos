import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Pagina } from '../../../../styles/components/Lista/Users';

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);
  var value1 = "Em análise";
  var value2 = "Usuario";
  var value3 = "Administrador";

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
      <List dense className={"root"}>
      {[5, 6, 7, 8].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        const FazendasId = `checkbox-list-secondary-label-${value1}`;
        const PermissaoId = `checkbox-list-secondary-label-${value2}`;
        return (
          <ListItem key={value} button className={"secao"}>
            <ListItemAvatar className={"avatar"}>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`Valido: 10/0${value + 1}`} />
            <ListItemText id={FazendasId} primary={`Status de Associação: ${value1}`} />
            <ListItemText id={PermissaoId} primary={`Nivel de Permissão: ${value2}`} />
            <ListItemSecondaryAction>
              <Button className={"button"}>
                Remover
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </Pagina>
    </>
  );
}