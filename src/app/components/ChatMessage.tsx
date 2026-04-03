import styles from "./ChatMessage.module.css";

interface ChatMessageProps {
  sender: "user" | "ai";
  text: string;
}

export function ChatMessage({ sender, text }: ChatMessageProps) {
  if (sender === "user") {
    return (
      <div className={styles.userRow}>
        <div className={styles.userBubble}>
          {text}
        </div>
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

function renderAiText(text: string) {
  if (text.startsWith("Sounds great!")) {
    return <><strong style={{ fontWeight: 'bold' }}>Sounds great!</strong> {text.substring(13)}</>;
  }

  if (text.includes("Here's a first pass of the Strategic Brief document for this project.")) {
    const parts = text.split("Here's a first pass of the Strategic Brief document for this project.");
    return <>{parts[0]}<strong style={{ fontWeight: 'bold' }}>Here's a first pass of the Strategic Brief document for this project.</strong>{parts[1]}</>;
  }

  if (text.startsWith("Great!")) {
    const parts = text.split("Here's a draft of the Project Plan,");
    if (parts.length > 1) {
       return <><strong style={{ fontWeight: 'bold' }}>Great!</strong> {parts[0].substring(6)}<strong style={{ fontWeight: 'bold' }}>Here's a draft of the Project Plan,</strong>{parts[1]}</>;
    }
    return <><strong style={{ fontWeight: 'bold' }}>Great!</strong> {text.substring(6)}</>;
  }

  return text;
}
