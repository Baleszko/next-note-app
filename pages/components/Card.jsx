import style from "../../styles/Card.module.css";

function Card({ id, title, body, onClick }) {
  return (
    <div className={style.card} onClick={() => onClick(title, body)}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Card;
