import { useEffect, useState } from "react";

export default function Search({ onSearch }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [city, setCity] = useState("");

  useEffect(() =>{
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return(
    <section
      className="search"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/main.png)",
        marginTop: 12,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="search__container">
        <h1 className="search__container--title">Weather dashboard</h1>

        <div className="search__container--info">
          <p className="search__container--info--text1">
            Create your personal list of favorite cities and always be aware of the weather.
          </p>
          <div className="search__container--info--line"></div>
          <p className="search__container--info--text2">
            {currentTime.toLocaleTimeString() + currentTime.toLocaleDateString()}
          </p>
        </div>

        <div className="search__container--searchbox">
          <input
            className="search__container--searchbox--input"
            type="text"
            placeholder="Search location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            className="search__container--searchbox--btn"
            onClick={() => {
              onSearch(city);
              setCity("");
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="#000" strokeWidth="2" />
              <line
                x1="16.65"
                y1="16.65"
                x2="22"
                y2="22"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
