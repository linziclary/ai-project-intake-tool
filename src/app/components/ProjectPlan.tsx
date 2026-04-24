import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Calendar, ChevronDown, Edit3 } from "lucide-react";
import { Link2Icon } from "@radix-ui/react-icons";
import styles from "./ProjectPlan.module.css";

interface ProjectPlanProps {
  briefData: any;
  planData: any;
  onUpdateBrief: (data: any) => void;
  onUpdatePlan: (data: any) => void;
  onBackToBrief: () => void;
  onApprove: () => void;
  onViewReview: () => void;
}

// Reused icon primitives
const PlusIcon = ({ color = "#72797E" }: { color?: string }) => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 11 11">
    <path d="M5.5 0C5.77614 0 6 0.223858 6 0.5V5H10.5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H6V10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5V6H0.5C0.223858 6 0 5.77614 0 5.5C0 5.22386 0.223858 5 0.5 5H5V0.5C5 0.223858 5.22386 0 5.5 0Z" fill={color} />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 15 15">
    <path d="M9.5 3L5.5 7.5L9.5 12" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 15 15">
    <path d="M7.5 1.5V10M7.5 1.5L4.5 4.5M7.5 1.5L10.5 4.5" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 10V12.5C2 13.05 2.45 13.5 3 13.5H12C12.55 13.5 13 13.05 13 12.5V10" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckCircledIcon = () => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 15 15">
    <circle cx="7.5" cy="7.5" r="6.125" stroke="white" strokeWidth="1.25" />
    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CircleBullet = () => (
  <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 15 15">
    <circle cx="7.5" cy="7.5" r="6.125" stroke="#b5bdc3" strokeWidth="1.25" />
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

const DownloadIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 15 15" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M7.5 1.5V10M7.5 10L4.5 7M7.5 10L10.5 7" stroke="#72797e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 11.5V13H13V11.5" stroke="#72797e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EyeIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 15 15" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M1 7.5C1 7.5 3.5 3 7.5 3C11.5 3 14 7.5 14 7.5C14 7.5 11.5 12 7.5 12C3.5 12 1 7.5 1 7.5Z" stroke="#72797e" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7.5" cy="7.5" r="1.75" stroke="#72797e" strokeWidth="1.25" />
  </svg>
);

const LinkIcon = () => <Link2Icon width={15} height={15} color="#72797e" style={{ display: 'block', flexShrink: 0 }} />;

function ShareDropdown({ onClose, onViewReview }: { onClose: () => void; onViewReview: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  const items = [
    { icon: <DownloadIcon />, label: 'Download PDF', action: onClose },
    { icon: <EyeIcon />, label: 'View Review Page', action: () => { onClose(); onViewReview(); } },
    { icon: <LinkIcon />, label: 'Copy Review Link', action: onClose },
  ];

  return (
    <div ref={ref} className={styles.shareDropdown}>
      {items.map(({ icon, label, action }) => (
        <button key={label} className={styles.shareDropdownItem} onClick={action}>
          {icon}
          <span className={styles.shareDropdownLabel}>{label}</span>
        </button>
      ))}
    </div>
  );
}

function ChannelsDisplay({ channels }: { channels: string[] }) {
  return (
    <div className={styles.channelPills}>
      {(channels || []).map((channel) => (
        <div key={channel} className={styles.channelPill}>
          <p className={styles.channelPillLabel}>{channel}</p>
        </div>
      ))}
    </div>
  );
}

const DELIVERABLE_TYPES = [
  "Web Page",
  "Email",
  "Report",
  "Document",
  "Design File",
  "Video",
  "Social Post",
  "Presentation",
  "Other",
];

const getDateRange = (ws: any) => {
  if (ws.startDate) return `${ws.startDate} to ${ws.endDate || ws.startDate}  ${ws.duration || ''}`.trim();
  return ws.timeline || '';
};

export function ProjectPlan({ briefData, planData, onUpdateBrief: _onUpdateBrief, onUpdatePlan, onBackToBrief, onApprove, onViewReview }: ProjectPlanProps) {
  const [showShare, setShowShare] = useState(false);
  const [hoveredDel, setHoveredDel] = useState<{ wsIdx: number; delIdx: number } | null>(null);
  const [editingDel, setEditingDel] = useState<{ wsIdx: number; delIdx: number } | null>(null);
  const [editingDelValue, setEditingDelValue] = useState("");
  const [editingDelType, setEditingDelType] = useState("");
  const [editingDelDescription, setEditingDelDescription] = useState("");
  const [newDel, setNewDel] = useState<{ wsIdx: number } | null>(null);
  const [newDelValue, setNewDelValue] = useState("");
  const [newDelType, setNewDelType] = useState("");
  const [newDelDescription, setNewDelDescription] = useState("");
  const [editingDatesIdx, setEditingDatesIdx] = useState<number | null>(null);
  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");
  const [editingApproverIdx, setEditingApproverIdx] = useState<number | null>(null);
  const [editApproverValue, setEditApproverValue] = useState("");
  const [hoveredDateIdx, setHoveredDateIdx] = useState<number | null>(null);
  const [hoveredApproverIdx, setHoveredApproverIdx] = useState<number | null>(null);

  const saveDel = (wsIdx: number, delIdx: number) => {
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].deliverables[delIdx].name = editingDelValue;
    updated.workstreams[wsIdx].deliverables[delIdx].type = editingDelType;
    updated.workstreams[wsIdx].deliverables[delIdx].description = editingDelDescription;
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
    setNewDelType("");
    setNewDelDescription("");
    setEditingDel(null);
  };

  const saveNewDel = (wsIdx: number) => {
    if (!newDelValue.trim()) { setNewDel(null); return; }
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].deliverables.push({ name: newDelValue.trim(), type: newDelType, description: newDelDescription, completed: false });
    onUpdatePlan(updated);
    setNewDel(null);
    setNewDelValue("");
    setNewDelType("");
    setNewDelDescription("");
  };

  const saveDates = (wsIdx: number) => {
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].startDate = editStartDate;
    updated.workstreams[wsIdx].endDate = editEndDate;
    updated.workstreams[wsIdx].timeline = `${editStartDate} to ${editEndDate}`;
    onUpdatePlan(updated);
    setEditingDatesIdx(null);
  };

  const saveApprover = (wsIdx: number) => {
    const updated = JSON.parse(JSON.stringify(planData));
    updated.workstreams[wsIdx].approver = editApproverValue;
    onUpdatePlan(updated);
    setEditingApproverIdx(null);
  };

  return (
    <div className={clsx(styles.container, 'custom-scrollbar')}>

      {/* Header */}
      <div className={styles.planHeader}>
        <div className={styles.planHeaderLeft}>
          <p className={styles.planTitle}>
            {briefData.title || "Renew Energy Promotion Web Page"}
          </p>
        </div>

        <div className={styles.planHeaderRight}>
          <div style={{ position: 'relative' }}>
            <button className={styles.shareButton} onClick={() => setShowShare(v => !v)}>
              <p className={styles.shareButtonLabel}>Share</p>
              <div className={styles.iconRef}>
                <ChevronDown size={11} color="#48801c" style={{ position: 'absolute', inset: 0, margin: 'auto' }} />
              </div>
            </button>
            {showShare && <ShareDropdown onClose={() => setShowShare(false)} onViewReview={onViewReview} />}
          </div>
          <button
            onClick={onApprove}
            className={styles.approveButton}
          >
            <p className={styles.approveLabel}>Approve Plan</p>
            <div className={styles.iconRef}>
              <div className={styles.iconAbsolute}><CheckCircledIcon /></div>
            </div>
          </button>
        </div>
      </div>

      {/* Metadata */}
      <div className={styles.metaRow}>
        <div className={styles.metaCol}>
          <p className={styles.metaText}>{briefData.projectType || "Campaign (Multi Channel)"}</p>
          <p className={styles.metaText}>{briefData.priority}</p>
        </div>
        <div className={styles.metaCol}>
          <p className={styles.metaText}>{briefData.initiative}</p>
          <p className={styles.metaText}>{briefData.dueDate}</p>
        </div>
        <div className={styles.metaCol}>
          <p className={styles.metaText}>{briefData.businessUnit}</p>
          <p className={styles.metaText}>{briefData.wbsCode || "—"}</p>
        </div>
      </div>

      {/* Channels */}
      <ChannelsDisplay channels={briefData.channels || []} />

      {/* Channels & Deliverables */}
      <div className={styles.deliverablesSection}>
        {planData.workstreams.map((ws: any, wsIdx: number) => (
          <div key={wsIdx} className={styles.workstreamGroup}>
            <p className={styles.workstreamGroupTitle}>{ws.title}</p>

          <div className={styles.workstreamCard}>

            {/* Workstream header */}
            <div className={styles.workstreamHeader}>
              <div className={styles.workstreamHeaderLeft}>
                <p className={styles.workstreamTitle}>{ws.title}</p>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center', flexShrink: 0 }}>
                  <div className={styles.countPill}>
                    <p className={styles.countPillLabel}>
                      {ws.deliverables.length} Deliverable{ws.deliverables.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => startNewDel(wsIdx)}
                    className={styles.addButton}
                  >
                    <div className={styles.addButtonIcon}>
                      <div className={styles.addButtonIconInset}><PlusIcon color="#0077ac" /></div>
                    </div>
                  </button>
                </div>
              </div>
              <p className={clsx(styles.routedText, ws.isRouted && styles.routedTextSuccess)}>
                Routed to {ws.routedTo}
              </p>
            </div>

            {/* Deliverables */}
            <div className={styles.deliverablesList}>
            {ws.deliverables.map((del: any, dIdx: number) => {
              const isEditing = editingDel?.wsIdx === wsIdx && editingDel?.delIdx === dIdx;
              const isHovered = hoveredDel?.wsIdx === wsIdx && hoveredDel?.delIdx === dIdx;

              if (isEditing) {
                return (
                  <div key={dIdx} className={styles.deliverableEditContainer}>
                    <div className={styles.deliverableRow}>
                      <div className={styles.bulletIcon}>
                        <div className={styles.bulletIconInset}><CircleBullet /></div>
                      </div>
                      <div className={styles.editTitleBox}>
                        <input
                          autoFocus
                          className={styles.editInput}
                          value={editingDelValue}
                          onChange={(e) => setEditingDelValue(e.target.value)}
                          onKeyDown={(e) => { if (e.key === "Escape") setEditingDel(null); }}
                        />
                      </div>
                      <div className={styles.typeSelectWrapper}>
                        <select
                          className={styles.typeSelect}
                          value={editingDelType}
                          onChange={(e) => setEditingDelType(e.target.value)}
                        >
                          <option value="">Select type...</option>
                          {DELIVERABLE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronDown size={11} color="#72797e" className={styles.typeSelectChevron} />
                      </div>
                      <button onClick={() => deleteDel(wsIdx, dIdx)} className={styles.actionButton}>
                        <TrashIcon />
                      </button>
                    </div>
                    <div className={styles.editDescRow}>
                      <textarea
                        className={styles.descriptionInput}
                        value={editingDelDescription}
                        onChange={(e) => setEditingDelDescription(e.target.value)}
                        placeholder="Add a description..."
                        rows={2}
                      />
                      <button onClick={() => saveDel(wsIdx, dIdx)} className={styles.actionButton}>
                        <SaveIcon />
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={dIdx}
                  className={styles.deliverableRow}
                  onMouseEnter={() => setHoveredDel({ wsIdx, delIdx: dIdx })}
                  onMouseLeave={() => setHoveredDel(null)}
                  onClick={() => {
                    setEditingDel({ wsIdx, delIdx: dIdx });
                    setEditingDelValue(del.name);
                    setEditingDelType(del.type || "");
                    setEditingDelDescription(del.description || "");
                    setNewDel(null);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.bulletIcon}>
                    <div className={styles.bulletIconInset}><CircleBullet /></div>
                  </div>
                  <div className={styles.deliverableTopRow}>
                    <div className={styles.deliverableContent}>
                      <p className={styles.deliverableName}>{del.name}</p>
                      {del.description && <p className={styles.deliverableDescription}>{del.description}</p>}
                    </div>
                    <div className={styles.deliverableMetaCol}>
                      {del.type && (
                        <div className={styles.typeChip}>
                          <p className={styles.typeChipLabel}>{del.type}</p>
                        </div>
                      )}
                      <div style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 150ms ease' }}>
                        <Edit3 size={15} color="#008AC0" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* New deliverable input */}
            {newDel?.wsIdx === wsIdx && (

              <div className={styles.deliverableEditContainer}>
                <div className={styles.deliverableRow}>
                  <div className={styles.bulletIcon}>
                    <div className={styles.bulletIconInset}><CircleBullet /></div>
                  </div>
                  <div className={styles.editTitleBox}>
                    <input
                      autoFocus
                      className={styles.editInput}
                      value={newDelValue}
                      onChange={(e) => setNewDelValue(e.target.value)}
                      placeholder="New deliverable"
                      onKeyDown={(e) => { if (e.key === "Escape") setNewDel(null); }}
                    />
                  </div>
                  <div className={styles.typeSelectWrapper}>
                    <select
                      className={styles.typeSelect}
                      value={newDelType}
                      onChange={(e) => setNewDelType(e.target.value)}
                    >
                      <option value="">Select type...</option>
                      {DELIVERABLE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={11} color="#72797e" className={styles.typeSelectChevron} />
                  </div>
                  <button onClick={() => setNewDel(null)} className={styles.actionButton}>
                    <TrashIcon />
                  </button>
                </div>
                <div className={styles.editDescRow}>
                  <textarea
                    className={styles.descriptionInput}
                    value={newDelDescription}
                    onChange={(e) => setNewDelDescription(e.target.value)}
                    placeholder="Add a description..."
                    rows={2}
                  />
                  <button onClick={() => saveNewDel(wsIdx)} className={styles.actionButton}>
                    <SaveIcon />
                  </button>
                </div>
              </div>
            )}
            </div>

            {/* Footer */}
            <div className={styles.footer}>

              {/* Left: date range / edit dates */}
              {editingDatesIdx === wsIdx ? (
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                  {/* Start date field */}
                  <div className={styles.footerFieldWrapper}>
                    <p className={styles.footerFieldLabel}>Start</p>
                    <div className={styles.footerInputBox}>
                      <Calendar size={14} color="#72797e" style={{ flexShrink: 0 }} />
                      <input
                        type="date"
                        autoFocus
                        className={styles.footerDateInput}
                        value={editStartDate}
                        onChange={(e) => setEditStartDate(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") saveDates(wsIdx); if (e.key === "Escape") setEditingDatesIdx(null); }}
                      />
                    </div>
                  </div>
                  {/* End date field */}
                  <div className={styles.footerFieldWrapper}>
                    <p className={styles.footerFieldLabel}>Due Date</p>
                    <div className={styles.footerInputBox}>
                      <Calendar size={14} color="#72797e" style={{ flexShrink: 0 }} />
                      <input
                        type="date"
                        className={styles.footerDateInput}
                        value={editEndDate}
                        onChange={(e) => setEditEndDate(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") saveDates(wsIdx); if (e.key === "Escape") setEditingDatesIdx(null); }}
                      />
                    </div>
                  </div>
                  <button onClick={() => saveDates(wsIdx)} className={styles.actionButton} style={{ marginBottom: '2px' }}>
                    <SaveIcon />
                  </button>
                </div>
              ) : (
                <div style={{ flex: 1 }}>
                  <div
                    className={styles.footerHoverRow}
                    style={{ width: 'fit-content' }}
                    onMouseEnter={() => setHoveredDateIdx(wsIdx)}
                    onMouseLeave={() => setHoveredDateIdx(null)}
                    onClick={() => {
                      setEditingDatesIdx(wsIdx);
                      setEditStartDate(ws.startDate || '');
                      setEditEndDate(ws.endDate || '');
                      setEditingApproverIdx(null);
                    }}
                  >
                    <p className={styles.footerText}>{getDateRange(ws)}</p>
                    <div style={{ opacity: hoveredDateIdx === wsIdx ? 1 : 0, transition: 'opacity 150ms ease' }}>
                      <Edit3 size={15} color="#008AC0" />
                    </div>
                  </div>
                </div>
              )}

              {/* Right: approver / edit approver */}
              {editingApproverIdx === wsIdx ? (
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                  <div className={styles.footerFieldWrapper} style={{ width: '200px', flex: 'none' }}>
                    <p className={styles.footerFieldLabel}>Approver</p>
                    <div className={styles.footerInputBox}>
                      <input
                        autoFocus
                        className={styles.footerInput}
                        value={editApproverValue}
                        onChange={(e) => setEditApproverValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") saveApprover(wsIdx); if (e.key === "Escape") setEditingApproverIdx(null); }}
                        style={{ flex: 1, minWidth: 0 }}
                      />
                      <ChevronDown size={14} color="#72797e" style={{ flexShrink: 0 }} />
                    </div>
                  </div>
                  <button onClick={() => saveApprover(wsIdx)} className={styles.actionButton} style={{ marginBottom: '2px' }}>
                    <SaveIcon />
                  </button>
                </div>
              ) : (
                <div
                  className={styles.footerHoverRow}
                  style={{ flex: 'none' }}
                  onMouseEnter={() => setHoveredApproverIdx(wsIdx)}
                  onMouseLeave={() => setHoveredApproverIdx(null)}
                  onClick={() => {
                    setEditingApproverIdx(wsIdx);
                    setEditApproverValue(ws.approver || '');
                    setEditingDatesIdx(null);
                  }}
                >
                  <p className={styles.footerText} style={{ flex: 'none' }}>Approver {ws.approver}</p>
                  <div style={{ opacity: hoveredApproverIdx === wsIdx ? 1 : 0, transition: 'opacity 150ms ease' }}>
                    <Edit3 size={15} color="#008AC0" />
                  </div>
                </div>
              )}

            </div>

          </div>
          </div>
        ))}
      </div>

      {/* Back to Strategic Brief */}
      <button onClick={onBackToBrief} className={styles.backButton}>
        <div className={styles.iconRef}><ArrowLeftIcon /></div>
        <p className={styles.backButtonLabel}>Back to Strategic Brief</p>
      </button>

    </div>
  );
}
