import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { Home, ModeNight, People, Settings, Storefront } from '@mui/icons-material';

const Sidebar = ({changeTheme}) => {
  return (
    <Box sx={{ display: {xs : 'none', sm: 'block'}}} flex={1} p={2} position="sticky" >
        <Box position={'fixed'}>
              <List >
                  <ListItem disablePadding>
                      <ListItemButton component="a" href="#home">
                          <ListItemIcon>
                              <Home />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                      </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemButton component="a" href="#home">
                          <ListItemIcon>
                              <People />
                          </ListItemIcon>
                          <ListItemText primary="Friend" />
                      </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemButton component="a" href="#home">
                          <ListItemIcon>
                              <Storefront />
                          </ListItemIcon>
                          <ListItemText primary="Marketplace" />
                      </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemButton component="a" href="#setting">
                          <ListItemIcon>
                              <Settings />
                          </ListItemIcon>
                          <ListItemText primary="Setting" />
                      </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemButton component="a" href="#setting">
                          <ListItemIcon>
                              <ModeNight />
                          </ListItemIcon>
                          <Switch onClick={changeTheme}/>
                      </ListItemButton>
                  </ListItem>
              </List>
        </Box>
    </Box>
  )
}

export default Sidebar