import { useState } from 'react';

export const useFaq = (initialOpenIndex: number | null = null) => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return { openIndex, toggleFaq };
};
