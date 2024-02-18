import {FirebaseDatabase} from "../database/Database";
import { addDoc, collection } from 'firebase/firestore';

// abstract class to create instance for various collections
export default abstract class AbstractModel {
    // set the collection name
    static collection = null;

    // define properties of timestamps and softDelete
    created_at: Date;
    updated_at: Date | null = null;
    deleted_at: Date | null = null;

    // construct an instance of the collection, not saved
    constructor(...args: any[]) {
        // access to fillables of the child through this.contructor
        let fillables = this.constructor.fillable;

        // match property with the it's value
        [...args].forEach((argValue, argPos) => {
            this[fillables[argPos]] = argValue
        });

        // define a creation timestamp for the instance
        this.created_at = new Date();
    }

    async save() {
        const conversation_properties = {};
    
        // match the model properties with it's appropriate value
        Object.getOwnPropertyNames(this).forEach((propertyName) => {
            conversation_properties[propertyName] = this[propertyName];
        });

        // add timestamps and softDelete
        Object.assign(conversation_properties, {created_at: this.created_at, updated_at: this.updated_at, deleted_at: this.deleted_at});

        try {
            // add document to firestore
            await addDoc(collection(FirebaseDatabase, this.constructor.collection), conversation_properties);
            return true;
        } catch (err) {
            console.error(err);
        }
    }
}