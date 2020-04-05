import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Router from './components/Router';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  links: {
    marginLeft: theme.spacing(8),
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2)
  },
  root: {
    flexGrow: 1,
  },
}));

export default withRouter((props: RouteComponentProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleNavigationMenuClick = (menu: string) => (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.history.push(`/menu#${menu}`);
  };
  
  const handleAccountMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (url: string) => {
    props.history.push(`/${url}`);
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Queen & Slim Bar and Grille
          </Typography>
          <Typography className={classes.links}>
            <Link onClick={handleNavigationMenuClick('appetizers')} color="inherit">
              Appetizers
            </Link>
            <Link onClick={handleNavigationMenuClick('brunch')} color="inherit">
              Brunch
            </Link>
            <Link onClick={handleNavigationMenuClick('desserts')} color="inherit">
              Desserts
            </Link>
            <Link onClick={handleNavigationMenuClick('drinks')} color="inherit">
              Drinks
            </Link>
            <Link onClick={handleNavigationMenuClick('entrees')} color="inherit">
              Entrees
            </Link>
            <Link onClick={handleNavigationMenuClick('sides')} color="inherit">
              Sides
            </Link>
          </Typography>
          <IconButton aria-label="shopping cart" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="account profile" onClick={handleAccountMenuClick} color="inherit">
            <Badge color="secondary">
              <AccountCircleIcon />
            </Badge>
          </IconButton>
        </Toolbar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleAccountMenuClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('profile')}>Profile</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('orders')}>Orders</MenuItem>
          <MenuItem onClick={() => console.log('logout')}>Logout</MenuItem>
        </Menu>
      </AppBar>
      <Grid
        container
        direction="column"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Router />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
});
