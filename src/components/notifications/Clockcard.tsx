import clock from "../../assets/clock.svg";
import check from "../../assets/check.svg";

const Clockcard: React.FunctionComponent = () => {
  return (
    <div className="bg-white h-[171.5px] p-[14px] flex flex-col rounded-[8.4px] justify-between shadow-brand-notification">
      <div className="flex justify-between items-start">
        <div>
          <img src={clock} alt="Clock" className="w-7 h-7" />
        </div>
        <div className="w-[14px] h-[14px] rounded-[4.2px] bg-brand-blue flex items-center justify-center">
          <img src={check} alt="Chart" />
        </div>
      </div>
      <div className="flex flex-col gap-[9px] items-start">
        <p className="font-brand text-[11.2px] leading-[120%] text-brand-grey-900 font-medium text-left">
          Notify me when any wallet dormant for
        </p>
        <select
          name="money"
          id="1"
          className="bg-brand-grey-50 p-[4.2px] inline-flex items-center justify-center gap-[2.8px] rounded-[2.8px] font-brand font-medium leading-[120%] text-[9.1px] text-brand-grey-800"
        >
          <option
            value="> 30 days"
            className="font-brand font-medium leading-[120%] text-[9.1px] text-brand-grey-800"
          >
            {"> 30 days"}
          </option>
        </select>
        <p className="font-brand text-[11.2px] leading-[120%] text-brand-grey-900 font-medium text-left -mt-[0.6px]">
          becomes active
        </p>
      </div>
    </div>
  );
};

export default Clockcard;
