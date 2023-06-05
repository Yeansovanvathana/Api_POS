import { useNavigate } from "react-router";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { useState, useEffect } from "react";

// MUI Imports

import { Collapse, List } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { styled } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Avatar, Typography } from "@mui/material";


const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12],
}));


const Sidebar = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  const handleLogout = () => {
    window.localStorage.removeItem('token') 
    window.localStorage.removeItem('userData') 
    navigate('/login',{replace : true})
  }

  useEffect(() => { 
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const [open, setOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false)
  const toggle = () => setShowSidebar(!showSidebar)
  const userData = window.localStorage.getItem("userData")
  const user = JSON.parse(userData)
  return (
    <div className="container">

      <div>
        {matches ? null : <nav className="navbar">{showSidebar ? <MenuIcon onClick={toggle} /> : <CloseIcon onClick={toggle} />}</nav>}
      </div>
      <div className="Sidebar" style={{ display: !matches && showSidebar ? "none" : "flex" }}>
        <div className="profile">
          <AccountStyle>
            <Avatar
              alt="My Avatar"
              // src="/static/mock-images/avatars/avatar_default.jpg"
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "#FB6107", fontSize: 20 }}>
                {user.name}
              </Typography>
            </Box>
          </AccountStyle>
        </div>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => (
            val.title ? (
              val.children ? (
                <>
                  <li
                    key={key}
                    className="row"
                    id={window.location.pathname === val.link ? 'active' : ''}
                    onClick={() => {
                      navigate(val.link);
                      setOpen(!open)
                    }}
                  >
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                  </li>
                  <Collapse in={open} timeout="auto">
                    <List>
                      {val.children?.map((val, index) => (
                        <li
                          key={key}
                          className="row"
                          id={window.location.pathname === val.link ? 'active' : ''}
                          onClick={() => {
                            navigate(val.link);
                          }}
                        >
                          <div id="icon">{val.icon}</div>
                          <div id="title">{val.title}</div>
                        </li>

                      ))}
                    </List>
                  </Collapse>

                </>
              ) : (
                <li
                  key={key}
                  className="row"
                  id={window.location.pathname === val.link ? 'active' : ''}
                  onClick={() => {navigate(val.link)}}
                >
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
              )

            ) : null
          ))}
          <li className="row" onClick={handleLogout}>
            <div id="icon"><LogoutIcon /></div>
            <div id="title">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;