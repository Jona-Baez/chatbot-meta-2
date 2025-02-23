import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { menuFlow } from "./menuFlow";
import { sendPdfFlow } from "./list_templates/sendPdfFlow";
import { sendVoiceFlow } from "./list_templates/sendVoiceFlow";
import { sendImageFlow } from "./list_templates/sendimageFlow";

export default createFlow ([
    mainFlow,
    menuFlow,
    sendImageFlow,
    sendPdfFlow,
    sendVoiceFlow
]);