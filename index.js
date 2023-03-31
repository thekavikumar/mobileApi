import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("up and running... ");
});
app.use("/api", userRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "tantrotsav",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("-------------------MONGOOS CONNECTED------------------");
      console.log(`Server running on port: ${PORT}`);
      console.log("-----------------------------------------------------");
    });
  })
  .catch(error => {
    console.log(error.message);
  });

mongoose.set("strictQuery", true);
