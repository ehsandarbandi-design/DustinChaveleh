import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Img from "@/components/Img";
import TextLink from "@/components/TextLink";
import Hairline from "@/components/Hairline";
import styles from "./mdx.module.css";

/** How MDX maps to the type system: body in P2 (40px apart), sub-headings in H3, images full-bleed. */
export const mdxComponents: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<"h2">) => <h2 className={`h3 ${styles.heading}`} {...props} />,
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className={`h3 ${styles.heading}`} {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className={`h4 ${styles.heading}`} {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p className={`p2 ${styles.p}`} {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className={`p2 ${styles.list}`} {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className={`p2 ${styles.list} ${styles.ordered}`} {...props} />,
  li: (props: ComponentPropsWithoutRef<"li">) => <li className={styles.item} {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => <blockquote className={`p1 ${styles.quote}`} {...props} />,
  hr: () => <Hairline className={styles.rule} />,
  a: ({ href = "", children }: ComponentPropsWithoutRef<"a">) => <TextLink href={href}>{children}</TextLink>,
  img: ({ src = "", alt = "", title }: ComponentPropsWithoutRef<"img">) => (
    <figure className={styles.figure}>
      <div className={styles.media}>
        <Img src={typeof src === "string" ? src : ""} alt={alt} fill sizes="100vw" className={styles.img} />
      </div>
      {title ? <figcaption className={`p3 ${styles.caption}`}>{title}</figcaption> : null}
    </figure>
  ),
};
