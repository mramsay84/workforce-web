"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQListProps {
  items: FAQItem[];
}

export function FAQList({ items }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-[#1e1e2e]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-5">
            <dt>
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-[17px] font-semibold tracking-[-0.3px] text-[#fdfdff]">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-[#818cf8] transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </dt>
            {isOpen && (
              <dd className="mt-3 pr-12">
                <p className="font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
                  {item.answer}
                </p>
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
