import { cn } from "../../lib/utils";
import { ITestimonial } from "../../types/testimonial";

const TestimonialCard: React.FunctionComponent<ITestimonial> = ({
  id,
  name,
  title,
  message,
  isLongMessage,
}) => {
  return (
    <div
      id={id.toString()}
      className="bg-white p-5 rounded-xl flex flex-col items-start gap-5 shadow-brand-testimonial w-fit"
    >
      <div className="flex items-center gap-2">
        <h4 className="text-brand-dark-grey text-base leading-5 font-semibold font-brand">
          {name}
        </h4>
        <p className="text-brand-light-grey font-medium text-[13px] leading-4 font-brand">
          {title}
        </p>
      </div>
      <p
        className={cn(
          "text-brand-text text-base leading-5 font-medium font-brand text-left",
          isLongMessage ? "w-[491px]" : "w-[313px]"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default TestimonialCard;
