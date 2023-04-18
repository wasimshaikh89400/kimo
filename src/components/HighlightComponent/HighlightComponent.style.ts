import { styled } from "@mui/material/styles";
import Colors from "@utils/colors.config";

export const HeadingComponent = styled("p")((props) => ({
  fontSize: 16,
  fontWeight: 700,
  color: Colors.PRIMARY_TEXT,
  [props.theme.breakpoints.down("sm")]: {
    marginLeft: "5%",
  },
}));
