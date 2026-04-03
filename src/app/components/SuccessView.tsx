import clsx from "clsx";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import styles from "./SuccessView.module.css";

interface SuccessViewProps {
  briefData: any;
  planData: any;
}

export function SuccessView({ briefData, planData }: SuccessViewProps) {
  return (
    <div className={clsx(styles.scrollWrapper, 'custom-scrollbar')}>
      <div className={styles.card}>

        <div className={styles.successBanner}>
          <div className={styles.successBannerRow}>
            <span className={styles.successBannerTitle}>Project Plan Approved</span>
            <CheckCircle size={16} style={{ color: '#48801c' }} />
          </div>
          <p className={styles.successBannerText}>Jobs & tasks within this project have been created and routed to the respective work management platforms.</p>
        </div>

        <h1 className={styles.projectTitle}>{briefData.title || "Renew Energy Promotion Web Page"}</h1>

        <div className={styles.metaGrid}>
          <div className={styles.metaCol}>
            <span>{briefData.projectType}</span>
            <span>{briefData.priority}</span>
          </div>
          <div className={styles.metaCol}>
            <span>{briefData.initiative}</span>
            <span>{briefData.dueDate}</span>
          </div>
          <div className={styles.metaCol}>
            <span>{briefData.businessUnit}</span>
            <span>{briefData.wbsCode}</span>
          </div>
        </div>

        <h2 className={styles.workstreamsTitle}>Workstreams</h2>

        <div className={styles.workstreamsList}>
          {planData.workstreams.map((ws: any, idx: number) => (
            <div key={idx} className={styles.workstream}>
              <div className={styles.workstreamHeader}>
                <div className={styles.workstreamTitleRow}>
                  <h3 className={styles.workstreamTitle}>{ws.title}</h3>
                  <span className={styles.deliverablesBadge}>{ws.deliverables.length} Deliverables</span>
                </div>
                <a href="#" className={styles.viewLink}>
                  View in {ws.routedTo} <ArrowUpRight size={14} style={{ marginLeft: '2px' }} />
                </a>
              </div>

              <div className={styles.deliverablesList}>
                {ws.deliverables.map((del: any, dIdx: number) => (
                  <p key={dIdx} className={styles.deliverable}>{del.name}</p>
                ))}
              </div>

              <div className={styles.workstreamMeta}>
                <span>{ws.timeline}</span>
                <span>Approver: {ws.approver}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
