const generateProducts = (products: any) => {
  let _products = products
    .map(
      ({ name, whatDoesItDo, HowDoesItWork, benefits }, index) =>
        `Solution ${
          index + 1
        }:\nName: ${name}\nDescription: ${whatDoesItDo}\nHow it works: ${HowDoesItWork}\nBusiness Benefits: ${benefits}`
    )
    .join("\n\n");
  return _products;
};

export const getSequence = (data, sequenceType) => {
  const {
    companyName,
    prospectCompanyName,
    products,
    userName,
    prospectName,
    jobTitle,
    companyWebsite,
    prospectCompanyWebsite,
    prospectCompanyJobRole,
    numberOfSlides = 5,
    numberOfSeconds = 90,
    tone,
    companyAbout,
    whatCompanyDoes,
  } = data;
  if (sequenceType === "A") {
    return [
      `Great! To ensure that you are familiar with all of the products, solutions and services offered by ${companyName}, below is a summary of all their solutions for context:\n\n${generateProducts(
        products
      )}\n\nDo you understand this context?`,

      `Great! I want you to imagine your name is ${userName}, a successful ${jobTitle} that works for ${companyName} (${companyWebsite}), yet you still somehow possess all the knowledge of ChatGPT!\n\nYou are looking to record and send a personalised video message to pitch your products & services to a new prospect called ${prospectName}.\n${prospectName} works for ${prospectCompanyName} (${prospectCompanyWebsite}). The prospect does not know you and has not heard of ${companyName} before. You will be communicating with the prospect for the first time!\n\nUsing your knowledge of both companies, please write a video voiceover script to pitch the value of ${companyName} and its solutions to ${prospectCompanyName}. It is essential that you use your extensive knowledge of ${prospectCompanyName} to identify areas where the Vonage solutions are most relevant to ${prospectCompanyName}?\n\nImportant Task Criteria:\n\nIt is critical that the script does not exceed 170 words in total length!\nPlease ONLY showcase the ${companyName} solutions that you think are the most relevant to Lazada!\nThe script should be written in the tone of ...!\nThe script should have a super smooth and contextual transition between each paragraph.\nThe call-to-action should be a meeting with ${prospectCompanyName}.\n\nDo you understand the task?`,

      `Great! Using all the context outlined before, please complete the task!`,
    ];
  }
  if (sequenceType === "B") {
    return [
      `Great! To ensure that you are familiar with all of the products, solutions and services offered by ${companyName}, below is a summary of all their solutions for your reference:\n\n${generateProducts(
        products
      )}\n\nDo you understand?`,

      `Great! I want you to imagine your name is ${userName}, a successful ${jobTitle} that works for ${companyName} (${companyWebsite}). You are looking to record and send a personalised video message to pitch your products & services to a new prospect called ${prospectName}.${prospectName} works for ${prospectCompanyName}. ${prospectCompanyName} is a company in the ${prospectCompanyJobRole} industry.\n\nThe prospect does not know you and has not heard of ${companyName} before. You will be communicating with the prospect for the first time!\n\nUsing your knowledge of ${companyName} as well as your knowledge of the ${prospectCompanyJobRole} industry, please write a video voiceover script to pitch the products and services of ${companyName} to ${prospectCompanyName}.\n\nTask Criteria:\nThe script has to be ${numberOfSlides} slides in total length.\nYou need to use your knowledge of both ${companyName} and the ${prospectCompanyJobRole} Industry to only propose solution ideas that have a clear and tangible benefit for companies like ${prospectCompanyName} in the ${prospectCompanyJobRole} industry, and these benefits need to be clearly detailed.\nThe script needs to be written using a tone that is ${tone}.\nThe script has to be ${numberOfSeconds} seconds in total length.\nThe script has to have a seamless and contextual transition from one slide to the next.\nThe call-to-action is to push for a meeting with ${prospectCompanyName}. Be sure to include this in the script.\n\nDo you understand the task?`,

      `Great! Please complete the task!`,
    ];
  }
  if (sequenceType === "C") {
    return [
      `Great! To ensure that you are familiar with ${companyName}, as well as the products, solutions and services offered by them, below is a detailed summary of who ${companyName} are, what they do as a business and a detailed description of every product, solution and service offered by them:\n\nWho are ${companyName}:\n${companyAbout}\n\nWhat ${companyName} Does:\n${whatCompanyDoes}\n\nSolutions offered by ${companyName}:\n\n${generateProducts(
        products
      )}\n\nDo you understand?`,

      `Great! I want you to imagine your name is ${userName}, a successful ${jobTitle} that works for ${companyName} (${companyWebsite}). You are looking to record and send a personalised video message to pitch your products & services to a new prospect called ${prospectName}.${prospectName} works for ${prospectCompanyName}. ${prospectCompanyName} is a company in the ${prospectCompanyJobRole} industry.\n\nThe prospect does not know you and has not heard of ${companyName} before. You will be communicating with the prospect for the first time!\n\nUsing your knowledge of ${companyName} as well as your knowledge of the ${prospectCompanyJobRole} industry, please write a video voiceover script to pitch the products and services of ${companyName} to ${prospectCompanyName}.\n\nTask Criteria:\nThe script has to be ${numberOfSlides} slides in total length.\nYou need to use your knowledge of both ${companyName} and the ${prospectCompanyJobRole} Industry to only propose solution ideas that have a clear and tangible benefit for companies like ${prospectCompanyName} in the ${prospectCompanyJobRole} industry, and these benefits need to be clearly detailed.\nThe script needs to be written using a tone that is ${tone}.\nThe script has to be ${numberOfSeconds} seconds in total length.\nThe script has to have a seamless and contextual transition from one slide to the next.\nThe call-to-action is to push for a meeting with ${prospectCompanyName}. Be sure to include this in the script.\n\nDo you understand the task?`,

      `Great! Please complete the task!`,
    ];
  }
};

export const getSequenceType = (result1: string, result2: string) => {
  if (
    result1.toLocaleLowerCase() === "yes." &&
    result2.toLocaleLowerCase() === "yes."
  ) {
    return "A";
  } else if (
    result1.toLocaleLowerCase() === "yes." &&
    result2.toLocaleLowerCase() === "no."
  ) {
    return "B";
  } else if (
    result1.toLocaleLowerCase() === "no." &&
    result2.toLocaleLowerCase() === "no."
  ) {
    return "C";
  } else {
    return null;
  }
};
