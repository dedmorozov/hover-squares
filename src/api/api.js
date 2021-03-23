const API_URL = 'http://demo1030918.mockable.io/';

export const loadModes = async() => {
  const respone = await fetch(API_URL);

  return respone.json();
};
