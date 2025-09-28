require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose"); // tp connect mongoo
const bodyParser =require("body-parser");
const cors = require("cors");
const authRoutes = require("./Routes/auth.routes");
const authMiddleware = require("./middleware/auth.middleware");
const { HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel")
const PORT = process.env.PORT || 3002; /* to connet mongoo thoroungh .env */
const uri = process.env.MONGO_URL;

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);


// to fetch data of holdings 
app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingsModel.find({}); //empty curly bracket in the find function indicate that we want to find every data or else we can find the the specific data according to the user after authntication 
  res.json(allHoldings); 
}) ;
// to fetch the data of the positions
app.get("/allPosition",async(req,res)=>{
  let allPosition = await PositionsModel.find({}); //empty curly bracket in the find function indicate that we want to find every data or else we can find the the specific data according to the user after authntication 
  res.json(allPosition); 
}) 

app.post('/newOrder',async(req,res)=>{
let newOrder = new OrdersModel({
  name: req.body.name,
  qty: req.body.qty,
  price: req.body.price,
  mode: req.body.mode,
});
await newOrder.save("Order saved!");

res.json({message:"Order saved successfully"});
})

app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome ${req.user.email}, you accessed a protected route!`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mongoose.connect(uri)
    .then(() => console.log("✅ DB connected"))
    .catch((err) => console.error("❌ DB connection error:", err));
});
