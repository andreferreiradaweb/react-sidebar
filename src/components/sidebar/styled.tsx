import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Sidebar = styled.nav`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display:flex;
  justify-content: center;
  position: fixed;
  top: 0;
  /* left: $props => !sidebar ? "100%" : '' }; */
  transition: 850ms;
`
export const SidebarList = styled.ul`
  font-size: 1.5rem;
  background: none;
  list-style: none;
  width: 100%;
  padding: 0;
`

export const SidebarText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 16px;
  list-style: none;
  height: 60px;
`

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #1a83ff;
  }
`

export const SidebarLinkClose = styled(Link)`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 30px;
  width: 95%;
  display: flex;
  align-items: center;
  padding: 10px;
`

export const SidebarIcon = styled.span`
  margin-right: 16px;
`