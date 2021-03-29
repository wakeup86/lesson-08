import block from 'bem-cn'
import React from 'react'
import './PublisherPage.css'

interface Props {
}

const b = block('publisher-page')

export const PublisherPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Издательства
    </div>
  )
}
