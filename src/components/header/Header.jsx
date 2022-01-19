import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
//import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../actions/normalActions";
import { PAGES, MOBILE_MENU,MENU_MOUNT_BOTTOM_TOP_LEFT,MENU_MOUNT_TOP_RIGHT } from "../../utils/utils";
import { HeaderViewStylesFunction } from "../../theme/Theme";
import { COLORS, PADDINGS } from "../../theme/Defaults";
import logo from "../../images/logo.jpg";



const Header = () => {
  const themeType = useSelector((store) => store.themeType.themeType);
  let theme = themeType === "light" ? "dark" : "light";
  const dispatch = useDispatch();
  const themeVariable = useTheme();
  const headerViewStyles = HeaderViewStylesFunction();
  const {
    // primaryName,
    // secondaryName,
    tertiaryName,
    appBar,
    toolBar,
    headerLogo,
    menuOptionsStyleMobile,
    menuOptionsStyleDesktop,
    menuPage,
  } = headerViewStyles;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSubMenu, setAnchorSubMenu] = React.useState(null);
  const [anchorElMoreMenu, setAnchorMoreMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSubMenu = (event) => {
    setAnchorSubMenu(event.currentTarget);
  };

  const handleOpenMoreMenu = (event) => {
    setAnchorMoreMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSubMenu = () => {
    setAnchorSubMenu(null);
  };
  const handleCloseMoreMenu = () => {
    setAnchorMoreMenu(null);
  };
  const location = useLocation();
  return (
    <AppBar position="static" sx={appBar}>
      {/* <Container maxWidth="xl"> */}
      <Toolbar disableGutters variant="dense">
        <Typography variant="h6" noWrap component="div" sx={toolBar}>
          <img src={logo} alt="sunedison_one" style={headerLogo} />
        </Typography>

        <Box sx={menuOptionsStyleMobile}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.anchorOrigin}
            keepMounted
            transformOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.transformOrigin}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={menuPage}
          >
            {PAGES.map((page, i) => (
              <MenuItem key={page.menu} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={tertiaryName}>
                  {page.menu.toUpperCase()}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography variant="h6" noWrap component="div" sx={menuOptionsStyleMobile}>
          <img src={logo} alt="sunedison_one" style={headerLogo}/>
        </Typography>
        <Box sx={menuOptionsStyleDesktop}>
          {PAGES.slice(0, 5).map((page, i) => (
            <>
              <Button
                key={page.menu}
                sx={{ ...tertiaryName, my: 2,
                  color:  page.sub_menu.length === 0?location.pathname === page.url
                  ?  COLORS.fontColorLight
                  : COLORS.fontColorDark: COLORS.fontColorDark,
                  backgroundColor:
                  page.sub_menu.length === 0?location.pathname === page.url
                    ? themeVariable.palette.secondary.main
                    : themeVariable.palette.primary.main:themeVariable.palette.primary.main,
                }}
                component={page.sub_menu.length > 0 ?Button:NavLink}
                to={page.sub_menu.length > 0 ?``:`${page.url}`}
                endIcon={
                  page.sub_menu.length > 0 && (
                    <ExpandMore style={{ marginLeft: PADDINGS.smallBig }} />
                  )
                }
                onClick={page.sub_menu.length > 0 ? handleOpenSubMenu : null}
              >
                {page.menu.toUpperCase()}
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElSubMenu}
                anchorOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.anchorOrigin}
                keepMounted
                transformOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.transformOrigin}
                open={Boolean(anchorElSubMenu)}
                onClose={handleCloseSubMenu}
                sx={{
                  display: {
                    xs: "none",
                    md: page.sub_menu.length > 0 ? "block" : "none",
                  },
                }}
              >
                {page.sub_menu.map((page, i) => (
                  <MenuItem
                    key={page.menu}
                    component={NavLink}
                    to={`${page.url}`}
                    onClick={handleCloseSubMenu}
                    sx={{
                      backgroundColor:
                        location.pathname === page.url
                          ? themeVariable.palette.secondary.main
                          : themeVariable.palette.primary.main,
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={[
                        {
                          ...tertiaryName,
                          textDecoration: "none",
                          color:
                            location.pathname === page.url
                              ? COLORS.fontColorLight
                              : COLORS.fontColorDark,
                        },
                      ]}
                    >
                      {page.menu.toUpperCase()}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ))}

          {PAGES.length > 5 && (
            <div style={{ padding: PADDINGS.smallBig }}>
              <IconButton
                size="large"
                aria-label="more"
                color="inherit"
                onClick={handleOpenMoreMenu}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElMoreMenu}
                anchorOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.anchorOrigin}
                keepMounted
                transformOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.transformOrigin}
                open={Boolean(anchorElMoreMenu)}
                onClose={handleCloseMoreMenu}
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                {PAGES.slice(5, 6).map((page, i) => (
                  <>
                    <Button
                      key={page.menu}
                      sx={{ my: 2, color: "black" }}
                      endIcon={page.sub_menu.length > 0 && <ExpandMore />}
                      onClick={
                        page.sub_menu.length > 0 ? handleOpenSubMenu : null
                      }
                    >
                      {page.menu.toUpperCase()}
                    </Button>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElSubMenu}
                      anchorOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.anchorOrigin}
                      keepMounted
                      transformOrigin={MENU_MOUNT_BOTTOM_TOP_LEFT.transformOrigin}
                      open={Boolean(anchorElSubMenu)}
                      onClose={handleCloseSubMenu}
                      sx={{
                        display: {
                          xs: "none",
                          md: page.sub_menu.length > 0 ? "block" : "none",
                        },
                      }}
                    >
                      {page.sub_menu.map((page, i) => (
                        <MenuItem key={page.menu} onClick={handleCloseSubMenu}>
                          <Typography textAlign="center" sx={tertiaryName}>
                            {page.menu.toUpperCase()}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ))}
              </Menu>
            </div>
          )}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="theme mode"
            color="secondary"
            onClick={() => dispatch(changeTheme(theme))}
          >
            {themeType === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          <IconButton size="large" aria-label="search" color="secondary">
            <SearchIcon />
          </IconButton>

          <IconButton size="large" aria-label="filter" color="secondary">
            <FilterAltOutlinedIcon />
          </IconButton>

          <IconButton size="large" aria-label="reload" color="secondary">
            <UpdateOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new alerts"
            color="secondary"
          >
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <AccountCircleIcon
                    sx={{
                      color:
                        themeType === "dark"
                          ? COLORS.iconColorLight
                          : COLORS.iconColorDark,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Manager" />
                <ExpandMore />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <Tooltip title="Manager">
            <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleOpenUserMenu}>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <AccountCircleIcon sx={{ color: "black" }} />
                  </ListItemIcon>

                  <ExpandMore />
                </ListItemButton>
              </ListItem>
            </List>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={MENU_MOUNT_TOP_RIGHT.anchorOrigin}
            keepMounted
            transformOrigin={MENU_MOUNT_TOP_RIGHT.transformOrigin}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {MOBILE_MENU.map((menu) => (
              <MenuItem key={menu} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={tertiaryName}>
                  {menu}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};
export default Header;
