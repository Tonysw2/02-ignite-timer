import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import LogoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'

export const Header = function () {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
