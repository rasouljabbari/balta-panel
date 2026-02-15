import * as yup from 'yup';

export const addMenuInitialValues = {
  name: '',
  default_packaging_id:undefined, 
};

export const addMenuResolver = yup.object({
    name: yup.string().required(),
    default_packaging_id: yup.number().required(),
});

export type addMenuValuesTypes = yup.InferType<typeof addMenuResolver>;

export const addCategoryInitialValues = {
  name: '',
  order_limit: 'based_off_contract',
};

export const addCategoryResolver = yup.object({
    name: yup.string().required(),
    order_limit: yup.string().required(),
});

export type addCategoryValuesTypes = yup.InferType<typeof addCategoryResolver>;

export const addPackageInitialValues = {
  name: '',
  price: undefined,
};

export const addPackageResolver = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
});

export type addPackageValuesTypes = yup.InferType<typeof addPackageResolver>;