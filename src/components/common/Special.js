import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import { useLittera } from 'react-littera'

const styles = theme => ({
  rootRight: {
    width: '100vw',
    maxWidth: '100%',
    height: '50vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  rootLeft: {
    width: '100vw',
    maxWidth: '100%',
    height: '50vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  sloganRight: {
    color: '#fff',
    width: '50%',
    textAlign: 'left',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 10%',
    opacity: 0.8,
  },
  sloganLeft: {
    color: '#fff',
    width: '50%',
    textAlign: 'left',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 10%',
    opacity: 0.8,
  },
  imageRight: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: '75%',
    minWidth: '100%',
    height: 'auto',
    transform: 'translateY(-75%)',
  },
  imageRight2: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: '50%',
    minWidth: '100%',
    height: 'auto',
    transform: 'translateY(-50%)',
  },
  imageLeft: {
    position: 'absolute',
    zIndex: -1,
    right: 0,
    top: '85%',
    minWidth: '100%',
    height: 'auto',
    transform: 'translateY(-85%)',
  },
  shadowRight: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, #121212d9 35%, transparent)',
  },
  shadowLeft: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom left, #121212d9 35%, transparent)',
  },
})

const translations = {
  learnMore: {
    en_US: 'Learn more',
    de_DE: 'Mehr erfahren',
    pl_PL: 'Dowiedz się więcej',
  },
  slogan1: {
    pl_PL: 'Wypożycz auto na weekend i zapłać do 10% taniej',
    en_US: 'Rent a car for the weekend and pay up to 10% cheaper',
    de_DE:
      'Mieten Sie ein Auto für das Wochenende und zahlen Sie bis zu 10% günstiger',
  },
  slogan2: {
    pl_PL: 'Dostarcz auto z pełnym bakiem i płać mniej',
    en_US: 'Deliver the car with a full tank and pay less',
    de_DE: 'Bringe das Auto mit vollem Tank zurück und bezahl weniger',
  },
  slogan3: {
    pl_PL: 'Zbieraj punkty lojalnościowe za każdy przejechany kilometr',
    en_US: 'Collect loyalty points for every kilometer driven',
    de_DE: 'Sammeln Sie Treuepunkte für jeden gefahrenen Kilometer',
  },
}

const Special = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <div>
      <div className={classes.rootRight}>
        <div className={classes.sloganRight}>
          <div>
            <h2>{translated.slogan1}</h2>
            <Button size="large" variant="contained" color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
        <div className={classes.shadowRight} />
        <img
          src="https://images.unsplash.com/photo-1551952237-954a0e68786c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          className={classes.imageRight}
          alt="rightpic"
        />
      </div>
      <div className={classes.rootLeft}>
        <div className={classes.shadowLeft} />
        <img
          src="https://source.unsplash.com/ZhEnFcHO0es"
          className={classes.imageLeft}
          alt="centerpic"
        />
        <div className={classes.sloganLeft}>
          <div>
            <h2>{translated.slogan2}</h2>
            <Button
              size="large"
              style={{ float: 'right' }}
              variant="contained"
              color="primary"
            >
              {translated.learnMore}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.rootRight}>
        <div className={classes.sloganRight}>
          <div>
            <h2>{translated.slogan3}</h2>
            <Button size="large" variant="contained" color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
        <div className={classes.shadowRight} />
        <img
          src="https://source.unsplash.com/cTmL8HxP8NQ/"
          className={classes.imageRight2}
          alt="rightpic2"
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(Special)
