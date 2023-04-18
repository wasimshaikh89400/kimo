import NavBarComponent from "@components/NavBarComponent/NavBarComponent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import HighlightComponent from "@components/HighlightComponent/HighlightComponent";
import FooterComponent from "@components/FooterComponent/FooterComponent";
import Colors from "@utils/colors.config";
import Box from "@mui/material/Box";

const ImageContainer = styled("div")((props) => ({
  background: "url(https://i.ibb.co/QXZccPN/Image.png)",
  height: "80vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingTop: 24,
  fontFamily: "IBM Plex Mono",
}));

const TitleComponent = styled("div")((props) => ({
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 6.44%, #FFFFFF 95.08%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "background-clip": "text",
  "text-fill-color": "transparent",
  fontWeight: "700",
  fontSize: "140px",
  textAlign: "center",
  lineHeight: "132px",
  paddingBlock: "100px",
  [props.theme.breakpoints.down("sm")]: {
    fontSize: "64px",
    marginTop: 30,
    lineHeight: "64px",
  },
}));

const FooterWrapperComp = styled("div")({
  background: Colors.FOOTER_BACKGROUND,
  fontFamily: "IBM Plex Mono",
  marginTop: 80,
  paddingBlock: 30,
});

export default function Home() {
  return (
    <Box>
      <ImageContainer>
        <NavBarComponent />
        <TitleComponent>
          Welcome <br />
          to Hawaii
        </TitleComponent>
      </ImageContainer>
      <Grid
        container
        sx={{
          display: "flex",
          marginInline: "auto",
          fontFamily: "IBM Plex Mono",
          width: { sm: "100%", md: "80%" },
        }}
      >
        <HighlightComponent />
      </Grid>
      <FooterWrapperComp>
        <FooterComponent />
      </FooterWrapperComp>
    </Box>
  );
}
