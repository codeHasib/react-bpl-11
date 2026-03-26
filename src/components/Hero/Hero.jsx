import React from "react";

const Hero = () => {
  return (
    <>
      <div className="p-10">
        <div
          className="hero"
          style={{
            backgroundImage: "url(/public/bg-shadow.png)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center py-10">
            <div className="max-w-md">
                <div className="flex justify-center items-center mb-5">
                    <img src="/public/banner-main.png" alt="" />
                </div>
              <h1 className="mb-5 text-5xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="mb-5">Beyond boundaries beyond limit</p>
              <button className="btn btn-primary">Claim Free Coins</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
