import { where } from 'firebase/firestore';
import AbstractModel from './Abstract';

export default class ConversationText extends AbstractModel {
    
    
    constructor(conversationId, content, write_by) {
        super(conversationId, content, write_by);
    }

    // define collection name
    static collection = "conversationsTexts";
    
    // define fillables
    static fillable = ['conversationId', 'content', 'write_by'];
}