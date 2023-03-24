import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getGivingStatement = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/giving.json?orderBy="uid"&equalTo="${uid}"`, {
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

const newGift = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/giving.json`, {
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

const updateGift = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/giving/${payload.firebaseKey}.json`, {
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

const deleteGivingStatement = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/giving/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getGivingStatement,
  deleteGivingStatement,
  newGift,
  updateGift,
};
