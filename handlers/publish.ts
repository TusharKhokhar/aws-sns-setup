// handler.ts

import { SNS } from "aws-sdk";
import { getTopicArn, getTypeList } from "../utils";

const sns = new SNS();

export const handler = async (event: any, context: any) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "request body is missing",
        }),
      };
    }
    const body = JSON.parse(event.body);
    const { type } = body;
    if (!getTypeList().includes(type)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid type value.",
        }),
      };
    }
    const params = {
      TopicArn: getTopicArn(type),
      Message: JSON.stringify({ status: "success" }),
    };
    const res = await sns.publish(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: res,
      }),
    };
  } catch (error) {
    console.log("Error in publish function : ", error);
  }
};
