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
  caption: {
    color: theme.palette.primary.lighter,
    margin: 0,
    padding: 0,
  },
  headerContainer: {
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  headerImage: {
    height: 'auto',
    left: '50%',
    opacity: 0.7,
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
  slogan: {
    color: theme.palette.primary.lighter,
  },
  table: {
    minWidth: 650,
  },
  tableHeader: {
    color: theme.palette.primary.lighter,
    fontWeight: 'bold',
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

function createCategory(name) {
  return { cat: true, name };
}

const rows = [
  createCategory('Klasa B'),
  createData('Skoda Rapid (sedan)', 119, 109, 99, 89),
  createCategory('Klasa C'),
  createData('Mercedes A Klasa (hatchback)', 139, 129, 119, 109),
  createCategory('Klasa D'),
  createData('Skoda Octavia (sedan)', 159, 149, 129, 119),
  createData('Skoda Octavia (kombi)', 169, 159, 139, 129),
  createCategory('Klasa D+'),
  createData('Jaguar XE (sedan)', '249', 239, 229, 219),
  createData('BMW 4 GranCoupe (sedan)', 309, 299, 289, 279),
  createData('BMW 4 GranCoupe (sedan)', 279, 269, 259, 249),
  createCategory('Klasa E'),
  createData('BMW Seria 5 (sedan)', 319, 309, 299, 279),
  createData('Mercedes E Klasa AMG (sedan)', 309, 299, 289, 269),
  createData('Mercedes E Klasa (sedan)', 299, 289, 279, 269),
  createCategory('Klasa S'),
  createData('Audi Q7 S-LINE (SUV)', 499, 469, 449, 429),
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
        <Typography paragraphy className={classes.slogan}>
          {translated.slogan}
        </Typography>
        <br />
        <br />
        <br />
        <Paper className={classes.paper}>
          <Table className={classes.table} aria-label="simple table">
            <caption>
              <span className={classes.caption}>
                * Wyżej wymienione ceny są cenami netto
                <br />* {translated.prefilled}
              </span>
            </caption>
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell className={classes.tableHeader}>Samochód</TableCell>
                <TableCell className={classes.tableHeader} align="right">
                  1-3 dni
                  <br />
                  (limit 300km)
                </TableCell>
                <TableCell className={classes.tableHeader} align="right">
                  4-7 dni
                </TableCell>
                <TableCell className={classes.tableHeader} align="right">
                  8-14 dni
                </TableCell>
                <TableCell className={classes.tableHeader} align="right">
                  15-31 dni
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.name}>
                  {row.cat && (
                    <React.Fragment>
                      <TableCell align="center" style={{ fontWeight: 'bold' }}>
                        {row.name}
                      </TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                    </React.Fragment>
                  )}
                  {!row.cat && (
                    <React.Fragment>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.hourly} PLN</TableCell>
                      <TableCell align="right">{row.daily} PLN</TableCell>
                      <TableCell align="right">{row.monthly} PLN</TableCell>
                      <TableCell align="right">{row.yearly} PLN</TableCell>
                    </React.Fragment>
                  )}
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
