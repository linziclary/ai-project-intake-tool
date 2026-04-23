import styles from "./ChatMessage.module.css";

interface ChatMessageProps {
  sender: "user" | "ai" | "system";
  text: string;
}

const CheckCircleGreen = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="7.5" cy="7.5" r="6.125" stroke="#48801c" strokeWidth="1.25" />
    <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#48801c" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ChatMessage({ sender, text }: ChatMessageProps) {
  if (sender === "system") {
    return (
      <div className={styles.systemRow}>
        <CheckCircleGreen />
        <span className={styles.systemText}>{text}</span>
      </div>
    );
  }

  if (sender === "user") {
    return (
      <div className={styles.userRow}>
        <div className={styles.userBubble}>{text}</div>
      </div>
    );
  }

  return (
    <div className={styles.aiRow}>
      <div className={styles.aiText}>
        {renderAiText(text)}
      </div>
    </div>
  );
}

function renderAiText(text: string): React.ReactNode[] {
  // Split on double newlines into blocks
  const blocks = text.split(/\n\n+/);
  const result: React.ReactNode[] = [];
  let isFirst = true;

  blocks.forEach((block, bIdx) => {
    const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return;

    // First block: first line is the bold title, rest may be body or list items
    if (isFirst) {
      isFirst = false;
      const [title, ...rest] = lines;
      result.push(
        <p key={`title-${bIdx}`} className={styles.titleLine}>{title}</p>
      );
      if (rest.length > 0) {
        const restIsList = rest.length > 1 && rest.every(l => l.endsWith("?") || (!l.endsWith(".") && l.length < 80));
        if (restIsList) {
          result.push(
            <ul key={`list-${bIdx}`} className={styles.bulletList}>
              {rest.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
          );
        } else {
          result.push(
            <p key={`body-${bIdx}`} className={styles.bodyLine}>{rest.join(" ")}</p>
          );
        }
      }
      return;
    }

    // Check if all lines are list/question items (end in ? or are short action items without a period)
    const isList = lines.length > 1 && lines.every(l => l.endsWith("?") || (!l.endsWith(".") && l.length < 80));

    if (isList) {
      result.push(
        <ul key={`list-${bIdx}`} className={styles.bulletList}>
          {lines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      );
    } else {
      // Regular body paragraph
      result.push(
        <p key={`body-${bIdx}`} className={styles.bodyLine}>{lines.join(" ")}</p>
      );
    }
  });

  return result;
}
