import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const people = new Mongo.Collection('People');


const peopleSchema = new SimpleSchema(
    {
      first: String,
      last: String,
      age: SimpleSchema.Integer,
      city: String
    }
);
people.attachSchema(peopleSchema);
