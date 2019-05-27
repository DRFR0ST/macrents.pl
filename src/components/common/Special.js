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
    background: 'linear-gradient(to bottom right, #212121 35%, transparent)',
  },
  shadowLeft: {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom left, #212121 35%, transparent)',
  },
})

const translations = {
  learnMore: {
    en_US: 'Learn more',
    pl_PL: 'Dowiedz się więcej',
  },
  slogan1: {
    pl_PL: 'Wypożycz auto na weekend i zapłać do 20% taniej',
    en_US: 'Rent a car for the weekend and pay up to 20% cheaper',
  },
  slogan2: {
    pl_PL: 'Dostarcz auto z pełnym bakiem i płać mniej',
    en_US: 'Deliver the car with a full tank and pay less',
  },
  slogan3: {
    pl_PL: 'Zbieraj punkty lojalnościowe za każdy przejechany kilometr',
    en_US: 'Collect loyalty points for each kilometer driven',
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
            <Button size="large" variant="outlined" color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
        <div className={classes.shadowRight} />
        <img
          src="https://images.unsplash.com/photo-1551952237-954a0e68786c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          className={classes.imageRight}
        />
      </div>
      <div className={classes.rootLeft}>
        <div className={classes.shadowLeft} />
        <img
          src="https://images.unsplash.com/photo-1553055193-a5529553098f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1382&q=80"
          className={classes.imageLeft}
        />
        <div className={classes.sloganLeft}>
          <div>
            <h2>{translated.slogan2}</h2>
            <Button
              size="large"
              style={{ float: 'right' }}
              variant="outlined"
              color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.rootRight}>
        <div className={classes.sloganRight}>
          <div>
            <h2>{translated.slogan3}</h2>
            <Button size="large" variant="outlined" color="primary">
              {translated.learnMore}
            </Button>
          </div>
        </div>
        <div className={classes.shadowRight} />
        <img
          src="https://images.unsplash.com/photo-1458531534615-e81e99962807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          className={classes.imageRight2}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(Special)
