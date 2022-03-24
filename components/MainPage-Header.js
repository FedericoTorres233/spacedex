import React from "react";
import Image from "next/image";
import mainpage from "../public/img/mainpage.jpg";
import pageLogo from "../public/img/pageLogo.png";
import classes from "../styles/MainPage-Header.module.css";
import SearchBar from "./SearchBar";

export default function MainPageHeader({ articles }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.mainpage}>
          <Image
            unoptimized={true}
            src={mainpage}
            alt="Main page picture"
          ></Image>
        </div>
        <div className={classes.title}>
          <Image src={pageLogo} alt="Page Logo" unoptimized={true}></Image>
        </div>
        <SearchBar articles={articles} />
      </header>
    </>
  );
}
