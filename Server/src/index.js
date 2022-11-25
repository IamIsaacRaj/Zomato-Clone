import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import helmet from "helmet"

// private route authorization config
import privateRoutingConfig from "./config/route.config";
// import googleAuthConfig from "./config/google.config";

// Database Connection
import ConnectDB from "./database/connection";
import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Review from "./api/review";
import Image from "./api/image";

dotenv.config();

privateRoutingConfig(passport);
// googleAuthConfig(passport);

const zomato = express();

//Additional Passport Configuration
zomato.use(cors({ origin: "http://localhost:3000" }));
zomato.use(helmet());
zomato.use(express.json());
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
zomato.use("/restaurant", Restaurant);
zomato.use("/User", User);
zomato.use("/menu",Menu);
zomato.use("/order",Order);
zomato.use("/review",Review);
zomato.use("/image",Image);

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