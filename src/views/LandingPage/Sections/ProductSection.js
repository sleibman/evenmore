import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Is this a terrible idea?</h2>
          <h5 className={classes.description}>
            Yes! It{"'"}s pretty dumb. <p />
            This is not a particularly smart training regimen. It{"'"}ll
            probably jump you straight from couch to repetitive stress injury in
            no time, and the weather will be too hot, too cold, too dry, or too
            wet in the month of June, depending on which part of the world you
            live in.
            <p />
            But once you{"'"}ve done this, everything else in life will feel
            easy by comparison. People will laugh at your jokes, your skin will
            have a healthy glow, and when you search for recipes on your phone,
            all the websites will magically be mobile-friendly.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How do I sign up?</h2>
          <h5 className={classes.description}>
            Start by logging in below, and I{"'"}ll be able to share updates
            with you. <br />
            You{"'"}ll be able to record your distance on this website starting
            June 2, or by joining the Strava group at{" "}
            <a href="https://www.strava.com/clubs/evenmore">
              https://www.strava.com/clubs/evenmore
            </a>
            .
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How much does it cost?</h2>
          <h5 className={classes.description}>Nothing.</h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            How many people are doing this thing?
          </h2>
          <h5 className={classes.description}>
            As of May 19... hang on, let me check... One. Just me! And maybe it
            {"'"}ll stay that way. But maybe, just maybe, I{"'"}ll get you to
            join me.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Is there at least a cool t-shirt?</h2>
          <h5 className={classes.description}>
            Maybe! If anybody joins me on this adventure, by the end of June, we
            {"'"}ll have come up with some sort of fun way to show off our
            collective stupidity.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
