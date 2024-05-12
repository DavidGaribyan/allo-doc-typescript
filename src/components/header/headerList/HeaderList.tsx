import { Link } from 'react-router-dom';
import './headerList.css';
import { useTranslation } from 'react-i18next';

export default function HeaderList() {
  const { t } = useTranslation();
  return (
    <>
      <ul className="nav">
        <Link to="/howToUse" className="nav__link">
          {t('headerList.link_1')}
        </Link>
        <Link to="/myNotes" className="nav__link">
          {t('headerList.link_2')}
        </Link>
        <Link to="/bookDoctor" className="nav__link">
          {t('headerList.link_3')}
        </Link>
      </ul>
    </>
  );
}
