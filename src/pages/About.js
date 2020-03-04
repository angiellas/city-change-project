import React from "react";
import Title from "../components/Title/Title";

function About() {
  return (
    <>
      <div className="title d-flex justify-content-center mt-4 mb-3">
        <Title
          className="CitiesWithTitle left"
          headline="About"
          subtitle="US"
          subtitleFontSize="50px"
          color="rgb(255, 0, 104)"
          backgroundColor="none"
        />{" "}
      </div>

      <div>
        <p className="abouttext text-justify mr-5 ml-5 mb-5">
          This website was created as a project for Wild Code School. We are
          currently studying Web Development with the best trainer ever. "Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."{" "}
        </p>

        <h3 className="teammembers text-center font-weight-bold mt-5 mb-4">
          Team Members
        </h3>
        <div className="d-flex justify-content-around">
          <p>
            <a href="https://github.com/dreaderoeck">Andrea de Roeck</a>
          </p>
          <p>
            <a href="https://github.com/angiellas">Angeline Rocha</a>
          </p>
          <p>
            <a href="https://github.com/mollieball">Mollie Ball</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
