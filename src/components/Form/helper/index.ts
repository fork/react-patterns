export const validateEmail = (value: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

export const arrayToObject = (array: any[], keyField: string): { [key: string]: any } =>
  array.reduce((obj, item) => {
    const newObj = obj;
    newObj[item[keyField]] = item.value;
    return newObj;
  }, {});
