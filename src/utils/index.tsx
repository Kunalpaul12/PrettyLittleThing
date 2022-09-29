import {PRODUCT_NAME_LENGTH} from '../config';

export const checkName = (name: string) => {
  return name.length > PRODUCT_NAME_LENGTH
    ? name.substring(0, PRODUCT_NAME_LENGTH) + '...'
    : name;
};
