import burger from "../Middle/food-burger.jpg" 
import mart from "../Middle/food-mart.jpg" 
import express from "../Middle/food-express.jpg" 
import pabili from "../Middle/food-pabili.png" 
import car from "../Middle/food-car.jpg" 
import deliveryMan from "../Middle/consumer-Deliveryman.png"
import sell from "../Middle/merchan-sell.jpg" 
import payment from "../Middle/merchant-payment.jpg"
import giftCard from "../Middle/enterprise-giftcard.jpg"
import ads from "../Middle/enterprise-ads.jpg"
import map from "../Middle/enterprise-map.png"


export const MiddleDetails = {
  Consumer: [
    {
      title: "Deliveries",  
      label: "Food",
      image: burger,
      description: "Have all your cravings delivered to your doorstep.",
    },
    {
      label: "Mart",
      image: mart,
      description: "Find everything you need—groceries and more.",
    },
    {
      label: "Express",
      image: express,
      description: "Send packages, documents, and beyond.",
    },
    {
      label: "Pabili",
      image: pabili,
      description: "Let our Grab riders buy items for you.",
    },
    {
      title: "Mobility",
      label: "Rides",
      image: car,
      description: "Choose from a variety of vehicles \n to take you from A to B safely."
    },
  ],
  Driver: [
    {
      title: "Earn with Grab",
      label: "Drive with us",
      image: car,
      description: "Be the boss of your own working hours.",
    },
    {
      label: "Deliver with us",
      image: deliveryMan,
      description: "Make deliveries and earn extra income.",
    },
  ],
  Merchant: [
    {
      title: "Grow your business",
      label: "Sell with us",
      image: sell,
      description: "Become a Grab merchant-partner and increase your reach.",
    },
    {
      label: "Payments with us",
      image: payment,
      description: "Simplify transactions with secure cashless payments.",
    },
    {
      label: "Deliver with us",
      image: express,
      description:
        "Big or small items, fulfil your customers' orders seamlessly.",
    },
  ],
  Enterprise: [
    {
      title: "GrabForBusiness",
      label: "Express",
      image: express,
      description: "On-demand package deliveries for your corporate needs.",
    },
    {
      label: "Gift cards",
      image: giftCard,
      description: "For your corporate gifting and promotional needs.",
    },
    {
      label: "Ads",
      image: ads,
      description: "Connect your business with millions, online and offline.",
    },
    {
      title: "GrabMaps",
      label: "Maps",
      image: map,
      description: "The map platform of choice for Southeast Asia and beyond.",
    },
  ],
};
