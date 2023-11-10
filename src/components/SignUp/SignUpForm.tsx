const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[365px] gap-6">
      <div className="flex flex-col items-center justify-center gap-8 p-3">
        <h1 className="font-brand text-[39px] leading-[46px] font-medium text-brand-light-grey mr-[14px]">
          Sign up for exclusive access.
        </h1>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col justify-center items-center gap-6">
            <input
              type="text"
              value=""
              placeholder="Your email address"
              className="px-6 py-5 rounded-lg border-[1px] border-solid border-[#E5E5E6] shadow-brand-notification font-brand text-base font-medium leading-[120%] text-[#CACBCC] w-full"
            />
            <button className="py-[18px] px-7 text-center rounded-lg border-[1px] border-brand-dark-grey border-solid bg-brand-dark-grey font-brand font-medium text-base text-white w-full">
              Get started
            </button>
          </div>
        </form>
      </div>
      <div className="py-[18px]">
        <p className="font-brand text-base leading-[120%] font-medium text-center text-brand-dark-grey">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
