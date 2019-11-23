import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '70%',
    left: '15%',
    height: 'auto',
    padding: '5% 0',
    position: 'relative',
    '@media (max-width: 1250px)': {
      maxWidth: 'initial',
      left: 0,
    },
    color: '#fff !important',
  },
  paper: {
    width: '80%',
    maxWidth: '1250px',
    margin: '2.5% 0',
    padding: '2rem',
    background: theme.palette.background.lighter,
  },
  headerContainer: {
    width: '100%',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
  },
  headerImage: {
    position: 'absolute',
    width: '100vw',
    height: 'auto',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  },
  headerShadow: {
    zIndex: 3,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: `linear-gradient(to top, ${theme.palette.background.main} 5%, transparent)`,
  },
  headerShadowTop: {
    zIndex: 3,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: `linear-gradient(to top, transparent 99%, ${theme.palette.background.main})`,
  },
  plusChunk: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    width: '44%',
    height: '22.5%',
    position: 'absolute',
    bottom: '10%',
    right: '7%',
    zIndex: 1,
  },
  plusChunk2: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    width: '35.5%',
    height: '19%',
    position: 'absolute',
    top: '12.5%',
    left: '9%',
    zIndex: 1,
  },
})

const About = ({ classes }) => {
  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.headerShadow} />
        <div className={classes.headerShadowTop} />
        <img
          className={classes.headerImage}
          src={`https://source.unsplash.com/WbOn78k-ywU/${window.innerWidth}x450`}
          alt="random"
        />
      </div>
      <div className={classes.root}>
        <div className={classes.plusChunk} />
        <div className={classes.plusChunk2} />
        <Typography variant="h3">About us</Typography>
        <br />
        <Typography paragraph>
          Aute ea eiusmod nulla velit cillum sunt nisi ea veniam quis voluptate
          laborum nulla. Ex cillum tempor non est adipisicing. Veniam Lorem ad
          sunt eiusmod aliqua ipsum irure duis sunt irure incididunt duis esse
          nulla. Quis occaecat laboris do nulla aliqua cillum.
        </Typography>
        <Typography paragraph>
          In enim amet deserunt fugiat laborum nostrud exercitation deserunt
          sint voluptate ad. Ea aliqua tempor exercitation reprehenderit
          excepteur fugiat fugiat anim pariatur. Velit voluptate deserunt veniam
          duis ex reprehenderit. Ut eiusmod ullamco excepteur culpa. Id aliquip
          et magna tempor reprehenderit ex ad deserunt. Ex ut dolore culpa
          officia enim cillum reprehenderit aliqua id dolor fugiat. Ipsum
          exercitation est quis reprehenderit incididunt qui aliquip nulla ut.
        </Typography>
        <Typography paragraph>
          Minim ipsum voluptate commodo aute est aliqua nostrud et est officia
          exercitation qui sint adipisicing.
        </Typography>
        <Typography paragraph>
          Aute consequat est labore ad cillum tempor consequat reprehenderit
          occaecat nostrud irure.
        </Typography>
        <Typography paragraph>
          Laborum mollit voluptate magna anim cillum incididunt reprehenderit
          nisi ea culpa. Reprehenderit Lorem consequat tempor aute commodo
          eiusmod minim amet quis proident quis. Velit quis velit nulla Lorem
          magna ad eu laborum. Labore officia officia ipsum officia consectetur
          elit ea cillum anim. Ex nulla cillum proident Lorem aute laboris. Amet
          sint tempor ad aliquip in aute excepteur occaecat proident culpa do.
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(About)
