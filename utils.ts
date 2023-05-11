import { emailTemplate } from "./emailTemplate";
import axios from "axios";
// import { sequences } from "./constants/sequences";

export const generateParams = () => {
  const params = {
    Destination: {
      ToAddresses: ["ja@nlstech.net"], // Recepient Email
    },
    Message: {
      Body: {
        Html: {
          Data: emailTemplate(),
        },
      },
      Subject: {
        Data: "TEST",
      },
    },
    Source: "LeadTailor@leadtailor.debugme.in", // sender email address
  };
  return params;
};

export const getTopicArn = (type: string) => {
  switch (type) {
    case "create_story":
      return "arn:aws:sns:ap-southeast-1:244772785262:story_creation";
    case "create_audio":
      return "";
    case "create_video":
      return "";
    case "send_email":
      return "arn:aws:sns:ap-southeast-1:244772785262:send_email";
    default:
      return "";
  }
};

export const getTypeList = () => {
  return ["create_story", "create_audio", "create_video", "send_email"];
};

const generatePromptValue = (promptValue: any) => {
  let promptValueType = typeof promptValue;
  if (promptValueType === "string") {
    return [
      {
        role: "user",
        content: promptValue,
      },
    ];
  } else {
    return promptValue.map((ele: string) => {
      return {
        role: "user",
        content: ele,
      };
    });
  }
};

export const prompt = async (promptValue: string | string[]) => {
  try {
    let promptValueType = typeof promptValue;
    if (promptValueType !== "string" && promptValueType !== "object") {
      return {
        data: null,
        error: "Invalid prompt value",
      };
    }
    const promptPayload = {
      model: "gpt-3.5-turbo",
      messages: generatePromptValue(promptValue),
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      promptPayload,
      {
        headers: {
          Authorization:
            "Bearer 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",
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error in prompt function : ", error);
    return error;
  }
};

export const getMessageContent = (response: any) => {
  if (response?.data?.choices?.[0]?.message?.content) {
    return response.data.choices[0].message.content;
  }
  return null;
};
