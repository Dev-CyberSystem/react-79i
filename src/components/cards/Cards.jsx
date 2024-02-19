import React from "react";
import "./cards.css";


const Cards = () => {
  return (
    <>
      <section className="container d-flex flex-column">
        <h1 className="text-center mt-2 mb-2">Nuestros Destinos</h1>
        <div className="d-flex flex-nowrap justify-content-around mt-2">
        <div className="card">
          <img src="https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column  justify-content-center ">
            <h5 className="card-title text-center ">Brasil</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Conocer Mas
            </a>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column  justify-content-center">
            <h5 className="card-title text-center">New York</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Conocer Mas
            </a>
          </div>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/14529749/pexels-photo-14529749.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column  justify-content-center">
            <h5 className="card-title text-center">Suiza</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Conocer Mas
            </a>
          </div>
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Cards;
