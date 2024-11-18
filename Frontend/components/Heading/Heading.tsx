import React, { ReactNode } from 'react'

function Heading({children}: {children: ReactNode}) {
  return (
    <h1 className=' text-violet-700 text-3xl font-bold tracking-tight'>{children}</h1>
  )
}

export default Heading