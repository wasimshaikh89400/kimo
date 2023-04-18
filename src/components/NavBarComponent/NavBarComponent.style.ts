import { styled } from "@mui/material/styles";
import Colors from "@utils/colors.config";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: Colors.WHITE,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const ParentComponent = styled("div")((props) => ({
  height: 80,
  background: Colors.WHITE,
  width: "80%",
  marginInline: "auto",
  borderRadius: 12,
  paddingInline: 24,
  display: "flex",
  alignItems: "center",
  [props.theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 30,
  },
}));

export const MenuItemComponent = styled("div")((props) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: 10,
}));
