import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface ProjectPlanProps {
  briefData: any;
  planData: any;
  onUpdateBrief: (data: any) => void;
  onUpdatePlan: (data: any) => void;
  onBackToBrief: () => void;
  onApprove: () => void;
}

const ALL_CHANNELS = ["Web", "Email", "Paid Media", "Analytics", "UX", "AI", "Event"];

// Reused icon primitives
const CheckIcon = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 9 8">
    <path d="M1 4L3.5 6.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PlusIcon = ({ color = "#72797E" }: { color?: string }) => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 11 11">
    <path d="M5.5 0C5.77614 0 6 0.223858 6 0.5V5H10.5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H6V10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5V6H0.5C0.223858 6 0 5.77614 0 5.5C0 5.22386 0.223858 5 0.5 5H5V0.5C5 0.223858 5.22386 0 5.5 0Z" fill={color} />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <path d="M9.5 3L5.5 7.5L9.5 12" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <path d="M7.5 1.5V10M7.5 1.5L4.5 4.5M7.5 1.5L10.5 4.5" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 10V12.5C2 13.05 2.45 13.5 3 13.5H12C12.55 13.5 13 13.05 13 12.5V10" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckCircledIcon = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <circle cx="7.5" cy="7.5" r="6.125" stroke="white" strokeWidth="1.25" />
    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CircleBullet = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <circle cx="7.5" cy="7.5" r="6.125" stroke="#b5bdc3" strokeWidth="1.25" />
  </svg>
);

// Pencil — hover edit trigger (from Figma), inline 15×15
const PencilIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 13 13" style={{ display: "block" }}>
    <path d="M7 2H2.9C2.472 2 2.18 2 1.955 2.019C1.736 2.037 1.624 2.07 1.546 2.11C1.358 2.205 1.205 2.358 1.109 2.546C1.07 2.624 1.036 2.736 1.019 2.955C1 3.18 1 3.472 1 3.9V10.1C1 10.528 1 10.82 1.019 11.045C1.036 11.264 1.07 11.376 1.109 11.454C1.205 11.642 1.358 11.795 1.546 11.891C1.624 11.931 1.736 11.964 1.955 11.982C2.18 12 2.472 12 2.9 12H9.1C9.528 12 9.82 12 10.045 11.982C10.264 11.964 10.376 11.931 10.454 11.891C10.642 11.795 10.795 11.642 10.891 11.454C10.93 11.376 10.964 11.264 10.981 11.045C11 10.82 11 10.528 11 10.1V6L12 5V10.1C12 10.512 12 10.851 11.978 11.126C11.955 11.407 11.906 11.666 11.782 11.908C11.591 12.285 11.285 12.591 10.908 12.782C10.666 12.906 10.407 12.955 10.126 12.978C9.851 13 9.511 13 9.1 13H2.9C2.489 13 2.149 13 1.874 12.978C1.593 12.955 1.334 12.906 1.092 12.782C0.716 12.591 0.41 12.285 0.218 11.908C0.094 11.666 0.045 11.407 0.022 11.126C0 10.851 0 10.512 0 10.1V3.9C0 3.489 0 3.149 0.022 2.874C0.045 2.593 0.094 2.335 0.218 2.092C0.41 1.716 0.716 1.41 1.092 1.218C1.334 1.094 1.593 1.046 1.874 1.023C2.149 1 2.489 1 2.9 1H8L7 2ZM10.225 0.082C10.419 -0.046 10.683 -0.024 10.854 0.147L12.854 2.147C13.049 2.342 13.049 2.658 12.854 2.854L8.911 6.796C8.835 6.872 8.747 6.936 8.651 6.984L4.724 8.947C4.531 9.044 4.299 9.006 4.146 8.854C3.994 8.702 3.956 8.469 4.053 8.277L6.017 4.349C6.065 4.253 6.128 4.165 6.204 4.089L10.146 0.147L10.225 0.082ZM6.911 4.796L5.872 6.872L6.127 7.127L8.204 6.089L11.793 2.5L10.5 1.207L6.911 4.796Z" fill="#0077AC" />
  </svg>
);

// Blue circled check — save button (from Figma), inline 15×15
const SaveIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 13.25 13.25" style={{ display: "block" }}>
    <path d="M6.622 0C10.28 0 13.245 2.965 13.245 6.622C13.245 10.28 10.28 13.245 6.622 13.245C2.965 13.245 0 10.28 0 6.622C0 2.965 2.965 0 6.622 0ZM6.622 0.949C3.49 0.949 0.949 3.49 0.949 6.622C0.949 9.755 3.489 12.295 6.622 12.295C9.755 12.295 12.295 9.755 12.295 6.622C12.295 3.489 9.755 0.949 6.622 0.949ZM8.464 4.085C8.623 3.859 8.935 3.805 9.161 3.964C9.387 4.123 9.441 4.435 9.282 4.661L6.115 9.161C6.03 9.282 5.895 9.359 5.747 9.371C5.599 9.383 5.454 9.329 5.35 9.224L3.767 7.61C3.573 7.413 3.575 7.097 3.772 6.903C3.969 6.71 4.286 6.713 4.479 6.91L5.643 8.094L8.464 4.085Z" fill="#0077AC" />
  </svg>
);

// Trash — delete deliverable (from Figma), inline 15×15
const TrashIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 9 12" style={{ display: "block" }}>
    <path d="M8.5 2C8.776 2 9 2.224 9 2.5C9 2.776 8.776 3 8.5 3H8V11C8 11.552 7.552 12 7 12H2C1.448 12 1 11.552 1 11V3H0.5C0.224 3 0 2.776 0 2.5C0 2.224 0.224 2 0.5 2H8.5ZM2 11H7V3H2V11ZM6.5 0C6.776 0 7 0.224 7 0.5C7 0.776 6.776 1 6.5 1H2.5C2.224 1 2 0.776 2 0.5C2 0.224 2.224 0 2.5 0H6.5Z" fill="#0077AC" />
  </svg>
);

function ChannelsDisplay({ channels }: { channels: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start shrink-0">
      <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[#72797e] text-[12px]">Channels involved</p>
      <div className="flex flex-wrap gap-[4px]">
        {(channels || []).map((channel) => (
          <div key={channel} className="bg-[#e1f5ff] content-stretch flex items-center justify-center px-[8px] py-[4px] rounded-[32px] shrink-0">
            <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] text-[#0077ac] whitespace-nowrap">{channel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type EditingDel = { wsIdx: number; delIdx: number } | null;
type NewDel = { wsIdx: number } | null;
type EditingFooter = { wsIdx: number; field: "timeline" | "approver" } | null;

export function ProjectPlan({ briefData, planData, onUpdateBrief, onUpdatePlan, onBackToBrief, onApprove }: ProjectPlanProps) {
  const [hoveredDel, setHoveredDel] = useState<{ wsIdx: number; delIdx: number } | null>(null);
  const [editingDel, setEditingDel] = useState<EditingDel>(null);
  const [editingDelValue, setEditingDelValue] = useState("");
  const [newDel, setNewDel] = useState<NewDel>(null);
  const [newDelValue, setNewDelValue] = useState("");
  const [editingFooter, setEditingFooter] = useState<EditingFooter>(null);
  const [editingFooterValue, setEditingFooterValue] = useState("");

  const startEditDel = (wsIdx: number, delIdx: number, name: string) => {
    setEditingDel({ wsIdx, delIdx });
    setEditingDelValue(name);
    setNewDel(null);
  };

  const saveDel = (wsIdx: number, delIdx: number) => {
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].deliverables[delIdx].name = editingDelValue;
    onUpdatePlan(updated);
    setEditingDel(null);
  };

  const deleteDel = (wsIdx: number, delIdx: number) => {
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].deliverables.splice(delIdx, 1);
    onUpdatePlan(updated);
    setEditingDel(null);
  };

  const startNewDel = (wsIdx: number) => {
    setNewDel({ wsIdx });
    setNewDelValue("");
    setEditingDel(null);
  };

  const saveNewDel = (wsIdx: number) => {
    if (!newDelValue.trim()) { setNewDel(null); return; }
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].deliverables.push({ name: newDelValue.trim(), completed: false });
    onUpdatePlan(updated);
    setNewDel(null);
    setNewDelValue("");
  };

  const startEditFooter = (wsIdx: number, field: "timeline" | "approver", value: string) => {
    setEditingFooter({ wsIdx, field });
    setEditingFooterValue(value);
  };

  const saveFooter = (wsIdx: number, field: "timeline" | "approver") => {
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx][field] = editingFooterValue;
    onUpdatePlan(updated);
    setEditingFooter(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08),8px_8px_16px_0px_rgba(0,0,0,0.12)] h-full flex flex-col px-[40px] py-[24px] overflow-y-auto custom-scrollbar gap-[24px]">

      {/* Header */}
      <div className="flex items-start gap-[8px] shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-[8px] min-w-0">
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0077ac] text-[14px]">Project Plan Draft</p>
          <p className="font-['Arial_Nova:Bold',sans-serif] leading-[24px] text-[20px] text-[#0c2737] tracking-[-0.1px] whitespace-nowrap">
            {briefData.title || "Renew Energy Promotion Web Page"}
          </p>
        </div>

        <div className="flex gap-[8px] items-start shrink-0">
          <button
            onClick={onBackToBrief}
            className="border border-[#48801c] flex items-center justify-center px-[8px] py-[8px] rounded-[8px] w-[31px] h-[31px] hover:bg-gray-50 transition-colors"
          >
            <div className="relative size-[15px]"><ArrowLeftIcon /></div>
          </button>
          <button className="border border-[#48801c] flex items-center justify-center px-[8px] py-[8px] rounded-[8px] w-[31px] h-[31px] hover:bg-gray-50 transition-colors">
            <div className="relative size-[15px]"><ShareIcon /></div>
          </button>
          <button
            onClick={onApprove}
            className="bg-[#48801c] flex gap-[4px] items-center justify-center px-[12px] py-[8px] rounded-[8px] hover:bg-[#3d6e17] transition-colors"
          >
            <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] text-white whitespace-nowrap">Approve Plan</p>
            <div className="relative shrink-0 size-[15px]">
              <div className="absolute inset-[5.85%]"><CheckCircledIcon /></div>
            </div>
          </button>
        </div>
      </div>

      {/* Metadata */}
      <div className="flex gap-[4px] items-start shrink-0 w-full">
        <div className="flex flex-col gap-[4px] items-start w-[202px]">
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] whitespace-nowrap">{briefData.projectType || "Campaign (Multi Channel)"}</p>
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] whitespace-nowrap">{briefData.priority}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start w-[202px]">
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] whitespace-nowrap">{briefData.initiative}</p>
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] whitespace-nowrap">{briefData.dueDate}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start w-[202px]">
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] whitespace-nowrap">{briefData.businessUnit}</p>
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] whitespace-nowrap">{briefData.wbsCode || "—"}</p>
        </div>
      </div>

      {/* Channels */}
      <ChannelsDisplay channels={briefData.channels || []} />

      {/* Channels & Deliverables */}
      <div className="flex flex-col gap-[8px] shrink-0 w-full">
        <p className="font-['Arial_Nova:Bold',sans-serif] leading-[24px] text-[18px] text-[#0077ac]">Channels & Deliverables</p>

        {planData.workstreams.map((ws: any, wsIdx: number) => (
          <div key={wsIdx} className="border border-[#b5bdc3] flex flex-col gap-[8px] items-start justify-center pl-[12px] pr-[8px] py-[8px] rounded-[16px] w-full">

            {/* Workstream header */}
            <div className="flex gap-[8px] items-center w-full">
              <div className="flex flex-1 gap-[8px] items-center min-w-0">
                <p className="font-['Arial_Nova:Bold',sans-serif] leading-[20px] text-[16px] text-[#0c2737] whitespace-nowrap">{ws.title}</p>
                <div className="flex gap-[4px] items-center shrink-0">
                  <div className="bg-[#e1f5ff] flex items-center justify-center px-[8px] py-[4px] rounded-[32px]">
                    <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] text-[#0077ac] whitespace-nowrap">
                      {ws.deliverables.length} Deliverable{ws.deliverables.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => startNewDel(wsIdx)}
                    className="bg-[#e1f5ff] hover:bg-[#cceeff] flex items-center justify-center p-[4px] rounded-[32px] transition-colors"
                  >
                    <div className="relative shrink-0 size-[15px]">
                      <div className="absolute inset-[15%]"><PlusIcon color="#0077ac" /></div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="bg-[#f8f9fb] flex items-center justify-center px-[8px] py-[4px] rounded-[32px] shrink-0">
                <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] text-[#0c2737] whitespace-nowrap">
                  Routed to {ws.routedTo}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            {ws.deliverables.map((del: any, dIdx: number) => {
              const isEditing = editingDel?.wsIdx === wsIdx && editingDel?.delIdx === dIdx;
              const isHovered = hoveredDel?.wsIdx === wsIdx && hoveredDel?.delIdx === dIdx;

              if (isEditing) {
                return (
                  <div key={dIdx} className="flex gap-[8px] items-center w-full">
                    <div className="relative shrink-0 size-[15px]">
                      <div className="absolute inset-[5.85%]"><CircleBullet /></div>
                    </div>
                    <div className="bg-white border border-[#b5bdc3] flex flex-1 gap-[8px] items-center px-[12px] py-[8px] rounded-[8px] min-w-0">
                      <input
                        autoFocus
                        className="flex-1 font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] min-w-0 bg-transparent border-none outline-none"
                        value={editingDelValue}
                        onChange={(e) => setEditingDelValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") saveDel(wsIdx, dIdx); if (e.key === "Escape") setEditingDel(null); }}
                      />
                      <button onClick={() => saveDel(wsIdx, dIdx)} className="shrink-0 flex items-center justify-center cursor-pointer">
                        <SaveIcon />
                      </button>
                    </div>
                    <button onClick={() => deleteDel(wsIdx, dIdx)} className="shrink-0 flex items-center justify-center cursor-pointer">
                      <TrashIcon />
                    </button>
                  </div>
                );
              }

              return (
                <div
                  key={dIdx}
                  className="flex gap-[8px] items-center w-full"
                  onMouseEnter={() => setHoveredDel({ wsIdx, delIdx: dIdx })}
                  onMouseLeave={() => setHoveredDel(null)}
                >
                  <div className="relative shrink-0 size-[15px]">
                    <div className="absolute inset-[5.85%]"><CircleBullet /></div>
                  </div>
                  <p className="font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[14px] text-[#0c2737] flex-1">{del.name}</p>
                  {isHovered && (
                    <button
                      onClick={() => startEditDel(wsIdx, dIdx, del.name)}
                      className="shrink-0 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <PencilIcon />
                    </button>
                  )}
                </div>
              );
            })}

            {/* New deliverable input */}
            {newDel?.wsIdx === wsIdx && (
              <div className="flex gap-[8px] items-center w-full">
                <div className="relative shrink-0 size-[15px]">
                  <div className="absolute inset-[5.85%]"><CircleBullet /></div>
                </div>
                <div className="bg-white border border-[#b5bdc3] flex flex-1 gap-[8px] items-center px-[12px] py-[8px] rounded-[8px] min-w-0">
                  <input
                    autoFocus
                    className="flex-1 font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] min-w-0 bg-transparent border-none outline-none placeholder:text-[#b5bdc3]"
                    value={newDelValue}
                    onChange={(e) => setNewDelValue(e.target.value)}
                    placeholder="New deliverable"
                    onKeyDown={(e) => { if (e.key === "Enter") saveNewDel(wsIdx); if (e.key === "Escape") setNewDel(null); }}
                  />
                  <button onClick={() => saveNewDel(wsIdx)} className="shrink-0 flex items-center justify-center cursor-pointer">
                    <SaveIcon />
                  </button>
                </div>
                <button onClick={() => setNewDel(null)} className="shrink-0 flex items-center justify-center cursor-pointer">
                  <TrashIcon />
                </button>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-end py-[8px] w-full gap-[16px]">
              {/* Timeline */}
              {editingFooter?.wsIdx === wsIdx && editingFooter?.field === "timeline" ? (
                <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                  <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[#72797e] text-[12px]">Due Date</p>
                  <div className="bg-white border border-[#b5bdc3] flex gap-[4px] items-center px-[12px] py-[8px] rounded-[8px]">
                    <div className="relative shrink-0 size-[15px] mr-1">
                      <Calendar size={14} className="text-gray-500" />
                    </div>
                    <input
                      autoFocus
                      className="flex-1 font-['Arial_Nova:Regular',sans-serif] leading-[18px] text-[#0c2737] text-[14px] min-w-0 bg-transparent border-none outline-none"
                      value={editingFooterValue}
                      onChange={(e) => setEditingFooterValue(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") saveFooter(wsIdx, "timeline"); if (e.key === "Escape") setEditingFooter(null); }}
                      onBlur={() => saveFooter(wsIdx, "timeline")}
                    />
                  </div>
                </div>
              ) : (
                <p
                  className="flex-1 font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[#72797e] text-[12px] cursor-pointer hover:text-[#0077ac] transition-colors"
                  onClick={() => startEditFooter(wsIdx, "timeline", ws.timeline)}
                >
                  {ws.timeline}
                </p>
              )}

              {/* Approver */}
              {editingFooter?.wsIdx === wsIdx && editingFooter?.field === "approver" ? (
                <div className="flex-1 min-w-0">
                  <input
                    autoFocus
                    className="w-full font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[#72797e] text-[12px] bg-transparent border-b border-[#b5bdc3] outline-none pb-[2px]"
                    value={editingFooterValue}
                    onChange={(e) => setEditingFooterValue(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") saveFooter(wsIdx, "approver"); if (e.key === "Escape") setEditingFooter(null); }}
                    onBlur={() => saveFooter(wsIdx, "approver")}
                  />
                </div>
              ) : (
                <p
                  className="flex-1 font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[#72797e] text-[12px] cursor-pointer hover:text-[#0077ac] transition-colors"
                  onClick={() => startEditFooter(wsIdx, "approver", ws.approver)}
                >
                  Approver: {ws.approver}
                </p>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
