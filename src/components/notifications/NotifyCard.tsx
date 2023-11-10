import bell from "../../assets/bell.svg";

const NotifyCard: React.FunctionComponent = () => {
  return (
    <div className="bg-white bg-brand-notification w-[189.7px] h-[171.5px] p-[14px] flex flex-col gap-[14px] rounded-[8.4px] shadow-brand-notification">
      <div className="flex justify-between items-start">
        <div>
          <img src={bell} alt="Bell " />
        </div>
        <button className="font-brand text-brand-grey-900 text-right text-[9.1px] font-semibold leading-[120%] hover:cursor-pointer">
          Save
        </button>
      </div>
      <div className="font-brand text-sm leading-[16.8px] text-brand-grey-900 font-medium text-left">
        We’ll be sending notifications to you here
      </div>
      <div>
        <input
          value="hello@loch.one"
          type="text"
          className="w-[161.7px] py-[8.4px] px-[11.2px] rounded-[5.6px] border-[0.7px] border-solid border-brand-neutral-300 bg-white font-brand text-[9.1px] font-medium leading-[120%] text-brand-grey-900 mt-[1.5px]"
        />
      </div>
    </div>
  );
};

export default NotifyCard;
