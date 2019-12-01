import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useLittera } from 'react-littera'

const styles = theme => ({
  root: {
    width: '70%',
    left: '15%',
    top: '-20vh',
    zIndex: 5,
    height: 'auto',
    padding: '0 0 5% 0',
    position: 'relative',
    '@media (max-width: 1250px)': {
      maxWidth: '82%',
      width: '100%',
      padding: '0 5%',
      left: 0,
    },
    color: '#fff !important',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.primary.dark}`,
    padding: '16px',
    borderRadius: 10,
  },
  table: {
    minWidth: 650,
  },
  headerContainer: {
    width: '100%',
    height: '50vh',
    position: 'relative',
    overflow: 'hidden',
  },
  headerImage: {
    position: 'absolute',
    width: '100vw',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    background: `linear-gradient(to top, ${theme.palette.background.main} 10%, transparent)`,
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
})

function createData(name, hourly, daily, monthly, yearly) {
  return { name, hourly, daily, monthly, yearly }
}

const rows = [
  createData('Example', 24, 120, 1000, 5000),
  createData('Example', 16, 160, 1340, 2000),
  createData('Example', 27, 175, 1500, 4000),
  createData('Example', 32, 180, 2500, 6000),
  createData('Example', 69, 200, 3000, 8000),
  createData('Example', 69, 300, 5000, 10000),
]

const translations = {
  pricing: {
    en_US: 'Pricing',
    pl_PL: 'Cennik',
    de_DE: 'Preisliste',
  },
}

const Pricing = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.headerShadow} />
        <div className={classes.headerShadowTop} />
        <img
          className={classes.headerImage}
          src={`https://source.unsplash.com/n95VMLxqM2I/${
            window.innerWidth
          }x${window.innerHeight / 2}`}
          alt="random"
        />
      </div>
      <div className={classes.root}>
        <Typography variant="h3">{translated.pricing}</Typography>
        <br />
        <Typography paragraphy>
          Commodo eu magna in fugiat Lorem enim ea do nisi ex ullamco et laboris
          eiusmod.
        </Typography>
        <br />
        <br />
        <br />
        <Paper className={classes.paper}>
          <Table className={classes.table} aria-label="simple table">
            <caption>
              Każdy pojazd został zatankowany przed wypożyczeniem.
            </caption>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Hourly</TableCell>
                <TableCell align="right">Daily</TableCell>
                <TableCell align="right">Monthly</TableCell>
                <TableCell align="right">Yearly</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow hover key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.hourly}zł</TableCell>
                  <TableCell align="right">{row.daily}zł</TableCell>
                  <TableCell align="right">{row.monthly}zł</TableCell>
                  <TableCell align="right">{row.yearly}zł</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(Pricing)
