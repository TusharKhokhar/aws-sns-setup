import { retryHandler } from "../retryHandler";
import { SES } from "aws-sdk";
import { generateParams } from "../utils";

const ses = new SES({ region: "ap-southeast-1" });

const retryCountAttribute = 3;

export const handler = async (event: any, context: any, callback: any) => {
  // const message = event.Records[0].Sns.Message;
  // console.log("event====", event);
  // console.log("context====", context);
  // console.log("callback=====", callback);

  try {
    // console.log("Received SNS message:", message);

    // // Accessing event and body
    // const eventObj = JSON.parse(message);
    // const params = generateParams();
    // await ses.sendEmail(params).promise();
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     message: "Success",
    //   }),
    // };
    await new Promise((r) => setTimeout(r, 31000));
  } catch (error) {
    console.log("Error in function sendEmail : ", error);
    // await retryHandler(event, retryCountAttribute, message);
  }
};
