import { SNS } from "aws-sdk";
import { invokeSqsFunction } from "./sqsHandler";

const sns = new SNS();

export const retryHandler = async (event, retryCountAttribute, message) => {
  const retryCount =
    parseInt(
      event.Records[0].Sns?.MessageAttributes?.[retryCountAttribute]?.Value
    ) || 0;

  if (retryCount < 3) {
    // retry message
    await sns
      .publish({
        TopicArn: event.Records[0].Sns.TopicArn,
        Message: event.Records[0].Sns.Message,
        MessageAttributes: {
          [retryCountAttribute]: {
            DataType: "String",
            StringValue: `${retryCount + 1}`,
          },
        },
      })
      .promise();
  } else {
    // If the message has not been retried more than 3 times, send it to the DLQ
    console.log(
      "Maximum retry count reached. sending message to DLQ : ",
      message
    );
    await invokeSqsFunction({
      MessageBody: JSON.stringify(message),
      QueueUrl:
        "https://sqs.ap-southeast-1.amazonaws.com/244772785262/campaign-generation-dlq",
    });
  }
};
