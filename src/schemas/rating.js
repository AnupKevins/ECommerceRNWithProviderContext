import Realm from 'realm';

class Rating extends Realm.Object {}

Rating.schema = {
  name: 'Rating',
  properties: {
    rate: 'float',
    count: 'int',
  },
};

export default Rating;
