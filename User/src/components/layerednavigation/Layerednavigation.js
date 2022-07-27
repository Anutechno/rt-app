import React ,{useState} from "react";
import "./Layerednavigation.css";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';
import TreeItem from '@material-ui/lab/TreeItem';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 5,
    },
    appbar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
}));
   
export default function Trees() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    function handleDrawer() {
        setOpen(!open);
    }
    const checkList1        = ["Value 1 (1)", "Value 1 (10)", "Value 1 (100)", "Value 1 (1000)","Value 1 (10,000)","Value 1 (100,000)"];
    const conditionList     = ["New (1)", "New other (see details) (10)", "Manufacturer refurbished (100)", "Seller refurbished (1000)","Used (10,000)","For parts or not working (100,000)"];
    const deliveryOptions   = ["Free postage"];
    
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };

    return (
        <div className={classes.root}>
            <h5>Categories</h5>
          <TreeView>           
            <TreeItem nodeId="2" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Portable Audio & HeadphonesData Structures" />
                </ListItem>}>
                <TreeItem nodeId="51" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Headphones" />
                    </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="52" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Portable Audio Accessories" />
                    </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="53" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Replacement Parts & Tools" />
                    </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="54" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Headphone Parts & Accessories" />
                    </ListItem>}>
                </TreeItem>
            </TreeItem>
            <TreeItem nodeId="3" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Cell Phones & Accessories" />
                </ListItem>}>
                <TreeItem nodeId="55" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Computers, Tablets & Networking" />
                    </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="56" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Clothing. Shoes & Accessories" />
                    </ListItem>}>
                </TreeItem>
            </TreeItem>
            <TreeItem nodeId="4" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Musical Instruments & Gear" />
                </ListItem>}>
                <TreeItem nodeId="57" label={
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Everything Else" />
                    </ListItem>}>
                </TreeItem>               
            </TreeItem>
            <TreeItem nodeId="5" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Home & Garden" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="6" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Music" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="7" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Sporting Goods" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="8" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Art" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="9" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Video Games & Consoles" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="10" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Collectibles" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="11" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Cameras & Photo" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="12" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Toys & Hobbies" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="13" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Business & Industrial" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="14" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Entertainment Memorabilia" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="15" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Specialty Services" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="16" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Pet Supplies" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="17" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Coins & Paper Money" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="18" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Jewelry & Watches" />
                </ListItem>}>
            </TreeItem>
            <TreeItem nodeId="19" label={
                <ListItem button component="a" href="#">
                    <ListItemText primary="Sports Mem, Cards & Fan Shop" />
                </ListItem>}>
            </TreeItem>
          </TreeView>
          <span><a href="">See fewer categories</a></span>
          <div className="title">Refine By</div>
            <div className="checkList1">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList1">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList2">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList3">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList4">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList5">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList6">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList7">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="checkList8">
                <h5>Item details 1</h5>
                <div className="list-container">
                    {checkList1.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>        
            <div class="filter-content collapse show" id="collapse_3">
              <h6 class="title">Price (in USD) </h6>
                <div class="card-body">                    
                    <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>$</label>
                      <input class="form-control" type="number" />
                    </div>
                    <div class="form-group text-right col-md-6">
                      <label>$</label>
                      <input class="form-control" type="number" />
                    </div>
                    </div> 
                    <button class="btn btn-block btn-primary">Go</button>
                </div>
            </div>
            <div className="condition_checklist">
                <h5>Condition</h5>
                <div className="list-container">
                    {conditionList.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="condition_checklist">
                <h5>Delivery options</h5>
                <div className="list-container">
                    {deliveryOptions.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
