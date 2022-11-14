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
    {
      titles: [
        {
          title: "Konsultacja podologiczna",
          price: "100,-",
        },
      ],
      descriptions: [],
    },
    {
      titles: [
        {
          title: "Podstawowy zabieg podologiczny",
          price: "120,-",
        },
      ],
      descriptions: [
        {
          description:
            "(cena obejmuje pedicure kosmetyczny, skrócenie paznokci, opracowanie skórek, usunięcie fizjologicznych zmian za pomocą frezarki podologicznej)",
          price: "",
        },
        {
          description: "- z malowaniem lakierem tradycyjnym",
          price: "140,-",
        },
        {
          description: "- z malowaniem lakierem hybrydowym",
          price: "180,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Specjalistyczny zabieg podologiczny",
          price: "170,-",
        },
      ],
      descriptions: [
        {
          description:
            "(cena obejmuje podstawowy zabieg podologiczny, usunięcie odcisku, modzela i zrogowaceń)",
          price: "",
        },
        {
          description: "- z malowaniem lakierem tradycyjnym",
          price: "190,-",
        },
        {
          description: "- z malowaniem lakierem hybrydowym",
          price: "220,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Rozszerzony zabieg podologiczny",
          price: "250,-",
        },
      ],
      descriptions: [
        {
          description:
            "(cena obejmuje podstawowy i specjalistyczny zabieg podologiczny; opracowanie stopy z wypryskiem modzelowatym, rogowcem, zmianami łuszczycowymi, licznymi odciskami i modzelami, głębokimi rozpadlinami, bolesnymi zmianami hiperkeratotycznymi; wykonanie odciążeń, założenie opatrunków)",
          price: "250,-",
        },
        {
          description: "- z malowaniem lakierem tradycyjnym",
          price: "270,-",
        },
        {
          description: "- z malowaniem lakierem hybrydowym",
          price: "300,-",
        },
        {
          description:
            "*lakier tradycyjny i lakier hybrydowy nakładamy tylko gdy nie ma ku temu przeciwwskazań",
          price: "",
        },
      ],
    },
    {
      titles: [
        {
          title: "Opracowanie tylko przodostopia",
          price: "100,-",
        },
      ],
      descriptions: [
        {
          description: "(cena obejmuje obcięcie paznokci, opracowanie skórek)",
          price: "",
        },
        {
          description: "- z malowaniem lakierem tradycyjnym",
          price: "120,-",
        },
        {
          description: "- z malowaniem lakierem hybrydowym",
          price: "150,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Opracowanie pękających pięt",
          price: "150,-",
        },
      ],
      descriptions: [
        {
          description:
            "(cena obejmuje usunięcie zrogowaceń, pęknięć i rozpadlin, założenie specjalistycznego opatrunku)",
          price: "",
        },
      ],
    },
    {
      titles: [
        {
          title: "Obcięcie i oczyszczenie paznokci zmienionych chorobowo",
          price: "100 - 200,-",
        },
      ],
      descriptions: [
        {
          description:
            "(zakażenia bakteryjne, grzybicze, onycholiza, paznokcie przerośnięte/dystroficzne)",
          price: "",
        },
      ],
    },
    {
      titles: [
        {
          title: "Usunięcie odcisku / modzela",
          price: "80,-",
        },
      ],
      descriptions: [
        {
          description: "- każdy kolejny na tej samej wizycie",
          price: "30,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Terapia brodawek wirusowych*",
          price: "100 - 200,-",
        },
      ],
      descriptions: [
        {
          description: "a) brodawki pojedyncze",
          price: "",
        },
        {
          description:
            "- pierwsza wizyta (rozpoczęcie terapii: oczyszczenie, diagnoza, wybranie metody terapii, zalecenia pozabiegowe)",
          price: "130,-",
        },
        {
          description: "- kolejna wizyta (kontynuacja terapii)",
          price: "100,-",
        },
        {
          description: "b) brodawki mnogie",
          price: "",
        },
        {
          description:
            "- pierwsza wizyta (rozpoczęcie terapii: oczyszczenie, diagnoza, wybranie metody terapii, zalecenia pozabiegowe)",
          price: "180,-",
        },
        {
          description: "- kolejna wizyta (kontynuacja terapii)",
          price: "130,-",
        },
        {
          description: "*do cen wliczony jest opatrunek i odciążenie",
          price: "",
        },
      ],
    },
    {
      titles: [
        {
          title: "Usunięcie krwiaka podpaznokciowego",
          price: "150,-",
        },
      ],
      descriptions: [
        {
          description:
            "(cena obejmuje odbarczenie krwiaka, zabezpieczenie pola zabiegowego i założenie opatrunku)",
          price: "",
        },
      ],
    },
    {
      titles: [
        {
          title: "Protetyka paznokcia",
          price: "100,-",
        },
      ],
      descriptions: [
        {
          description:
            "(cena obejmuje oczyszczenie paznokcia, aplikacja i opracowanie materiału do rekonstrukcji)",
          price: "",
        },
        {
          description: "Protetyka do usługi",
          price: "50,-",
        },
        {
          description: "Ściągnięcie masy wykonanej w innym gabinecie",
          price: "50,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Terapia wrastającego paznokcia",
          price: "",
        },
      ],
      descriptions: [
        {
          description:
            "- korekta (usunięcie drażniącego elementu, założenie opatrunku)",
          price: "130,-",
        },
        {
          description: "- założenie klamry ortonyksyjnej",
          price: "",
        },
        {
          description:
            "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 - na jeden paznokieć",
          price: "190,-",
        },
        {
          description:
            "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 - na dwa paznokcie na tej samej wizycie",
          price: "350,-",
        },
        {
          description: "- przełożenie klamry ortonyksyjnej",
          price: "100,-",
        },
        {
          description: "- wizyta kontrolna bez przełożenia klamry",
          price: "70,-",
        },
        {
          description: "- założenie rurki Sulci-Protector",
          price: "80,-",
        },
        {
          description:
            "- zakończenie terapii - ściągnięcie klamry ortonyksyjnej",
          price: "100,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Tamponada i opatrunki",
          price: "",
        },
      ],
      descriptions: [
        {
          description: "- założenie tamponady z preparatem",
          price: "60,-",
        },
        {
          description: "- założenie tamponady z preparatem do usługi",
          price: "20,-",
        },
        {
          description: "- opatrunek",
          price: "30,-",
        },
      ],
    },
    {
      titles: [
        {
          title: "Dodatkowe odciążenia",
          price: "20 - 80,-",
        },
      ],
      descriptions: [],
    },
    {
      titles: [
        {
          title: "Wkładki PWO15 odciążające",
          price: "170,-",
        },
      ],
      descriptions: [],
    },
    {
      titles: [
        {
          title: "Taping podologiczny (tzw. plastrowanie) do zabiegu",
          price: "20 - 50,-",
        },
      ],
      descriptions: [],
    },
    {
      titles: [
        {
          title: "Pobranie materiału do badań laboratoryjnych",
          price: "150 - 300,-",
        },
      ],
      descriptions: [],
    },
  ];

  const proceduresObject = [
    {
      title: "Zabieg podologiczny",
      excerpt: "od 120zł",
    },
    {
      title: "Usunięcie odcisku / modzela",
      excerpt: "od 30zł",
    },
    {
      title: "Konsultacja podologiczna",
      excerpt: "100zł",
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
        {/* <div
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
        </div> */}
        {/* <div
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
        </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            backgroundColor: "rgba(255, 129, 126, .1)",
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
                            <span style={{ float: "right", fontWeight: "300" }}>
                              {e.price}
                            </span>
                          </span>
                          // <span></span>
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
          })}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
