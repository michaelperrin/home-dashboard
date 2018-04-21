export function toQueryString(paramsObject) {
  return Object
    .keys(paramsObject)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
    .join('&')
  ;
};
