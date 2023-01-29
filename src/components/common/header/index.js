import { AppBar, Avatar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import "../../../styles/components/Header.css";
import Logo from "../../../assets/images/logo/logo1.svg";
const Header = () => {
  const NAVITEM = [
    { item: "Home", link: "/" },
    { item: "About", link: "/about" },
  ];
  const ActiveClass = {
    textDecoration: "none",
    fontSize: "large",
    letterSpacing: 3,
    fontFamily: " Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    backgroundImage: "linear-gradient(120deg, blue, blue, blue, blue,blue,blue,blue, green, green,green, green,green) ",
    animation:" button-animation 0.65s 0.30s ease-out ",
    backgroundSize: 100,
    backgroundRepeat: "repeat",
    webkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mozBackgroundClip: "text",
    mozTextFillColor: "transparent",
    textDecoration:'underline',
    borderBottom:" 2px solid blue"

  };
  const NonActiveClass = {
    textDecoration: "none", 
    fontSize: "large",
    fontFamily: " Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    letterSpacing: 3,
    color:"black",

  };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "0px 1px 2px 0px #d8fff3c2, 0px 1px 1px 0px #e5f2ee;",
          zIndex: 3,
          bgcolor:"#f2f5f3"
        }}

>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 1,
            width: "100%",
            maxWidth: 1536,
            mx: "auto",
          }}
        >
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }} >
           <Link to="/"><img
              src={Logo}
              style={{
                height: "50px",
                borderRadius: "1.5rem",
                border: "1px solid",
                backgroundColor: "#32ce9c",
              }}
              alt="logo"
             
            /></Link> 
            {NAVITEM.map(({ item, link }, i) => (
              <NavLink
                Key={i}
                to={link}
                style={({ isActive }) =>
                  isActive ? (ActiveClass) : (NonActiveClass)
                }
               
              >
                {item}
              </NavLink>
            ))}
          </Box>
          <Avatar alt="" src="" />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
