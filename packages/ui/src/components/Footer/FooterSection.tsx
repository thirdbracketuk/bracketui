import { FC } from "react";
import { text } from "../../lib/system/tokens";

export interface FooterSectionProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const FooterSection: FC<FooterSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {title && (
        <h3 className={`${text.title} ui:tracking-wider ui:mb-4`}>
          {title}
        </h3>
      )}
      <div className="ui:space-y-3">{children}</div>
    </div>
  );
};

export default FooterSection;
