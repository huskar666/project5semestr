export default function Card({ data, onDelete }) {
  return(
    <div className="card">
      <div className="card__titles">
        <h4 className="card__titles--title">{data.city}</h4>
        <h4 className="card__titles--title">{data.country}</h4>
      </div>

      <div className="card__container">
        <h1 className="card__container--time">
          {data.date.toLocaleTimeString()}
        </h1>

        <button className="card__container--button">
          Hourly forecast
        </button>

        <div className="card__container--date">
          <p className="card__container--date--number">
            {data.date.toLocaleDateString()}
          </p>
          <div className="card__container--date--border"></div>
          <p className="card__container--date--day">
            {data.date.toLocaleDateString("en-US", { weekday: "long" })}
          </p>
        </div>

        <img
          className="card__container--img"
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        />

        <h3 className="card__container--temp">
          {data.temp}℃
        </h3>
      </div>

      <div className="card__footer">
        <img src="./img/reload.svg" alt="reload" />
        <img src="./img/heart.svg" alt="heart" />
        <button className="card__footer--btn">See more</button>
        <img
          src="./img/delete.svg"
          alt="delete"
          onClick={() => onDelete(data.id)}
        />
      </div>
    </div>
  );
}
