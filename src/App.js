import logo from "./logo.svg";
import "./App.css";
// import "./components/assets";
import "./components/membershipPage.css";

// Import images
import { vector, img1, img2, dropdown, y, e, s } from "./components/assets";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./membershipPage.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <title>Membership Page</title>
      <div className="container">
        <div className="header-card-container">
          <div className="header">
            <div className="head-text">Membership Plans</div>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={img1} alt="image unavailable" />
              <div className="card-content">
                {/* <h1>Free Members</h1> */}
                <div className="card-heading">Free Members</div>
                <h2>$0/month</h2>
                <a href="" className="card-button">
                  Get Started
                </a>
                <hr className="custom-hr" />
                <div className="parent-ul-li">
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span> Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span> Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span> Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span> Lorem ipsum dolor sit amet.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="card">
              <img src={img2} alt="image unavailable" />
              <div className="card-content">
                {/* <h1>Premium Members</h1> */}
                <div className="card-heading">Premium Members</div>
                <h2>$5/month</h2>
                <a href="" className="card-button">
                  Get Started
                </a>
                <hr className="custom-hr" />
                {/* Changed to ul for better semantic structure */}
                {/* <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
              </ul> */}
                <div className="parent-ul-li">
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                  <div className="ul-li">
                    <span>
                      <img src={vector} alt="" />
                    </span>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-sec">
          <div className="about-sec-left">
            {/* <h1>Lorem ipsum dolor sit, amet consectetur</h1>
            <h1>adipisicing elit.</h1> */}

            <div className="abt-h1">
              Lorem ipsum dolor sit amet, consec <br /> zetuer adipiscing
            </div>
            {/* <div className="abt-h1">adipisicing elit.</div> */}
          </div>
          <div className="about-sec-right">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoredrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis.
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat
            </p>
            <div className="back-img">
              <img src={y} alt="" />
              <img src={e} alt="" />
              <img src={s} alt="" />
            </div>
          </div>
        </div>
        {/* <div class="accordion-div"> */}
        <ul id="accordion">
          <li>
            <label htmlFor="first">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              eos?
              <span>
                <img src={dropdown} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="first" defaultChecked="" />
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla odio, nemo minus eligendi omnis ab voluptates iusto voluptatem natus ipsa sed similique excepturi! Dolor, debitis ipsa praesentium odit molestias, a fuga cumque, voluptatum est nisi magni reiciendis. Fuga enim rerum error suscipit aut minima consequuntur cumque blanditiis sed, laborum recusandae inventore. Dicta itaque quas error excepturi amet neque incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a.
              </p>
            </div>
          </li>
          <hr className="accordion-hr" />
          <li>
            <label htmlFor="second">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              eos?
              <span>
                <img src={dropdown} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="second" />
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                voluptatum ipsa quas nam praesentium illo itaque asperiores
                harum aliquid perferendis, ea saepe beatae inventore iusto neque
                tenetur obcaecati necessitatibus. Quibusdam!
              </p>
            </div>
          </li>
          <hr className="accordion-hr" />
          <li>
            <label htmlFor="third">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              eos?
              <span>
                <img src={dropdown} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="third" />
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                voluptatum ipsa quas nam praesentium illo itaque asperiores
                harum aliquid perferendis, ea saepe beatae inventore iusto neque
                tenetur obcaecati necessitatibus. Quibusdam!
              </p>
            </div>
          </li>
          <hr className="accordion-hr" />
          <li>
            <label htmlFor="fourth">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              eos?
              <span>
                <img src={dropdown} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="fourth" />
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                voluptatum ipsa quas nam praesentium illo itaque asperiores
                harum aliquid perferendis, ea saepe beatae inventore iusto neque
                tenetur obcaecati necessitatibus. Quibusdam!
              </p>
            </div>
          </li>
          <hr className="accordion-hr" />
          <li>
            <label htmlFor="fifth">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              eos?
              <span>
                <img src={dropdown} alt="" />
              </span>
            </label>
            <input type="radio" name="accordion" id="fifth" />
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                voluptatum ipsa quas nam praesentium illo itaque asperiores
                harum aliquid perferendis, ea saepe beatae inventore iusto neque
                tenetur obcaecati necessitatibus. Quibusdam!
              </p>
            </div>
          </li>
        </ul>
        {/* </div> */}
        <div className="footer">
          <h1 className="footer-text">Still have a question?</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </h2>
          <a href="" className="footer-button">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
