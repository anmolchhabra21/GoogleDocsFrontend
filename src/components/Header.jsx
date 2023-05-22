import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import ShareBtn from "./ShareBtn.jsx";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/Description";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: "alpha(theme.palette.common.white, 0.25)",
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function PrimarySearchAppBar(props) {
  console.log("prp", props);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const StyledPara = styled("div")({
    margin: "0px",
    padding: "0px 10px",
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#dadce0",
    },
  });

  const mobileMenuId = "primary-search-account-menu-mobile";
  const docNameChange = (e) => {
    props.fname(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#f9fbfd", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <DescriptionOutlinedIcon
            sx={{ color: "#4285f4", fontSize: "2.7rem" }}
          />

          <div>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <input
                type="text"
                value={props.hname}
                onChange={docNameChange}
                style={{ border: "0px white solid", margin: "1px" }}
              />
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
    </Box>
  );
}
