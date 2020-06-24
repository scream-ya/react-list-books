import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

function TabPanel(props) {
  const { children, index } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Box>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

TabPanel.propTypes = propTypes;

export default TabPanel;
