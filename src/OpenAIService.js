import OpenAI from 'openai';
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI();

const SYSTEM_CONTEXT = `
You are an assistant which first of all corrects any grammatical errors in the text I provide. 
You can also change wording so the text sounds a lot better in English, but you will try to keep original meaning as much as possible. 
You will not use very sophisticated or rarely used words. 
You will try to answer only with the corrected text, without explicitly explaining if the text contains grammatical errors or not.
If the text is too small and there are no grammatical errors or there is nothing to improve from a grammatical or language perspective you will just return the original text without changes.
Please do not ask for providing more context, also do not return "The text you have provided is already correct." just return the original user text in such cases.
Try not to use words like: purview.
`.trim();

class OpenAIService {

    async askGhatGPT(userText) {
        const messages = [];

        messages.push({
            "role": "system",
            "content": SYSTEM_CONTEXT
        });

        messages.push({
            "role": "assistant",
            "content": "Sure, I'd be happy to help with that! Please go ahead and provide the text you'd like me to assist with."
        });

        const finalUserText = `Find below the text which needs to be reviewed and maybe corrected:\n${userText}`;

        messages.push({
            "role": "user",
            "content": finalUserText
        });

        const chatCompletion = await openai.chat.completions.create({
            messages: messages,
            model: 'gpt-4',
            //model: 'gpt-3.5-turbo',
            temperature: 1
        });

        //console.log(chatCompletion.choices[0].message);
        //console.log(chatCompletion);

        return chatCompletion.choices[0].message.content;
    }

}

export {OpenAIService as default}