import React from "react";

import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputBase, List, ListItem, ListItemText, Menu, MenuItem, OutlinedInput, Pagination, Popover, Radio, RadioGroup, Select} from "@mui/material";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = {
    Inbox : {
        All : 32,
        Related_Purchases : 12,
        Related_sale : 10,
        My_acc : 10
    },
    Sent : 12,
    Trash : 22,
    Folders : {
        Work : 5
    }
}


function AlertDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen} sx={{ pt:1 }} >Delete</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{textAlign: "center"}}>
            Delete Confirmation
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{textAlign: "center"}}>
              Are you sure you want to delete Example?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{margin : "auto"}}>Cancel</Button>
            <Button onClick={handleClose} style={{margin : "auto"}} variant="contained" autoFocus> Delete </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


function createData(id, From, Subject, OrderID, Date) {
  return {
    id, From, Subject, OrderID, Date
  };
}

const rows = [
  createData(1,'Cupcake', 305, 3.7, 67),
  createData(2,'Donut', 452, 25.0, 51),
  createData(3,'Eclair', 262, 16.0, 24),
  createData(4,'Frozen yoghurt', 159, 6.0, 24),
  createData(5,'Gingerbread', 356, 16.0, 49),
  createData(6,'Honeycomb', 408, 3.2, 87),
  createData(7,'Ice cream sandwich', 237, 9.0, 37),
  createData(8,'Jelly Bean', 375, 0.0, 94),
  createData(9,'KitKat', 518, 26.0, 65),
  createData(10,'Lollipop', 392, 0.2, 98),
  createData(11,'Marshmallow', 318, 0, 81),
  createData(12,'Nougat', 360, 19.0, 9),
  createData(13,'Oreo', 437, 18.0, 63),
];

function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <div>
            <Button
            variant="outlined"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{pt : 1}}
            >
            Move To
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem onClick={handleClose}>Trash</MenuItem>
            <MenuItem onClick={handleClose}>Example1</MenuItem>
            <MenuItem onClick={handleClose}>Example2</MenuItem>
            </Menu>
        </div>
    );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'From',
    numeric: false,
    disablePadding: true,
    label: 'From',
    width: "15%"
  },
  {
    id: 'Subject',
    numeric: true,
    disablePadding: false,
    label: 'Subject',
    width: "55%"
  },
  {
    id: 'OrderID',
    numeric: true,
    disablePadding: false,
    label: 'OrderID',
    width: "15%"
  },
  {
    id: 'Date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
    width: "10%"
  },
];

function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
          {/* <IconButton aria-label="searchicon" color="default" sx={{border : "1px solid grey", borderRadius : "5px"}}>
                        <SearchIcon />
                    </IconButton> */}
            <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                <SearchIcon />
            </Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin= {{
                vertical: "top",
                horizontal: "right"
            }}
            >
            <Box sx={{pl:1,pr:1, mt : 2}}>
                <Typography variant="p" component="p">Sender Name</Typography>
                <InputBase sx={{border: "1px solid #CBCBCB", borderRadius: "5px", mt: 1, width : "100%"}} />
            </Box>
            <Box sx={{pl:1, pr:1}}>
                <Typography variant="p" component="p">Subject Title</Typography>
                <InputBase sx={{border: "1px solid #CBCBCB", borderRadius: "5px", mt: 1, width : "100%"}} />
            </Box>
            <Box sx={{pl:1, pr:1}}>
                <Typography variant="p" component="p">Order ID</Typography>
                <InputBase sx={{border: "1px solid #CBCBCB", borderRadius: "5px", mt: 1, width : "100%"}} />
            </Box>
            <Grid container >
                    <Grid item xs={6}>
                        <Box sx={{pl:1,pr : 1, mt : 1}}>
                            <Typography variant="p" component="p">Start Date</Typography>
                            <input className="form-control" type="date" />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                    <Box sx={{pl:1,pr:1, mt : 1}}>
                            <Typography variant="p" component="p">End Date</Typography>
                            <input className="form-control" type="date" />
                        </Box>
                    </Grid>
            </Grid>
            <Box sx={{pl:1, pr: 1}}>
                <Typography variant="p" component="p">Include</Typography>
                <select className="form-control" style={{border: "1px solid #CBCBCB", borderRadius: "5px", mt: 1, width : "100%"}} >
                    <option>Example</option>
                </select>
            </Box>
            <Grid container >
                <Grid item xs={6}>
                    <Box sx={{pl:1,pr : 1, mt : 1}}>
                        <Button variant="contained" sx={{width : "100%"}}>Search</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{pl:1,pr : 1, mt : 1}}>
                        <Button variant="outlined" sx={{width : "100%"}}>Cancel</Button>
                    </Box>
                </Grid>
            </Grid>
            <br />
        </Popover>
      </div>
    );
}

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, read_type, read_type_handleChange } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" >
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                        'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                <TableCell aria-colspan={3} colSpan={3} sx={{display : "flex"}}>
                    <Box sx={{ minWidth: 120, maxWidth : 180, mr: 2 }}>
                        <FormControl fullWidth size="small">
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={read_type} label="read_type" onChange={read_type_handleChange}  >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Unread">Unread</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, maxWidth : 180, mr: 2 }}>
                        <FormControl fullWidth size="small">
                            <AlertDialog />
                            {/* <Button variant="outlined" color="secondary" sx={{ pt:1 }} >Delete</Button> */}
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, maxWidth : 180, mr: 2 }}>
                        <BasicMenu />
                    </Box>
                </TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
                <TableCell sx={{position: "relative"}}>
                    {/* <IconButton aria-label="searchicon" color="default" sx={{border : "1px solid grey", borderRadius : "5px"}}>
                        <SearchIcon />
                    </IconButton> */}
                    <BasicPopover />
                </TableCell>
            </TableRow>
            <TableRow sx={{backgroundColor: "#F8F8F8"}}>
                <TableCell padding="checkbox" sx={{width: "5%"}}>
                </TableCell>
                {headCells.map((headCell) => (
                <TableCell
                    key={headCell.id}
                    align={'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    sx={{width: headCell.width}}
                >
                    <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                    IconComponent={()=> null}
                    >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                        <Box component="span" >
                        {order === 'desc' ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                        </Box>
                    ) : null}
                    </TableSortLabel>
                </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            justifyContent:"center",
            display:'flex'
        },
    },
    pagination: {
        alignItems: 'center',
        justify: 'center',
    }
}));

const TPagination = ({count, page, onPageChange}) => {
    const classes = useStyles();
    const totalPages = Math.ceil(count / 5);
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6" component="h6" sx={{mt: 2, mb :2, pl: 2}}>Page {page+1} of {totalPages}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.root}>
                        <Pagination className={classes.pagination} count={totalPages} page={page+1} onChange={onPageChange} style={{}} />
                    </div>                
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </Box>
    )
}

function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [read_type, setRead_type] = React.useState("All");

    const read_type_handleChange = (event) => {
        setRead_type(event.target.value);
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.id);
        setSelected(newSelecteds);
        return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage-1);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%'}}>
            <Paper sx={{ width: '100%', mb: 2, border: "1px solid #CBCBCB" }}>
                <TableContainer >
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                >
                    <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                    read_type= {read_type}
                    read_type_handleChange = {read_type_handleChange}
                    />
                    <TableBody>
                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                        rows.slice().sort(getComparator(order, orderBy)) */}
                    {stableSort(rows, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                            >
                            <TableCell padding="checkbox">
                                <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                    'aria-labelledby': labelId,
                                }}
                                />
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row" padding="none" > {row.From} </TableCell>
                            <TableCell >{row.Subject}</TableCell>
                            <TableCell >{row.OrderID}</TableCell>
                            <TableCell >{row.Date}</TableCell>
                            </TableRow>
                        );
                        })}
                    {emptyRows > 0 && (
                        <TableRow
                        style={{
                            height: (dense ? 33 : 53) * emptyRows,
                        }}
                        >
                        <TableCell colSpan={5} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </TableContainer>
                <TPagination count={rows.length} page={page} onPageChange={handleChangePage} />
            </Paper>
        </Box>
    );
}

function Main(){
    const [radio_value, setRadio_value] = React.useState('Inbox');
    const [folderName, setFolderName] = React.useState('')
    const handleChange = (event) => {
        setRadio_value(event.target.value);
    };
    const createFolderName = (event) => {
        setFolderName(event.target.value);
    }
    const radio_sx ={border: "1px solid #CBCBCB", borderRadius: "5px", width: "100%"}

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Breadcrumbs aria-label="breadcrumbs" sx={{mt: 4, mb: 2}}>
                    <Link underline="hover" className="my-nicho-shop-font Blue_Main" href="/mynichoshop">
                    My NichoShop
                    </Link>
                    <Typography className="my-nicho-shop-font" >Messages</Typography>
                </Breadcrumbs>
                <Typography variant="h4" component="h4" sx={{mt: 4, mb: 4}} >Messages</Typography>
                <Box>
                    <Grid container spacing={2} >
                        <Grid item xs={3}>
                        <FormControl sx={{width: "100%"}}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                value={radio_value}
                                onChange={handleChange}
                            >
                                {radio_value == "Inbox" ? 
                                    <Box sx={radio_sx}> 
                                        <Box sx={{ pl: 2}}>
                                            <FormControlLabel value="Inbox" control={<Radio color="success" />} label="Inbox" />
                                        </Box>
                                        <Box>
                                            <List sx={{pl: 2, pr: 2}}>
                                                <ListItem sx={{p: 0}} secondaryAction={<Typography edge="end"> {data.Inbox.All} </Typography>} >
                                                    <ChevronRightIcon />
                                                    <ListItemText primary="All Messages" />
                                                </ListItem>
                                                <ListItem sx={{p: 0}} secondaryAction={<Typography edge="end"> {data.Inbox.Related_Purchases} </Typography>} >
                                                    <ChevronRightIcon />
                                                    <ListItemText primary="Related my purchases" />
                                                </ListItem>
                                                <ListItem sx={{p: 0}} secondaryAction={<Typography edge="end"> {data.Inbox.Related_sale} </Typography>} >
                                                    <ChevronRightIcon />
                                                    <ListItemText primary="Related my sales" />
                                                </ListItem>
                                                <ListItem sx={{p: 0}} secondaryAction={<Typography edge="end"> {data.Inbox.My_acc} </Typography>} >
                                                    <ChevronRightIcon />
                                                    <ListItemText primary="My account" />
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Box> :
                                    <Box sx={{width : "100%"}}> 
                                        <Box sx={{ pl: 2}}>
                                            <FormControlLabel value="Inbox" control={<Radio color="success" />} label="Inbox" />
                                        </Box>
                                    </Box>
                                }
                                <Box sx={{width: "100%"}}>
                                    <Box sx={{ pl: 2}}>
                                        <FormControlLabel value="Sent" control={<Radio color="success" />} label="Sent" />
                                    </Box>
                                    <Box sx={{ pl: 2}}>
                                        <FormControlLabel value="Trash" control={<Radio color="success" />} label="Trash" />
                                    </Box>
                                </Box>
                                {radio_value == "Folders" ?
                                    
                                    <Box sx={radio_sx}>
                                        <Box sx={{ pl: 2}}>
                                            <FormControlLabel value="Folders" control={<Radio color="success" />} label="Folders" />
                                        </Box>
                                        {/* data.Folders.message.length  */}
                                        {true ? 
                                            <Box>
                                                <List sx={{pl: 2, pr: 2}}>
                                                    <ListItem sx={{p: 0}} secondaryAction={<Box sx={{display : "flex"}}><Typography edge="end"> 1999 </Typography><MoreVertIcon /></Box>} >
                                                        <ChevronRightIcon />
                                                        <ListItemText primary="All Messages" />
                                                    </ListItem>
                                                </List>
                                                <List sx={{pl: 2, pr: 2}}>
                                                    <ListItem sx={{p: 0}} >
                                                        <ListItemText primary={<Link>Add Folder</Link>} />
                                                    </ListItem>
                                                </List>
                                                
                                            </Box>:
                                            <Box>
                                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                                    <OutlinedInput
                                                        id="outlined-adornment-weight"
                                                        value={folderName}
                                                        onChange={createFolderName}
                                                        aria-describedby="outlined-weight-helper-text"
                                                        placeholder="Example"
                                                    />
                                                </FormControl>
                                                <Typography sx={{textAlign: "center"}}>
                                                    <Link >Save</Link> or <Link>Cancel</Link>
                                                </Typography>
                                            </Box>
                                        }
                                        
                                    </Box>:
                                    <Box sx={{width: "100%"}}>
                                        <Box sx={{ pl: 2}}>
                                            <FormControlLabel value="Folders" control={<Radio color="success" />} label="Folders" />
                                        </Box>
                                    </Box>
                                }
                            </RadioGroup>
                        </FormControl>
                        </Grid>
                        <Grid item xs={9}>
                            <EnhancedTable />    
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Main;