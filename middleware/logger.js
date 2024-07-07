//Middleware function is a function that have access to both request and response object
import colors from "colors";
const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };
  const color = methodColors[req.method] || "white";
  console.log(
    `${req.method}  ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;
