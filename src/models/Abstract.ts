import {FirebaseDatabase} from "../database/Database";
import {OrderByDirection, QueryFieldFilterConstraint, QueryOrderByConstraint, addDoc, collection, getDocs, orderBy, query, where, doc, updateDoc} from 'firebase/firestore';

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

    // orderBy conditions
    static orderByConditions: QueryOrderByConstraint[] = [];

    static willUpdateAttribues: object = {};

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

    orderBy(column: string, order: OrderByDirection = 'asc') {
        this.constructor.orderByConditions = [
            ...this.constructor.orderByConditions, orderBy(column, order),
        ];

        return this;
    }

    set(paramsToUpdate: any[]) {
        paramsToUpdate.forEach((param) => Object.assign(this.constructor.willUpdateAttribues, param));
        return this;
    }

    async update() {
        try {
            const docData = await this.fetchone();
            const refOfDocument = doc(FirebaseDatabase, this.constructor.collection, docData.id);

            await updateDoc(refOfDocument, this.constructor.willUpdateAttribues);

            this.constructor.whereConditions = [];
            this.constructor.orderByConditions = [];
            this.constructor.willUpdateAttribues = {};

            return true;
        } catch (err) {
            console.log(err)
        }
    }

    async fetchone() {
        try {
            // create query from chain conditions
            let q = query(collection(FirebaseDatabase, this.constructor.collection), ...this.constructor.whereConditions, ...this.constructor.orderByConditions);

            // run the query
            const querySnapshot = await getDocs(q);
            
            this.constructor.whereConditions = [];
            this.constructor.orderByConditions = [];
           
            // get first element
            if (querySnapshot.docs.length) return {id: querySnapshot.docs[0].id, data: querySnapshot.docs[0].data()};
            
            return null;
        } catch (err) {
            console.log(err);
        }
    }

    async fectchall() {
        try {
            // create query from chain conditions
            let q = query(collection(FirebaseDatabase, this.constructor.collection), ...this.constructor.whereConditions, ...this.constructor.orderByConditions);

            // array of result;
            let result: object[] = [];

            // run the query
            const querySnapshot = await getDocs(q);
           
            // loop through querySnapshot and get rows 
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                result = [...result, {id: doc.id, data: doc.data()}];
            });

            this.constructor.whereConditions = [];
            this.constructor.orderByConditions = [];

            return result;
        } catch (err) {
            console.log(err);
        }
    }
}