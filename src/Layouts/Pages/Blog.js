import React, { Component, useEffect, useState } from "react";
import axios from "../../axios-orders";

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


  const proceduresList = [
    {
      title: "title",
      description: "Zabiegi",
      price: [],
      time: "",
    },
    {
      title: "Konsultacja podologiczna",
      description: "",
      price: ["100 zł"],
      time: "30 min",
    },
    {
      title: "Konsultacja podologiczna przy pełynm zabiegu",
      description: "",
      price: ["Bezpłatna"],
      time: "",
    },
    {
      title: "Opracowanie paznokci zdrowych u stóp",
      description:
        "(skrócenie paznokci i nadanie im kształtu, opracowanie skórek)",
      price: ["100 zł"],
      time: "30 min",
    },
    {
      title: "Opracowanie paznokci przerośniętych i zdeformowanych",
      description: "(skrócenie paznokci i nadanie im kształtu)",
      price: ["1 - 3 paznokcie – 150 zł", "powyżej 3 paznokci – 200 zł "],
      time: "90 min",
    },
    {
      title: "title",
      description: "Pedicure Frezarkowy",
      price: [],
      time: "",
    },
    {
      title: "Pedicure express",
      description:
        "(opracowanie zrogowaceń podeszwy stopy frezarką, omówienie domowej pielęgnacji , aplikacja kremu, bez skracania i opracowania paznokci)",
      price: ["120 zł"],
      time: "30 min",
    },
    {
      title: "Pedicure kosmetyczny (frezarkowy) bez malowania",
      description:
        "(skrócenie paznokci i nadanie im kształtu, opracowanie skórek, opracowanie podeszwy stopy frezarką, omówienie pielęgnacji domowej, aplikacja kremu)",
      price: ["160 zł"],
      time: "60 min",
    },
    {
      title: "title",
      description: "Pedicure Podologiczny",
      price: [],
      time: "",
    },
    {
      title:
        "Pedicure podologiczny - pierwsza wizyta z konsultacją ortopodologiczną",
      description:
        "(skrócenie paznokci i nadanie im kształtu, opracowanie skórek,  opracowanie patologicznych zrogowaceń podeszwy -usunięcie odcisków i modzeli za pomocą narzędzi podologicznych, omówienie pielęgnacji domowej, aplikacja kremu)",
      price: ["250 zł"],
      time: "2 godz",
    },
    {
      title:
        "Pedicure podologiczny - kolejna wizyta dotyczy wizyt umawianych maksymalnie co 6-8 tygodni",
      description:
        "(skrócenie paznokci i nadanie im kształtu, opracowanie skórek, opracowanie patologicznych zrogowaceń podeszwy – usunięcie odcisków i modzeli za pomocą narzędzi podologicznych, omówienie pielęgnacji domowej, aplikacja kremu, zalecenia pozabiegowe)",
      price: ["220 zł"],
      time: "2 godz",
    },
    {
      title: "Pedicure podologiczny rozszerzony",
      description:
        "Pedicure podologiczny podstawowy plus opracowanie dużych hiperkeratoz w tym zaawansowanej keratolizy dziobatej, rogowca, liszaja, odcisków mnogich , modzele (duże powierzchnie)",
      price: ["2 godz – 280zł", "ponad 2 godz – 350 zł"],
      time: "",
    },
    {
      title:
        "Malowanie paznokci lakierem tradycyjnym jeśli nie ma przeciwskazań",
      description: "",
      price: ["30zł", "do zabiegu +20 zł"],
      time: "",
    },
    {
      title:
        "Malowanie paznokci lakierem hybrydowym jeśli nie ma przeciwskazań",
      description: "",
      price: ["70zł", "do zabiegu +50 zł"],
      time: "",
    },
    {
      title: "Ściągnięcie hybrydy z innego salonu",
      description: "",
      price: ["do zabiegu +30 zł"],
      time: "",
    },
    {
      title: "title",
      description:
        "Paznokcie pourazowe i chorobowe (cena obejmuje jeden paznokieć)",
      price: [],
      time: "",
    },
    {
      title: "Oczyszczanie paznokci krwiak – pierwsza wizyta",
      description:
        "rozpoczęcie terapii: odbarczenie, aplikacja preparatu, zalecenia po zabiegowe",
      price: ["150 zł"],
      time: "30 min",
    },
    {
      title: "Oczyszczanie paznokci krwiak – kolejna wizyta",
      description:
        "kontynuacja terapii: oczyszczenie, aplikacja preparatu, zalecenia po zabiegowe",
      price: ["120 zł"],
      time: "30 min",
    },
    {
      title:
        "Oczyszczanie paznokci zmienionych chorobowo – Pseudomonas, grzybica, onycholiza – pierwsza wizyta",
      description:
        "rozpoczęcie terapii: oczyszczenie, aplikacja preparatu, zalecenia po zabiegowe",
      price: ["1-3 paznokcie 150 zł", "powyżej 3 paznokci 200 zł"],
      time: "60 min",
    },
    {
      title:
        "Oczyszczanie paznokci zmienionych chorobowo – Pseudomonas, grzybica, onycholiza – kolejna wizyta",
      description:
        "kontynuacja terapii: oczyszczenie, aplikacja preparatu, zalecenia po zabiegowe",
      price: ["120 zł"],
      time: "30 min",
    },
    {
      title: "title",
      description: "Brodawki wirusowe HPV / Kurzajki",
      price: [],
      time: "",
    },
    {
      title: "Terapia brodawki wirusowej – pierwsza wizyta",
      description:
        "rozpoczęcie terapii: oczyszczenie, diagnoza, wybór metody leczenia, zalecenia po zabiegowe",
      price: ["150 zł"],
      time: "30 min",
    },
    {
      title: "Terapia brodawki wirusowej – kolejna wizyta",
      description:
        "Kontynuacja terapii: oczyszczenie, ocena, wykonanie wybranej metody, zalecenia po zabiegowe",
      price: ["110 zł"],
      time: "30 min",
    },
    {
      title: "Terapia brodawki wirusowej mnogiej – pierwsza wizyta",
      description:
        "rozpoczęcie terapii: oczyszczenie, diagnoza, wybór metody leczenia, zalecenia po zabiegowe",
      price: ["200 zł"],
      time: "60 min",
    },
    {
      title: "Terapia brodawki wirusowej mnogiej – kolejna wizyta",
      description:
        "Kontynuacja terapii: oczyszczenie, ocena, wykonanie wybranej metody, zalecenia po zabiegowe",
      price: ["150 zł"],
      time: "60 min",
    },
    {
      title: "title",
      description:
        "Paznokcie wkręcające / wrastające - terapia klamrą ortonyksyjną",
      price: [],
      time: "",
    },
    {
      title:
        "Założenie klamry na 1 paznokieć  - rozpoczęcie terapii klamrą ortonyksyjną",
      description: "",
      price: ["240 zł"],
      time: "40 min",
    },
    {
      title:
        "Założenie klamry na 2 paznokcie - rozpoczęcie terapii klamrą ortonyksyjną",
      description: "",
      price: ["440 zł"],
      time: "70 min",
    },
    {
      title:
        "Kontrola w trakcie terapii wrastającego paznokcia / przełożenie klamry",
      description: "",
      price: ["150 zł"],
      time: "30 min",
    },
    {
      title:
        "Ściągnięcie klamry i opracowanie paznokcia – zakończenie terapii wrastających paznokci",
      description: "",
      price: ["100 zł"],
      time: "30 min",
    },
    {
      title: "Usunięcie wrastającego fragmentu paznokcia",
      description:
        "Usunięcie wrastającego fragmentu paznokcia – opracowanie paznokcia i rany, rozpoczęcie leczenia wrastającego paznokcia, usunięcie wrastającego fragmentu, aplikacja opatrunku specjalistycznego",
      price: ["200 zł"],
      time: "30 min",
    },
    {
      title:
        "Kontrola / zmiana opatrunku po usunięciu wrastającego fragmentu paznokcia ",
      description:
        "usunięcie starego opatrunku, oczyszczenie, aplikacja opatrunku specjalistycznego, kontynuacja leczenia ",
      price: ["50 zł"],
      time: "30 min",
    },
    {
      title: "title",
      description:
        "Protetyka płytki paznokcia - metoda żelowa, akrylowa, anguisan",
      price: [],
      time: "",
    },
    {
      title: "Protetyka paznokcia",
      description:
        "Oczyszczenie paznokcia, aplikacja i opracowanie materiału do rekonstrukcji",
      price: ["100 zł"],
      time: "30 min",
    },
    {
      title: "Protetyka paznokcia metodą Unguisan",
      description: "",
      price: ["1 paznokieć - 150zł"],
      time: "40 min",
    },
    {
      title: "Protetyka paznokcia metodą Unguisan do usługi podologicznej",
      description: "",
      price: ["100zł"],
      time: "30 min",
    },
    {
      title: "Protetyka paznokcia – do usługi",
      description:
        "Oczyszczenie paznokcia, aplikacja i opracowanie materiału do rekonstrukcji",
      price: ["90 zł"],
      time: "15 min",
    },
    {
      title: "title",
      description: "Tamponada",
      price: [],
      time: "",
    },
    {
      title: "Założenie tamponady z preparatem do usługi",
      description: "Wizyta połączona z innym zabiegiem w obrębie stóp",
      price: ["30 zł"],
      time: "15 min",
    },
    {
      title: "Założenie tamponady z preparatem",
      description:
        "Specjalistyczny materiał odseparowujący płytkę paznokciową od wałów ",
      price: ["100 zł"],
      time: "30 min",
    },
    {
      title: "title",
      description: "Odciski",
      price: [],
      time: "",
    },
    {
      title:
        "Usunięcie odcisków i modzeli  + założenie opatrunku i  odciążenia",
      description: "",
      price: [
        "1 odcisk - 80 zł",
        "15 min",
        "1-3 odciski – 120 zł",
        "powyżej 3 odcisków - 200 zł",
      ],
      time: "",
    },
    {
      title: "title",
      description: "Inne",
      price: [],
      time: "",
    },
    {
      title: "Tejping podologiczny do usługi",
      description: "",
      price: ["50 zł"],
      time: "",
    },
    {
      title: "Indywidualne ortezy silikonowe",
      description: "",
      price: ["mała 40 zł", "duża 60 zł"],
      time: "",
    },
    {
      title: "Indywidualne wkładki odciążające PWO 15",
      description: "",
      price: ["170 zł para"],
      time: "",
    },
    {
      title: "Badanie Pedobarograficzne",
      description: "Ze skanem stóp, omówienie terapii",
      price: ["200 zł"],
      time: "",
    },
    {
      title: "Badanie Mykologiczne",
      description: "(hodowla + mikroskop)",
      price: ["150 zł"],
      time: "",
    },
    {
      title: "Badanie Bakteriologiczne",
      description: "",
      price: ["150 zł"],
      time: "",
    },
    {
      title: "Indywidualne wkładki korekcyjne",
      description: "",
      price: ["400-500 zł"],
      time: "",
    },
  ];

  return (
    <section className="procedures">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Cennik</h3>
              <p>
                Każda stopa jest inna, a my podchodzimy do klienta
                indywidualnie. Umów się na konsultację i już dziś zadbaj o swoje
                stopy.
              </p>
            </div>
          </div>
        </div>
        {/* 
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
        </div> */}
      </div>

      <div className="container">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            backgroundColor: "rgba(255, 129, 126, .1)",
            width: "100%",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          <span style={{ marginLeft: "20px" }}>ZABIEG</span>
          <span style={{ marginRight: "30px" }}>CENA</span>
        </div> */}
        <ul>
          {proceduresList.map((e) => {
            if (e.title === "title") {
              return (
                <li
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    borderBottom: "2px solid #E9E8E9",
                    borderTop: "1px solid #E9E8E9",
                  }}
                  className="everyEven"
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    {e.description}
                  </span>
                </li>
              );
            } else {
              return (
                <li
                  style={{ borderBottom: "1px solid #E9E8E9" }}
                  className="everyEven"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        // maxWidth: "90%",
                        textAlign: "center",
                        margin: "auto 0px auto 0px",
                        textAlign: "left",
                        flexShrink: "1",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        {e.title}
                      </span>
                      <br />
                      <span>{e.description}</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "auto 0px auto 0px",
                        textAlign: "right",
                        marginLeft: "30px",
                        // minWidth: "150px",
                        flexShrink: "0",
                      }}
                    >
                      {e.price.map((x) => {
                        return <span>{x}</span>;
                      })}

                      <span>{e.time}</span>
                    </div>
                  </div>
                </li>
              );
            }
          })}
          <li
            style={{
              padding: "20px",
              borderBottom: "2px solid #E9E8E9",
            }}
            className="everyEven"
          >
            <span
              style={{
                fontWeight: "500",
              }}
            >
              Indywidualne wkładki korekcyjne według cennika edupodologia.pl
            </span>
          </li>
          {/* {zabiegiArray.map((e) => {
            return (
              <li
                style={{ borderBottom: "1px solid #E9E8E9" }}
                className="everyEven"
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      width: "98%",
                    }}
                  >
                    <span
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {e.titles.map((e) => {
                        return (
                          <span>
                            {e.title}
                            <span
                              style={{
                                height: "50px",
                                float: "right",
                                fontWeight: "300",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span>{e.price}</span>
                              <span>{e.time}</span>
                            </span>
                          </span>
                        );
                      })}
                    </span>
                    <br />
                    <span
                      style={{
                        display: "block",
                        marginLeft: "20px",
                      }}
                    >
                      <ul>
                        {e.descriptions.map((e) => {
                          return (
                            <li>
                              <span>{e.description}</span>

                              <span
                                style={{
                                  float: "right",
                                }}
                              >
                                {e.price}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </span>
                  </div>
                </div>
              </li>
            );
          })} */}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
