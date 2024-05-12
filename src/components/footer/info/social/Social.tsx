import facebook from './socialIcons/facebook.png';
import instagram from './socialIcons/instagram.png';
import youtube from './socialIcons/youtube.png';
import appStore from './appIcons/appStore.png';
import googlePlay from './appIcons/googlePlay.png';
import './social.css';
export default function Social() {
  return (
    <>
      <div className="social__icons">
        <img className="footer__icons" src={facebook} alt="icon"></img>
        <img className="footer__icons" src={instagram} alt="icon"></img>
        <img className="footer__icons" src={youtube} alt="icon"></img>
      </div>
      <div className="app__icons">
        <img className="footer__icons" src={appStore} alt="icon"></img>
        <img className="footer__icons" src={googlePlay} alt="icon"></img>
      </div>
    </>
  );
}
