// handler.ts

import { SNS } from "aws-sdk";

const sns = new SNS();

export const handler = async (event: any, context: any) => {
  try {
    console.log("dqlHandler event====", event);
    await new Promise((r) => setTimeout(r, 120000));

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "success",
      }),
    };
  } catch (error) {
    console.log("Error in dqlHandler : ", error);
  }
};
