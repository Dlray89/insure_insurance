import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import theme from './Components/UI/theme'
import Navbar from './Components/UI/Nav-folder/Nav'
import LandingPage from './Components/Body Content/LandingPage'
import Footer from './Components/UI/Footer/footer'
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
      <Navbar  />
      <Switch>
        <Route exact path='/' component={LandingPage}  />
        <Route exact path='/howitworks' component={() => <div>How it works</div>}  />
        <Route exact path='/blogs' component={() => <div>Blogs</div>}  />
        <Route exact path='/accounts' component={() => <div>Accounts</div>}  />
        <Route exact path='/viewplans' component={() => <div>View Plan</div>}  />
      </Switch>
      <Footer />
      </BrowserRouter>
      
     
    </ThemeProvider>
  );
}

export default App;
