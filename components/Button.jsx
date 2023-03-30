import { LoadingButton } from "@mui/lab";
import Send from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Button = (props) => {
	return (
		<LoadingButton
			type="submit"
			endIcon={<Send />}
			loading={props.loading}
			loadingPosition="end"
			variant="contained"
		>
			<span>props.text</span>
		</LoadingButton>
	);
};

export default Button;
