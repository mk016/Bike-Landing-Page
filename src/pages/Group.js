const Group = () => {
  return (
    <div className="w-full relative h-screen text-left text-base text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-screen h-screen overflow-hidden">
        <img
          className="absolute top-[91px] left-[8px] w-[1127px] h-[757px]"
          alt=""
          src="/group-1.svg"
        />
        <div className="absolute top-[35px] left-[45px] w-[1638px] flex flex-row items-center justify-between">
          <div className="flex flex-row items-end justify-start gap-[10px]">
            <img
              className="w-[62px] relative h-10 object-contain"
              alt=""
              src="/vector.svg"
            />
            <img className="w-[58px] relative h-[34px]" alt="" src="/ike.svg" />
          </div>
          <div className="w-[885px] h-[61px] flex flex-row items-center justify-between">
            <div className="w-[116px] rounded-[20px] [background:linear-gradient(154.39deg,_#008b9f,_#7ceeff)] h-11 flex flex-row items-center justify-center p-2.5 box-border text-black">
              <div className="relative font-semibold">Home</div>
            </div>
            <div className="relative font-semibold">About Us</div>
            <div className="relative font-semibold">Contact Us</div>
            <div className="relative font-semibold">How it Works</div>
            <div className="relative font-semibold">Help</div>
            <div className="relative font-semibold">Help</div>
            <div className="relative font-semibold">Hire Bike</div>
          </div>
        </div>
        <div className="absolute top-[280px] left-[1166px] w-[524px] h-[533px] text-[48px]">
          <div className="absolute top-[0px] left-[10px] font-semibold text-darkturquoise">
            Hubble
          </div>
          <div className="absolute top-[58px] left-[0px] text-[155px] font-semibold">
            Bike
          </div>
          <div className="absolute top-[246px] left-[10px] text-[18px] leading-[30px] font-semibold inline-block w-[514px] h-[104px]">
            <p className="m-0">
              Hire a bike to any destination and share with friends,
            </p>
            <p className="m-0">
              Please use the app to order a bike from any where in Brimingham...
            </p>
          </div>
          <div className="absolute top-[396px] left-[10px] rounded-11xl [background:linear-gradient(180deg,_#009eb5,_rgba(0,_158,_181,_0.23))] overflow-hidden flex flex-row items-center justify-center py-7 px-[166px] text-[24px]">
            <div className="relative font-semibold">Hire a Bike</div>
          </div>
        </div>
        <div className="absolute top-[892px] left-[1176px] w-[455px] flex flex-row items-center justify-between">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/facebook.svg"
          />
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/instagram.svg"
          />
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/linkedin.svg"
          />
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/x.svg"
          />
        </div>
        <div className="absolute top-[509px] left-[25px] w-[1678px] flex flex-row items-center justify-between">
          <img
            className="w-[13px] relative h-[29px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="w-[13px] relative h-[29px]"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="absolute top-[915px] left-[76px] w-[1006px] h-[167px]" />
        <div className="absolute top-[928px] left-[78px] h-[147px] flex flex-col items-center justify-between text-17xl">
          <div className="w-[1002px] relative rounded-[80px] bg-darkslategray-200 h-[147px] z-[0]" />
          <div className="!m-[0] absolute top-[23px] left-[90px] h-24 flex flex-col items-center justify-between z-[1]">
            <div className="relative font-semibold">750 W</div>
            <div className="relative text-base font-semibold">Motor</div>
          </div>
          <div className="!m-[0] absolute top-[23px] left-[324px] h-24 flex flex-col items-center justify-between z-[2]">
            <div className="relative font-semibold">3 Hours</div>
            <div className="relative text-base font-semibold">
              Charging Time
            </div>
          </div>
          <div className="!m-[0] absolute top-[23px] left-[585px] h-24 flex flex-col items-center justify-between z-[3]">
            <div className="relative font-semibold">25mph</div>
            <div className="relative text-base font-semibold">Per Hour</div>
          </div>
          <div className="!m-[0] absolute top-[23px] left-[838px] h-24 flex flex-col items-center justify-between z-[4]">
            <div className="relative font-semibold">48V</div>
            <div className="relative text-base font-semibold">Battery</div>
          </div>
        </div>
        <div className="absolute top-[775px] left-[1053px] rounded-11xl bg-slategray w-[50px] flex flex-row items-center justify-center p-2.5 box-border">
          <img
            className="w-[30px] relative h-[30px]"
            alt=""
            src="/maximize1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Group;
