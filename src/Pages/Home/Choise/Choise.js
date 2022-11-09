import React from "react";
import {
  FaCar,
  FaBriefcaseMedical,
  FaStethoscope,
  FaThermometerThreeQuarters,
  FaStrikethrough,
  FaVenusDouble,
} from "react-icons/fa";
const Choise = () => {
  return (
    <div className="container">
      <div className="section-title text-center py-5">
        <h1>Why Chose Me</h1>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. <br />3 wolf moon officia aute, non
          cupidatat skateboard dolor brunch.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 text-center  py-2 px-5 rounded mb-2">
          <div className="icon fs-1 text-primary">
            <FaCar />
          </div>
          <div className="info">
            <h3 className="py-2">24 / 7 Emergency</h3>
            <p className="text-black-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-center  py-2 px-5 rounded mb-2">
          <div className="icon fs-1 text-primary">
            <FaStethoscope />
          </div>
          <div className="info">
            <h3 className="py-2">15 year of exprience</h3>
            <p className="text-black-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-center  py-2 px-5 rounded mb-2">
          <div className="icon fs-1 text-primary">
            <FaBriefcaseMedical />
          </div>
          <div className="info">
            <h3 className="py-2">Flexible Payment Options</h3>
            <p className="text-black-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </p>
          </div>
        </div>

        <div className="col-lg-4 text-center  py-2 px-5 rounded mb-2">
          <div className="icon fs-1 text-primary">
            <FaThermometerThreeQuarters />
          </div>
          <div className="info">
            <h3 className="py-2">Offering Sedation Services</h3>
            <p className="text-black-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-center  py-2 px-5 rounded mb-2">
          <div className="icon fs-1 text-primary">
            <FaStrikethrough />
          </div>
          <div className="info">
            <h3 className="py-2">Invisalign Premier Provider</h3>
            <p className="text-black-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-center  py-2 px-5 rounded mb-2">
          <div className="icon fs-1 text-primary">
            <FaVenusDouble />
          </div>
          <div className="info">
            <h3 className="py-2">Work with Most Insurance</h3>
            <p className="text-black-50">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choise;
