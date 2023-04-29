import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import myImg from "@/assets/images/harbdoul.JPG";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={myImg}
          alt="An image showing harbdoul"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Harbdoul</h1>
      <p>
        I blog about web development especially frontend frameworks like reactJS
        and vueJS
      </p>
    </section>
  );
};

export default Hero;
