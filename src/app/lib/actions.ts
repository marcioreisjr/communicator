'use server';
import { MsgTranslation } from './definitions';
import OpenAI from 'openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function translateSrv(
    previousState: any | null,
    formData: FormData) {
    const msg = formData.get("msgInput")?.toString();
    const lang = formData.get("langSel")?.toString();
    if (!msg || !lang) {
        return { msg: msg, lang: lang, translation: 'Please provide a message and a language' };
    }
    const translation = await fetchTranslation(msg, lang);
    const resp = { msg: msg, lang: lang, translation: translation };
    return resp;
}

async function fetchTranslation(msg: string, lang: string): Promise<string> {
    if (!msg || !lang) {
        return 'Please provide a message and a language';
    }
    const apiKey = OPENAI_API_KEY;
    const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
    });

    const userContent = `Provide a translation to the ${lang} language for the
    message between quotation marks below. If the given message is already in
    ${lang} language, then just repeat the message. Provide only the translated
    message, without adding any extra elements, such as quotation marks, if they
    where not in the original message.
    Message: "${msg}"`;

    const messages: any = [
        {
            role: 'system',
            content: 'You are a polyglot expert translator.',
        },
        {
            role: 'user',
            content: userContent,
        },
    ];
    const response = await openai.chat.completions.create({
        // model: 'gpt-3.5-turbo',
        model: 'gpt-4',
        messages: messages,
        max_tokens: 20,
    });
    let translation = response.choices[0].message.content;
    return translation || 'No translation found';
}
