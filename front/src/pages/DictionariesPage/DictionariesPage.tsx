import block from 'bem-cn'
import React from 'react'
import './DictionariesPage.css'

interface Props {
}

const b = block('dictionaries-page')

export const DictionariesPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
       <div className={b()}>
           <a href="/ref/authors">Авторы</a>
      </div>
      <div className={b()}>
          <a href="/ref/genres">Жанры</a>
      </div>
      <div className={b()}>
          <a href="/ref/languages">Языки</a>
      </div>
      <div className={b()}>
          <a href="/ref/publisher">Издательства</a>
      </div>
  </div>



   
  )
}


    