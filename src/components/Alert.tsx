import xClose from '../images/icons/x-close.svg';
import greenCheck from '../images/icons/green_icon.svg';
import Typography from './Typography';
import Button from './Button';

type AlertProps = {
	type?: string;
	title?: string;
	text?: string;
	onClose: () => void;
}

const Alert = ({ type, title, text, onClose }: AlertProps) => {

	return (
		<div className="alert">
			<div className={`alert_wrapper ${type ? type : ''}`}>
				<img className='close' src={xClose} onClick={onClose} />
				<img className='green_check' src={greenCheck} />
				<Typography className='title' mode='body' family='medium_l'>{title ? title : 'Alert Title'}</Typography>
				<Typography className='text text_center' mode='body' family='medium_s'>{text ? text : 'Alert Text'}</Typography>
				<Button type="small_white" onClick={onClose}>Close</Button>
			</div>
		</div>
	)
}

export default Alert;