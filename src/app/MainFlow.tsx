import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Header } from "./components/Header";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { StrategicBrief } from "./components/StrategicBrief";
import { ProjectPlan } from "./components/ProjectPlan";
import { SuccessView } from "./components/SuccessView";
import { ChatHistorySidebar } from "./components/ChatHistorySidebar";
import styles from "./MainFlow.module.css";

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
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.headerWrapper}>
          <Header onReset={handleReset} onToggleHistory={() => setShowChatHistory(v => !v)} historyOpen={showChatHistory} historyButtonRef={historyButtonRef} progressStep={progressStep} />
          {showChatHistory && (
            <div className={styles.historyDropdown}>
              <ChatHistorySidebar onClose={() => setShowChatHistory(false)} excludeRef={historyButtonRef} />
            </div>
          )}
        </div>

        <div className={clsx(
          styles.contentRow,
          documentType !== 'none' ? styles.contentRowSpread : styles.contentRowCenter
        )}>

          {documentType !== 'none' && (
            <div className={clsx(
              styles.documentPanel,
              (documentType === 'success' || documentType === 'routing') && styles.documentPanelFull
            )}>
              {documentType === 'brief' && (
                <StrategicBrief
                  data={briefData}
                  onUpdate={setBriefData}
                  onApprove={handleApproveBrief}
                />
              )}
              {documentType === 'generating' && (
                <div className={styles.generatingPanel}>
                  <div className={styles.generatingSpinner}></div>
                  <p className={styles.generatingTitle}>Generating Project Plan...</p>
                  <p className={styles.generatingSubtitle}>Analyzing strategic brief and identifying workstreams</p>
                </div>
              )}
              {documentType === 'routing' && (
                <div className={styles.routingPanel}>
                  <div className={styles.routingCard}>
                    <div className={styles.routingSpinner}></div>
                    <p className={styles.routingTitle}>Routing Workstreams...</p>
                    <p className={styles.routingSubtitle}>Creating jobs and tasks in management platforms</p>
                  </div>
                </div>
              )}
              {documentType === 'plan' && <ProjectPlan briefData={briefData} planData={planData} onUpdateBrief={setBriefData} onUpdatePlan={setPlanData} onBackToBrief={() => setStep(2)} onApprove={handleApprovePlan} />}
              {documentType === 'success' && <SuccessView briefData={briefData} planData={planData} />}
            </div>
          )}

          {documentType !== 'success' && documentType !== 'routing' && (
            <div className={clsx(
              styles.chatColumn,
              documentType !== 'none' ? styles.chatColumnNarrow : styles.chatColumnWide,
              documentType === 'none' && step === 0 && messages.length === 0 && styles.chatColumnWideCenter,
              documentType === 'none' && !(step === 0 && messages.length === 0) && styles.chatColumnWidePadded
            )}>

              {step === 0 && messages.length === 0 && (
                <p className={styles.chatHeading}>Tell me about your project.</p>
              )}

              <div className={clsx(
                (messages.length > 0 || isAiTyping) ? styles.messagesList : styles.messagesHidden,
                'custom-scrollbar'
              )}>
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
                ))}
                {isAiTyping && (
                  <div className={styles.typingIndicator}>
                    AI is typing...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className={clsx(
                styles.inputWrapper,
                !(step === 0 && messages.length === 0) && styles.inputWrapperSpaced
              )}>
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
