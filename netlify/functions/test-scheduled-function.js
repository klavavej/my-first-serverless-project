const { schedule } = require("@netlify/functions");

exports.handler = schedule("* * * * *", async (event, context) => {
  console.log("Hello, World!");
  return {
    statusCode: 200,
  };
});