
import Signup from './components/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (

    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }} >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>

              <PrivateRoute exact path='/' component={DashBoard} />
              <Route path='/Signup' component={Signup} />
              <Route path='/Login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>

  );
}

export default App;
