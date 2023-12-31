import { useState } from "react";
import { validEmail } from "../../lib/utils";

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmailChange = (e: any) => {
    setError("");
    setEmail(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter the email");
      return;
    }

    if (validEmail(email)) {
      window.location.reload();
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setError("Please enter a valid email");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[365px] gap-6 lg:mt-[47px]">
      <div className="flex flex-col items-center justify-center gap-8 pl-[13px] pr-[12px]">
        <h1 className="font-brand text-[39px] leading-[46.8px] font-medium text-brand-grey-300 pr-[14px]">
          Sign up for exclusive access.
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="w-full">
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                className="px-6 py-5 rounded-lg border-[1px] border-solid border-brand-grey-100 shadow-brand-notification font-brand text-base font-medium leading-[120%] text-brand-grey-200 w-full placeholder-brand-grey-200"
              />
              {error && (
                <p className="text-red-500 font-brand text-left text-sm mt-1">
                  {error}
                </p>
              )}
            </div>
            <button
              className="py-[18px] px-7 text-center rounded-lg border-[1px] border-brand-grey-900 border-solid bg-brand-grey-900 font-brand font-semibold text-base text-white leading-[19.2px] w-full"
              type="submit"
            >
              Get started
            </button>
          </div>
        </form>
      </div>
      <div className="py-[18px] max-w-[365px]">
        <p className="font-brand text-base leading-[120%] font-semibold text-center text-brand-grey-900">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
