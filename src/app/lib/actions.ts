

import { MsgTranslation } from './definitions';

export async function translateSrv(
    previousState: MsgTranslation | null,
    formData: FormData) {
    //the previousState variable contains the last recorded value of the user's input
    console.log("previous recorded state: '", previousState, "'");
    //use the formData variable to get values:
    const msg = formData.get("msgInput");
    const lang = formData.get("langSel");

    return { msg: msg, lang: lang, translation: `'${msg}' will be translated to '${lang}'` };

}
