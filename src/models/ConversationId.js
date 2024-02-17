
import AbstractModel from './Abstract';
import { v4 as uuidv4 } from 'uuid';


export default class ConversationId extends AbstractModel {
    constructor(conversationId = null, userId) {
        if (conversationId === null) conversationId = uuidv4();
        super(conversationId, userId);
    }

    // define collection name
    static collection = "conversationsIds";
    
    // define fillables
    static fillable = ['conversation_id', 'user_id'];
    
}