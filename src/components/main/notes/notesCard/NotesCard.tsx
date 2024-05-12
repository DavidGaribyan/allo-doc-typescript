import { Link } from "react-router-dom";
import "./NotesCard.css";

interface NotesCardProps {
  user: User[];
}

interface User {
  date_of_birth: string;
  excperience_start_year: number;
  experience: string;
  first_name: string;
  id: number;
  last_name: string;
  near_date: string;
  price: number;
  profile_image: string;
  rating?: number;
  user_categories: UserCategories[];
  connection: string;
}

interface UserCategories {
  id: number;
  user: number;
  category: Category;
}

interface Category {
  description: Description;
  id: number;
  image: string;
  is_active: boolean;
  order: number;
  title: string;
}

interface Description {
  ru: string;
  ro: string;
}

const NotesCard: React.FC<NotesCardProps> = function ({ user }) {
  const scroll = () => {
    window.scroll({ top: 0 });
  };

  return (
    <>
      <div className="notes__wrap">
        {user.map((item, index) => {
          return (
            <div className="notesCard__wrapper" key={index}>
              <div className="notesCard__info" data-doctor={item.id}>
                <div className="notesCard__date-info">
                  <p>Rating: {item.rating} </p>
                  <p className="notesCard__date">
                    Near date: {item.near_date}{" "}
                  </p>
                  <p className="notesCard__date">Price: {item.price}</p>
                  <p className="notesCard__date">{item.connection}</p>
                </div>
              </div>
              <div className="notesCard__main">
                <div className="notesCard__user-info">
                  <Link
                    to={`/doctor/${item.id}`}
                    className="link_doctor"
                    onClick={scroll}
                  >
                    <img
                      alt="avatar"
                      src={item.profile_image}
                      className="avatar_img"
                      data-doctor={item.id}
                    />
                  </Link>
                  <div className="user__info">
                    <p className="user__name">
                      {item.first_name} {item.last_name}
                    </p>
                    <p className="user__staff">
                      {item.user_categories[0].category.description.ru}
                    </p>
                    <p className="user__stage">{item.date_of_birth}</p>
                  </div>
                </div>
                <div className="notesCard__btns">
                  <button className="look__notes">Посмотреть запись</button>
                  <button className="look__order">
                    Посмотреть постановление
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NotesCard;
