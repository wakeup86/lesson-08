import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')
const t = block('title')
const a = block('authorization')
const l = block('login')
const p = block('password')
const but = block('button')

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <div className={t()}>Форма авторизации</div>
      <table className={a()}>
        <tr className={l()}>
          <td className={l('name')}>Пользователь </td>
          <input type="text" className={l('input')}></input>
        </tr>
        <tr className={p()}>
          <td className= {p('name')}>Пароль </td>
          <input type="text" className={p('input')}></input>
        </tr>
        
      </table>
      <button className={but()}>ОК</button>
       
    </div>
    
  )
}

