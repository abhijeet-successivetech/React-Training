'use client';
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const drawerWidth = 280;

export default function Sidebar({ children, title, data }) {
  const theme = useTheme();
  const pathname = usePathname();

  const navigationItems = [
    { url: '/', name: 'Home' },
    ...data,
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
      </Box>

      <List sx={{ flexGrow: 1, py: 1 }}>
        {navigationItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link
              href={item.url}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <ListItemButton selected={pathname === item.url}>
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: pathname === item.url ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            position: 'relative',
            height: '100vh',
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          minHeight: '100vh',
        }}
      >
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
