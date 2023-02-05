import Button from '../../ui/button/button.jsx';
import Logo from '../../ui/logo/logo.jsx';
import {StyledHeader} from './styles'

export default function Header() {
  return (
      <StyledHeader>
        <Logo />
        <Button />
      </StyledHeader>
  )
}