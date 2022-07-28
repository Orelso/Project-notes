import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
// import NavBar from './components/NavBar'
import { createTheme, ThemeProvider } from "@mui/material";
import { green, purple } from '@mui/material/colors';
import Layout from './components/Layout';





const theme = createTheme ({
    palette: {
        primary: {
            main: '#3A5343'
        },
        secondary: green
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
