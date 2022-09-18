import React, { Component, useEffect, useState } from "react";
import axios from "../axios-orders";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const Procedure = (props) => {
  const [procedures, setProcedures] = useState(null);

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

  // URL should be signle service page -> '/services/'+procedure.id

  // let renderProcedures = <Loader />;
  // if (procedures !== null) {
  //   renderProcedures = procedures.map((procedure) => {
  //     return (
  //       <Post
  //         key={procedure.id}
  //         id={procedure.id}
  //         title={procedure.title}
  //         excerpt={procedure.excerpt}
  //         body={procedure.body}
  //         url={"/"}
  //       />
  //     );
  //   });
  // }

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
    // Procedures section start
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
    </section>
    // Procedures section end
  );
};

export default Procedure;