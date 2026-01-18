export default function Card() {
    return(
        <div className="card">
            <div className="card__titles">
                <h4 className="card__titles--title">Prague</h4>
                <h4 className="card__titles--title">Czech Republic</h4>
            </div>
            <div className="card__container">
                <h1 className="card__container--time">14:00</h1>
                <button className="card__container--button">Hourly forecast</button>
                <div className="card__container--date">
                    <p className="card__container--date--number">13.10.2023</p>
                    <div className="card__container--date--border"></div>
                    <p className="card__container--date--day">Friday</p>
                </div>
                <img className="card__container--img" src="/img/sun.png"/>
                <h3 className="card__container--temp">22℃</h3>
            </div>
            <div className="card__footer">
                <img src="./img/reload.svg" alt="reload" />
                <img src="./img/heart.svg" alt="heart" />

                <button className="card__footer--btn">See more</button>
                <img src="./img/delete.svg" alt="delete" />
            </div>
            
        </div>
    )
}