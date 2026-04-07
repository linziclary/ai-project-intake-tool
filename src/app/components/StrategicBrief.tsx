import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Edit3, Calendar, ChevronDown, CheckCircle } from "lucide-react";
import styles from "./StrategicBrief.module.css";

const ALL_CHANNELS = ["Web", "Email", "Paid Media", "Analytics", "UX", "AI", "Event"];

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: 'block', flexShrink: 0 }}>
    <circle cx="7" cy="7" r="6.125" stroke="#72797e" strokeWidth="1.25" />
    <path d="M7 6.5V10" stroke="#72797e" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="7" cy="4.5" r="0.75" fill="#72797e" />
  </svg>
);

function InfoTooltip({ content }: { content: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className={styles.infoTooltipWrapper}>
      <button className={styles.infoIconButton} onClick={() => setOpen(v => !v)} aria-label="More info">
        <InfoIcon />
      </button>
      {open && (
        <div className={styles.tooltip}>
          {content}
        </div>
      )}
    </div>
  );
}

// Checkmark path (white, used inside active blue chip)
const CheckIcon = () => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 9 8">
    <path d="M1 4L3.5 6.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Plus path (gray, used inside inactive chip)
const PlusIcon = () => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 11 11">
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
    <div className={styles.channelSelectorWrapper}>
      <div className={styles.metaLabelRow}>
        <p className={styles.channelSelectorLabel}>Channels involved</p>
        <InfoTooltip content="Channels involved will define the work streams and deliverables of the project plan" />
      </div>
      <div className={styles.channelPills}>
        {ALL_CHANNELS.map((channel) => {
          const active = selected.includes(channel);
          return (
            <button
              key={channel}
              onClick={() => toggle(channel)}
              className={clsx(styles.channelPill, active ? styles.channelPillActive : styles.channelPillInactive)}
            >
              <p className={clsx(styles.channelPillLabel, active ? styles.channelPillLabelActive : styles.channelPillLabelInactive)}>
                {channel}
              </p>
              <div className={styles.channelPillIcon}>
                {active ? (
                  <div className={styles.channelPillIconActive}>
                    <CheckIcon />
                  </div>
                ) : (
                  <div className={styles.channelPillIconInactive}>
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
    <div className={styles.editSection}>
      <label className={styles.editSectionLabel}>{label}</label>
      <div className={clsx(styles.editBox, editing && styles.editBoxActive)}>
        {editing ? (
          <textarea
            autoFocus
            className={styles.editTextarea}
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
          />
        ) : (
          <div className={styles.editBody}>
            {renderText ? renderText(value) : <p style={{ whiteSpace: 'pre-wrap' }}>{value}</p>}
          </div>
        )}
        {editing ? (
          <CheckCircle size={15} style={{ color: '#008AC0', cursor: 'pointer', flexShrink: 0 }} onClick={handleSave} />
        ) : (
          <Edit3 size={15} style={{ color: '#008AC0', cursor: 'pointer', flexShrink: 0 }} onClick={() => setEditing(true)} />
        )}
      </div>
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
    <div className={styles.titleEditRow}>
      <input
        autoFocus
        className={styles.titleInput}
        value={tempVal}
        onChange={(e) => setTempVal(e.target.value)}
      />
      <CheckCircle size={16} style={{ color: '#008AC0', cursor: 'pointer' }} onClick={handleSave} />
    </div>
  ) : (
    <div className={styles.titleEditRow}>
      <h1 className={styles.title}>{value}</h1>
      <Edit3 size={16} style={{ color: '#008AC0', cursor: 'pointer' }} onClick={() => setEditing(true)} />
    </div>
  );
};

export function StrategicBrief({ data, onUpdate, onApprove }: StrategicBriefProps) {
  return (
    <div className={clsx(styles.container, 'custom-scrollbar')}>

      <div className={styles.topRow}>
        <div>
          <EditableTitle value={data.title || "Renew Energy Promotion Web Page"} onSave={(val) => onUpdate({ ...data, title: val })} />
        </div>
        <button
          onClick={onApprove}
          className={styles.approveButton}
        >
          <p className={styles.approveLabel}>Approve Brief</p>
          <div style={{ position: 'relative', flexShrink: 0, width: '15px', height: '15px' }}>
            <div style={{ position: 'absolute', inset: '5.85%' }}>
              <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 15 15">
                <circle cx="7.5" cy="7.5" r="6.125" stroke="white" strokeWidth="1.25" />
                <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <div className={styles.metaGrid}>
        <div className={styles.metaField}>
          <div className={styles.metaLabelRow}>
            <label className={styles.metaLabel}>Project level</label>
            <InfoTooltip content="Project level is chosen based on the number of channels and whether or not this is a new request or update." />
          </div>
          <div className={styles.metaSelectWrapper}>
            <select className={styles.metaSelect}>
              <option>Campaign (Multi Channel)</option>
              <option>Single Channel</option>
              <option>Update to existing</option>
            </select>
            <ChevronDown size={16} className={styles.selectChevron} />
          </div>
        </div>
        <div className={styles.metaField}>
          <div className={styles.metaLabelRow}>
            <label className={styles.metaLabel}>Initiative</label>
            <InfoTooltip content="Initiative aligns this project to our company's high level objectives" />
          </div>
          <div className={styles.metaSelectWrapper}>
            <select className={styles.metaSelect}>
              <option>Rewire Initiative</option>
              <option>FPL Image</option>
              <option>Nuclear Positivity</option>
              <option>Coal Remediation</option>
              <option>Everbright Partnership</option>
              <option>Renewable Construction</option>
            </select>
            <ChevronDown size={16} className={styles.selectChevron} />
          </div>
        </div>
        <div className={styles.metaField}>
          <label className={styles.metaLabel}>Business Unit / Brand</label>
          <div className={styles.metaSelectWrapper}>
            <select className={styles.metaSelect}>
              <option>M&C</option>
              <option>FPL</option>
              <option>NEER</option>
              <option>NEE</option>
            </select>
            <ChevronDown size={16} className={styles.selectChevron} />
          </div>
        </div>
        <div className={styles.metaField}>
          <div className={styles.metaLabelRow}>
            <label className={styles.metaLabel}>Priority</label>
            <InfoTooltip content={
              <span className={styles.tooltipText}>
                Priority levels are defined as:<br /><br />
                <strong>Operational: </strong>Keeps the business running<br />
                <strong>Strategic: </strong>Drives growth &amp; transformation<br />
                <strong>Quick Wins: </strong>High value, fast completion<br />
                <strong>Crisis: </strong>Unplanned immediate response
              </span>
            } />
          </div>
          <div className={styles.metaSelectWrapper}>
            <select className={styles.metaSelect}>
              <option>Operational</option>
              <option>Strategic</option>
              <option>Quick Win</option>
              <option>Crisis</option>
            </select>
            <ChevronDown size={16} className={styles.selectChevron} />
          </div>
        </div>
        <div className={styles.metaField} style={{ minWidth: 0 }}>
          <label className={styles.metaLabel}>Due Date</label>
          <div className={styles.dateWrapper}>
            <Calendar size={14} className={styles.dateIcon} />
            <input
              type="date"
              className={styles.dateField}
              value={data.dueDate ? (() => { const d = new Date(data.dueDate); return isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10); })() : ''}
              onChange={(e) => {
                if (!e.target.value) return;
                const d = new Date(e.target.value + 'T12:00:00');
                onUpdate({ ...data, dueDate: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) });
              }}
            />
          </div>
        </div>
        <div className={styles.metaField}>
          <label className={styles.metaLabel}>WBS Code</label>
          <input
            type="text"
            value={data.wbsCode}
            onChange={(e) => onUpdate({ ...data, wbsCode: e.target.value })}
            placeholder="Enter content..."
            className={clsx(styles.wbsInput, !data.wbsCode && styles.wbsInputHighlight)}
          />
        </div>
      </div>

      <div className={styles.sectionsList}>

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
          label="Goal"
          value={data.goal}
          onSave={(val) => onUpdate({ ...data, goal: val })}
        />

        <EditableTextSection
          label="Desired Outcomes"
          value={data.desiredOutcomes}
          onSave={(val) => onUpdate({ ...data, desiredOutcomes: val })}
          renderText={(val) => (
            <>
              {val.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx} className={clsx(styles.editParagraph)}>
                  {paragraph.includes(':') ? (
                    <>
                      <strong style={{ fontWeight: 'bold' }}>{paragraph.split(':')[0]}:</strong>
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
