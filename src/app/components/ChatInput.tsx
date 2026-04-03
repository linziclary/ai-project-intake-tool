import { useState } from "react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-4tpnsq9f7b";
import styles from "./ChatInput.module.css";

interface ChatInputProps {
  onSend: (text: string) => void;
  placeholder: string;
  compact: boolean;
  hasMessages: boolean;
}

export function ChatInput({ onSend, placeholder, compact, hasMessages }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [showAttachment, setShowAttachment] = useState(true);

  const handleSubmit = () => {
    const textToSend = value.trim() ? value : placeholder;
    onSend(textToSend);
    setValue("");
  };

  const isInitialState = !compact && !hasMessages;

  return (
    <div className={clsx(styles.wrapper, isInitialState ? styles.wrapperInitial : styles.wrapperCompact)}>
      <div className={styles.textareaRow}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder={isInitialState ? "Let's get this project started..." : "Project details..."}
          className={clsx(styles.textarea, isInitialState ? styles.textareaInitial : styles.textareaCompact)}
          rows={isInitialState ? 2 : 1}
        />
      </div>

      <div className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isInitialState && showAttachment && (
            <div className={styles.attachmentChip}>
              <div style={{ position: 'relative', flexShrink: 0, width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ display: 'block', width: '11px', height: '11px' }} fill="none" viewBox="0 0 11 13">
                  <path d={svgPaths.p2b6ee200} fill="#72797E" />
                </svg>
              </div>
              <span className={styles.attachmentLabel}>Filename.pdf</span>
              <div className={styles.removeAttachment} onClick={() => setShowAttachment(false)}>
                <svg style={{ display: 'block', width: '9px', height: '9px' }} fill="none" viewBox="0 0 9 9">
                  <path d={svgPaths.p8711b00} fill="#72797E" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <button
            className={styles.iconButton}
            onClick={() => setShowAttachment(true)}
          >
            <div style={{ position: 'relative', width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ display: 'block', width: '10.5px', height: '10.5px' }} fill="none" viewBox="0 0 10.5 10.5">
                <path d={svgPaths.p11333d80} fill="#72797E" />
              </svg>
            </div>
          </button>
          <button
            onClick={handleSubmit}
            className={styles.sendButton}
          >
            <div style={{ position: 'relative', width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ display: 'block', height: '11px', width: '9px' }} fill="none" viewBox="0 0 9 11">
                <path d={svgPaths.p208b66f0} fill="white" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
