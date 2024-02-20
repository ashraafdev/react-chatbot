
import AbstractModel from './Abstract';
import { v4 as uuidv4 } from 'uuid';


export default class ConversationId extends AbstractModel {
    constructor(conversationId = null, summary = null, userId = null) {
        if (conversationId === null) conversationId = uuidv4();
        super(conversationId, summary, userId);
    }

    // define collection name
    static collection = "conversationsIds";
    
    // define fillables
    static fillable = ['conversation_id', 'summary', 'user_id'];
    
}