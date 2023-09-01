import Typography from "./Typography";
import { FocusEvent } from "react";

type InputProps = {
	type?: string;
	value: string;
	placeholder?: string
	onChange: (event: string) => void;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void; 
}
const Input = ({type, value, placeholder, onChange, onBlur}: InputProps) => {
	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		if (onBlur) {
			onBlur(event);
		}
	}

	return (
		<Typography mode="body" family="small_m">
			<input
				className="input"
				type={type ? type : 'text'}
				onChange={(event) => onChange(event.target.value)}
				onBlur={handleBlur}
				value={value}
				placeholder={placeholder}
			/>
		</Typography>
	)
}

export default Input;