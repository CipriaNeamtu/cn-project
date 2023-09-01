import { ReactNode } from "react";
import Typography from "./Typography";

type ButtonProps = {
    children: ReactNode;
    type?: string | 'small';
    onClick?: () => void;
}

/**
 * Button types
 * @param type default: 'medium_white' | 'small_white' | 'small_blue'
 * @returns 
 */
const Button = ({children, type, onClick}: ButtonProps) => {
  return (
    <div className={`button ${type ? type : ''}`} onClick={onClick}>
        <Typography mode="button" family={`${type ? type : 'medium_white'}`}> {children}</Typography>
    </div>
  )
}

export default Button;