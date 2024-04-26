import Realm from 'realm';

class Product extends Realm.Object {} // Extend Realm.Object

Product.schema = {
  name: 'Product',
  properties: {
    id: 'int',
    title: 'string',
    price: 'float',
    description: 'string',
    category: 'string',
    image: 'string',
  },
};

export default Product;
