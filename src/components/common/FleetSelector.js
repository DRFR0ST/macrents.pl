import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100vw',
    maxWidth: '100%',
    height: '400px',
    position: 'relative',
  },
  container: {},
}

const FleetSelector = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container} />
    </div>
  )
}

export default withStyles(styles)(FleetSelector)
