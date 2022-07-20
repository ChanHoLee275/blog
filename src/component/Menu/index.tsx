import styled from '@emotion/styled';
import { Drawer, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';

export interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const DrawerHeader = styled('div')(() => ({
  width: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const Menu: React.FC<MenuProps> = ({ open, setOpen, children }) => {
  return (
    <Drawer open={open}>
      <DrawerHeader>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      {children}
    </Drawer>
  );
};

export default Menu;
