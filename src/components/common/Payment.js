import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { KeyboardDatePicker } from '@material-ui/pickers';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { useEmailSubmit } from '../../api/hooks';
import moment from 'moment';

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

export default function Payment({ open = false, handleClose, product = {} }) {
  const classes = useStyle();

  const [formStatus, formApi] = useEmailSubmit({ template_id: 'product_form' });

  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [prefCom, setPrefCom] = useState('tel');

  const [selected, setSelected] = useState(-1);
  const [dateFrom, setDateFrom] = React.useState(new Date());
  const [dateTo, setDateTo] = React.useState(new Date());
  const [stage, setStage] = React.useState(0);

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    if (dateTo < date) setDateTo(date);
  };
  const handleDateToChange = (date) => {
    setDateTo(date);

    if (dateFrom > date) setDateFrom(date);
  };
  const handleSelection = (i) => setSelected((v) => (v === i ? -1 : i));

  const handleNext = () => {
    setStage((v) => v + 1);
  };
  const handlePrev = () => {
    setStage((v) => v - 1);
  };

  const handleSubmit = () => {
    let dFr = '';
    let dTo = '';

    try {
      dFr = dateFrom ? moment(dateFrom).format('LL') : '';
      dTo = dateTo ? moment(dateTo).format('LL') : '';
    } catch (err) {
      console.error(err);
    }

    const vals = {
      dateFrom: dFr,
      dateTo: dTo,
      email,
      name,
      phone: tel,
      prefCom,
      product: product.name,
      surName,
    };

    formApi.submit(vals);
    handleNext();
  };

  let content = React.Fragment;

  if (stage === 0)
    content = (
      <React.Fragment>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button
            disabled={selected <= -1}
            onClick={handleNext}
            color="primary"
            autoFocus
          >
            Kontynuuj
          </Button>
        </DialogActions>
      </React.Fragment>
    );

  if (stage === 1)
    content = (
      <React.Fragment>
        <DialogTitle id="alert-dialog-title">{'Wypożycz auto'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Wprowadź wymagane dane osobowe
          </DialogContentText>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 15 }}>
            <TextField
              variant="outlined"
              style={{ width: 'calc(50% - 10px)', marginRight: 10 }}
              label="Imię"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              type="text"
            />
            <TextField
              variant="outlined"
              style={{ width: '50%' }}
              label="Nazwisko"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <TextField
            variant="outlined"
            fullWidth
            label="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            style={{ marginBottom: 15 }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Telefon"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            type="tel"
          />
          <br />
          <br />
          <Typography>Preferowana komunikacja</Typography>
          <RadioGroup
            aria-label="pref_comm"
            name="pref_comm1"
            value={prefCom}
            onChange={(e) => setPrefCom(e.target.value)}
          >
            <FormControlLabel
              color="primary"
              value="tel"
              control={<Radio />}
              label="Telefon"
            />
            <FormControlLabel
              color="primary"
              value="email"
              control={<Radio />}
              label="E-Mail"
            />
          </RadioGroup>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog-from"
              minDate={new Date()}
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
              id="date-picker-dialog-to"
              minDate={new Date()}
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
          <Button onClick={handlePrev} color="primary">
            Wróć
          </Button>
          <Button
            disabled={
              !name || !surName || !email || !tel || !dateTo || !dateFrom
            }
            onClick={handleNext}
            color="primary"
            autoFocus
          >
            Kontynuuj
          </Button>
        </DialogActions>
      </React.Fragment>
    );

  if (stage === 2) {
    let dFr = '';
    let dTo = '';

    try {
      dFr = dateFrom ? moment(dateFrom).format('LL') : '';
      dTo = dateTo ? moment(dateTo).format('LL') : '';
    } catch (err) {
      console.error(err);
    }

    content = (
      <React.Fragment>
        <DialogTitle id="alert-dialog-title">{'Wypożycz auto'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Upenij się, że wszystko się zgadza
          </DialogContentText>
          <img src={product.sideImageUrl} alt="vehicle" />
          <Typography>Pojazd: {product.name}</Typography>
          <Typography>Minimalna cena: {product.priceList[0]}</Typography>
          <br />
          <br />
          <Typography>Imię: {surName}</Typography>
          <Typography>Nazwisko: {name}</Typography>
          <Typography>E-Mail: {email}</Typography>
          <Typography>Telefon: {tel}</Typography>
          <Typography>
            Okres: {dFr} - {dTo}
          </Typography>
          <Typography>Preferowana komunikacja: {prefCom}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrev} color="primary">
            Wróć
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Prześlij
          </Button>
        </DialogActions>
      </React.Fragment>
    );
  }

  if (stage === 3) {
    let ct = <React.Fragment />;
    console.log(formStatus);
    if (formStatus.status === 'pending') {
      ct = (
        <React.Fragment>
          <Alert severity="info">{formStatus.message}</Alert>
        </React.Fragment>
      );
    } else if (formStatus.status === 'success') {
      ct = (
        <React.Fragment>
          <Alert severity="success">{formStatus.message}</Alert>
        </React.Fragment>
      );
    } else if (formStatus.status === 'failed') {
      ct = (
        <React.Fragment>
          <Alert severity="error">{formStatus.message}</Alert>
        </React.Fragment>
      );
    }

    content = (
      <React.Fragment>
        <DialogContent>{ct}</DialogContent>
        <DialogActions>
          {formStatus.status === 'failed' && (
            <Button onClick={handlePrev} color="primary">
              Wróć
            </Button>
          )}
          <Button
            disabled={
              formStatus.status !== 'success' && formStatus.status !== 'failed'
            }
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Zamknij
          </Button>
        </DialogActions>
      </React.Fragment>
    );
  }

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
        {content}
      </Dialog>
    </div>
  );
}
