export const fetchList = () => {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => json.message)
    .then(json => Object.keys(json));
};