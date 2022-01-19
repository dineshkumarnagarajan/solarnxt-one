import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MENU_MOUNT_TOP_RIGHT } from "../../utils/utils";
import { CommonStylesFunction } from "../../theme/Theme";
import {FONT_SIZE} from "../../theme/Defaults";
export default function ChartCard(props) {
  const commonStyles = CommonStylesFunction();
  const {
    tertiaryName,
  } = commonStyles;
  const [hover, setHover] = React.useState(false);
  const [anchorElSubMenu, setAnchorSubMenu] = React.useState(null);
  const handleOpenSubMenu = (event) => {
    setAnchorSubMenu(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setAnchorSubMenu(null);
  };
  const {
    children,
    title,
    fullScreen,
    setFullScreen,
    index,
    setFullScreenIndex,
  } = props;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card sx={{ boxShadow: !hover && "none" }}>
        <CardHeader
          avatar={null}
          action={
            hover && !fullScreen ? (
              <IconButton
                size="medium"
                aria-label="more"
                onClick={handleOpenSubMenu}
              >
                <MoreVertIcon />
              </IconButton>
            ) : fullScreen ? (
              <IconButton
                size="medium"
                aria-label="more"
                onClick={() => setFullScreen(false)}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton size="medium" aria-label="more" disabled>
                <MoreVertIcon sx={{ color: "white" }} />
              </IconButton>
            )
          }
          title={
            <span
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: FONT_SIZE.big,
              }}
            >
              {title}
            </span>
          }
          subheader={null}
          sx={{ padding: 1 }}
        />
        <CardContent sx={{ padding: 0, paddingBottom: "0px !important" }}>
          {children}
        </CardContent>
      </Card>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElSubMenu}
        anchorOrigin={MENU_MOUNT_TOP_RIGHT.anchorOrigin}
        keepMounted
        transformOrigin={MENU_MOUNT_TOP_RIGHT.transformOrigin}
        open={Boolean(anchorElSubMenu)}
        onClose={handleCloseSubMenu}
      >
        <MenuItem
          onClick={() => {
            setFullScreen(true);
            setFullScreenIndex(index);
            handleCloseSubMenu();
          }}
        >
          <Typography textAlign="center" sx={tertiaryName}>
            Maximize
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseSubMenu}>
          <Typography textAlign="center" sx={tertiaryName}>
            Download Image
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseSubMenu}>
          <Typography textAlign="center" sx={tertiaryName}>
            Download CSV
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
