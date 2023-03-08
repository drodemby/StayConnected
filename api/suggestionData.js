import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getSuggestions = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/suggestions.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const newSuggestions = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/suggestions.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateSuggestions = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/suggestions/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteSuggestions = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/suggestions/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleSuggestion = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/suggestions/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});
export {

  getSuggestions,
  getSingleSuggestion,
  newSuggestions,
  deleteSuggestions,
  updateSuggestions,

};
