import { styled } from "@mui/material/styles";
import Colors from "@utils/colors.config";

export const CategoryHeaderStyle = styled("p")((props) => ({
  fontSize: 16,
  fontWeight: 700,
  color: Colors.PRIMARY_TEXT,
}));

export const GuideStyle = styled("p")((props) => ({
  fontSize: 24,
  fontWeight: 700,
  color: Colors.PRIMARY_TEXT,
}));

export const GuideDetailsStyle = styled("p")((props) => ({
  fontSize: 16,
  fontWeight: 400,
  color: Colors.PRIMARY_TEXT,
  marginTop: -20,
  marginBottom: 40,
}));
