import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow'

export interface Data {
    Avatar: string;
    Vencimento: string,
    municipio: string,
    administrador: string,
    name: string;
    permissao: string;
    funcao: string;
  }

type Order = 'asc' | 'desc';

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
  }

const headCells: HeadCell[] = [
    { id: 'Avatar', numeric: false, disablePadding: false, label: 'Avatar' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Nome' },
    { id: 'Vencimento', numeric: false, disablePadding: false, label: 'Vencimento' },
    { id: 'municipio', numeric: false, disablePadding: false, label: 'Município' },
    { id: 'administrador', numeric: false, disablePadding: false, label: 'Status de Associação' },
    { id: 'permissao', numeric: false, disablePadding: false, label: 'Permissão do Usuario' },
    { id: 'funcao', numeric: false, disablePadding: false, label: '' },
  ];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  
  export function EnhancedTableHead(props: EnhancedTableProps) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={"visuallyHidden"}>
                    {order === 'desc' ? '' : ''}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }