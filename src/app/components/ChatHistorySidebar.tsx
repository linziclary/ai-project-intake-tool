import React, { useState, useRef, useEffect } from "react";

const CHATS = [
  "Renew Energy Promotion Web Page",
  "Solar Panel Installation Guide",
  "Wind Turbine Benefits Overview",
  "Hydropower Energy Resources",
  "Geothermal Energy Innovations",
  "Solar Panel Efficiency Advances",
  "Wind Turbine Design Improvements",
  "Hydroelectric Power Developments",
  "Bioenergy Conversion Techniques",
  "Smart Grid Infrastructure Plan",
  "Carbon Offset Campaign Strategy",
  "EV Charging Network Launch",
  "Green Building Certification Push",
  "Customer Rebate Program Redesign",
  "Sustainability Report 2026",
  "Community Solar Initiative",
  "Energy Audit Outreach Campaign",
  "Peak Demand Response Program",
];

const DotsIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 12.25 2.25" style={{ display: "block" }}>
    <path d="M1.125 0C1.746 0 2.25 0.504 2.25 1.125C2.25 1.746 1.746 2.25 1.125 2.25C0.504 2.25 0 1.746 0 1.125C0 0.504 0.504 0 1.125 0ZM6.125 0C6.746 0 7.25 0.504 7.25 1.125C7.25 1.746 6.746 2.25 6.125 2.25C5.504 2.25 5 1.746 5 1.125C5 0.504 5.504 0 6.125 0ZM11.125 0C11.746 0 12.25 0.504 12.25 1.125C12.25 1.746 11.746 2.25 11.125 2.25C10.504 2.25 10 1.746 10 1.125C10 0.504 10.504 0 11.125 0Z" fill="#72797E" />
  </svg>
);

const DotsIconBlue = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 12.25 2.25" style={{ display: "block" }}>
    <path d="M1.125 0C1.746 0 2.25 0.504 2.25 1.125C2.25 1.746 1.746 2.25 1.125 2.25C0.504 2.25 0 1.746 0 1.125C0 0.504 0.504 0 1.125 0ZM6.125 0C6.746 0 7.25 0.504 7.25 1.125C7.25 1.746 6.746 2.25 6.125 2.25C5.504 2.25 5 1.746 5 1.125C5 0.504 5.504 0 6.125 0ZM11.125 0C11.746 0 12.25 0.504 12.25 1.125C12.25 1.746 11.746 2.25 11.125 2.25C10.504 2.25 10 1.746 10 1.125C10 0.504 10.504 0 11.125 0Z" fill="#0077ac" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 12.9 12.9" style={{ display: "block" }}>
    <path d="M6.132 3.132C6.308 2.956 6.593 2.956 6.769 3.132L10.019 6.382C10.194 6.558 10.194 6.843 10.019 7.019C9.843 7.194 9.558 7.194 9.382 7.019L6.9 4.537V12.45C6.9 12.699 6.699 12.9 6.45 12.9C6.202 12.9 6 12.699 6 12.45V4.537L3.519 7.019C3.343 7.194 3.058 7.194 2.882 7.019C2.706 6.843 2.706 6.558 2.882 6.382L6.132 3.132ZM12.45 0C12.699 0 12.9 0.202 12.9 0.45C12.9 0.699 12.699 0.9 12.45 0.9H0.45C0.202 0.9 0 0.699 0 0.45C0 0.202 0.202 0 0.45 0H12.45Z" fill="#008AC0" />
  </svg>
);

const PencilMenuIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 13 13" style={{ display: "block" }}>
    <path d="M7 2H2.9C2.472 2 2.18 2 1.955 2.019C1.736 2.037 1.624 2.07 1.546 2.11C1.358 2.205 1.205 2.358 1.109 2.546C1.07 2.624 1.036 2.736 1.019 2.955C1 3.18 1 3.472 1 3.9V10.1C1 10.528 1 10.82 1.019 11.045C1.036 11.264 1.07 11.376 1.109 11.454C1.205 11.642 1.358 11.795 1.546 11.891C1.624 11.931 1.736 11.964 1.955 11.982C2.18 12 2.472 12 2.9 12H9.1C9.528 12 9.82 12 10.045 11.982C10.264 11.964 10.376 11.931 10.454 11.891C10.642 11.795 10.795 11.642 10.891 11.454C10.93 11.376 10.964 11.264 10.981 11.045C11 10.82 11 10.528 11 10.1V6L12 5V10.1C12 10.512 12 10.851 11.978 11.126C11.955 11.407 11.906 11.666 11.782 11.908C11.591 12.285 11.285 12.591 10.908 12.782C10.666 12.906 10.407 12.955 10.126 12.978C9.851 13 9.511 13 9.1 13H2.9C2.489 13 2.149 13 1.874 12.978C1.593 12.955 1.334 12.906 1.092 12.782C0.716 12.591 0.41 12.285 0.218 11.908C0.094 11.666 0.045 11.407 0.022 11.126C0 10.851 0 10.512 0 10.1V3.9C0 3.489 0 3.149 0.022 2.874C0.045 2.593 0.094 2.335 0.218 2.092C0.41 1.716 0.716 1.41 1.092 1.218C1.334 1.094 1.593 1.046 1.874 1.023C2.149 1 2.489 1 2.9 1H8L7 2ZM10.225 0.082C10.419 -0.046 10.683 -0.024 10.854 0.147L12.854 2.147C13.049 2.342 13.049 2.658 12.854 2.854L8.911 6.796C8.835 6.872 8.747 6.936 8.651 6.984L4.724 8.947C4.531 9.044 4.299 9.006 4.146 8.854C3.994 8.702 3.956 8.469 4.053 8.277L6.017 4.349C6.065 4.253 6.128 4.165 6.204 4.089L10.146 0.147L10.225 0.082ZM6.911 4.796L5.872 6.872L6.127 7.127L8.204 6.089L11.793 2.5L10.5 1.207L6.911 4.796Z" fill="#72797E" />
  </svg>
);

const ShareMenuIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 12.95 11" style={{ display: "block" }}>
    <path d="M7.5 0C8.328 0 9 0.672 9 1.5V2.75C9 3.026 8.776 3.25 8.5 3.25C8.224 3.25 8 3.026 8 2.75V1.5C8 1.224 7.776 1 7.5 1H1.5C1.224 1 1 1.224 1 1.5V9.5C1 9.776 1.224 10 1.5 10H7.5C7.776 10 8 9.776 8 9.5V8.25C8 7.974 8.224 7.75 8.5 7.75C8.776 7.75 9 7.974 9 8.25V9.5C9 10.328 8.328 11 7.5 11H1.5C0.672 11 0 10.328 0 9.5V1.5C0 0.672 0.672 0 1.5 0H7.5ZM9.932 2.932C10.107 2.756 10.393 2.756 10.568 2.932L12.818 5.182C12.903 5.266 12.95 5.381 12.95 5.5C12.95 5.619 12.903 5.734 12.818 5.818L10.568 8.068C10.393 8.244 10.107 8.244 9.932 8.068C9.756 7.893 9.756 7.607 9.932 7.432L11.363 6H4.5C4.224 6 4 5.776 4 5.5C4 5.224 4.224 5 4.5 5H11.363L9.932 3.568C9.756 3.393 9.756 3.107 9.932 2.932Z" fill="#72797E" />
  </svg>
);

const TrashMenuIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 9 12" style={{ display: "block" }}>
    <path d="M8.5 2C8.776 2 9 2.224 9 2.5C9 2.776 8.776 3 8.5 3H8V11C8 11.552 7.552 12 7 12H2C1.448 12 1 11.552 1 11V3H0.5C0.224 3 0 2.776 0 2.5C0 2.224 0.224 2 0.5 2H8.5ZM2 11H7V3H2V11ZM6.5 0C6.776 0 7 0.224 7 0.5C7 0.776 6.776 1 6.5 1H2.5C2.224 1 2 0.776 2 0.5C2 0.224 2.224 0 2.5 0H6.5Z" fill="#72797E" />
  </svg>
);

function ChatItemMenu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-[24px] z-50 bg-white border border-[#b5bdc3] rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),8px_8px_16px_0px_rgba(0,0,0,0.08)] py-[5px] px-px w-[120px]"
    >
      {[
        { icon: <PencilMenuIcon />, label: "Rename" },
        { icon: <ShareMenuIcon />, label: "Share" },
        { icon: <TrashMenuIcon />, label: "Delete" },
      ].map(({ icon, label }) => (
        <button
          key={label}
          onClick={onClose}
          className="w-full flex gap-[4px] items-center px-[8px] py-[4px] rounded-[8px] hover:bg-[#f8f9fb] transition-colors"
        >
          <span className="shrink-0 flex items-center justify-center">{icon}</span>
          <span className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] text-[#72797e] whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

interface ChatHistorySidebarProps {
  onClose: () => void;
  excludeRef?: React.RefObject<HTMLElement | null>;
}

export function ChatHistorySidebar({ onClose, excludeRef }: ChatHistorySidebarProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [openMenuIdx, setOpenMenuIdx] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (excludeRef?.current?.contains(e.target as Node)) return;
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose, excludeRef]);

  return (
    <div
      ref={ref}
      className="bg-white border border-[#b5bdc3] rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),8px_8px_16px_0px_rgba(0,0,0,0.08)] w-[184px] flex flex-col overflow-hidden pb-[8px]"
    >
      {/* Header */}
      <div className="flex items-center px-[16px] pt-[16px] pb-[8px] shrink-0">
        <p className="font-['Arial_Nova:Bold',sans-serif] leading-[18px] text-[14px] text-[#0077ac]">My Chats</p>
      </div>

      {/* Chat list */}
      <div className="flex flex-col px-[8px] overflow-y-auto max-h-[320px] custom-scrollbar">
        {CHATS.map((title, idx) => {
          const isHovered = hoveredIdx === idx;
          const menuOpen = openMenuIdx === idx;
          return (
            <div
              key={idx}
              className={`flex gap-[8px] items-center px-[8px] py-[8px] rounded-[8px] cursor-pointer transition-colors ${isHovered ? "bg-[#e1f5ff]" : "bg-white"}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => { if (openMenuIdx !== idx) setHoveredIdx(null); }}
            >
              <p className={`flex-1 font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] overflow-hidden text-ellipsis whitespace-nowrap transition-colors ${isHovered ? "text-[#0077ac]" : "text-[#72797e]"}`}>
                {title}
              </p>
              <div className="relative shrink-0">
                <button
                  className="flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuIdx(menuOpen ? null : idx);
                    setHoveredIdx(idx);
                  }}
                >
                  {isHovered ? <DotsIconBlue /> : <DotsIcon />}
                </button>
                {menuOpen && (
                  <ChatItemMenu onClose={() => { setOpenMenuIdx(null); setHoveredIdx(null); }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
