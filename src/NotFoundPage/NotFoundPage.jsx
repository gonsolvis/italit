/*  eslint-disable*/
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import repair from "../images/repair.png";

function NotFoundPage() {
  return (
    <div id="nofoundBackground">
      <div class="card" id="notFoundCard">
        <div class="card-header" id="notFoundPage--cardtitle">
          <h1>Page Not Found</h1>
        </div>
        <div class="card-body">
          <h5 class="card-title " id="notFoundPage--h5title">
            Woooh there partner, where are you going?
          </h5>
          <img
            src={repair}
            alt="Description of the image"
            className="RepairImage"
          />
          <p class="card-text  my-4" id="IntroLongText">
            You have found a page still under construction or there is a mistake
            on our part! We are only human.
            <Link to="/" className="mx-2">
              Return home
            </Link>
            <p className="">
              Please contact us if you need further information at
              <a href="mailto:gonsolvis@gmail.com" className="mx-2">
                gonsolvis@gmail.com
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
