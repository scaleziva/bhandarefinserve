import React, { useState, useEffect } from 'react';

import "../CSS/CoinAnime.css";

//images
import CoinBag from "../Anime Img/coinbag.png";
import CoinLeft from "../Anime Img/coinleft.png";
import CoinRight from "../Anime Img/coinright.png";
import CoinStraight from "../Anime Img/coinStraight.png";


const CoinAnimation = () => {
  // const [coins, setCoins] = useState([]);
  // const [bag, setBag] = useState(false);

  // const handleScroll = () => {
  //   // Check if the bag is visible in the viewport
  //   const bagElement = document.getElementById('bag');
  //   const bagPosition = bagElement.getBoundingClientRect();
  //   const bagTop = bagPosition.top;
  //   const bagBottom = bagPosition.bottom;

  //   if (bagTop < window.innerHeight && bagBottom >= 0) {
  //     // If the bag is visible, move the coins into it
  //     setBag(true);
  //   } else {
  //     setBag(false);
  //   }
  // };

  const [width, setWidth] = useState(2300)
  const [dNone, setDnone] = useState("flex")

  const scrollAnime = () => {
    setWidth(1500 - window.scrollY);
    // 1000 - 2300
    if (window.scrollY >= 1500) {
      setDnone("none")
    }else{
      setDnone("flex")
    }
    //  else if (window.scrollY < 1400) {

    // } else if (window.scrollY < 100) {

    // } else if (window.scrollY < 100) {

    // }
  }

  window.addEventListener("scroll", scrollAnime);

  useEffect(() => {
    scrollAnime();
  }, [])


  return (
    <div className='coinAnimeMain'  >

      {/* {width} */}

      <div style={{display: dNone}} className="coinDiv">
        <div className='coinDivSub' style={{ width: width }} >
          <img id="coin1" className="coinImg" style={{ top: "" }} src={CoinLeft} alt="coin" />
          <img id="coin3" className="coinImg" style={{ top: "" }} src={CoinRight} alt="coin" />
        </div>
        <div className='coinDivSub' style={{ width: width }} >
          <img id="coin1" className="coinImg" style={{ top: "-10px" }} src={CoinLeft} alt="coin" />
          <img id="coin1" className="coinImg" style={{ top: "10px" }} src={CoinLeft} alt="coin" />
          <img id="coin2" className="coinImg" style={{ top: "" }} src={CoinStraight} alt="coin" />
          <img id="coin3" className="coinImg" style={{ top: "-10px" }} src={CoinRight} alt="coin" />
          <img id="coin3" className="coinImg" style={{ top: "10px" }} src={CoinRight} alt="coin" />
        </div>
        <div className='coinDivSub' style={{ width: width }} >
          <img id="coin1" className="coinImg" style={{ top: "5px" }} src={CoinLeft} alt="coin" />
          <img id="coin1" className="coinImg" style={{ top: "-5px" }} src={CoinLeft} alt="coin" />
          <img id="coin3" className="coinImg" style={{ top: "" }} src={CoinRight} alt="coin" />
          <img id="coin3" className="coinImg" style={{ top: "" }} src={CoinRight} alt="coin" />
        </div>
        <div className='coinDivSub' style={{ width: width }} >
          <img id="coin1" className="coinImg" style={{ top: "10px" }} src={CoinLeft} alt="coin" />
          <img id="coin2" className="coinImg" style={{ top: "5px" }} src={CoinStraight} alt="coin" />
          <img id="coin3" className="coinImg" style={{ top: "10px" }} src={CoinRight} alt="coin" />
        </div>

      </div>

      <img id="bag" className='coinBag' src={CoinBag} alt="bag" />

      <center><h2  style={{ position:"relative", top:"50px"}} >QUICK DOCUMENTATION, EASY MONEY</h2></center>

    </div>
  );
};

export default CoinAnimation;


// eslint-disable-next-line no-lone-blocks
{/*
import React, { useState, useEffect } from 'react';

//images
import Coin from "../Anime Img/coinbag.png";

const CoinAnimation = () => {
  const [coins, setCoins] = useState([]);
  const [bag, setBag] = useState(false);

  useEffect(() => {
    // Create an array of coin objects with random positions
    const initialCoins = Array.from({ length: 10 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 500,
    }));
    setCoins(initialCoins);

    // Add an event listener to the window to detect scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if the bag is visible in the viewport
    const bagElement = document.getElementById('bag');
    const bagPosition = bagElement.getBoundingClientRect();
    const bagTop = bagPosition.top;
    const bagBottom = bagPosition.bottom;

    if (bagTop < window.innerHeight && bagBottom >= 0) {
      // If the bag is visible, move the coins into it
      setBag(true);
    } else {
      setBag(false);
    }
  };

  return (
    <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} >
      {coins.map((coin, index) => (
        <img
          key={index}
          src="coin.png"
          alt="coin"
          style={{
            position: 'absolute',
            top: `${coin.y}px`,
            left: `${coin.x}%`,
            transition: 'all 0.5s ease-in-out',
            transform: bag ? 'translateY(500px)' : '',
          }}
        />
      ))}
      <img id="bag" style={{width:"200px", height:"200px"}} src={Coin} alt="bag" />
    </div>
  );
};

export default CoinAnimation;

*/}