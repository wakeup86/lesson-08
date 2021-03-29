import block from 'bem-cn'
import React from 'react'
import './LanguagePage.css'

interface Props {
}

const b = block('language-page')

export const LanguagePage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Языки
    </div>
  )
}
