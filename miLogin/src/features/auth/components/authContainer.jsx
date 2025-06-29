import { useAuth } from '../hooks/useAuth';
import LoginForm from './loginForm';
import Dashboard from './dashboard';

const AuthContainer = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <LoginForm />;
};

export default AuthContainer;