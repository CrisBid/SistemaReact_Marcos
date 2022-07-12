import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

interface EnhancedTableToolbarProps {
    numSelected: number;
  }
  
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;
  
    return (
      <>
      </>
    );
  };
export default EnhancedTableToolbar