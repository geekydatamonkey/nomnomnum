import { Meteor } from 'meteor/meteor';
import { Counters } from '../both/collections';

const defaultCounters = [
  {
    name: 'Veggies',
    currentCount: 0,
    recommendedCount: 10,
  },
  {
    name: 'Fruits',
    currentCount: 0,
    recommendedCount: 10,
  },
  {
    name: 'Protein',
    currentCount: 0,
    recommendedCount: 5,
  },
  {
    name: 'Carbs',
    currentCount: 0,
    recommendedCount: 4,
  },
  {
    name: 'Fats',
    currentCount: 0,
    recommendedCount: 3,
  },
  {
    name: 'Sugar',
    currentCount: 0,
    recommendedCount: 1,
  },
];

function initializeCounters(counters) {
  counters.forEach(counter => Counters.insert(counter));
}

Meteor.startup(() => {
  if (Counters.find().count() === 0) {
    initializeCounters(defaultCounters);
  }
});
