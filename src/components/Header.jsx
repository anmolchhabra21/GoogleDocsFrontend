import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Stack } from "@mui/material";
import ShareBtn from "./ShareBtn.jsx";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/Description";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';import zIndex from "@mui/material/styles/zIndex.js";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "alpha(theme.palette.common.white, 0.25)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  console.log('prp', props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const StyledBtn = styled('Button')({
  //   backgroundColor: "white",
  //   // border:"0",
  //   '&:hover': {
  //       backgroundColor: "grey",
  //   },
  // });
  const StyledPara = styled("div")({
    margin: "0px",
    padding: "0px 10px",
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: "5px",
    // zIndex:"-1",
    // noWrap: true,
    // border:"0",
    "&:hover": {
      backgroundColor: "#dadce0",
    },
  });

  const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge>
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  const docNameChange=(e)=>{
    console.log("changing",props.hname)
    props.fname(e.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar
        sx={{ backgroundColor: "#f9fbfd", color: "black", boxShadow:"none" }}
      >
        <Toolbar>
          <DescriptionOutlinedIcon
            sx={{ color: "#4285f4", fontSize: "2.7rem" }}
          />

          <div>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <input type="text" value={props.hname} onChange={docNameChange} style={{border:"0px white solid", margin:"1px"}}  />
              <StarBorderIcon />
              <DriveFileMoveOutlinedIcon />
              <CloudDoneOutlinedIcon />
            </div>
            <Stack direction="row">
              <StyledPara>File</StyledPara>
              <StyledPara>Edit</StyledPara>
              <StyledPara>View</StyledPara>
              <StyledPara>Insert</StyledPara>
              <StyledPara>Format</StyledPara>
              <StyledPara>Tools</StyledPara>
              <StyledPara>Extensions</StyledPara>
              <StyledPara>Help</StyledPara>
            </Stack>
          </div>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "0.4rem" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <RestoreOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <CommentOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <VideocamOutlinedIcon />
            </IconButton>
            <IconButton color="black">
              <ShareBtn />
            </IconButton>
            <IconButton>
              <Avatar>H</Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Avatar>H</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}
