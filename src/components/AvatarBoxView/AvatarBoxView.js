import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Grid,
  Badge, 
  Box,
  Avatar,
  Typography
} from '@material-ui/core';

const OnlineBadgeStyles = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',//TODO:: use theme colors
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.5s infinite ease-in-out',
      border: '1px solid #44b700',//TODO:: use theme colors
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const AvatarBoxView = ({ src, name, status }) => (
  <Grid container spacing={1}>
    <Grid item>
      <Box>
        <OnlineBadgeStyles
          invisible={status === 'offline' ? true : false}
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt={name} src={src} />
        </OnlineBadgeStyles>
      </Box>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1">{name}</Typography>
    </Grid>
  </Grid>
);

AvatarBoxView.propTypes = {
  status: PropTypes.oneOf(['online', 'offline']).isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default AvatarBoxView;