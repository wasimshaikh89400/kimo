import React, { useState } from "react";
import {
  MenuItemComponent,
  ParentComponent,
  AppBar,
  DrawerHeader,
} from "@components/NavBarComponent/NavBarComponent.style";
import AlohaSVGIcon from "@components/NavBarComponent/asset/AlohaSvgIcon";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Colors from "@utils/colors.config";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";

const NavBarComponent = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ParentComponent>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              <AlohaSVGIcon />
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon sx={{ color: Colors.PRIMARY_TEXT }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DrawerHeader />
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Box ml={3} my={2}>
            Home
          </Box>
          <Box ml={3} my={2}>
            Surfing
          </Box>
          <Box ml={3} my={2}>
            Hula
          </Box>
          <Box ml={3} my={2}>
            Vulcano
          </Box>
          <Button
            sx={{
              background: Colors.SECONDARY_TEXT,
              mt: 4,
              fontFamily: "Greycliff CF, sans-serif",
              mx: 3,
            }}
            variant="contained"
          >
            Book a trip
          </Button>
        </Drawer>
      </Box>
      <Grid container sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid sm={12} md={2} item>
          <AlohaSVGIcon />
        </Grid>
        <Grid sm={12} md={8} item>
          <MenuItemComponent>
            <Box>Home</Box>
            <Box ml={4}>Surfing</Box>
            <Box ml={4}>Hula</Box>
            <Box ml={4}>Vulcano</Box>
          </MenuItemComponent>
        </Grid>
        <Grid sm={12} md={2} item>
          <Button
            sx={{
              background: Colors.SECONDARY_TEXT,
              mt: 0.5,
              fontFamily: "Greycliff CF, sans-serif",
            }}
            variant="contained"
          >
            Book a trip
          </Button>
        </Grid>
      </Grid>
    </ParentComponent>
  );
};

export default NavBarComponent;
