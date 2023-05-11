import { PrismaClient } from "@prisma/client";
import { getSequence, getSequenceType } from "../constants/sequences";
import { getMessageContent, prompt } from "../utils";

const prisma = new PrismaClient();

const getPrimingQuestion = (companyName: string, companyWebsite: string) => {
  return `Do you know what the company ${companyName} (${companyWebsite}) does? Only answer Yes or No?`;
};

export const handler = async (event: any, context: any, callback: any) => {
  try {
    // const body = JSON.parse(event.Records[0].body);
    // const { name: companyName, website: companyWebsite } = body.detail.company;

    // const [res1, res2]: any = await Promise.all([
    //   prompt(getPrimingQuestion("Vonage API Group", "www.vonage.com")),
    //   prompt(getPrimingQuestion("Lazada", "www.lazada.com")),
    // ]);

    // const companyPromptResult = getMessageContent(res1);
    // const prospectPromptResult = getMessageContent(res2);
    // if (companyPromptResult && prospectPromptResult) {
    //   const sequenceType = getSequenceType(
    //     companyPromptResult,
    //     prospectPromptResult
    //   );
    //   if (!sequenceType) {
    //     throw new Error("Unable to find sequence");
    //   }

    //   const sequenceData = {
    //     companyName: "Vonage API Group",
    //     prospectCompanyName: "Lazada",
    //     products: [
    //       {
    //         name: "In-App Voice API",
    //         whatDoesItDo:
    //           "An API and SDK for embedding VoIP voice calling within any mobile app or website.",
    //         HowDoesItWork:
    //           "It allows for VoIP voice calls to be routed from the embedded mobile app or website, to any voice end-point such as a traditional PBX call center, mobile or landline telephone number, SIP, web application or mobile application.",
    //         benefits:
    //           "It allows businesses to provide a simple click-to-call button within any application or website so that their customers can call them from anywhere in the world for free using an internet connection. Or for the business to call customers directly to their mobile app or website using VoIP, which is more secure, more cost effective and much more contextual as the business will likely already have the customers app data.",
    //       },
    //       {
    //         name: "Messages API",
    //         whatDoesItDo:
    //           "A single API for sending programmatic communication over popular social messaging channels such as WhatsApp, SMS, Viber & Facebook Messenger.",
    //         HowDoesItWork:
    //           "A vonage customer simply calls the Messages API, provides details of the message body they want to send, the messaging channel they want to send to and the mobile number. Vonage then processes that request and delivers the message using the messages API",
    //         benefits:
    //           "This helps businesses programmatically send communication to customers and staff over popular social messaging channels that are more likely to be seen and read.",
    //       },
    //     ],
    //     userName: "Mina Samaan",
    //     prospectName: "Amir",
    //     jobTitle: "Sales Manager",
    //     companyWebsite: "www.vonage.com",
    //     prospectCompanyWebsite: "www.Lazada.com",
    //   };

    //   const sequence = getSequence(sequenceData, sequenceType);

    //   const scriptRes = await prompt(sequence);
    //   const script = getMessageContent(scriptRes);

    //   console.log("======================");
    //   console.log(script);
    //   console.log("======================");
    // }

    const a = 10;
    console.log("Start=====");

    await new Promise((r) => setTimeout(r, 120000));

    console.log("End=====");

    if (a) {
      throw new Error("Error Test");
    }
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     message: "success",
    //   }),
    // };
  } catch (error) {
    console.log("Error in scriptGeneration : ", error);
    callback(error);
  }
};
