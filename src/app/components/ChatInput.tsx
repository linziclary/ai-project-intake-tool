import { useState } from "react";
import svgPaths from "../../imports/svg-4tpnsq9f7b";

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
    <div className={`bg-white relative flex flex-col justify-end w-full shrink-0 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08),8px_8px_16px_0px_rgba(0,0,0,0.12)] border border-[#b5bdc3] transition-all duration-300 rounded-[16px] ${isInitialState ? 'h-[128px] p-[16px]' : 'min-h-[64px] p-[12px]'}`}>

      <div className="flex-1 w-full flex items-center mb-2 px-2">
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
          className={`w-full bg-transparent border-none outline-none resize-none text-[#0c2737] placeholder:text-[#72797e] font-['Arial_Nova:Regular',sans-serif] ${isInitialState ? 'text-[16px]' : 'text-[15px]'}`}
          rows={isInitialState ? 2 : 1}
        />
      </div>

      <div className="flex items-end justify-between w-full shrink-0">

        <div className="flex items-center gap-2">
          {isInitialState && showAttachment && (
            <div className="bg-white border border-[#b5bdc3] rounded-[16px] flex items-center gap-[8px] p-[8px]">
              <div className="relative shrink-0 size-[15px] flex items-center justify-center">
                <svg className="block size-[11px]" fill="none" viewBox="0 0 11 13">
                  <path d={svgPaths.p2b6ee200} fill="#72797E" />
                </svg>
              </div>
              <span className="text-[#72797e] text-[14px] whitespace-nowrap leading-none font-['Arial_Nova:Regular',sans-serif]">Filename.pdf</span>
              <div className="relative shrink-0 size-[15px] flex items-center justify-center cursor-pointer hover:opacity-70" onClick={() => setShowAttachment(false)}>
                <svg className="block size-[9px]" fill="none" viewBox="0 0 9 9">
                  <path d={svgPaths.p8711b00} fill="#72797E" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-[8px]">
          <button
            className="flex items-center justify-center rounded-full size-[32px] border border-[#b5bdc3] bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setShowAttachment(true)}
          >
            <div className="relative size-[15px] flex items-center justify-center">
              <svg className="block size-[10.5px]" fill="none" viewBox="0 0 10.5 10.5">
                <path d={svgPaths.p11333d80} fill="#72797E" />
              </svg>
            </div>
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center rounded-full size-[32px] bg-[#48801C] hover:bg-[#3d6e17] transition-colors"
          >
            <div className="relative size-[15px] flex items-center justify-center">
              <svg className="block h-[11px] w-[9px]" fill="none" viewBox="0 0 9 11">
                <path d={svgPaths.p208b66f0} fill="white" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
