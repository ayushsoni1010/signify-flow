import LayerSection from "./LayerSection";
import NotificationSection from "./NotificationSection";
import SignUpForm from "./SignUpForm";
import TestimonialSection from "./TestimonialSection";

const SignUpAuthLayout = () => {
  return (
    <section>
      <div className="flex justify-center h-screen lg:h-[1024px] 2xl:h-screen">
        <div className="hidden lg:block lg:w-[57.62%] bg-brand-grey-900 overflow-hidden">
          <div className="flex flex-col justify-center mx-auto md:h-[1024px] 2xl:h-screen w-full pl-[60px] pt-[44px] bg-brand-auth bg-no-repeat bg-cover z-20">
            <NotificationSection />
            <LayerSection />
            <div className="pr-[62px] mt-0.5 w-full">
              <h2 className="font-brand my-5 text-[25px] leading-[30px] text-brand-neutral-100 text-right font-medium">
                Testimonials
              </h2>
              <hr className="bg-brand-grey-50 mt-0.5 h-[1px]" />
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
