import { Component } from "react";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";
// import menu from "../../shooters_menu.pdf";
import "reactjs-popup/dist/index.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ReactMapboxGl, {
  Marker,
  ZoomControl,
  Layer,
  Feature,
} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FacebookProvider, Feed, Page } from "react-facebook";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaG9ybmVyMSIsImEiOiJja2dqYjF5ZjYwa2xrMnltbzZ1MXd1Z2NzIn0.tL4K0jThtP5QJzhkFt-WbQ",
});

class HomePage extends Component {
  state = { show: true };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className={"App " + (this.state.show ? "blur" : "")}>
        <div>
          <Modal
            className="Modal"
            show={this.state.show}
            handleClose={this.hideModal}
          >
            <div className="Popup">
              <div className="popup-callout text-center">
                Online Ordering Availabe!{" "}
                <a
                  href="Google.com"
                  target="_blank"
                  className="btn btn-primary btn-large"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
                <button onClick={this.hideModal}>X</button>
              </div>
            </div>
          </Modal>
        </div>

        <div className="Banner">
          <div className="header-callout text-center">
            Online Ordering Now Available!{" "}
            <a
              href="https://tastypizza.froogleonline.io/"
              target="_blank"
              className="btn btn-primary btn-large"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </div>
        </div>
        <div className="First-photo">
          <div className="Header">
            <div className="Header-social-media"></div>
            <div className="Header-logo">
              <a></a>
            </div>
            <div className="Header-contact">
              <div></div>
              <IconContext.Provider value={{ color: "white", size: "3vw" }}>
                <div className="Float-right">
                  <a href="tel:763-631-7468">
                    <AiOutlinePhone></AiOutlinePhone>
                  </a>
                </div>
              </IconContext.Provider>
              {/* <p className="Float-right White">(763) 631-7468</p> */}
              <a className="Float-right White Phone" href="tel:763-631-7468">
                (763) 631-7468
              </a>
              <p className="Float-right White">
                3220 Bridge St NW, Saint Francis, MN
              </p>
            </div>
          </div>

          {/* add an order online in the top */}
          <div className="Nav-bar">
            <a className="Menu-item" href={process.env.PUBLIC_URL}>
              {" "}
              Home
            </a>
            <a className="Menu-item" href="#About">
              {" "}
              About
            </a>
            <a
              className="Menu-item"
              href="https://tastypizza.froogleonline.io/"
              download="Shooters Menu"
            >
              {" "}
              Menu
            </a>
            <a className="Menu-item" href="#Contact">
              {" "}
              Contact
            </a>{" "}
            <button className="Menu-order">Order Online</button>
          </div>
          <div className="Cover">
            <h1 className="shadow-title">
              Great food, wonderful service, and fun atmosphere
            </h1>
            <form action="https://tastypizza.froogleonline.io/">
              <input
                className="Menu-link"
                type="submit"
                value="View Our Menu!"
              />
            </form>
          </div>
        </div>
        <div className="About">
          <div className="About-left">
            <a name="About"></a>{" "}
            <h1 className="shadow-title" id="About-text">
              Welcome to Tasty Pizza
            </h1>
            <p className="about-text">
              Tasty Pizza is a Pizzeria located in St Francis. Here at Tasty Pizza
              we value our hometown feel and delicious food. Please come in and
              have a drink or try our home cooked pizza. Enjoy!
            </p>
          </div>{" "}
          <div className="About-right">
            <img
              width="100%"
              src="https://cdn.pixabay.com/photo/2020/01/17/23/14/pizza-4774206_960_720.jpg"
            ></img>
          </div>
        </div>
        <div className="white three-columns">
          <div className=" white eighty-twenty">
            <div>
              <h1>Find Us</h1>
            </div>
            <div className="map">
              <Map
                // add directions link
                style="mapbox://styles/mapbox/streets-v8"
                center={[-93.34867386032482, 45.38637627492076]}
                containerStyle={{
                  height: "80%",
                  width: "100%",
                }}
              >
                <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "marker-15", "icon-size": 1 }}
                  paint={{
                    "icon-color": "red",
                  }}
                >
                  <Feature
                    coordinates={[-93.34867386032482, 45.38637627492076]}
                  />
                </Layer>
                <ZoomControl />
              </Map>
              <button
                className="btn"
                id="directions"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://www.google.com/maps/dir//Tasty+Pizza,+3220,+8631,+Bridge+St+NW,+St+Francis,+MN+55070/@45.386478,-93.3492452,19z/data=!4m16!1m6!3m5!1s0x0:0x5dbb3b61dc3f6e99!2sTasty+Pizza!8m2!3d45.3863628!4d-93.3487118!4m8!1m0!1m5!1m1!1s0x52b310335e66a65f:0x5dbb3b61dc3f6e99!2m2!1d-93.3487118!2d45.3863628!3e2";
                }}
              >
                {" "}
                Directions
              </button>
            </div>
          </div>
          <div className="white eighty-twenty">
            <div>
              <h1>Contact Us</h1>
            </div>
            <div className="white align-left contact-us">
              <h2>Tasty Pizza</h2>
              <h4>3220 Bridge St NW, Saint Francis</h4>
              <h4>Saint Francis, MN 55371</h4>
              <h4>
                (763) 753-4988
                <a
                  className="Float-right White Phone"
                  href="tel:763-753-4988"
                />
              </h4>
            </div>
          </div>
        </div>
        <div className="black-bandaid"></div>
      </div>
    );
  }
}

export default HomePage;
