import { Link } from 'react-router-dom';
import bookDocImg from './bookDocimg.png';
import './bookDoctor.css';
import { useTranslation } from 'react-i18next';

export default function BookDoctor() {
  const { t } = useTranslation();
  return (
    <>
      <div className="book__wrapper">
        <img className="book__img" src={bookDocImg} alt="img" />
        <div>
          <h3 className="book__heading">{t('bookDoctor.bookHeading')}</h3>
          <p className="book__text">{t('bookDoctor.bookText')} </p>
          <ul className="book__list">
            <li>{t('bookDoctor.bookListItem_1')}</li>
            <li>{t('bookDoctor.bookListItem_2')}</li>
            <li>{t('bookDoctor.bookListItem_3')}</li>
          </ul>
          <button className="book__btn">{t('bookDoctor.bookBtn')}</button>
        </div>
      </div>
      <Link to="/myNotes" className="myBooks__btn">
        {t('doctorCards.myBooks')}
      </Link>
    </>
  );
}
