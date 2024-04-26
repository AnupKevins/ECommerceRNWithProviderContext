import Realm from 'realm';
import ProductSchema from '../schemas/product';

const realm = new Realm({schema: [ProductSchema]});

const ProductRepository = {
  addProduct: product => {
    try {
      const existingProduct = realm
        .objects('Product')
        .filtered(`id = ${product.id}`);
      if (existingProduct.length > 0) {
        console.log('Product already exists:', product);
        return; // Product already exists, no need to add it again
      }

      realm.write(() => {
        realm.create('Product', product);
      });
      console.log('Product added successfully:', product);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  },

  deleteProduct: productId => {
    try {
      const productToDelete = realm
        .objects('Product')
        .filtered(`id = ${productId}`);
      if (productToDelete.length === 0) {
        console.log('Product does not exist:', productId);
        return; // Product does not exist, no need to delete
      }

      realm.write(() => {
        realm.delete(productToDelete);
      });
      console.log('Product deleted successfully:', productId);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  },

  getAllProducts: () => {
    return realm.objects('Product');
  },
};

export default ProductRepository;
