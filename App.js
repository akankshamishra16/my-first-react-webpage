import "./App.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [date, setDate] = useState(moment().format("DD MMMM YYYY"));
  const [time, setTime] = useState(moment().format("hh:mm:ss A"));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment().format("DD MMMM YYYY"));
      setTime(moment().format("hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quotes = [
    "Believe you can and you're halfway there.",
    "The best way to get started is to quit talking and begin doing.",
    "Do not let yesterday take up too much of today.",
    "Your limitation—it is only your imagination.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "Sometimes later becomes never. Do it now.",
    "Success does not just find you. You have to go out and get it.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const scrollCards = (direction) => {
    const container = document.getElementById("cardContainer");
    if (!container) {
      console.error("cardContainer not found");
      return;
    }
    const card = container.querySelector(".card");
    if (!card) {
      console.error("No cards found inside container");
      return;
    }
    const gap = 10; // Must match your CSS gap between cards
    const cardWidth = card.getBoundingClientRect().width + gap;

    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="app-container">
      <header className="header">
        <h1>REACT APP</h1>
        <nav className="nav">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
          <button>Profile</button>
          <button>Settings</button>
        </nav>
      </header>

      <section className="top-bar">
        <div className="box">
          Today's Date
          <br />
          {date}
        </div>
        <div className="box">
          Time
          <br />
          {time}
        </div>

        <div className="box wide">“{quote}”</div>
        <div className="box">
          Weather
          <br />
          <img
            src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"
            alt="weather"
            style={{
              width: "24px",
              verticalAlign: "middle",
              marginRight: "5px",
            }}
          />
          32°C, Clear
        </div>
      </section>

      <section className="card-section">
        <section className="card-carousel">
          <button className="arrow left" onClick={() => scrollCards(-1)}>
            &lt;
          </button>

          <div className="card-wrapper">
            <div className="card-container" id="cardContainer">
              {[...Array(10)].map((_, index) => (
                <div className="card" key={index}>
                  Card {index + 1}
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={() => scrollCards(1)}>
            &gt;
          </button>
        </section>
      </section>

      <div className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}

export default App;
