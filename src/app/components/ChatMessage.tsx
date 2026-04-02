import React from "react";

interface ChatMessageProps {
  sender: "user" | "ai";
  text: string;
}

export function ChatMessage({ sender, text }: ChatMessageProps) {
  if (sender === "user") {
    return (
      <div className="flex w-full justify-end">
        <div className="bg-[#e4e8ea] text-[#0c2737] rounded-[20px] px-[20px] py-[16px] max-w-[90%] text-[15px] leading-[22px] font-['Arial_Nova:Regular',sans-serif]">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-start">
      <div className="text-[#0c2737] px-[8px] py-[8px] w-full text-[15px] leading-[22px] font-['Arial_Nova:Regular',sans-serif] whitespace-pre-wrap">
        {renderAiText(text)}
      </div>
    </div>
  );
}

function renderAiText(text: string) {
  if (text.startsWith("Sounds great!")) {
    return <><strong className="font-bold">Sounds great!</strong> {text.substring(13)}</>;
  }

  if (text.includes("Here's a first pass of the Strategic Brief document for this project.")) {
    const parts = text.split("Here's a first pass of the Strategic Brief document for this project.");
    return <>{parts[0]}<strong className="font-bold">Here's a first pass of the Strategic Brief document for this project.</strong>{parts[1]}</>;
  }

  if (text.startsWith("Great!")) {
    const parts = text.split("Here's a draft of the Project Plan,");
    if (parts.length > 1) {
       return <><strong className="font-bold">Great!</strong> {parts[0].substring(6)}<strong className="font-bold">Here's a draft of the Project Plan,</strong>{parts[1]}</>;
    }
    return <><strong className="font-bold">Great!</strong> {text.substring(6)}</>;
  }

  return text;
}
