import React, { useState, useRef, useEffect } from "react";
import { Header } from "./components/Header";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { StrategicBrief } from "./components/StrategicBrief";
import { ProjectPlan } from "./components/ProjectPlan";
import { SuccessView } from "./components/SuccessView";
import { ChatHistorySidebar } from "./components/ChatHistorySidebar";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export default function MainFlow() {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [isRoutingData, setIsRoutingData] = useState(false);
  const [showChatHistory, setShowChatHistory] = useState(false);

  const initialBriefData = {
    title: "Renew Energy Promotion Web Page",
    channels: ["Web", "Email", "Paid Media", "UX"],
    projectType: "Campaign",
    initiative: "Rewire Initiative",
    businessUnit: "M&C",
    priority: "Operational",
    dueDate: "August 1, 2026",
    wbsCode: "",
    description: "This project aims to develop a strategy brief that outlines key objectives, target audience, and actionable steps for implementation. The brief will serve as a roadmap for stakeholders to align on vision and execution.",
    desiredOutcomes: "The purpose of this strategy brief is to establish a clear framework for the development of a user-friendly web page that enhances user engagement and accessibility.\n\nProblems to Solve: Current web pages lack intuitive navigation and fail to meet the diverse needs of users, leading to high bounce rates and low satisfaction. Additionally, there is a need for improved mobile responsiveness and faster load times.\n\nGoal: The goal is to create a web page that not only captivates users but also provides seamless access to information, ultimately increasing user retention and satisfaction.",
    scopeDeliverables: "The project will cover all of the content strategy documents, SEO, and UX design files needed for a web page. It will also cover the development deliverables needed for this web page to be implemented and launched.",
    targetAudience: "This web page targets eco-conscious homeowners and businesses through platforms like Google, Facebook, and industry blogs, using targeted ads and informative content to promote renewable energy solutions."
  };

  const initialPlanData = {
    workstreams: [
      {
        title: "Employee Communications",
        deliverables: [
          { name: "Content Audit Report", completed: false },
          { name: "Updated Copy for All Promotional Pages", completed: false },
          { name: "SEO Keyword Mapping Document", completed: false },
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Monday.com"
      },
      {
        title: "Digital Execution",
        deliverables: [
          { name: "Updated Webflow", completed: false }
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Monday.com"
      },
      {
        title: "Fuze & AV",
        deliverables: [
          { name: "New Mockups for Landing Page", completed: false },
          { name: "Figma Design System Updates", completed: false }
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Monday.com"
      },
      {
        title: "Digital Execution",
        deliverables: [
          { name: "API Integration Plan", completed: false },
          { name: "New Feature Codebase", completed: false },
          { name: "Performance Report Post-Launch", completed: false }
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Jira"
      }
    ]
  };

  const [briefData, setBriefData] = useState(initialBriefData);
  const [planData, setPlanData] = useState(initialPlanData);

  const handleReset = () => {
    setStep(0);
    setMessages([]);
    setIsAiTyping(false);
    setIsGeneratingPlan(false);
    setIsRoutingData(false);
    setBriefData(initialBriefData);
    setPlanData(initialPlanData);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const historyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAiTyping]);

  const handleSendMessage = (text: string) => {
    const newUserMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => [...prev, newUserMsg]);
    setIsAiTyping(true);

    if (step === 2) {
      setIsGeneratingPlan(true);
    }

    setTimeout(() => {
      let aiResponseText = "";

      if (step === 0) {
        aiResponseText = "Sounds great! To help me get started with the strategic brief can you answer a couple more questions about this project for me.\n\nIs this project new or an update?\nWhat problem are you solving for?\nDo you have a WBS code or budget allocated?";
        setStep(1);
      } else if (step === 1) {
        aiResponseText = "Here's a first pass of the Strategic Brief document for this project. Review the draft and update anything you'd like in the sections to the left. The sections I was not able to draft are highlighted, please fill those out as well or give me additional info so I can draft content.";
        setStep(2);
      } else if (step === 2) {
        setBriefData(prev => ({ ...prev, wbsCode: "RE2026-06" }));
        aiResponseText = "Great! I've approved the Strategic Brief, can confirm the project details and we can move onto the Project Plan.\n\nHere's a draft of the Project Plan, please review this draft and let me know if we need to revise or edit.";
        setStep(3);
        setIsGeneratingPlan(false);
      } else if (step === 3) {
        const newPlanData = JSON.parse(JSON.stringify(planData));
        newPlanData.workstreams[3].deliverables.splice(2, 0, { name: "Staging Content Approval", completed: false });
        setPlanData(newPlanData);
        aiResponseText = "Nice addition. I've added that deliverable to the list, once you think this plan is ready to go I can route the work to each team directly.";
        setStep(4);
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "ai", text: aiResponseText }]);
      setIsAiTyping(false);
    }, 2000);
  };

  const getSuggestedPlaceholder = () => {
    if (step === 0) return "I want to create a web page to promote our latest Renew Energy promotion. I need it to include all the promotion details. It's due by August 2026.";
    if (step === 1) return "This is a new project to address customer concerns about sustainable energy options. Budget: $75,000.";
    if (step === 2) return "The WBS code for this is RE2026-06. Once that is updated this brief is approved.";
    if (step === 3) return "Add Staging Content Approval as a deliverable to the last workstream.";
    return "Project details...";
  };

  const handleApproveBrief = () => {
    handleSendMessage("The brief looks good, please approve and generate the project plan.");
  };

  const handleApprovePlan = () => {
    setIsRoutingData(true);
    setTimeout(() => {
      setIsRoutingData(false);
      setStep(5);
    }, 2000);
  };

  const documentType = isRoutingData ? "routing" : isGeneratingPlan ? "generating" : step >= 5 ? "success" : step >= 3 ? "plan" : step >= 2 ? "brief" : "none";

  const progressStep = messages.length === 0 ? 0
    : step <= 1 ? 1
    : step === 2 ? 2
    : step <= 4 ? 3
    : 4;

  return (
    <div className="flex-1 min-h-0 bg-[#f8f9fb] flex flex-col items-center px-[24px] pt-[16px] pb-[40px] overflow-hidden w-full h-full">
      <div className="w-full max-w-[1200px] flex flex-col h-full">
          <div className="relative shrink-0">
            <Header onReset={handleReset} onToggleHistory={() => setShowChatHistory(v => !v)} historyOpen={showChatHistory} historyButtonRef={historyButtonRef} progressStep={progressStep} />
            {showChatHistory && (
              <div className="absolute top-[48px] right-0 z-50">
                <ChatHistorySidebar onClose={() => setShowChatHistory(false)} excludeRef={historyButtonRef} />
              </div>
            )}
          </div>

          <div className={`flex w-full flex-1 min-h-0 gap-8 transition-all duration-500 ${documentType !== 'none' ? 'justify-between' : 'justify-center'}`}>

            {documentType !== 'none' && (
              <div className={`flex-1 ${documentType === 'success' || documentType === 'routing' ? 'w-full' : 'w-2/3'} flex flex-col bg-transparent animate-in slide-in-from-left duration-500 h-full overflow-hidden`}>
                {documentType === 'brief' && (
                  <StrategicBrief
                    data={briefData}
                    onUpdate={setBriefData}
                    onApprove={handleApproveBrief}
                  />
                )}
                {documentType === 'generating' && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
                    <div className="w-12 h-12 border-4 border-[#008AC0] border-t-transparent rounded-full animate-spin mb-6"></div>
                    <p className="text-[#0c2737] font-bold text-xl mb-2">Generating Project Plan...</p>
                    <p className="text-gray-500 text-sm">Analyzing strategic brief and identifying workstreams</p>
                  </div>
                )}
                {documentType === 'routing' && (
                  <div className="bg-[#f8f9fb] h-full flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
                    <div className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08),8px_8px_16px_0px_rgba(0,0,0,0.12)] p-10 w-full max-w-[700px] flex flex-col items-center justify-center min-h-[300px]">
                      <div className="w-12 h-12 border-4 border-[#48801C] border-t-transparent rounded-full animate-spin mb-6"></div>
                      <p className="text-[#0c2737] font-bold text-xl mb-2">Routing Workstreams...</p>
                      <p className="text-gray-500 text-sm">Creating jobs and tasks in management platforms</p>
                    </div>
                  </div>
                )}
                {documentType === 'plan' && <ProjectPlan briefData={briefData} planData={planData} onUpdateBrief={setBriefData} onUpdatePlan={setPlanData} onBackToBrief={() => setStep(2)} onApprove={handleApprovePlan} />}
                {documentType === 'success' && <SuccessView briefData={briefData} planData={planData} />}
              </div>
            )}

            {documentType !== 'success' && documentType !== 'routing' && (
              <div className={`flex flex-col h-full transition-all duration-500 ${documentType !== 'none' ? 'w-1/3 min-w-[360px]' : `w-[600px] ${step === 0 && messages.length === 0 ? 'justify-center' : 'pt-24'}`}`}>

                {step === 0 && messages.length === 0 && (
                  <p className="font-['Arial_Nova:Bold',sans-serif] leading-[36px] text-[30px] text-[#0077ac] mb-6 tracking-[-0.225px] w-full text-left">Tell me about your project.</p>
                )}

                <div className={`${messages.length > 0 || isAiTyping ? 'flex-1 min-h-0 pb-6' : 'hidden'} overflow-y-auto w-full flex flex-col gap-6 px-2 custom-scrollbar`}>
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
                  ))}
                  {isAiTyping && (
                    <div className="flex items-center text-[#0c2737] text-[15px] p-4 font-medium opacity-50">
                      AI is typing...
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className={`w-full shrink-0 ${step === 0 && messages.length === 0 ? '' : 'mt-auto pt-4'}`}>
                  <ChatInput
                    onSend={handleSendMessage}
                    placeholder={getSuggestedPlaceholder()}
                    compact={documentType !== 'none'}
                    hasMessages={messages.length > 0}
                  />
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
  );
}
