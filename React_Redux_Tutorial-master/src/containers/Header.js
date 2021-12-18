import React from "react";
import { AppBar, Typography } from '@material-ui/core';
//import AddLocationIcon from '@mui/icons-material/AddLocation';
//import SvgIconsColor from "./button";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <AppBar position="relative" color="secondary">
          
          <Typography variant="h5" color="primary">
            FakeShop
            <Link to="/product/:productId"><Typography align="right"><AddShoppingCartIcon/></Typography></Link>
           </Typography>
           
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
