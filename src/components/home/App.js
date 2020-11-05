import { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";
import menu from "../../shooters_menu.pdf";
import "reactjs-popup/dist/index.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
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
    // if (this.state.show === true) {
    //   return (
    //     <div className={"App " + (this.state.show ? "blur" : "")}>
    //       <div>
    //         <Modal
    //           className="Modal Modal-main"
    //           show={this.state.show}
    //           handleClose={this.hideModal}
    //         >
    //           <div className="Popup">
    //             <div className="header-callout text-center">
    //               Online Ordering Availabe!{" "}
    //               <a
    //                 href="Google.com"
    //                 target="_blank"
    //                 className="btn btn-primary btn-large"
    //                 rel="noopener noreferrer"
    //               >
    //                 Order Online
    //               </a>
    //             </div>
    //           </div>
    //         </Modal>
    //       </div>

    //       <div className="Banner">
    //         <div className="header-callout text-center">
    //           Online Ordering Now Available!{" "}
    //           <a
    //             href="Google.com"
    //             target="_blank"
    //             className="btn btn-primary btn-large"
    //             rel="noopener noreferrer"
    //           >
    //             Order Online
    //           </a>
    //         </div>
    //       </div>
    //       <div className="First-photo">
    //         <div className="Header">
    //           <div className="Header-social-media">
    //             <SocialIcon url="https://www.facebook.com/Shooters-121490991194526/" />
    //           </div>
    //           <div className="Header-logo">
    //             <a></a>
    //           </div>
    //           <div className="Header-contact">
    //             <div></div>
    //             <IconContext.Provider value={{ color: "white", size: "3vw" }}>
    //               <div className="Float-right">
    //                 <a href="tel:763-631-7468">
    //                   <AiOutlinePhone></AiOutlinePhone>
    //                 </a>
    //               </div>
    //             </IconContext.Provider>
    //             {/* <p className="Float-right White">(763) 631-7468</p> */}
    //             <a className="Float-right White Phone" href="tel:763-631-7468">
    //               (763) 631-7468
    //             </a>
    //             <p className="Float-right White">5584 MN-95, Princeton</p>
    //           </div>
    //         </div>

    //         {/* add an order online in the top */}
    //         <div className="Nav-bar">
    //           <a className="Menu-item" href={process.env.PUBLIC_URL}>
    //             {" "}
    //             Home
    //           </a>
    //           <a className="Menu-item" href="#About">
    //             {" "}
    //             About
    //           </a>
    //           <a className="Menu-item" href={menu} download="Shooters Menu">
    //             {" "}
    //             Menu
    //           </a>
    //           <a className="Menu-item" href="#Contact">
    //             {" "}
    //             Contact
    //           </a>{" "}
    //           <button className="Menu-order">Order Online</button>
    //         </div>
    //         <div className="Cover">
    //           <h1>Great food, wonderful service, and fun atmosphere</h1>
    //           <form action={menu}>
    //             <input
    //               className="Menu-link"
    //               type="submit"
    //               value="View Our Menu!"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //       <div className="About">
    //         <div className="About-left">
    //           <a name="About"></a>{" "}
    //           <h1 id="About-text">Welcome to Shooters Sports Bar</h1>
    //           <p>
    //             Shooters is a sports bar located on highway 95, 4 miles west of
    //             Princeton. Here at Shooters we value our hometown feel and
    //             delicious food. Please come in and have a drink or try our home
    //             cooked food. Enjoy!
    //           </p>
    //         </div>{" "}
    //         <div className="About-right">
    //           <img
    //             width="100%"
    //             src="https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_960_720.jpg"
    //           ></img>
    //         </div>
    //       </div>
    //       <div className="two-columns">
    //         <div>
    //           <Map
    //             style="mapbox://styles/mapbox/streets-v9"
    //             center={[-93.522996, 45.586754]}
    //             containerStyle={{
    //               height: "100%",
    //               width: "100%",
    //             }}
    //           >
    //             <Layer
    //               type="symbol"
    //               id="marker"
    //               layout={{ "icon-image": "marker-15" }}
    //             >
    //               <Feature coordinates={[-93.522996, 45.586754]} />
    //             </Layer>
    //           </Map>
    //         </div>
    //         <div class="container">
    //           <a name="Contact"></a>{" "}
    //           <form action="action_page.php">
    //             <label for="fname">First Name</label>
    //             <input
    //               type="text"
    //               id="fname"
    //               name="firstname"
    //               placeholder="Your name.."
    //             />

    //             <label for="lname">Last Name</label>
    //             <input
    //               type="text"
    //               id="lname"
    //               name="lastname"
    //               placeholder="Your last name.."
    //             />

    //             <label for="subject">Subject</label>
    //             <textarea
    //               id="subject"
    //               name="subject"
    //               placeholder="Write something.."
    //             ></textarea>

    //             <input type="submit" value="Submit" />
    //           </form>
    //         </div>
    //       </div>
    //       {/* <div className="contact"><h2 className="map-right">Location</h2><p>Come join us at 5584 MN-95, Princeton. We are 4 miles east of Princetown on highway 95!</p>
    //       <h2>Contact</h2><p>(763) 631-7468</p></div></div> */}
    //       <footer className="footer">
    //         <p className="White">
    //           © 2020, Shooters Sport Bar. All rights reserved
    //         </p>
    //       </footer>
    //     </div>
    //   );
    // } else {
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
              href="Google.com"
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
            <div className="Header-social-media">
              <SocialIcon url="https://www.facebook.com/Shooters-121490991194526/" />
            </div>
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
              <p className="Float-right White">5584 MN-95, Princeton</p>
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
            <a className="Menu-item" href={menu} download="Shooters Menu">
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
            <h1>Great food, wonderful service, and fun atmosphere</h1>
            <form action={menu}>
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
            <h1 id="About-text">Welcome to Shooters Sports Bar</h1>
            <p>
              Shooters is a sports bar located on highway 95, 4 miles west of
              Princeton. Here at Shooters we value our hometown feel and
              delicious food. Please come in and have a drink or try our home
              cooked food. Enjoy!
            </p>
          </div>{" "}
          <div className="About-right">
            <img
              width="100%"
              src="https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_960_720.jpg"
            ></img>
          </div>
        </div>
        <div className="two-columns">
          <div>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              center={[-93.522996, 45.586754]}
              containerStyle={{
                height: "100%",
                width: "100%",
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[-93.522996, 45.586754]} />
              </Layer>
            </Map>
          </div>
          <div class="container">
            <a name="Contact"></a>{" "}
            <form action="action_page.php">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
            <h5>Phone: (763) 631-7468 </h5>
            <h5>Address : 5584 MN-95, Princeton</h5>
          </div>
        </div>
        {/* <div className="contact"><h2 className="map-right">Location</h2><p>Come join us at 5584 MN-95, Princeton. We are 4 miles east of Princetown on highway 95!</p>
          <h2>Contact</h2><p>(763) 631-7468</p></div></div> */}
        {/* <footer className="footer">
          <p className="White">
            © 2020, Shooters Sport Bar. All rights reserved
          </p>
        </footer> */}
        <div className="three-columns">
          <div className="facebook-feed">
            <h1>Our Facebook Feed</h1>
            <FacebookProvider appId="810535819790517">
              <Page
                href="facebook.com/pages/category/Sports-Bar/Shooters-121490991194526/"
                tabs="timeline"
              />
            </FacebookProvider>{" "}
          </div>
          <div className="map">
            <h1>Find Us</h1>
            <Map
              // add directions link
              style="mapbox://styles/mapbox/streets-v9"
              center={[-93.522996, 45.586754]}
              containerStyle={{
                height: "100%",
                width: "100%",
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[-93.522996, 45.586754]} />
              </Layer>
            </Map>
          </div>
          <div className="Contact info">
            <h1>Contact Us</h1>
            <p>Shooters Sports Bar 5584 MN-95, Princeton</p>
          </div>
        </div>
        <footer>Facebook Feed Map Contact info</footer>
      </div>
    );
  }
}

export default HomePage;
