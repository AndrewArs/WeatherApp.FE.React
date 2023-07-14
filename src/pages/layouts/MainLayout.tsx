import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CloudIcon from '@mui/icons-material/Cloud';
import { useState, MouseEvent, MouseEventHandler } from 'react';
import { PATH_PAGE } from '../../router/paths';
import { Link } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleTheme } from '../../features/theme/themeSlice';

interface Page {
  name: string;
  url: string;
}

const pages: Page[] = [
  { name: 'Providers', url: PATH_PAGE.forecastProviders.root },
  { name: 'Add provider', url: PATH_PAGE.createForecastProvider },
  { name: 'All forecasts', url: PATH_PAGE.forecasts.root },
  { name: 'Fastest forecast', url: PATH_PAGE.forecasts.fastest }
];

interface LayoutProps {
  onThemeIconClick: MouseEventHandler<HTMLButtonElement>;
  theme: 'dark' | 'light';
}

const MobileLayout = ({ onThemeIconClick, theme }: LayoutProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem
            component={Link}
            href={page.url}
            onClick={handleCloseNavMenu}
            key={page.name}
          >
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <Box
        sx={{
          flexDirection: 'row',
          alignSelf: 'center',
          flexGrow: 'inherit',
          textAlign: 'center'
        }}
      >
        <CloudIcon />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href={PATH_PAGE.root}
          sx={{
            mr: 2,
            ml: 1,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          WeatherApp
        </Typography>
      </Box>
      <IconButton sx={{ ml: 1 }} onClick={onThemeIconClick} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

const WideScreenLayout = ({ onThemeIconClick, theme }: LayoutProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Box
        sx={{
          flexDirection: 'row',
          alignSelf: 'center',
          textAlign: 'center'
        }}
      >
        {/* <CloudIcon /> */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href={PATH_PAGE.root}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          <CloudIcon sx={{ mr: 1, mt: 0.5 }} />
          WeatherApp
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 'inherit', display: 'flex' }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            component={Link}
            href={page.url}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
      <IconButton sx={{ ml: 1 }} onClick={onThemeIconClick} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const handleThemeIconClick = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <WideScreenLayout
              onThemeIconClick={handleThemeIconClick}
              theme={themeMode}
            />
            <MobileLayout
              onThemeIconClick={handleThemeIconClick}
              theme={themeMode}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ m: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};
export default MainLayout;
