import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.div`
  background-color: #060b26;
  height: 70px;
  font-size: 1.5rem;
  display:flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavbarLink = styled(Link)`
  padding-right: 16px;
  color: #f5f5f5;  
`

