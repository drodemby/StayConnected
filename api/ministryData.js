import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getMinistries = () => new Promise ((resolve, reject) => {

  fetch(`${dbUrl}/ministry.json`, {
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
})

const newMinsitry = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ministry.json`, {
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

const updateMinistry = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ministry/${payload.firebaseKey}.json`, {
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

const deleteMinstry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ministry/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getMembersByMinistry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/member.json?orderBy="ministry_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleMinistry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ministry/${firebaseKey}.json`, {
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
  newMinsitry,
  updateMinistry,
  deleteMinstry,
  getMinistries,
  getSingleMinistry,
  getMembersByMinistry,
};
