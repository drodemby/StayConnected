// import { memo } from 'react';
import { deleteSingleMinistry, getMembersByMinistry, getSingleMinistry } from './ministryData';
import { deleteSingleMember, getSingleMember } from './volunteerData';

const viewMinistryDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMinistry(firebaseKey).then((ministry) => {
    getMembersByMinistry(ministry.firebaseKey)
      .then((ministryMembers) => resolve({ ...ministry, ministryMembers }));
  }).catch(reject);
});

const viewMemberDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(firebaseKey).then((member) => {
    getSingleMinistry(member.firebaseKey)
      .then((memberData) => resolve({ ...member, memberData }));
  }).catch(reject);
});

const deleteMinistryMembers = (ministryId) => new Promise((resolve, reject) => {
  getMembersByMinistry(ministryId).then((memberArray) => {
    // console.warn(meberArray, 'Board Pins');
    const deleteMemberPromises = memberArray.map((member) => deleteSingleMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteSingleMinistry(ministryId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewMinistryDetails, deleteMinistryMembers, viewMemberDetails };
