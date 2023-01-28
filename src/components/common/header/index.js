import { Key } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo1.svg"
const Header = () => {
  const NAVITEM = [
    { item: "Home", link: "/" },
    { item: "Service", link: "/service" },
    { item: "About", link: "/about" },
  ];
  const ActiveClass={color:"white",textDecoration: "none",fontSize: "large",letterSpacing: 3, fontFamily:" Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}
  const NonActiveClass={color:"#1e3f4f",textDecoration: "none",fontSize: "large",  fontFamily:" Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",letterSpacing: 3}
  return (
    <Box>
       
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "0px 1px 2px 0px #d8fff3c2, 0px 1px 1px 0px #e5f2ee;",
          zIndex: 3,
          backgroundColor: "#29A9C8",
          
        }}
      >
     
          
              <Toolbar   sx={{
      display: 'flex',
      justifyContent: 'space-between',    
      borderRadius: 1,
      width: "100%",
      maxWidth: 1536,
      mx: "auto",
    }}>  
         <Box sx={{display:"flex",gap:3 ,alignItems: "center"

}}>      <img src={Logo} style={{height:"50px",borderRadius:"1.5rem",border:"1px solid"}}/>

{NAVITEM.map(({ item, link }, i) => 
            <NavLink Key={i} to={link}   style={({ isActive })=>
              isActive ? ActiveClass: NonActiveClass
             }
            >
              {item}
            </NavLink>
          )}</Box>
                         <Avatar alt="" src="" />
  </Toolbar>   
        
      
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
