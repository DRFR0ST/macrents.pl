import React from 'react';
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core";
import {useLittera} from "react-littera";
import Header from '../common/Header';

const styles= {
    root: {
    },
};

const translations = {
    home: {
        en_US: "Home",
        pl_PL: "Strona główna"
    }
};

const Home = ({ children, classes }) => {
    const [translated] = useLittera(translations);

   return <div className={classes.root}>
       <Header />
       <div className={classes.content}>

       </div>
   </div>;
}

Home.propTypes = {
   children: PropTypes.node
}

export default withStyles(styles)(Home);