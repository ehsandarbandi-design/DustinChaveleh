import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Img from "@/components/Img";
import TextLink from "@/components/TextLink";
import Hairline from "@/components/Hairline";
import styles from "./mdx.module.css";

/** How MDX maps to the type system: body in P2 (40px apart), sub-headings in H3, images full-bleed,
 *  tables as hairline rows in P3, embedded maps (SF data portal) lazy in a responsive box. */
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
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className={styles.tableWrap}>
      <table className={`p3 ${styles.table}`} {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => <th className={styles.th} {...props} />,
  td: (props: ComponentPropsWithoutRef<"td">) => <td className={styles.td} {...props} />,
  /** <Embed src width height title /> in a post: an SF data portal map, lazy, in a responsive box */
  Embed: ({ src, title = "Embedded map", width, height }: { src: string; title?: string; width?: number; height?: number }) => (
    <div className={styles.embed} style={{ aspectRatio: width && height ? `${width} / ${height}` : "4 / 3" }}>
      <iframe src={src} title={title} loading="lazy" className={styles.iframe} />
    </div>
  ),
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
