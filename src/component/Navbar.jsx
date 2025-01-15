    import React from "react";
    import AppBar from "@mui/material/AppBar";
    import Box from "@mui/material/Box";
    import Toolbar from "@mui/material/Toolbar";
    import IconButton from "@mui/material/IconButton";
    import Typography from "@mui/material/Typography";
    import Menu from "@mui/material/Menu";
    import MenuIcon from "@mui/icons-material/Menu";
    import Container from "@mui/material/Container";
    import Button from "@mui/material/Button";
    import MenuItem from "@mui/material/MenuItem";
    import PhoneIcon from "@mui/icons-material/Phone"; // Icon for Coming Soon
    import CodingIcon from "@mui/icons-material/Code";
    import { Link } from "react-router-dom";
    import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // User icon


    const pages = [
      { name: "Paket Internet", icon: <PhoneIcon /> },
      { name: "Joki Codingan", icon: <CodingIcon /> },
    ];

    function Navbar() {
      const [anchorElNav, setAnchorElNav] = React.useState(null);

      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      return (
        <AppBar position="static" sx={{ background: "linear-gradient(45deg, #3f51b5 30%, #f50057 90%)" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                InternetinZ
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
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
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link
                        to={`/${page.name.toLowerCase()}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography textAlign="center">{page.icon} {page.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                InternetinZ
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={`/${page.name.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {page.icon} {page.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  sx={{ p: 0, color: "white" }}
                  onClick={() => alert("User  settings clicked")}
                >
                  <AccountCircleIcon />
                </IconButton>
    </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    }

    export default Navbar;    