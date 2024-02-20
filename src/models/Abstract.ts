import {FirebaseDatabase} from "../database/Database";
import {QueryFieldFilterConstraint, addDoc, collection, getDocs, query, where} from 'firebase/firestore';

// abstract class to create instance for various collections
export default abstract class AbstractModel {
    // set the collection name
    static collection = null;

    // define properties of timestamps and softDelete
    created_at: Date;
    updated_at: Date | null = null;
    deleted_at: Date | null = null;

    // where conditions
    static whereConditions: QueryFieldFilterConstraint[] = [];

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
        const model_properties = {};
    
        // match the model properties with it's appropriate value
        Object.getOwnPropertyNames(this).forEach((propertyName) => {
            model_properties[propertyName] = this[propertyName];
        });

        // add timestamps and softDelete
        Object.assign(model_properties, {created_at: this.created_at, updated_at: this.updated_at, deleted_at: this.deleted_at});

        try {
            // add document to firestore
            await addDoc(collection(FirebaseDatabase, this.constructor.collection), model_properties);
            return true;
        } catch (err) {
            console.error(err);
        }
    }

    where(field: string, operator, values) {
        this.constructor.whereConditions = [
            ...this.constructor.whereConditions, where(field, operator, values),
        ];

        return this;
    }

    async go() {
        try {
            // create query from chain conditions
            let q = query(collection(FirebaseDatabase, this.constructor.collection), ...this.constructor.whereConditions);

            // array of result;
            let result: object[] = [];

            // run the query
            const querySnapshot = await getDocs(q);
           
            // loop through querySnapshot and get rows 
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                result = [...result, {id: doc.id, data: doc.data()}];
            });

            return result;
        } catch (err) {
            console.log(err);
        }
    }
}