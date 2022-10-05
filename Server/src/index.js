import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

// private route authorization config
import privateRoutingConfig from "./config/route.config";
// import googleAuthConfig from "./config/google.config";
// Database Connection
import ConnectDB from "./database/connection";
import Auth from "./api/auth";
import Food from "./api/food";
import Restaurent from "./api/restaurent";
import User from "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Review from "./api/review";
// import Image from "./api/image";
dotenv.config();

privateRoutingConfig(passport);
// googleAuthConfig(passport);

const zomato = express();

zomato.use(express.json());

//Additional Passport Configuration
zomato.use(session({ secret : "ZomatoApp" }));
zomato.use(passport.initialize());
zomato.use(passport.session())

const PORT = 4000

zomato.get("/", (req , res) => {
  res.json({
    message : "server is running" ,
  });
});
//auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurent", Restaurent);
zomato.use("/User", User);
zomato.use("/menu",Menu);
zomato.use("/order",Order);
zomato.use("/review",Review);
// zomato.use("/image",Image);

zomato.listen(PORT,() => {
  ConnectDB()
  .then(() => {
    console.log("Server is running....!");
  })
  .catch((error) => {
    console.log("Server is running....! but database connection is failed");
    console.log(error);
  })
  
});