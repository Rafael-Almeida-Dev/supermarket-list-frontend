
import { ButtonContainer, ButtonIcon } from './style'

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <ButtonContainer onClick={onClick} outline={variant === 'outline'}>
      {icon && (
        <ButtonIcon
          src={`/images/${icon}.svg`}
          alt={`supermarket_icon_${icon}`}
        />
      )}
      {children}
    </ButtonContainer>
  )
}
