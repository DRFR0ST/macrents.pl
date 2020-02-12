import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  card: {
    '&:hover': {
      borderColor: theme.palette.primary.darker,
    },
    border: `1px solid`,
    borderColor: theme.palette.primary.main,
    borderRadius: '14px',
    cursor: 'pointer',
    margin: '0 10px',
    minWidth: '122px',
    padding: '20px 25px',
    textAlign: 'center',
    transition: 'all 155ms ease',
    userSelect: 'none',
  },
  cardDesc: {
    fontSize: '14px',
  },
  cardTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  selected: {
    background: theme.palette.primary.main,
    color: '#FFF',
  },
}));

export default function Payment({ open = false, handleClose }) {
  const classes = useStyle();

  const [selected, setSelected] = useState(-1);
  const [dateFrom, setDateFrom] = React.useState(new Date());
  const [dateTo, setDateTo] = React.useState(new Date());

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    if (dateTo < date) setDateTo(date);
  };
  const handleDateToChange = (date) => {
    setDateTo(date);

    if (dateFrom > date) setDateFrom(date);
  };
  const handleSelection = (i) => setSelected((v) => (v === i ? -1 : i));

  return (
    <div>
      <Dialog
        maxWidth="md"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Wypożycz auto'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Wybierz pakiet, którym jesteś zainteresowany.
          </DialogContentText>
          <br />
          <div className={classes.root}>
            <div
              onClick={() => handleSelection(0)}
              className={cx(classes.card, {
                [classes.selected]: selected === 0,
              })}
            >
              <div className={classes.cardTitle}>1-3</div>
              <div className={classes.cardDesc}>dni</div>
            </div>
            <div
              onClick={() => handleSelection(1)}
              className={cx(classes.card, {
                [classes.selected]: selected === 1,
              })}
            >
              <div className={classes.cardTitle}>4-7</div>
              <div className={classes.cardDesc}>dni</div>
            </div>
            <div
              onClick={() => handleSelection(2)}
              className={cx(classes.card, {
                [classes.selected]: selected === 2,
              })}
            >
              <div className={classes.cardTitle}>8-14</div>
              <div className={classes.cardDesc}>dni</div>
            </div>
            <div
              onClick={() => handleSelection(3)}
              className={cx(classes.card, {
                [classes.selected]: selected === 3,
              })}
            >
              <div className={classes.cardTitle}>15-31</div>
              <div className={classes.cardDesc}>dni</div>
            </div>
          </div>
          <br />
          <Divider />
          <br />
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Data od"
              format="DD.MM.YYYY"
              value={dateFrom}
              onChange={handleDateFromChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <p style={{ margin: '0 10px' }}> / </p>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Data do"
              format="DD.MM.YYYY"
              value={dateTo}
              onChange={handleDateToChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button
            disabled={selected <= -1}
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Kontynuuj
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
