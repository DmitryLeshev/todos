import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  children: React.ReactNode;
  helmet?: string;
  description?: string;
  className?: string;
}

export const Page: React.FC<Props> = ({
  children,
  helmet,
  description,
  className,
}) => {
  const content = !className ? (
    children
  ) : (
    <div className={className}>{children}</div>
  );

  return (
    <>
      <Helmet>
        {helmet && <title>{helmet}</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      {content}
    </>
  );
};
