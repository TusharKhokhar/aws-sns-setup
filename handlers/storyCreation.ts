import { retryHandler } from "../retryHandler";

const retryCountAttribute = 3;

export const handler = async (event: any, context: any) => {
  const message = event.Records[0].Sns.Message;
  try {
    console.log("Received SNS message:", message);

    // Accessing event and body
    const eventObj = JSON.parse(message);

    if (eventObj) {
      throw new Error("error");
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
      }),
    };
  } catch (error) {
    console.log("Error in function story creation", error);
    await retryHandler(event, retryCountAttribute, message);
  }
};
