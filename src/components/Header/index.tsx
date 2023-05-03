import {
  HeaderContainer,
  LeftEffect,
  LogoContainer,
  RigthEffect,
} from './styles'
import effectleft from '../../assets/effectheaderleft.svg'
import effectright from '../../assets/effectheaderright.svg'
import logo from '../../assets/Vector.png'

export function Header() {
  return (
    <HeaderContainer>
      <LeftEffect src={effectleft} alt="" />
      <LogoContainer>
        <img src={logo} alt="" />
        <span>github blog</span>
      </LogoContainer>
      <RigthEffect src={effectright} alt="" />
    </HeaderContainer>
  )
}
