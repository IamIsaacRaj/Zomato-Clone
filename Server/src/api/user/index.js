import express from "express";
import {UserModel} from "../../database/allModules"
import passport from "passport";

const Router = express.Router();

/**
 * Route    :  /
 * Des      :  Get authorized user data
 * Params   :  none
 * Access   :  private
 * Method   :  GET
 */
Router.get("/",  passport.authenticate("jwt", { session : false }), async (req, res) => {
  try {
    const {_id, email, fullName, phoneNumber, address } = req.user;

    return res.json({ user: {_id, email, fullName, phoneNumber, address, } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /:_id
 * Des       Get user data (for the review system)
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/:_id", async(req,res) => {
  try {
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);

    if(!getUser){
      return res.status(404).json({ error : "user not found"});
    }

    const {fullName} = getUser;

    return res.status(200).json({user : {fullName}})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/**
 * Route     /:_id
 * Des       update user data
 * Params    _id
 * Access    Private
 * Method    put
 */

Router.put("/update/:_id",   passport.authenticate("jwt", { session : false }), async (req,res) =>{
  try {
  const{ _id } = req.params;
  const { userData} = req.body;
  // task validate user data
  userData.password = undefined;

  const updateUserData = await UserModel.findByIdAndUpdate(
      _id,
      {
        $set : userData,
      },
      {
        new : true,
      }
    );

  return res.status(200).json({user : updateUserData});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;