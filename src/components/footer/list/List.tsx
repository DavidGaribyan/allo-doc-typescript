import './list.css';
import { useTranslation } from 'react-i18next';

export default function List() {
  const { t } = useTranslation();
  return (
    <>
      <ul className="footer__list">
        <li>{t('footer.footerListItem_1')}</li>
        <li>{t('footer.footerListItem_2')}</li>
        <li>{t('footer.footerListItem_3')}</li>
        <li>{t('footer.footerListItem_4')}</li>
        <li>{t('footer.footerListItem_5')}</li>
        <li>{t('footer.footerListItem_6')}</li>
      </ul>
    </>
  );
}
