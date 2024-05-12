import './FooterContent.css';
import Info from './info/Info';
import List from './list/List';
import Contacts from './contacts/Contacts';
import Wrapper from '../header/headerWrapper/Wrapper';

export default function Footer() {
  return (
    <>
      <div className="footer__bg">
        <Wrapper>
          <Info />
          <List />
          <Contacts />
        </Wrapper>
      </div>
    </>
  );
}
