import React from "react";

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Create developer profile/portfolio, share posts and get help from
            other Developers
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign up
            </a>
            <a href='Login.html' className='btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
