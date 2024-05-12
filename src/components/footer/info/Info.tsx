import Logo from '../../header/Logo/logoFooter.png';
import Social from './social/Social';
import './info.css';
import { useTranslation } from 'react-i18next';

export default function Info() {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer__info-wrapper">
        <img src={Logo} className="footer__logo" alt="logo" />
        <p className="footer__info-text">{t('footer.footerInfo_1')}</p>
        <p className="footer__info-text">{t('footer.footerInfo_2')}</p>
        <Social />
      </div>
    </>
  );
}
