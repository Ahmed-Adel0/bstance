const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf-8');
const lines = content.split('\n');

function getLines(start, end) {
  return lines.slice(start, end).join('\n');
}

function writeComponent(path, name, content) {
  const code = `"use client";
import React from 'react';

export default function ${name}() {
  return (
    <>
${content}
    </>
  );
}
`;
  fs.writeFileSync(path, code);
}

writeComponent('src/components/layout/Header.tsx', 'Header', getLines(142, 193));
writeComponent('src/components/sections/HeroSection.tsx', 'HeroSection', getLines(193, 323));
writeComponent('src/components/sections/RaffleHookSection.tsx', 'RaffleHookSection', getLines(323, 483));
writeComponent('src/components/sections/WhyUsSection.tsx', 'WhyUsSection', getLines(483, 530));
writeComponent('src/components/sections/PackagesSection.tsx', 'PackagesSection', getLines(530, 672));
writeComponent('src/components/sections/ServicesSection.tsx', 'ServicesSection', getLines(672, 895));
writeComponent('src/components/sections/TeamSection.tsx', 'TeamSection', getLines(895, 972));
writeComponent('src/components/sections/TestimonialsSection.tsx', 'TestimonialsSection', getLines(972, 1065));
writeComponent('src/components/sections/RewardsSection.tsx', 'RewardsSection', getLines(1065, 1141));
writeComponent('src/components/sections/FAQSection.tsx', 'FAQSection', getLines(1141, 1266));
writeComponent('src/components/sections/BookingFormSection.tsx', 'BookingFormSection', getLines(1266, 1349));
writeComponent('src/components/layout/Footer.tsx', 'Footer', getLines(1349, lines.length - 2));

console.log('Components extracted.');
