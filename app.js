import express from "express";
import SequelizeAuto from "sequelize-auto";
import path from "path";
import { t_list } from "./models";
// const listModel = require("./models").t_list;

const app = express();
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname + "/config/sequelize.json"))[env];

const auto = new SequelizeAuto(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: "3306",
    dialect: config.dialect,
    additional: {
      timestamps: false,
    },
  }
);

auto.run((err) => {
  if (err) throw err;
  console.log(auto.tables);
  console.log(auto.foreignKeys);
});

app.get("/", async (req, res, next) => {
  try {
    const list = await t_list.findAll();
    res.send(list);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(err.stack);
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
