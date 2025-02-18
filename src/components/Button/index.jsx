import { ButtonCointainer } from "./styles"

const Button = ({label, onClick}) => {
  return (
    <ButtonCointainer onClick={onClick}>
        {label}
    </ButtonCointainer>
  )
}

export default Button