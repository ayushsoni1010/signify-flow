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
        <h4 className="text-brand-grey-900 text-base leading-[19.2px] font-semibold font-brand">
          {name}
        </h4>
        <p className="text-brand-grey-400 font-medium text-[13px] leading-[15.6px] font-brand">
          {title}
        </p>
      </div>
      <p
        className={cn(
          "text-brand-grey-500 text-base leading-[19.2px] font-medium font-brand text-left",
          isLongMessage ? "w-[491px]" : "w-[313px]"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default TestimonialCard;
