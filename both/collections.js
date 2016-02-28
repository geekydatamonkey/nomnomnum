import { Mongo } from 'meteor/mongo';

// {
//   _id,
//   name,
//   currentCount,
//   recommendedCount
// };

export const Counters = new Mongo.Collection('counters');
