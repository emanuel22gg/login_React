import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        {error && <div className="error-message">{error}</div>}

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="usuario@ejemplo.com"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Tu contraseña"
          />
        </div>

        <button type="submit" disabled={isLoading} className="login-button btn btn-primary">
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>

        <div className="login-info mt-4">
          <p>ejemplo:</p>
          <p><b>Email:</b> john@mail.com</p>
          <p><b>Contraseña:</b> changeme</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;