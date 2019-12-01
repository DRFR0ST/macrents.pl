import { Typography, withStyles } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import translations from 'translations/pricing.trans.js';
import { useLittera } from 'react-littera';

const styles = (theme) => ({
  headerContainer: {
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  headerImage: {
    height: 'auto',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    zIndex: 2,
  },
  headerShadow: {
    background: `linear-gradient(to top, ${theme.palette.background.main} 10%, transparent)`,
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 3,
  },
  paper: {
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: 10,
    overflowX: 'auto',
    padding: '16px',
    width: '100%',
  },
  root: {
    '@media (max-width: 1250px)': {
      left: 0,
      maxWidth: '82%',
      padding: '0 5%',
      width: '100%',
    },
    color: '#fff !important',
    height: 'auto',
    left: '15%',
    padding: '0 0 5% 0',
    position: 'relative',
    top: '-20vh',
    width: '70%',
    zIndex: 5,
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, hourly, daily, monthly, yearly) {
  return {
    daily,
    hourly,
    monthly,
    name,
    yearly,
  };
}

const rows = [
  createData('Example', 24, 120, 1000, 5000),
  createData('Example', 16, 160, 1340, 2000),
  createData('Example', 27, 175, 1500, 4000),
  createData('Example', 32, 180, 2500, 6000),
  createData('Example', 69, 200, 3000, 8000),
  createData('Example', 69, 300, 5000, 10000),
];

const Pricing = ({ classes }) => {
  const [translated] = useLittera(translations);

  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.headerShadow} />
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
            <caption>{translated.prefilled}</caption>
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
              {rows.map((row) => (
                <TableRow hover key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.hourly} PLN</TableCell>
                  <TableCell align="right">{row.daily} PLN</TableCell>
                  <TableCell align="right">{row.monthly} PLN</TableCell>
                  <TableCell align="right">{row.yearly} PLN</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Pricing);
