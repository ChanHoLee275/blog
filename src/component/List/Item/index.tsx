import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface ItemProps {
  title: string;
  abstract: string;
}

const Item: React.FC<ItemProps> = ({ title, abstract }) => {
  return (
    <Card sx={{ minWidth: 345, width: '60%', backgroundColor: '#f2f2f7', margin: '8px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
