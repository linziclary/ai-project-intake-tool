import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Header } from "./components/Header";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { StrategicBrief } from "./components/StrategicBrief";
import { ProjectPlan } from "./components/ProjectPlan";
import { SuccessView } from "./components/SuccessView";
import { PlanReviewView } from "./components/PlanReviewView";
import { ChatHistorySidebar } from "./components/ChatHistorySidebar";
import styles from "./MainFlow.module.css";

type Message = {
  id: string;
  sender: "user" | "ai" | "system";
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
    goal: "Create a web page that captivates users and provides seamless access to information.",
    desiredOutcomes: "The purpose of this strategy brief is to establish a clear framework for the development of a user-friendly web page.\n\nProblems to Solve: Current web pages lack intuitive navigation and fail to meet diverse user needs.",
    scopeDeliverables: "The project will cover all of the content strategy documents, SEO, and UX design files needed for a web page. It will also cover the development deliverables needed for this web page to be implemented and launched.",
    targetAudience: "This web page targets eco-conscious homeowners and businesses through Google, Facebook, and industry blogs."
  };

  const initialPlanData = {
    workstreams: [
      {
        title: "Employee Communications",
        channel: "Web",
        deliverables: [
          { name: "Content Audit Report", type: "Report", description: "A content audit report identifying gaps and suggesting improvements for promotional pages.", completed: false },
          { name: "Updated Copy for All Promotional Pages", type: "Web Page", description: "Crafting engaging copy for promotional pages, aligned with brand voice and objectives.", completed: false },
          { name: "SEO Keyword Mapping Document", type: "Document", description: "A document outlining target keywords and their placement for better SEO.", completed: false },
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Monday.com"
      },
      {
        title: "Digital Execution",
        channel: "Email",
        deliverables: [
          { name: "Updated Webflow", type: "Web Page", description: "Updating the Webflow CMS with the latest promotional content.", completed: false }
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Monday.com"
      },
      {
        title: "Fuze & AV",
        channel: "Paid Media",
        deliverables: [
          { name: "New Mockups for Landing Page", type: "Design File", description: "Creating mockups for the landing page, showcasing updated content and UI.", completed: false },
          { name: "Figma Design System Updates", type: "Design File", description: "Updating the Figma design system for promotional page consistency.", completed: false }
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Monday.com"
      },
      {
        title: "Digital Execution",
        channel: "UX",
        deliverables: [
          { name: "API Integration Plan", type: "Document", description: "A plan for integrating new promotional features with existing APIs.", completed: false },
          { name: "New Feature Codebase", type: "Other", description: "Developing code for new promotional features, ensuring scalability.", completed: false },
          { name: "Performance Report Post-Launch", type: "Report", description: "A post-launch analysis of campaign performance, identifying areas for optimization.", completed: false }
        ],
        timeline: "1-2 Weeks | June 3, 2026 - July 15, 2026",
        approver: "John Doe",
        routedTo: "Jira"
      }
    ]
  };

  const [briefData, setBriefData] = useState(initialBriefData);
  const [planData, setPlanData] = useState(initialPlanData);
  const [showReview, setShowReview] = useState(false);

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
        aiResponseText = "Sounds great!\n\nTo help me get started with the strategic brief can you answer a couple more questions about this project for me.\n\nIs this project new or an update?\nWhat problem are you solving for?\nDo you have a WBS code or budget allocated?";
        setStep(1);
      } else if (step === 1) {
        aiResponseText = "Here's a first pass of the Strategic Brief.\n\nReview the draft and update anything you'd like in the sections to the left. The sections I was not able to draft are highlighted, please fill those out as well or give me additional info so I can draft content.";
        setStep(2);
      } else if (step === 2) {
        setBriefData(prev => ({ ...prev, wbsCode: "RE2026-06" }));
        aiResponseText = "Great! I've approved the Strategic Brief\n\nPlease confirm the project details and we can move onto the Project Plan.\n\nReview this draft content\nLet me know what you'd like to update";
        setStep(3);
        setIsGeneratingPlan(false);
      } else if (step === 3) {
        const newPlanData = JSON.parse(JSON.stringify(planData));
        newPlanData.workstreams[3].deliverables.splice(2, 0, { name: "Staging Content Approval", type: "Document", description: "Approval of staged content before launch.", completed: false });
        setPlanData(newPlanData);
        aiResponseText = "Nice addition.\n\nI've added that deliverable to the list, once you think this plan is ready to go I can route the work to each team directly.";
        setStep(4);
      } else if (step === 5) {
        aiResponseText = "Got it, thanks for clarifying those details.\n\nAre you ready to route the project to each team?";
        setStep(6);
      } else if (step === 6) {
        aiResponseText = "Routing workstreams now!";
        setIsRoutingData(true);
        setTimeout(() => {
          setIsRoutingData(false);
          setStep(7);
        }, 2000);
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
    if (step === 5) return "KPIs are page views and time on site. No custom triggers needed. AA compliance required.";
    if (step === 6) return "Yes, route the project.";
    return "Project details...";
  };

  const handleApproveBrief = () => {
    handleSendMessage("The brief looks good, please approve and generate the project plan.");
  };

  const handleApprovePlan = () => {
    setStep(5);
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), sender: "system", text: "Plan Approved" },
      { id: (Date.now() + 1).toString(), sender: "ai", text: "I have some follow up questions about specific deliverables in the plan...\n\nFor the updated Web flows:\nWhat are the KPI benchmarks?\nDo you need any custom event triggers?\n\nFor the New Feature Code:\nDoes this need to be AA or AAA compliant?" }
    ]);
  };

  const documentType = isRoutingData ? "routing" : isGeneratingPlan ? "generating" : step >= 7 ? "success" : step >= 5 ? "followup" : showReview ? "review" : step >= 3 ? "plan" : step >= 2 ? "brief" : "none";

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
          documentType !== 'none' && documentType !== 'followup' ? styles.contentRowSpread : styles.contentRowCenter
        )}>

          {documentType !== 'none' && documentType !== 'followup' && (
            <div className={clsx(
              styles.documentPanel,
              (documentType === 'success' || documentType === 'routing' || documentType === 'review') && styles.documentPanelFull
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
              {documentType === 'plan' && <ProjectPlan briefData={briefData} planData={planData} onUpdateBrief={setBriefData} onUpdatePlan={setPlanData} onBackToBrief={() => setStep(2)} onApprove={handleApprovePlan} onViewReview={() => setShowReview(true)} />}
              {documentType === 'review' && <PlanReviewView briefData={briefData} planData={planData} onBackToDraft={() => setShowReview(false)} />}
              {documentType === 'success' && <SuccessView briefData={briefData} planData={planData} />}
            </div>
          )}

          {documentType !== 'success' && documentType !== 'routing' && documentType !== 'review' && (
            <div className={clsx(
              styles.chatColumn,
              documentType !== 'none' && documentType !== 'followup' ? styles.chatColumnNarrow : styles.chatColumnWide,
              (documentType === 'none' || documentType === 'followup') && step === 0 && messages.length === 0 && styles.chatColumnWideCenter,
              (documentType === 'none' || documentType === 'followup') && !(step === 0 && messages.length === 0) && styles.chatColumnWidePadded
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
