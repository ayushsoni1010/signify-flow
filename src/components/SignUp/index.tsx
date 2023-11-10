import LayerSection from "./LayerSection";
import NotificationSection from "./NotificationSection";
import SignUpForm from "./SignUpForm";
import TestimonialSection from "./TestimonialSection";

const SignUpAuthLayout = () => {
  return (
    <section>
      <div className="flex justify-center h-screen">
        <div className="hidden lg:block lg:w-[57.62%] bg-brand-dark-grey overflow-hidden">
          <div className="flex flex-col justify-center items-center mx-auto h-screen w-full pl-14 bg-brand-auth bg-no-repeat bg-cover">
            <NotificationSection />
            <LayerSection />
            <div className="pr-[62px] -mt-20 w-full">
              <h2 className="font-brand text-2xl text-[#F2F2F2] text-right font-medium">
                Testimonials
              </h2>
              <hr className="bg-[rgba(229, 229, 230, 0.50)] mt-2 h-[1px]" />
            </div>
            <TestimonialSection />
          </div>
        </div>
        <div className="flex items-center justify-center w-full max-w-md px-6 lg:px-0 mx-auto lg:w-2/6">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignUpAuthLayout;
