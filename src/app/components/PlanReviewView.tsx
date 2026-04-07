import styles from "./PlanReviewView.module.css";

const ArrowLeftIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 15 15" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M9.5 3L5.5 7.5L9.5 12" stroke="#48801C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EyeIcon = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 15 15" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M1 7.5C1 7.5 3.5 3 7.5 3C11.5 3 14 7.5 14 7.5C14 7.5 11.5 12 7.5 12C3.5 12 1 7.5 1 7.5Z" stroke="#0077ac" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7.5" cy="7.5" r="1.75" stroke="#0077ac" strokeWidth="1.25" />
  </svg>
);

interface PlanReviewViewProps {
  briefData: any;
  planData: any;
  onBackToDraft: () => void;
}

export function PlanReviewView({ briefData, planData, onBackToDraft }: PlanReviewViewProps) {
  return (
    <div className={`${styles.scrollWrapper} custom-scrollbar`}>
      <div className={styles.card}>

        {/* Review banner */}
        <div className={styles.reviewBanner}>
          <div className={styles.reviewBannerRow}>
            <span className={styles.reviewBannerTitle}>Project Plan Review</span>
            <EyeIcon />
          </div>
          <p className={styles.reviewBannerText}>
            Review the jobs &amp; tasks within this project for each channel, share any feedback with the project plan creator.
          </p>
        </div>

        {/* Title + meta */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 className={styles.projectTitle}>{briefData.title || "Renew Energy Promotion Web Page"}</h1>

          <div className={styles.metaRow}>
            <div className={styles.metaCol}>
              <span>{briefData.projectType || "Campaign (Multi Channel)"}</span>
              <span>{briefData.priority}</span>
            </div>
            <div className={styles.metaCol}>
              <span>{briefData.initiative}</span>
              <span>{briefData.dueDate}</span>
            </div>
            <div className={styles.metaCol}>
              <span>{briefData.businessUnit}</span>
              <span>{briefData.wbsCode || "—"}</span>
            </div>
          </div>

          <div className={styles.channelPills}>
            {(briefData.channels || []).map((ch: string) => (
              <div key={ch} className={styles.channelPill}>
                <span className={styles.channelPillLabel}>{ch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Channels & Deliverables */}
        <div>
          <p className={styles.sectionTitle}>Channels &amp; Deliverables</p>
          <div className={styles.workstreamsList}>
            {planData.workstreams.map((ws: any, idx: number) => (
              <div key={idx} className={styles.workstream}>
                <div className={styles.workstreamHeader}>
                  <div className={styles.workstreamLeft}>
                    <span className={styles.workstreamTitle}>{ws.title}</span>
                    <span className={styles.deliverablesBadge}>
                      {ws.deliverables.length} Deliverable{ws.deliverables.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <span className={styles.routedPill}>Routed to {ws.routedTo}</span>
                </div>

                <div className={styles.deliverablesList}>
                  {ws.deliverables.map((del: any, dIdx: number) => (
                    <p key={dIdx} className={styles.deliverable}>{del.name}</p>
                  ))}
                </div>

                <div className={styles.footer}>
                  <span>{ws.timeline || `${ws.startDate || ''} to ${ws.endDate || ''}  ${ws.duration || ''}`.trim()}</span>
                  <span>Approver {ws.approver}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Draft */}
        <button onClick={onBackToDraft} className={styles.backButton}>
          <ArrowLeftIcon />
          <span className={styles.backButtonLabel}>Back to Draft</span>
        </button>

      </div>
    </div>
  );
}
