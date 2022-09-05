import Button from "@mui/material/Button";
import { PropTypes as propTypes } from "prop-types";

const MyButton = ({ children, onClick, size, variant }) => {
  return (
    <Button onClick={onClick} size={size} variant={variant}>
      {children}
    </Button>
  );
};

MyButton.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.string])
    .isRequired,
  onClick: propTypes.func,
  size: propTypes.string,
  variant: propTypes.string,
};
MyButton.defaultProps = {
  children: "",
  onClick: () => {},
  size: "",
  variant: "",
};

export default MyButton;
