import { SQS } from "aws-sdk";

export const invokeSqsFunction = async (body: any) => {
  try {
    const sqs = new SQS({});
    const response = await sqs
      .sendMessage({
        ...body,
      })
      .promise();
    console.log("Added to queue", response);
  } catch (error) {
    console.log("Error in invokeSqsFunction", error);
  }
};
