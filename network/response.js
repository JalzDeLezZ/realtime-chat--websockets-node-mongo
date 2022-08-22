exports.success = (req, res, msg, stat) => {
  res.status(stat || 200).json({
    error: "success",
    body: msg,
  });
};

exports.error = (req, res, msg, stat, details) => {
  console.log("[response error]" + details);
  res.status(stat).json({
    status: "error",
    message: "Something went wrong" + msg,
  });
};
