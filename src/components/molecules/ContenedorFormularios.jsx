import React from 'react'

const ContenedorFormularios = ({children}) => {
  return (
      <>
          <div className='p-5 xs:p-0'>
              {children}
          </div>   
    </>
  )
}

export default ContenedorFormularios