const {schedule} = require('@netlify/functions')

const handler = async function(event, context) {
    console.log("Received event:", event)

    return {
        statusCode: 200,
        body: "Hello World!",
    };
};

module.exports.handler = schedule("* * * * *", handler);