import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
// import AllUsers from './Components/AllUsers';
// import AddUsers from './AddUser';
import HomePage from './components/homePage';
import {Switch,BrowserRouter,Route } from 'react-router-dom'
import { Grid, Typography,Box,AppBar,Toolbar,Button,IconButton  } from '@mui/material';
import Contact from './components/contact';
// import NotFound from './Components/NotFound';
// import EditUsers from './Components/EditUser';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar style={{backgroundColor: '#800000' }}>
             
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                JoinPhytoCommunity
              </Typography>
              <Typography variant="h6" component="div">
                JoinPhytoCommunity
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <NavBar />
        <Switch>
        <Route exact path ='/' component={Contact}/>
        <Route exact path ='/home' component={HomePage}/>
        {/* <Route exact path ='/all' component={AllUsers}/>
        <Route exact path ='/edit/:id' component={EditUsers}/>
        <Route component={NotFound}/> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
