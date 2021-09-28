import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '5px',
    flexGrow: 1
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    color: 'khaki',
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: '25px',
    margin: '0px',
    padding: "0px"
  },
  logo1: {
    padding: '0px',
    margin: '0px',

  },
  l: {
    textAlign: 'center',
    marginRight: '70%'
  }

}));

const Navbar = () => {
  const classes = useStyles();
  const history=useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.l }>
              <h5 className={classes.logo} >P R A K A S H</h5>
              <p className={classes.logo1} >Institute Of Education</p>
            </div>
            {/* <div className="">
              <h5 className="" >P R A K A S H</h5>
              <p className="">Institute Of Education</p>
            </div>
             */}
          </Typography>
            {/* <div class="navbar-nav"> */}
              {/* <a class="nav-link active" aria-current="page" href="jhvkjhv">Home</a>
              <a class="nav-link" href="ddsdsa#">Features</a>
              <a class="nav-link" href="#sdsad">Pricing</a> */}
            {/* </div> */}
            {/* <Button className="nav-link" color="inherit">Login</Button> */}
            <Button onClick={()=>history.push('/')} color="inherit"> About </Button>
            <Button color="inherit">courses</Button>
          <Button onClick={()=>history.push('/login')} color="inherit">Login</Button>
          <Button onClick={()=>history.push('/register')} color="inherit">Register</Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default Navbar
