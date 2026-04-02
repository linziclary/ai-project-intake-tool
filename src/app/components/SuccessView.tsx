import React from "react";
import { CheckCircle, ArrowUpRight } from "lucide-react";

interface SuccessViewProps {
  briefData: any;
  planData: any;
}

export function SuccessView({ briefData, planData }: SuccessViewProps) {
  return (
    <div className="flex justify-center items-start w-full h-full overflow-y-auto custom-scrollbar pt-8 pb-16">
      <div className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08),8px_8px_16px_0px_rgba(0,0,0,0.12)] p-10 w-full max-w-[700px] flex flex-col">

        <div className="bg-[#e4fad9] border border-[#76bb47] flex flex-col gap-1 items-start px-4 py-3 rounded-lg mb-6">
          <div className="flex gap-1.5 items-center">
            <span className="font-bold text-[#48801c] text-sm">Project Plan Approved</span>
            <CheckCircle size={16} className="text-[#48801c]"/>
          </div>
          <p className="text-[#48801c] text-sm">Jobs & tasks within this project have been created and routed to the respective work management platforms.</p>
        </div>

        <h1 className="font-['Arial_Nova:Bold',sans-serif] leading-[24px] text-[20px] text-[#0c2737] mb-6 tracking-[-0.1px]">{briefData.title || "Renew Energy Promotion Web Page"}</h1>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col gap-2 text-[15px] text-[#0c2737]">
            <span>{briefData.projectType}</span>
            <span>{briefData.priority}</span>
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-[#0c2737]">
            <span>{briefData.initiative}</span>
            <span>{briefData.dueDate}</span>
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-[#0c2737]">
            <span>{briefData.businessUnit}</span>
            <span>{briefData.wbsCode}</span>
          </div>
        </div>

        <h2 className="font-['Arial_Nova:Bold',sans-serif] leading-[24px] text-[18px] text-[#0077ac] mb-6">Workstreams</h2>

        <div className="flex flex-col gap-8">
          {planData.workstreams.map((ws: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="font-['Arial_Nova:Bold',sans-serif] leading-[20px] text-[16px] text-[#0c2737]">{ws.title}</h3>
                  <span className="bg-[#f8f9fb] text-[#72797e] px-2.5 py-1 rounded-full text-[12px]">{ws.deliverables.length} Deliverables</span>
                </div>
                <a href="#" className="bg-[#e4fad9] text-[#48801c] px-3 py-1.5 rounded-full text-[12px] flex items-center gap-1 hover:bg-[#d4f2c4] transition-colors">
                  View in {ws.routedTo} <ArrowUpRight size={14} className="ml-0.5" />
                </a>
              </div>

              <div className="flex flex-col gap-2">
                {ws.deliverables.map((del: any, dIdx: number) => (
                  <p key={dIdx} className="text-[#0c2737] text-[15px]">{del.name}</p>
                ))}
              </div>

              <div className="flex items-center gap-4 text-[#72797e] text-[13px] mt-1">
                <span>{ws.timeline}</span>
                <span>Approver: {ws.approver}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
