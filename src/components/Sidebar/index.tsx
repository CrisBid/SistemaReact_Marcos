import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { 
  Home , 
  Eco,
  ExitToApp,
  People
} from '@material-ui/icons';

import {
  Container,
  MenuItem,
  MenuTitle,
  MenuUser
} from '../../styles/components/Sidebar'
import { useRouter } from 'next/router'

import ActiveLink from './ActiveLink'

function Sidebar() {
  const router = useRouter()
  return (
    <Container>
      <MenuTitle>
        <h1>Menu</h1>
      </MenuTitle>
      <MenuItem>
        <ActiveLink activeClassName="active" href="/app/home">
          <a className="nav-link">
            <Home className="react_icon"/>
            <p>Início</p>
          </a>
        </ActiveLink>
      </MenuItem>
      <MenuItem>
        <ActiveLink activeClassName="active" href="/app/fazendas">      
          <a className="nav-link">
            <Eco className="react_icon"/>
            <p>Fazendas</p>
          </a>
        </ActiveLink>
      </MenuItem>
      <MenuItem>
        <ActiveLink activeClassName="active" href="/app/users">      
          <a className="nav-link">
            <People className="react_icon"/>
            <p>Usuários</p>
          </a>
        </ActiveLink>
      </MenuItem>
      <MenuUser>
            <>
            <Button 
              onClick={() => router.push('/app/perfil')}
              className="button_user"
              >
              <div className="profile-details">
                <Avatar
                  alt={`Avatar n°${ 1}`}
                  src={`/static/images/avatar/${ 1}.jpg`}
                  className="avatar"
                />
                <div className="name_job">
                  <div className="name"><p>Admin</p></div>
                  <div className="job"><p>admin@ej.inf</p></div>
                </div>
              </div>
            </Button>
            <Button 
              onClick={() => router.push('/')}
              className="exit">
              <ExitToApp className="exit_icon"/>
            </Button>
          </>
     </MenuUser>
    </Container>
  );
}


export default Sidebar
