import React from "react";

export interface PartnerLogoProps {
  className?: string;
  height?: number;
}

/**
 * Real institutional partner logos served as <img> tags.
 * Local assets in /public/partner-logos/ where downloaded.
 * External Wikimedia URLs used as fallback for others.
 */

export const UpsdmLogo: React.FC<PartnerLogoProps> = ({ className = "", height = 56 }) => (
  <img
    src="/partner-logos/upsdm.png"
    alt="UPSDM – Uttar Pradesh Skill Development Mission"
    height={height}
    className={`object-contain ${className}`}
    loading="lazy"
    onError={(e) => {
      // Fallback: render initials badge
      const el = e.currentTarget;
      el.style.display = "none";
      const fallback = el.nextElementSibling as HTMLElement;
      if (fallback) fallback.style.display = "flex";
    }}
  />
);

export const MsmeLogo: React.FC<PartnerLogoProps> = ({ className = "", height = 56 }) => (
  <img
    src="/partner-logos/msme.svg"
    alt="MSME – Ministry of Micro, Small & Medium Enterprises, Govt. of India"
    height={height}
    className={`object-contain ${className}`}
    loading="lazy"
  />
);

export const SidbiLogo: React.FC<PartnerLogoProps> = ({ className = "", height = 56 }) => (
  <img
    src="/partner-logos/sidbi.png"
    alt="SIDBI – Small Industries Development Bank of India"
    height={height}
    className={`object-contain ${className}`}
    loading="lazy"
  />
);

export const NsdcLogo: React.FC<PartnerLogoProps> = ({ className = "", height = 56 }) => (
  <img
    src="/partner-logos/skillindia.png"
    alt="Skill India / NSDC – National Skill Development Corporation"
    height={height}
    className={`object-contain ${className}`}
    loading="lazy"
  />
);

export const NitiAayogLogo: React.FC<PartnerLogoProps> = ({ className = "", height = 56 }) => (
  <img
    src="/partner-logos/nitiaayog.png"
    alt="NITI Aayog – National Institution for Transforming India"
    height={height}
    className={`object-contain ${className}`}
    loading="lazy"
  />
);

export const WorldBankLogo: React.FC<PartnerLogoProps> = ({ className = "", height = 56 }) => (
  <img
    src="/partner-logos/worldbank.svg"
    alt="The World Bank Group"
    height={height}
    className={`object-contain ${className}`}
    loading="lazy"
  />
);

export const partnerList = [
  { name: "UPSDM", Component: UpsdmLogo, desc: "UP Skill Development Mission" },
  { name: "MSME", Component: MsmeLogo, desc: "Ministry of MSME, Govt. of India" },
  { name: "SIDBI", Component: SidbiLogo, desc: "Small Industries Development Bank" },
  { name: "Skill India", Component: NsdcLogo, desc: "Skill India / NSDC" },
  { name: "NITI Aayog", Component: NitiAayogLogo, desc: "Transforming India" },
  { name: "World Bank", Component: WorldBankLogo, desc: "World Bank Group" },
];
