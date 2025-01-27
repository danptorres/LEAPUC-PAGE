import React from 'react'
import './styles/Register.css'

const Register = () => {
  return (
    <div className='register'>
      <h1>Venha fazer parte da LEAPUC</h1>
      <div className="register-inputs">
        <form id='login-form'>
        <div className='form-inputs'>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' placeholder='Digite seu email'/>
          </div>
          <div className="form-control">
            <label htmlFor="password">Senha:</label>
            <input type="password" name='password' id='password' placeholder='Digite sua senha'/>
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password">Confirme seua senha:</label>
            <input type="password" name='password' id='password' placeholder='Confirme sua senha'/>
          </div>
          {/* Aceitar e-mails */}
          <label className="email-checkbox">
              <input type="checkbox" id='email-accepted' name='email-accepted' className='input-email-accepted'/>
              <span className="checkmark"></span>
                Aceitar receber e-mails sobre as novidades da Liga
            </label>
          <div className="action-control">
            <button>Criar conta</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Register