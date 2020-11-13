// @ts-nocheck
import React, { useState } from 'react'
import * as S from './styled'
import * as FaIcons from "react-icons/fa"
import Sidebar from '../sidebar'



function Navbar() {
  const [sidebar, setSidebar]: any = useState(false)

  const handleClick = () => setSidebar(!sidebar)

  return (
    <>
      <S.NavBar>
        <S.NavbarLink to="#">
          <FaIcons.FaBars onClick={handleClick} />
        </S.NavbarLink>
      </S.NavBar>
      {sidebar ? <Sidebar setsidebar={setSidebar} /> : '' }
    </>
  )
}

export default Navbar
