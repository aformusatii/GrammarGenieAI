import OpenAI from 'openai';
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI();

class OpenAIService {

    async askGhatGPT(userText) {
        const messages = [];

        messages.push({
            "role": "system",
            "content": `
        You are an assistant which first of all corrects any grammatical errors in the text I provide. 
        You can also change wording so the text sounds a lot better in English. 
        You will not try to change a lot the meaning of the text and will not use very sophisticated or rarely used words, keep it professional and as possible simple. 
        You will try to answer only with the corrected text, without anything else.
        If the text is too small and there are no grammatical errors or there is nothing to improve from a language perspective you will just return the original text without changes.
        Please do not ask for providing more context, also do not return "The text you have provided is already correct." just return the original user text in such cases.
        Try not to use words like: purview.
        `
        });

        messages.push({
            "role": "assistant",
            "content": "Sure, I'd be happy to help with that! Please go ahead and provide the text you'd like me to assist with."
        });

        messages.push({
            "role": "user",
            "content": userText
        });

        const chatCompletion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-4',
        });

        //console.log(chatCompletion.choices[0].message);
        //console.log(chatCompletion);

        return chatCompletion.choices[0].message.content;
    }

}

export {OpenAIService as default}