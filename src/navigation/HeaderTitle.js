import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTab';

  switch (routeName) {
    case 'HomeTab':
      return 'Products';
    case 'Likes':
      return 'WishList';
    case 'Carts':
      return 'My Carts';
    default:
      return 'Products';
  }
};
