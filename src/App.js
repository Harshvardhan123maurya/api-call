'./components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import GithubState from './contexts/github/GithubState';
import AlertState from './contexts/alert/AlertState';
import Home from './components/pages/Home';

class App extends Component {
  state = {
    user: {},
    alert: null,
  }


  /**
   * Initializes Alert state
   * @param {*} alert 
   */
  setAlert = (alert) => {
    this.setState({alert: {
      msg: alert.msg,
      type: alert.type
    }});
    setTimeout(() => {
      this.setState({alert: null});
    }, 3000);
  }


  /**
   * Renders App component (lifecycle method)
   * @returns 
   */
  render() {
    const {alert} = this.state;
    return (
      <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Git Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert}/>
            <Routes>

              <Route exact path='/' element={<Fragment>
                <Search setAlert={this.setAlert}/>
                <Users/>
              </Fragment>}>
              </Route>

              <Route path='/about' element={<About/>}>
              </Route>

            </Routes>
          </div>
        </div>
      </Router>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar title='Git Finder' icon='fab fa-github' />
              <div className='container'>
                <Alert/>
                <Routes>
                  <Route exact path='/' element={<Home />}>
                  </Route>
                  <Route path='/about' element={<About/>}>
                  </Route>
                </Routes>
              </div>
            </div>
          </Router>
       </AlertState>
      </GithubState>
    );
  }
}

export default App;