/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import { getMinistries } from '../api/ministryData';

// import MinistryCard from '../components/MinistryCard';

export default function Ministry() {
  const [ministries, setMinistries] = useState([]);

  const showAllMinistries = () => {
    getMinistries().then(setMinistries);
  };

  useEffect(() => {
    showAllMinistries();
  }, []);
  return (
    <>
      <h1 className="text-center">Ministries</h1>
      <div
        className="text-center"
        style={{
          display: 'block', width: 700, padding: 30, margin: '0 auto',
        }}
      >
        <Carousel>
          {ministries.map((mini) => (
            <Carousel.Item key={mini.firebaseKey}>
              <h2 className="text-center">
                {mini.ministry_name}
              </h2>
              <img
                className="d-block w-100 text-center"
                src={mini.image}
                alt={mini.ministry_name}
              />
              <h3 className="text-center">
                {mini.description}
              </h3>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

// return (
//   <div>
//     <h1 className="text-center">Ministries</h1>
//     <div className="public-card-container, d-flex flex-wrap">
//       {ministries.map((mini) => (
//         <MinistryCard key={mini.firebaseKey} ministryObj={mini} onUpdate={showAllMinistries} />
//       ))}
//     </div>
//   </div>

// );
// }
