import React from "react";
import { withStyles, Typography, Button, Icon } from "@material-ui/core";
import cx from "classnames";

import header_car from "images/header_car2.png";

const styles = theme => ({
    root: {
        height: "calc(100vh - 64px)",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    content: {
        width: "50vw",
        maxWidth: "50%",
        height: "inherit",
        position: "relative",
        overflow: "hidden",
        "& img": {
            height: "inherit"
        }
    },
    left: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        "& div": {
            "& h3": {
                marginBottom: "5px",
                fontWeight: "bold",
                textTransform: "uppercase",
                textDecoration: "underline",
                textDecorationColor: theme.palette.primary.main
            },
            "& p": {
                fontWeight: "light",
                textTransform: "lowercase",
                opacity: 0.8
            },
            padding: "1.5rem",
            maxWidth: "70%"
        }
    },
    "@media (max-width: 700px)": {
        right: {
            display: "none"
        },
        left: {
            width: "100vw",
            maxWidth: "100%"
        }
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
});

const Header = ({classes}) => {

    return <div className={classes.root}>
        <div className={cx(classes.content, classes.left)}>
            <div>
            <Typography variant="h3">Lorem Ipsum</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero purus, volutpat et malesuada sed, sodales vitae ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc blandit metus sed nibh congue, a ultrices erat ultrices. Donec feugiat erat in semper auctor. In hac habitasse platea dictumst.</Typography>
            <br />
            <Button size="large" color="primary" variant="contained">Proceed <Icon size="small" className={classes.rightIcon}>keyboard_arrow_down</Icon></Button>
            </div>
        </div>

        <div className={cx(classes.content, classes.right)}>
            <img src={header_car} />
        </div>
    </div>
}

export default withStyles(styles)(Header);