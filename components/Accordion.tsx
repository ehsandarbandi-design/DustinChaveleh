"use client";
import { useId, useState, type ReactNode } from "react";
import Hairline from "./Hairline";
import styles from "./Accordion.module.css";

export type AccordionItem = { id: string; title: ReactNode; meta?: ReactNode; content: ReactNode };

/** Hairline rows that expand one at a time. Title left, a "+" at the far right that turns into "×". */
export default function Accordion({ items, className = "" }: { items: AccordionItem[]; className?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const base = useId();
  return (
    <div className={`${styles.list} ${className}`}>
      <Hairline />
      {items.map((item) => {
        const open = item.id === openId;
        const panelId = `${base}-${item.id}`;
        return (
          <div key={item.id} className={styles.item} data-open={open}>
            <h3 className={styles.heading}>
              <button type="button" className={styles.trigger} aria-expanded={open} aria-controls={panelId} onClick={() => setOpenId(open ? null : item.id)}>
                <span className={styles.titleWrap}>
                  <span className={`h4 ${styles.title}`}>{item.title}</span>
                  {item.meta ? <span className={`mono ${styles.meta}`}>{item.meta}</span> : null}
                </span>
                <span className={styles.plus} aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </h3>
            <div id={panelId} className={styles.panel} role="region" inert={!open}>
              <div className={styles.panelInner}>
                <div className={styles.content}>{item.content}</div>
              </div>
            </div>
            <Hairline />
          </div>
        );
      })}
    </div>
  );
}
