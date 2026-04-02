import React, { useState, useEffect } from "react";
import { Edit3, Calendar, ChevronDown, CheckCircle } from "lucide-react";

const ALL_CHANNELS = ["Web", "Email", "Paid Media", "Analytics", "UX", "AI", "Event"];

// Checkmark path (white, used inside active blue chip)
const CheckIcon = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 9 8">
    <path d="M1 4L3.5 6.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Plus path (gray, used inside inactive chip)
const PlusIcon = () => (
  <svg className="absolute block size-full" fill="none" viewBox="0 0 11 11">
    <path d="M5.5 0C5.77614 0 6 0.223858 6 0.5V5H10.5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H6V10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5V6H0.5C0.223858 6 0 5.77614 0 5.5C0 5.22386 0.223858 5 0.5 5H5V0.5C5 0.223858 5.22386 0 5.5 0Z" fill="#72797E" />
  </svg>
);

const ChannelSelector = ({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (channels: string[]) => void;
}) => {
  const toggle = (channel: string) => {
    if (selected.includes(channel)) {
      onChange(selected.filter((c) => c !== channel));
    } else {
      onChange([...selected, channel]);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] not-italic text-[#72797e] text-[12px]">
        Channels involved
      </p>
      <div className="flex flex-wrap gap-[4px]">
        {ALL_CHANNELS.map((channel) => {
          const active = selected.includes(channel);
          return (
            <button
              key={channel}
              onClick={() => toggle(channel)}
              className={`flex gap-[4px] items-center justify-center px-[8px] py-[4px] rounded-[32px] shrink-0 transition-colors ${
                active ? "bg-[#008ac0]" : "bg-[#f8f9fb] hover:bg-[#edf6fb]"
              }`}
            >
              <p className={`font-['Arial_Nova:Regular',sans-serif] leading-[14px] not-italic text-[12px] whitespace-nowrap ${
                active ? "text-white" : "text-[#72797e]"
              }`}>
                {channel}
              </p>
              <div className="relative shrink-0 size-[15px]">
                {active ? (
                  <div className="absolute inset-[24%_22%_24%_23%]">
                    <CheckIcon />
                  </div>
                ) : (
                  <div className="absolute inset-[15%]">
                    <PlusIcon />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

interface StrategicBriefProps {
  data: any;
  onUpdate: (data: any) => void;
  onApprove?: () => void;
}

const EditableTextSection = ({
  label,
  value,
  onSave,
  renderText
}: {
  label: string;
  value: string;
  onSave: (val: string) => void;
  renderText?: (val: string) => React.ReactNode;
}) => {
  const [editing, setEditing] = useState(false);
  const [tempVal, setTempVal] = useState(value);

  useEffect(() => {
    setTempVal(value);
  }, [value]);

  const handleSave = () => {
    onSave(tempVal);
    setEditing(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-500">{label}</label>
        {editing ? (
          <CheckCircle size={14} className="text-[#008AC0] cursor-pointer" onClick={handleSave} />
        ) : (
          <Edit3 size={14} className="text-[#008AC0] cursor-pointer" onClick={() => setEditing(true)} />
        )}
      </div>
      {editing ? (
        <textarea
          autoFocus
          className="w-full border border-[#7dd3fc] rounded-md p-3 text-sm text-[#0c2737] resize-none outline-none leading-relaxed min-h-[80px]"
          value={tempVal}
          onChange={(e) => setTempVal(e.target.value)}
        />
      ) : (
        <div className="text-sm text-[#0c2737] leading-relaxed">
          {renderText ? renderText(value) : <p className="whitespace-pre-wrap">{value}</p>}
        </div>
      )}
    </div>
  );
};

const EditableTitle = ({ value, onSave }: { value: string; onSave: (val: string) => void }) => {
  const [editing, setEditing] = useState(false);
  const [tempVal, setTempVal] = useState(value);

  useEffect(() => {
    setTempVal(value);
  }, [value]);

  const handleSave = () => {
    onSave(tempVal);
    setEditing(false);
  };

  return editing ? (
    <div className="flex items-center gap-2">
      <input
        autoFocus
        className="border border-[#7dd3fc] rounded-md p-1 px-2 font-['Arial_Nova:Bold',sans-serif] text-[20px] leading-[24px] text-[#0c2737] outline-none w-[400px]"
        value={tempVal}
        onChange={(e) => setTempVal(e.target.value)}
      />
      <CheckCircle size={16} className="text-[#008AC0] cursor-pointer" onClick={handleSave} />
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <h1 className="font-['Arial_Nova:Bold',sans-serif] leading-[24px] text-[20px] text-[#0c2737]">{value}</h1>
      <Edit3 size={16} className="text-[#008AC0] cursor-pointer" onClick={() => setEditing(true)} />
    </div>
  );
};

export function StrategicBrief({ data, onUpdate, onApprove }: StrategicBriefProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col p-6 overflow-y-auto custom-scrollbar">

      <div className="flex items-start justify-between mb-8 shrink-0">
        <div>
          <p className="text-[#48801C] text-sm font-medium mb-1">Strategic Brief Draft</p>
          <EditableTitle value={data.title || "Renew Energy Promotion Web Page"} onSave={(val) => onUpdate({ ...data, title: val })} />
        </div>
        <button
          onClick={onApprove}
          className="bg-[#48801c] flex gap-[4px] items-center justify-center px-[12px] py-[8px] rounded-[8px] hover:bg-[#3d6e17] transition-colors shrink-0"
        >
          <p className="font-['Arial_Nova:Regular',sans-serif] leading-[14px] text-[12px] text-white whitespace-nowrap">Approve Brief</p>
          <div className="relative shrink-0 size-[15px]">
            <div className="absolute inset-[5.85%]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
                <circle cx="7.5" cy="7.5" r="6.125" stroke="white" strokeWidth="1.25" />
                <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8 shrink-0">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">Project level</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md pl-2 py-2 pr-[36px] text-sm text-[#0c2737] outline-none">
              <option>Campaign (Multi Channel)</option>
              <option>Single Channel</option>
              <option>Update to existing</option>
            </select>
            <ChevronDown size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">Initiative</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md pl-2 py-2 pr-[36px] text-sm text-[#0c2737] outline-none">
              <option>Rewire Initiative</option>
              <option>FPL Image</option>
              <option>Nuclear Positivity</option>
              <option>Coal Remediation</option>
              <option>Everbright Partnership</option>
              <option>Renewable Construction</option>
            </select>
            <ChevronDown size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">Business Unit / Brand</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md pl-2 py-2 pr-[36px] text-sm text-[#0c2737] outline-none">
              <option>M&C</option>
              <option>FPL</option>
              <option>NEER</option>
              <option>NEE</option>
            </select>
            <ChevronDown size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1" />

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">Priority</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md pl-2 py-2 pr-[36px] text-sm text-[#0c2737] outline-none">
              <option>Operational</option>
              <option>Strategic</option>
              <option>Quick Win</option>
              <option>Crisis</option>
            </select>
            <ChevronDown size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <label className="text-xs text-gray-500 truncate">Due Date</label>
          <div className="relative flex items-center border border-gray-300 rounded-md p-2 text-sm text-[#0c2737] overflow-hidden">
            <Calendar size={14} className="text-gray-500 mr-2 shrink-0" />
            <span className="truncate block">August 1, 2026</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">WBS Code</label>
          <input
            type="text"
            value={data.wbsCode}
            onChange={(e) => onUpdate({ ...data, wbsCode: e.target.value })}
            placeholder="Enter content..."
            className={`border rounded-md p-2 text-sm outline-none transition-colors ${!data.wbsCode ? 'bg-[#dcf2fe] border-[#7dd3fc] text-[#0077ac] placeholder:text-[#0077ac]' : 'bg-white border-gray-300 text-[#0c2737]'}`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1 shrink-0">

        <ChannelSelector
          selected={data.channels || []}
          onChange={(channels) => onUpdate({ ...data, channels })}
        />

        <EditableTextSection
          label="Description"
          value={data.description}
          onSave={(val) => onUpdate({ ...data, description: val })}
        />

        <EditableTextSection
          label="Desired Outcomes"
          value={data.desiredOutcomes}
          onSave={(val) => onUpdate({ ...data, desiredOutcomes: val })}
          renderText={(val) => (
            <>
              {val.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="mb-4 last:mb-0">
                  {paragraph.includes(':') ? (
                    <>
                      <strong className="font-bold">{paragraph.split(':')[0]}:</strong>
                      {paragraph.substring(paragraph.indexOf(':') + 1)}
                    </>
                  ) : paragraph}
                </p>
              ))}
            </>
          )}
        />

        <EditableTextSection
          label="Scope & Deliverables"
          value={data.scopeDeliverables}
          onSave={(val) => onUpdate({ ...data, scopeDeliverables: val })}
        />

        <EditableTextSection
          label="Target Audience & Channels"
          value={data.targetAudience}
          onSave={(val) => onUpdate({ ...data, targetAudience: val })}
        />

      </div>

    </div>
  );
}
