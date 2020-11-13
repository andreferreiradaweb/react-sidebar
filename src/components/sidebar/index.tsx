// @ts-nocheck
import React from 'react'
import * as S from './styled'
import * as AiIcons from "react-icons/ai"
import { SidebarContent } from '../sidebar/sidebarContent'

function Sidebar({ setsidebar }) {

  const handleClick = () => setsidebar(false)

  return (
    <S.Sidebar>
      <S.SidebarList>
        <S.SidebarText>
          <S.SidebarLinkClose onClick={handleClick} to="#">
            <AiIcons.AiOutlineClose />
          </S.SidebarLinkClose>
        </S.SidebarText>
        {SidebarContent.map((item, index) => (
          <S.SidebarText key={index}>
            <S.SidebarLink to={item.path}>
              <S.SidebarIcon>{item.icon}</S.SidebarIcon>
              {item.title}
            </S.SidebarLink>
          </S.SidebarText>
        ))}
      </S.SidebarList>
    </S.Sidebar>
  )
}

export default Sidebar
