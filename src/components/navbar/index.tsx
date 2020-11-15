// @ts-nocheck
import React, { useState } from 'react'
import { ValueContext } from '../sidebar/ValueProvider'
import * as S from './styled'
import * as FaIcons from "react-icons/fa"
import Sidebar from '../sidebar'



function Navbar() {
  const [value, setValue] = useState(false)
  
  const handleClick = () => setValue(!value)

  return (
    <>
      <ValueContext.Provider value={{ value, setValue }}>
        <S.NavBar>
          <S.NavbarLink to="#">
            <FaIcons.FaBars onClick={handleClick} />
          </S.NavbarLink>
        </S.NavBar>
        {value ? <Sidebar /> : ''}
      </ValueContext.Provider>
    </>
  )
}

export default Navbar
