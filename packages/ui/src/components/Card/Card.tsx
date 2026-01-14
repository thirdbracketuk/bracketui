import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import {
  cardStyles,
  cardContentStyles,
  cardTitleStyles,
  cardDescriptionStyles,
  cardImageStyles,
} from "./styles";
import { text } from "../../lib/system/tokens";

export interface CardProps {
  className?: string;
  variant?: "default" | "elevated" | "flat" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  href?: string;
  external?: boolean;
  clickable?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      title,
      description,
      image,
      imageAlt,
      category,
      href,
      external = false,
      clickable = false,
      children,
      onClick,
    },
    ref
  ) => {
    const isClickable = clickable || !!href || !!onClick;
    
    if (href) {
      return (
        <a
          ref={ref as any}
          href={href}
          className={cn(
            cardStyles({ variant, clickable: isClickable }),
            className
          )}
          onClick={onClick as any}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {image && (
            <div className="ui:w-full ui:overflow-hidden">
              <img
                src={image}
                alt={imageAlt || title || "Card image"}
                className={cardImageStyles({ size })}
              />
            </div>
          )}
          
          <div className={cardContentStyles({ size })}>
            {category && (
              <div className={text.category}>
                {category}
              </div>
            )}
            
            {title && (
              <h3 className={cardTitleStyles({ size })}>
                {title}
              </h3>
            )}
            
            {description && (
              <p className={cardDescriptionStyles({ size })}>
                {description}
              </p>
            )}
            
            {children}
          </div>
        </a>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          cardStyles({ variant, clickable: isClickable }),
          className
        )}
        onClick={onClick}
      >
        {image && (
          <div className="ui:w-full ui:overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title || "Card image"}
              className={cardImageStyles({ size })}
            />
          </div>
        )}
        
        <div className={cardContentStyles({ size })}>
          {category && (
            <div className={text.category}>
              {category}
            </div>
          )}
          
          {title && (
            <h3 className={cardTitleStyles({ size })}>
              {title}
            </h3>
          )}
          
          {description && (
            <p className={cardDescriptionStyles({ size })}>
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
