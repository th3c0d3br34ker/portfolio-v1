import React from "react";
import QuotesCard from "../../components/quoteCard/quoteCard.jsx";
import { quotes } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Quotes() {
  return (
    <div id="quotes">
      <Fade bottom duration={1000} distance="20px">
        <div className="quotes-container" id="workExperience">
          <div>
            <h1 className="quotes-heading">Inspiring Quotes.</h1>
            <div className="quotes-cards-div">
              {quotes.map((card) => {
                return (
                  <QuotesCard
                    cardInfo={{
                      image: card.img,
                      alt: card.alt,
                      text: card.quote,
                      person: card.person,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
