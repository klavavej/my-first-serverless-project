const { schedule } = require("@netlify/functions");

exports.handler = schedule("0 0 * * *", async (event, context) => {
  console.log("Hello, World!");
  return {
    statusCode: 200,
  };
});
