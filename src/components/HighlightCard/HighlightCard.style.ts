import { styled } from "@mui/material/styles";
import Colors from "@utils/colors.config";

export const TitleComponent = styled("p")((props) => ({
  fontSize: 24,
  fontWeight: 700,
  color: Colors.SECONDARY_TEXT,
}));

export const BodyComponent = styled("p")((props) => ({
  fontSize: 16,
  fontWeight: 400,
  color: Colors.PRIMARY_TEXT,
}));
