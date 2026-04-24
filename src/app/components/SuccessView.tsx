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

        <div className={styles.deliverablesSection}>
          {(planData.workstreams as any[]).reduce((groups: { title: string; items: { ws: any; idx: number }[] }[], ws, idx) => {
            const existing = groups.find(g => g.title === ws.title);
            if (existing) { existing.items.push({ ws, idx }); }
            else { groups.push({ title: ws.title, items: [{ ws, idx }] }); }
            return groups;
          }, []).map((group) => (
            <div key={group.title} className={styles.workstreamGroup}>
              <p className={styles.workstreamGroupTitle}>{group.title}</p>
              {group.items.map(({ ws, idx }: { ws: any; idx: number }) => (
                <div key={idx} className={styles.workstreamCard}>
                  <div className={styles.workstreamHeader}>
                    <div className={styles.workstreamLeft}>
                      <span className={styles.workstreamTitle}>{ws.channel || ws.title}</span>
                      <span className={styles.deliverablesBadge}>
                        {ws.deliverables.length} Deliverable{ws.deliverables.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <a href="#" className={styles.viewLink}>
                      View in {ws.routedTo} <ArrowUpRight size={14} style={{ marginLeft: '2px' }} />
                    </a>
                  </div>
                  <div className={styles.deliverablesList}>
                    {ws.deliverables.map((del: any, dIdx: number) => (
                      <div key={dIdx} className={styles.deliverableItem}>
                        <div className={styles.deliverableItemTop}>
                          <p className={styles.deliverable}>{del.name}</p>
                          {del.type && <span className={styles.typeChip}>{del.type}</span>}
                        </div>
                        {del.description && <p className={styles.deliverableDesc}>{del.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
