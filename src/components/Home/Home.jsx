import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import BgVideo from "../../assets/videos/header.mp4";
import { ExternalLink } from "react-external-link";

export default function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.home_header_container}>
        <video
          data-testid="videoElement"
          src={BgVideo}
          autoPlay
          muted
          loop
          className={classes.header_container_video_bg}
        />
        <div className={classes.bg_overlay}></div>
        <div className={classes.header_container_content}>
          {" "}
          <h1>TasteIT</h1>
          <h3>
            TasteIT is a receipe app which is made in React lessons of REACT22S
            programme.
          </h3>
          <Link to="/recipes">
            <button type="button">Browse recipes</button>
          </Link>
        </div>
        <div className={classes.home_content_container}>
          <div>
            <h2>Looking for some recipes?</h2>
          </div>
          <div className={classes.home_content_container_boxes}>
            <div className={classes.home_content_box}>
              <div className={classes.content}>
                <div className={classes.front}>
                  <h3 className={classes.title}>Browse recipes</h3>
                  <p className={classes.subtitle}>
                    Find your favourites in this collection. You can search
                    receipes based on the name or country
                  </p>
                </div>
                <div className={classes.back}>
                  <Link to="/recipes" className={classes.description}>
                    All recipes
                  </Link>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className={classes.home_content_box}>
                <div className={classes.content}>
                  <div className={classes.front}>
                    <h3 className={classes.title}>Add recipe</h3>
                    <p className={classes.subtitle}>
                      Recipe from your country is missing? No worries, add one!
                    </p>
                  </div>
                  <div className={classes.back}>
                    <Link to="/add_recipe" className={classes.description}>
                      Add recipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className={classes.home_content_box}>
                <div className={classes.content}>
                  <div className={classes.front}>
                    <h3 className={classes.title}>
                      Want to know more about our project?
                    </h3>
                    <p className={classes.subtitle}>
                      Visit our programme homepage
                    </p>
                  </div>
                  <div className={classes.back}>
                    <ExternalLink
                      href="https://www.bc.fi/"
                      className={classes.description}
                    >
                      Business College Helsinki homepage
                    </ExternalLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
