import { Link } from 'react-router-dom';
import './styles/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <form id='login-form'>
        <h1>Faça seu login</h1>
        <div className='form-inputs'>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' placeholder='Digite seu email'/>
          </div>
          <div className="form-control">
            <label htmlFor="password">Senha:</label>
            <input type="password" name='password' id='password' placeholder='Digite sua senha'/>
          </div>
          <div className="action-control">
            <Link to={`/home`}>
              <button>Acessar</button>
            </Link>
            <Link to={`/register`}>
              <button id='register'>Criar uma conta</button>
            </Link>
          </div>
          <div id="password-forgot">
            <button>Esqueci minha senha</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login