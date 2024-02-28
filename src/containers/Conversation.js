import ConversationId from "../models/ConversationId";
import ConversationText from "../models/ConversationText";

export async function CreateConversation(conversationId, summary, userId) {
    try {
        let converation = new ConversationId(conversationId, summary, userId);
        await converation.save();
        
        return converation.conversation_id;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function RetreiveConversationText(conversationId, convesationState) {
    try {
        let conversations = await (new ConversationText()).where('conversationId', "in", [conversationId]).orderBy('created_at', 'asc').fectchall();
        convesationState(conversations);
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function UpdateConversation(conversationId, ...willUpdatedAttributes) {
    try {
        await (new ConversationId()).where('conversation_id', '==', conversationId).set(willUpdatedAttributes).update();
        return true;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function ReteriveConversationData(conversationId) {
    try {
        const conversationData = await (new ConversationId()).where('conversation_id', '==', conversationId).fetchone()
        console.log(conversationData);
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function AddConversation(conversationId, content, writeBy) {
    try {
        await (new ConversationText(conversationId, content, writeBy)).save();
    } catch (err) {
        throw new Error(err.message);
    }
}