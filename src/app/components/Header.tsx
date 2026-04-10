import React from "react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-4tpnsq9f7b";
import styles from "./Header.module.css";

const STEP_LABELS = ["Project details", "Strategic Brief Draft", "Project Plan Draft", "Complete!"];

function ProgressBar({ step }: { step: number }) {
  const label = STEP_LABELS[Math.min(step - 1, 3)];
  return (
    <div className={styles.progressBar}>
      <p className={styles.progressLabel}>{label}</p>
      <div className={styles.progressSegments}>
        {[1, 2, 3, 4].map((seg) => {
          const filled = seg <= step;
          const active = seg === step;
          return (
            <div
              key={seg}
              className={clsx(
                styles.segment,
                filled ? styles.segmentFilled : styles.segmentEmpty,
                active ? styles.segmentActive : styles.segmentInactive
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Header({
  onReset,
  onToggleHistory,
  historyOpen,
  historyButtonRef,
  progressStep = 0,
}: {
  onReset?: () => void;
  onToggleHistory?: () => void;
  historyOpen?: boolean;
  historyButtonRef?: React.RefObject<HTMLButtonElement | null>;
  progressStep?: number;
}) {
  return (
    <div className={styles.header} data-name="Container">
      <div className={styles.logoArea} data-name="Container">
        <div
          className={styles.logo}
          onClick={onReset}
          data-name="Group"
        >
          <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 109.97 48">
            <g id="Group">
              <path d={svgPaths.p3284f00} fill="#0C2737" id="Vector" />
              <path d={svgPaths.p93dec00} fill="#48801C" id="Vector_2" />
              <path d={svgPaths.p29d4fe00} fill="#008AC0" id="Vector_3" />
              <path d={svgPaths.p2a2fa300} fill="#008AC0" id="Vector_4" />
              <path d={svgPaths.p489edc0} fill="#0C2737" id="Vector_5" />
              <path d={svgPaths.p330de700} fill="#48801C" id="Vector_6" />
              <path d={svgPaths.p15c91800} fill="#008AC0" id="Vector_7" />
            </g>
          </svg>
        </div>

        {progressStep > 0 ? (
          <ProgressBar step={progressStep} />
        ) : (
          <div className={styles.chip} data-name="Chip">
            <p className={styles.chipLabel}>Project Planner</p>
          </div>
        )}
      </div>

      <div className={styles.buttonGroup}>
        {/* New Chat button */}
        <button
          onClick={onReset}
          className={styles.newChatButton}
        >
          <p className={styles.newChatLabel}>New Chat</p>
          <div className={styles.iconContainer}>
            <div className={styles.iconInsetPlus}>
              <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 10.5 10.5">
                <path d="M5.25 0C5.526 0 5.75 0.224 5.75 0.5V4.75H10C10.276 4.75 10.5 4.974 10.5 5.25C10.5 5.526 10.276 5.75 10 5.75H5.75V10C5.75 10.276 5.526 10.5 5.25 10.5C4.974 10.5 4.75 10.276 4.75 10V5.75H0.5C0.224 5.75 0 5.526 0 5.25C0 4.974 0.224 4.75 0.5 4.75H4.75V0.5C4.75 0.224 4.974 0 5.25 0Z" fill="white" />
              </svg>
            </div>
          </div>
        </button>

        {/* Chat history button */}
        <button
          ref={historyButtonRef}
          onClick={onToggleHistory}
          className={clsx(
            styles.historyButton,
            historyOpen ? styles.historyButtonOpen : styles.historyButtonClosed
          )}
        >
          <div className={styles.iconContainer}>
            <div className={styles.iconInset}>
              <svg style={{ position: 'absolute', display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 13.25 7.5">
                <path d="M0.75 6C1.164 6 1.5 6.336 1.5 6.75C1.5 7.164 1.164 7.5 0.75 7.5C0.336 7.5 0 7.164 0 6.75C0 6.336 0.336 6 0.75 6ZM12.75 6.25C13.026 6.25 13.25 6.474 13.25 6.75C13.25 7.026 13.026 7.25 12.75 7.25H3.75C3.474 7.25 3.25 7.026 3.25 6.75C3.25 6.474 3.474 6.25 3.75 6.25H12.75ZM0.75 3C1.164 3 1.5 3.336 1.5 3.75C1.5 4.164 1.164 4.5 0.75 4.5C0.336 4.5 0 4.164 0 3.75C0 3.336 0.336 3 0.75 3ZM12.75 3.25C13.026 3.25 13.25 3.474 13.25 3.75C13.25 4.026 13.026 4.25 12.75 4.25H3.75C3.474 4.25 3.25 4.026 3.25 3.75C3.25 3.474 3.474 3.25 3.75 3.25H12.75ZM0.75 0C1.164 0 1.5 0.336 1.5 0.75C1.5 1.164 1.164 1.5 0.75 1.5C0.336 1.5 0 1.164 0 0.75C0 0.336 0.336 0 0.75 0ZM12.75 0.25C13.026 0.25 13.25 0.474 13.25 0.75C13.25 1.026 13.026 1.25 12.75 1.25H3.75C3.474 1.25 3.25 1.026 3.25 0.75C3.25 0.474 3.474 0.25 3.75 0.25H12.75Z" fill={historyOpen ? "white" : "#48801C"} />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
