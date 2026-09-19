import React from "react";

export interface PartnerLogoProps {
  className?: string;
  size?: number;
}

/**
 * High-fidelity institutional partner SVG logos:
 * 1. UPSDM (Uttar Pradesh Skill Development Mission)
 * 2. Ministry of MSME (Government of India)
 * 3. SIDBI (Small Industries Development Bank of India)
 * 4. NSDC / Skill India (National Skill Development Corporation)
 * 5. NITI Aayog (National Institution for Transforming India)
 * 6. World Bank (World Bank Group)
 */

export const UpsdmLogo: React.FC<PartnerLogoProps> = ({ className = "", size = 48 }) => (
  <svg
    viewBox="0 0 200 60"
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Uttar Pradesh Skill Development Mission (UPSDM)"
  >
    {/* UP Emblem Crest Ring */}
    <circle cx="30" cy="30" r="26" stroke="#C41E3A" strokeWidth="2.5" fill="#FFF8F0" />
    <circle cx="30" cy="30" r="21" stroke="#1B2E6B" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
    {/* Bow and Arrow stylized */}
    <path d="M 20 30 Q 30 18 40 30 Q 30 42 20 30 Z" fill="#D4A843" opacity="0.3" />
    <path d="M 18 30 L 42 30 M 34 26 L 42 30 L 34 34" stroke="#1B2E6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 23 20 Q 30 14 37 20" stroke="#C41E3A" strokeWidth="1.8" fill="none" />
    <path d="M 23 40 Q 30 46 37 40" stroke="#C41E3A" strokeWidth="1.8" fill="none" />
    
    {/* Text */}
    <text x="66" y="24" fontFamily="'Lato', sans-serif" fontSize="15" fontWeight="900" fill="#1B2E6B" letterSpacing="1.2">
      UPSDM
    </text>
    <text x="66" y="38" fontFamily="'Lato', sans-serif" fontSize="8.5" fontWeight="700" fill="#C41E3A" letterSpacing="0.4">
      UP SKILL DEV. MISSION
    </text>
    <text x="66" y="49" fontFamily="'Lato', sans-serif" fontSize="7" fontWeight="500" fill="#666" letterSpacing="0.2">
      Govt. of Uttar Pradesh
    </text>
  </svg>
);

export const MsmeLogo: React.FC<PartnerLogoProps> = ({ className = "", size = 48 }) => (
  <svg
    viewBox="0 0 200 60"
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Ministry of MSME"
  >
    {/* Ashoka Chakra & Emblem Base */}
    <g transform="translate(10, 8)">
      {/* Tricolor aura arcs */}
      <path d="M 6 36 A 18 18 0 0 1 38 36" stroke="#FF9933" strokeWidth="2.5" fill="none" />
      <circle cx="22" cy="22" r="14" fill="#F4F8FA" stroke="#138808" strokeWidth="2" />
      {/* Stylized Ashoka lion silhouette */}
      <path d="M 18 13 C 18 10, 26 10, 26 13 C 27 15, 27 19, 26 21 L 28 29 L 16 29 L 18 21 Z" fill="#1B2E6B" />
      <circle cx="22" cy="15" r="2" fill="#D4A843" />
      <rect x="14" y="29" width="16" height="3" rx="1.5" fill="#C41E3A" />
    </g>

    {/* Text */}
    <text x="62" y="23" fontFamily="'Lato', sans-serif" fontSize="15" fontWeight="900" fill="#1B2E6B" letterSpacing="1">
      MSME
    </text>
    <text x="62" y="37" fontFamily="'Lato', sans-serif" fontSize="8.5" fontWeight="700" fill="#FF9933" letterSpacing="0.3">
      MINISTRY OF MICRO, SMALL
    </text>
    <text x="62" y="48" fontFamily="'Lato', sans-serif" fontSize="7.5" fontWeight="600" fill="#138808" letterSpacing="0.3">
      &amp; MEDIUM ENTERPRISES
    </text>
  </svg>
);

export const SidbiLogo: React.FC<PartnerLogoProps> = ({ className = "", size = 48 }) => (
  <svg
    viewBox="0 0 190 60"
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SIDBI"
  >
    {/* SIDBI dynamic leaf vortex emblem */}
    <g transform="translate(10, 10)">
      <path
        d="M 20 4 C 10 4, 4 12, 4 20 C 4 28, 12 36, 20 36 C 24 36, 28 34, 31 31 L 24 24 C 23 25, 21 26, 20 26 C 16 26, 14 23, 14 20 C 14 16, 17 14, 20 14 C 23 14, 25 15, 26 17 L 33 10 C 30 6, 25 4, 20 4 Z"
        fill="#009640"
      />
      <circle cx="20" cy="20" r="5" fill="#0072BC" />
      <path d="M 24 10 Q 32 14 35 23" stroke="#0072BC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 8 28 Q 14 36 24 36" stroke="#009640" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>

    {/* Text */}
    <text x="56" y="28" fontFamily="'Lato', sans-serif" fontSize="19" fontWeight="900" fill="#0072BC" letterSpacing="1.5">
      SIDBI
    </text>
    <text x="56" y="43" fontFamily="'Lato', sans-serif" fontSize="7.8" fontWeight="700" fill="#009640" letterSpacing="0.4">
      SMALL INDUSTRIES DEV. BANK
    </text>
  </svg>
);

export const NsdcLogo: React.FC<PartnerLogoProps> = ({ className = "", size = 48 }) => (
  <svg
    viewBox="0 0 195 60"
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="National Skill Development Corporation / Skill India"
  >
    {/* Skill India hands & radiant sun */}
    <g transform="translate(8, 8)">
      {/* Radiant sun rays */}
      <circle cx="22" cy="18" r="8" fill="#F7931E" />
      <path d="M 22 4 L 22 7 M 32 8 L 30 11 M 36 18 L 33 18 M 12 8 L 14 11 M 8 18 L 11 18" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
      {/* Supporting nurturing hands */}
      <path d="M 10 32 C 14 26, 20 25, 22 28 C 24 25, 30 26, 34 32 C 30 38, 14 38, 10 32 Z" fill="#00A651" />
      <path d="M 14 33 Q 22 37 30 33" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </g>

    {/* Text */}
    <text x="54" y="24" fontFamily="'Lato', sans-serif" fontSize="14.5" fontWeight="900" fill="#1B2E6B" letterSpacing="0.8">
      Skill India
    </text>
    <text x="54" y="37" fontFamily="'Lato', sans-serif" fontSize="9" fontWeight="800" fill="#F7931E" letterSpacing="0.5">
      NSDC
    </text>
    <text x="54" y="48" fontFamily="'Lato', sans-serif" fontSize="7" fontWeight="600" fill="#00A651" letterSpacing="0.3">
      Transforming the skill landscape
    </text>
  </svg>
);

export const NitiAayogLogo: React.FC<PartnerLogoProps> = ({ className = "", size = 48 }) => (
  <svg
    viewBox="0 0 195 60"
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="NITI Aayog"
  >
    {/* NITI Aayog circular dynamic ribbon */}
    <g transform="translate(8, 7)">
      <circle cx="23" cy="23" r="20" stroke="#FF9933" strokeWidth="2" strokeDasharray="3 2" fill="#FAFCFE" />
      {/* Tricolor dynamic waves */}
      <path d="M 9 23 Q 16 14 23 23 Q 30 32 37 23" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 9 27 Q 16 18 23 27 Q 30 36 37 27" stroke="#138808" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="23" cy="23" r="3.5" fill="#000080" />
    </g>

    {/* Text */}
    <text x="56" y="24" fontFamily="'Lato', sans-serif" fontSize="15" fontWeight="900" fill="#000080" letterSpacing="1">
      NITI Aayog
    </text>
    <text x="56" y="37" fontFamily="'Lato', sans-serif" fontSize="7.8" fontWeight="700" fill="#FF9933" letterSpacing="0.3">
      NATIONAL INSTITUTION FOR
    </text>
    <text x="56" y="48" fontFamily="'Lato', sans-serif" fontSize="7.8" fontWeight="700" fill="#138808" letterSpacing="0.3">
      TRANSFORMING INDIA
    </text>
  </svg>
);

export const WorldBankLogo: React.FC<PartnerLogoProps> = ({ className = "", size = 48 }) => (
  <svg
    viewBox="0 0 205 60"
    height={size}
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="The World Bank"
  >
    {/* Iconic Dual-Hemisphere Globe */}
    <g transform="translate(6, 9)">
      <circle cx="16" cy="21" r="14" stroke="#0072BC" strokeWidth="2" fill="#E6F2FA" />
      {/* Globe grid lines */}
      <path d="M 6 21 C 6 14, 26 14, 26 21 C 26 28, 6 28, 6 21 Z" stroke="#0072BC" strokeWidth="1" fill="none" />
      <path d="M 16 7 L 16 35" stroke="#0072BC" strokeWidth="1.2" />
      
      {/* Overlapping East Hemisphere */}
      <circle cx="30" cy="21" r="14" stroke="#002244" strokeWidth="2" fill="none" />
      <path d="M 20 21 C 20 14, 40 14, 40 21 C 40 28, 20 28, 20 21 Z" stroke="#002244" strokeWidth="1" fill="none" />
      <path d="M 30 7 L 30 35" stroke="#002244" strokeWidth="1.2" />
    </g>

    {/* Text */}
    <text x="56" y="24" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="800" fill="#002244" letterSpacing="1.2">
      THE WORLD BANK
    </text>
    <text x="56" y="37" fontFamily="'Lato', sans-serif" fontSize="8.5" fontWeight="700" fill="#0072BC" letterSpacing="0.6">
      IBRD • IDA | WORLD BANK GROUP
    </text>
    <text x="56" y="48" fontFamily="'Lato', sans-serif" fontSize="7" fontWeight="500" fill="#666" letterSpacing="0.2">
      Pro-Poor Tourism Partner
    </text>
  </svg>
);

export const partnerList = [
  { name: "UPSDM", Component: UpsdmLogo, desc: "UP Skill Development Mission" },
  { name: "MSME", Component: MsmeLogo, desc: "Ministry of MSME, Govt. of India" },
  { name: "SIDBI", Component: SidbiLogo, desc: "Small Industries Development Bank" },
  { name: "NSDC", Component: NsdcLogo, desc: "Skill India / NSDC" },
  { name: "NITI Aayog", Component: NitiAayogLogo, desc: "Transforming India" },
  { name: "World Bank", Component: WorldBankLogo, desc: "World Bank Group" },
];
