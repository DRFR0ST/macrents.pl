import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    height: '400px',
  },
})

const Special = ({ classes }) => {
  return <div className={classes.root}>Special</div>
}

export default withStyles(styles)(Special)
