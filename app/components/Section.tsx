import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className={`eyebrow ${align === "center" ? "eyebrow-center" : ""}`}>
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.6rem]">
        {title}
      </Heading>
      {description ? (
        <p className="text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
