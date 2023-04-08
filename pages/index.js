import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import stockPic from '../images/stockPic.png';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <h1>Welcome to StayConnected</h1>
      <p>We are so glad that you have found us and hope that our online presence can provide you with a glimpse of who we are and what we stand for. Our church community is open and welcoming to everyone, regardless of your background, beliefs, or current life circumstances. <br /> Our mission is to spread love, kindness, and compassion in the world, and we believe that starts with each and every person who walks through our doors or visits us online. We offer a variety of services, programs, and events that are designed to help you grow spiritually, connect with others, and serve our community. So take a look around, get to know us better, and feel free to reach out if you have any questions or if there is anything we can do to support you on your spiritual journey. Thank you for visiting our site, and we hope to see you soon!</p>

      <Image src={stockPic} alt="Church pic" />
    </div>
  );
}

export default Home;
