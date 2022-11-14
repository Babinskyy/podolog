import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    // Procedures section start
    <section className="procedures">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="sec-heading">
              <h3 className="sec-title">Popularne zabiegi</h3>
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
          <div style={{ textAlign: "center" }}>
            <Link to="/blog" className="btn btn-round">
              Cennik
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;
