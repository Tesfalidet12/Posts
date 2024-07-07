const errorHandler = (err, req, res, next) => {
  if (res.status) {
    res.json(err.message);
  } else {
    res.status(500).json({ msg: "Server Error" });
  }
};
export default errorHandler;
