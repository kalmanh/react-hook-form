import isObject from './isObject';

interface IObject {
  [key: string]: any;
}

function deepMerge<T extends IObject, U extends IObject>(
  target: T,
  source: U,
): T | U {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  for (const key in source) {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (isObject(targetValue) && isObject(sourceValue)) {
      // @ts-ignore
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
    } else {
      // @ts-ignore
      target[key] = sourceValue;
    }
  }

  return target;
}

export default deepMerge;
