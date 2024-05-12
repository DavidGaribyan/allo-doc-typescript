import email from './contactIcons/email.png';
import place from './contactIcons/place.png';
import clock from './contactIcons/clock.png';
import phone from './contactIcons/phone.png';
import './contact.css';
import { useTranslation } from 'react-i18next';

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <div className="contacts__wrapper">
        <div className="contacts__item">
          <img src={email} alt="icon" />
          <p>{t('footer.contactEmail')}</p>
        </div>
        <div className="contacts__item">
          <img src={place} alt="icon" />
          <p>{t('footer.contactPlace')}</p>
        </div>
        <div className="contacts__item">
          <img src={clock} alt="icon" />
          <p>{t('footer.contactTime')}</p>
        </div>
        <div className="contacts__item">
          <img src={phone} alt="icon" />
          <p>{t('footer.contactPhone')}</p>
        </div>
      </div>
    </>
  );
}
