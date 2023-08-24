import { ReactNode } from "react";
import Typography from "./Typography";

type ButtonProps = {
    children: ReactNode;
    type?: string | 'small';
}

/**
 * Button types
 * @param type 'small_white'
 * @returns 
 */
const Button = ({children, type}: ButtonProps) => {
  return (
    <div className={`button ${type ? type : ''}`}>
        <Typography mode="button" family={`${type ? type : 'medium_white'}`}> {children}</Typography>
    </div>
  )
}

export default Button;