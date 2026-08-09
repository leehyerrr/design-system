import fs from "fs";
import * as theme from "../dist/index.js";

const generateThemeCssVariables = () => {
  const cssString = [];
};

Object.entries(theme.vars).forEach(([key, value]) => {
  console.log(key, value.$static);
});

fs.writeFileSync("dist/themes.css", "");
