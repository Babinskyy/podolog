import React, { Component, useEffect, useState } from "react";
import axios from "../../axios-orders";
import Loader from "../../Components/Loader";
import Post from "../../Components/Post";

const Blog = (props) => {
  const [procedures, setProcedures] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get("/procedures.json")
      .then((res) => {
        setProcedures(res.data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const zabiegiArray = [
    [
      "Konsultacja podologiczna",
      "Diagnoza dolegliwości w obrębie stóp (na skórze i paznokciach), analiza układu mięśniowo-kostnego w stopie, rekomendacja odpowiednich form terapii, analiza skóry z dopasowaniem preparatu, zalecenia odnośnie doboru odpowiedniego obuwia i codziennej pielęgnacji.",
      "od 150 ZŁ",
    ],
    [
      "Obcięcie i oszlifowanie paznokci, oczyszczenie wałów okołopaznokciowych.",
      "Diagnoza podologiczna, skrócenie paznokci, oszlifowanie płytek paznokciowych, oczyszczenie wałów paznokciowych ze zrogowaceń. Zalecenia podologiczne i pielęgnacyjne.",
      "140 ZŁ",
    ],
    [
      "Nadmierne zrogowacenia (modzele)",
      "Rozpoznanie zmiany/ zmian, przedstawienie szczegółowego planu terapii, przeprowadzenie zabiegu, aplikacja odpowiednich preparatów i/ lub materiałów odciążających zalecenia pozabiegowe.",
      "170-270 ZŁ",
    ],
    [
      "Odcisk",
      "Rozpoznanie zmiany lub zmian, dobór najlepszej metody, przedstawienie szczegółowego planu i cen kolejnych wizyt, rozpoczęcie terapii (przeprowadzenie zabiegu, aplikacja odpowiednich preparatów i/ lub materiałów odciążających, zalecenia pozabiegowe)",
      "200-300 ZŁ",
    ],
    [
      "Rekonstrukcja paznokcia z oczyszczeniem",
      "Diagnoza podologiczna, dobór odpowiedniej metody rekonstrukcji, przedstawienie szczegółowego planu, wykonanie zabiegu. Zalecenia pielęgnacyjne.",
      "od 330 ZŁ",
    ],
    [
      "Brodawka wirusowa (kurzajka)",
      "Rozpoznanie zmiany lub zmian, dobór najlepszej metody, przedstawienie szczegółowego planu i cen kolejnych wizyt, rozpoczęcie terapii (przeprowadzenie zabiegu, aplikacja odpowiednich preparatów i/ lub materiałów odciążających, zalecenia pozabiegowe)",
      "180 ZŁ",
    ],
    [
      "Założenie klamry ortonyksyjnej",
      "Diagnoza podologiczna, dobór odpowiedniego systemu klamer, przedstawienie szczegółowego planu, rozpoczęcie terapii.",
      "250 ZŁ",
    ],
  ];

  const proceduresObject = [
    {
      title: "Pedicure podologiczny",
      excerpt: "od 200zł",
    },
    {
      title: "Usuwanie odcisków",
      excerpt: "od 150zł",
    },
    {
      title: "Konsultacja podologiczna",
      excerpt: "w cenie zabiegu",
    },
  ];

  return (
    <section className="procedures">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Popularne zabiegi</h3>
              <p>
                Każda stopa jest inna, a my podchodzimy do klienta
                indywidualnie. Umów się na konsultację i już dziś zadbaj o swoje
                stopy.
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="row">
            {proceduresObject.map((e, i) => {
              return (
                <Post
                  key={i}
                  id={i}
                  title={e.title}
                  excerpt={e.excerpt}
                  body={"siema"}
                  url={"/"}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            width: "100%",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          <span
            style={{ fontWeight: "500", color: "red", textAlign: "center" }}
          >
            Strona internetowa jest w budowie, widoczne ceny są przykładowe. W
            celu poznania rzeczywistej oferty, prosimy o kontakt telefoniczny.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            width: "100%",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          <span style={{ fontWeight: "500" }}>
            Cena może ulec zmianie w zależności od skomplikowania zabiegu.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            backgroundColor: "rgba(255, 129, 126, .2)",
            // opacity: "0.2",
            width: "100%",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          <span style={{ marginLeft: "30px" }}>ZABIEG</span>

          <span style={{ marginRight: "30px" }}>CENA</span>
        </div>
        <ul>
          {zabiegiArray.map((e) => {
            return (
              <li style={{ borderBottom: "1px solid #E9E8E9" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      width: "80%",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <span style={{ padding: "20px", fontWeight: "500" }}>
                      {e[0]}
                    </span>
                    <br />
                    <span style={{ display: "block", marginLeft: "20px" }}>
                      {e[1]}
                    </span>
                  </div>
                  <div style={{ alignSelf: "center", marginRight: "15px" }}>
                    {e[2]}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
    // Procedures section end
  );
};

export default Blog;
