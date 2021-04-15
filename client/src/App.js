import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import AlbumsContainer from './containers/AlbumsContainer';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/albums');
  }

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/albums');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
     <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/sign-up'>
            <SignUp
              handleSignUp={handleSignUp}
            />
          </Route>
          <Route path='/albums'>
            <AlbumsContainer
              currentUser={currentUser}
            />
          </Route>
          <Route path='/'>
          <Login
              handleLogin={handleLogin}
            />
          </Route>
        </Switch>
      </Layout>
    
    </div>
  );
}

export default App;
