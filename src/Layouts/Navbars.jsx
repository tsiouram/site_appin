import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import "./Layouts.css";
import image from '../../public/img/logo1.png'

const Navbars = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal acc acc1"
      >
        <a href="#" className="flex items-center">
          Accueil
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal  acc"
      >
        <a href="#" className="flex items-center">
          La societé
        </a>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal  acc"
      >
        <a href="#service" className="flex items-center">
          Nos services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal  acc"
      >
        <a href="#equipe" className="flex items-center">
          Notre equipes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal  acc"
      >
        <a href="#portfolio" className="flex items-center">
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal  acc"
      >
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul >
  );

  return (
    <>
      <div className="container mx-auto flex items-center justify-between text-white-900">
        <Typography
          as="a"
          href="#"
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src={image} alt="" width={80} />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          style={{ color: "white" }}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </>
  );
}

export default Navbars