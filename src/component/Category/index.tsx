import React from 'react';
import { Collapse, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export interface PostsProps {
  title: string;
  url: string;
}

export interface CategoryProps {
  title: string;
  posts: PostsProps[];
}

const Category: React.FC<CategoryProps> = ({ title, posts }) => {
  const [open, setOpen] = React.useState(false);
  const nav = useNavigate();
  return (
    <List component={'nav'} subheader={<ListSubheader component={'div'}>DEV-LOGGER</ListSubheader>}>
      <ListItemButton onClick={() => setOpen((state) => !state)}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {posts.map(({ title, url }) => {
          return (
            <List component={'div'} disablePadding>
              <ListItemButton onClick={() => nav(url)}>
                <ListItemText primary={title} />
              </ListItemButton>
            </List>
          );
        })}
      </Collapse>
    </List>
  );
};

export default Category;
