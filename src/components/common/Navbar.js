import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {withStyles, Button} from "@material-ui/core";
import {useLittera} from "react-littera";
import {withRouter} from "react-router-dom";

import logo from "images/logo.png";

const styles = {
    root: {
        width: "100vw",
        maxWidth: "100%",
        height: "64px",
        background: "#212121",
        position: "relative",
        display: "inline-block"
    },
    content: {

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        maxHeight: "64px",
        padding: "0.5rem 10%"
    },
    logo: {
        maxHeight: "calc(64px - 1rem)",
        width: "auto"
    },
    left: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "50%",
    },
    right: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
    }
};

const tabs = [
    {
        key: "home"
    },
    {
        key: "about"
    },
    {
        key: "pricing"
    },
    {
        key: "contact"
    },
];

const translations = {
        home: {
            en_US: "Home",
            pl_PL: "Strona główna"
        },
        about: {
            en_US: "About",
            pl_PL: "O nas"
        },
        pricing: {
            en_US: "Pricing",
            pl_PL: "Cennik"
        },
        contact: {
            en_US: "Contact",
            pl_PL: "Kontakt"
        }
}

const Navbar = ({ children, classes, history }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [translated] = useLittera(translations);

   return <div className={classes.root}>
       <div className={classes.content}>
        <div className={classes.left}>
        <img className={classes.logo} src={logo} />
            </div>
        <div className={classes.right}>
            {
                tabs.map((e, i) => {

                    const handleClick = () => {
                        setActiveTab(i);
                        history.push(`/${e.key === "home" ? "" : e.key}`);
                    }

                    return <Button color="primary" variant={activeTab === i ? "outlined" : "text"} onClick={handleClick}>{translated[e.key]}</Button>;
                })
            }
            </div>
       </div>
   </div>;
}

Navbar.propTypes = {
   children: PropTypes.node
}

export default withStyles(styles)(withRouter(Navbar));