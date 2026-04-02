import React from "react";
import clsx from "clsx";
import svgPaths from "./svg-ebnnnca9s6";
const imgShadow = "";
import { imgVectorIconFill, imgIconContainer, imgIconContainer1, imgVectorIconFill1, imgVectorIconFill2, imgVectorIconFill3, imgVectorIconFill4, imgVectorIconFill5, imgVectorIconFill6, imgVectorIconFill7 } from "./svg-ei95y";
type IconButtonProps = {
  additionalClassNames?: string;
};

function IconButton({ children, additionalClassNames = "" }: React.PropsWithChildren<IconButtonProps>) {
  return (
    <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron">
        <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute h-[12.001px] top-1/2 w-[6.499px]", additionalClassNames)}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.49919 12.0008">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute left-0 size-[24px] top-0" data-name="Icon-content">
        {children}
      </div>
    </div>
  );
}
type Helper2Props = {
  badge: boolean;
};

function Helper2({ badge }: Helper2Props) {
  return (
    <div className="overflow-clip relative rounded-[inherit] size-full">
      <AppBarTabIconContainer />
      {badge && <CounterBadge />}
      <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
    </div>
  );
}

function AppBarTabIconContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2">
      <div className="content-stretch flex items-start relative">
        <div className="relative shrink-0 size-[20px]" data-name="Icon-content">
          <div className="absolute bg-[#242424] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgIconContainer1}')` }} />
        </div>
      </div>
    </div>
  );
}
type IconStringStackText1Props = {
  text: string;
  additionalClassNames?: string;
};

function IconStringStackText1({ text, additionalClassNames = "" }: IconStringStackText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[2px] items-center justify-center", additionalClassNames)}>
      <IconContainer />
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[12px]">{text}</p>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="absolute bg-[#cc4a31] bottom-[64.29%] left-1/2 right-[26.47%] rounded-[16px] top-[7.14%]">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Text1 text="1" />
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute bg-[#cc4a31] left-[34px] rounded-[16px] top-[4px]">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Text1 text="1" />
    </div>
  );
}

function CounterBadge() {
  return (
    <div className="absolute bg-[#cc4a31] left-[24px] rounded-[16px] top-[3px]">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Text1 text="1" />
    </div>
  );
}
type IconStringStackTextProps = {
  text: string;
  additionalClassNames?: string;
};

function IconStringStackText({ text, additionalClassNames = "" }: IconStringStackTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[2px] items-center justify-center", additionalClassNames)}>
      <IconContainer />
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5b5fc7] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[12px]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center px-[5px] py-[3px] relative">
        <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
          <p className="leading-[10px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute bg-[#cc4a31] left-[24px] rounded-[16px] top-[3px]">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Text1 text={text} />
    </div>
  );
}
type AppBarTabCounterBadgeTextProps = {
  text: string;
};

function AppBarTabCounterBadgeText({ text }: AppBarTabCounterBadgeTextProps) {
  return (
    <div className="absolute bg-[#cc4a31] bottom-[64.29%] left-1/2 right-[26.47%] rounded-[16px] top-[7.14%]">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Text1 text={text} />
    </div>
  );
}

function IconContainer() {
  return (
    <Wrapper>
      <div className="absolute bg-[#242424] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgIconContainer}')` }} />
    </Wrapper>
  );
}
type AppBarTabIconStringStackTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AppBarTabIconStringStackText({ text, additionalClassNames = "" }: AppBarTabIconStringStackTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[2px] items-center justify-center", additionalClassNames)}>
      <IconContainer />
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4f52b2] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[12px]">{text}</p>
      </div>
    </div>
  );
}
type TeamsProps = {
  className?: string;
  size?: "16" | "20" | "24" | "28" | "32";
  theme?: "Color" | "Mono";
};

function Teams({ className, size = "28", theme = "Mono" }: TeamsProps) {
  const is16AndColor = size === "16" && theme === "Color";
  const is16AndMono = size === "16" && theme === "Mono";
  const is20AndColor = size === "20" && theme === "Color";
  const is20AndMono = size === "20" && theme === "Mono";
  const is24AndColor = size === "24" && theme === "Color";
  const is24AndMono = size === "24" && theme === "Mono";
  const is32AndColor = size === "32" && theme === "Color";
  const isColorAndIs20Or16 = theme === "Color" && ["20", "16"].includes(size);
  const isColorAndIs24Or20Or16 = theme === "Color" && ["24", "20", "16"].includes(size);
  const isColorAndIs28Or24Or20Or16 = theme === "Color" && ["28", "24", "20", "16"].includes(size);
  return (
    <div className={className || `relative ${is32AndColor ? "size-[32px]" : size === "16" ? "size-[16px]" : size === "20" ? "size-[20px]" : size === "24" ? "size-[24px]" : "size-[28px]"}`}>
      {theme === "Mono" && ["28", "24", "20", "16"].includes(size) && (
        <div className={`absolute ${is16AndMono ? "inset-[6.25%]" : is20AndMono ? "inset-[9.96%_10%_10.01%_10%]" : is24AndMono ? "inset-[12.5%_8.33%]" : "inset-[13.17%_7.14%_10.71%_7.14%]"}`} data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndMono ? "0 0 14 14" : is20AndMono ? "0 0 16 16.0057" : is24AndMono ? "0 0 20 18" : "0 0 24 21.313"}>
            <path d={is16AndMono ? svgPaths.p16a1c080 : is20AndMono ? svgPaths.p296f2300 : is24AndMono ? svgPaths.p2778cc00 : svgPaths.p2e8f1b00} fill="var(--fill-0, #212121)" id="Shape" />
          </svg>
        </div>
      )}
      {isColorAndIs28Or24Or20Or16 && (
        <>
          <div className={`absolute ${is16AndColor ? "inset-[43.75%_6.25%_18.75%_62.5%]" : is20AndColor ? "inset-[40%_10.3%_22.68%_62.35%]" : is24AndColor ? "inset-[41.67%_8.44%_21.97%_65.47%]" : "inset-[39.29%_39.29%_21.43%_35.71%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndColor ? "0 0 5 6" : is20AndColor ? "0 0 5.47 7.46552" : is24AndColor ? "0 0 6.261 8.727" : "0 0 7 11"}>
              <path d={is16AndColor ? svgPaths.p72a1800 : is20AndColor ? svgPaths.p9e60900 : is24AndColor ? svgPaths.p1539ee40 : svgPaths.p19f6efc0} fill={isColorAndIs24Or20Or16 ? "var(--fill-0, #5059C9)" : "var(--fill-0, black)"} id="teams" />
            </svg>
          </div>
          <div className={`absolute ${is16AndColor ? "inset-[12.5%_6.25%_62.5%_68.75%]" : is20AndColor ? "inset-[15%_10%_65%_70%]" : is24AndColor ? "bottom-[62.5%] left-3/4 right-[8.33%] top-[20.83%]" : "inset-[28.57%_39.28%_63.17%_45.92%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isColorAndIs24Or20Or16 ? "0 0 4 4" : "0 0 4.143 2.313"}>
              <path d={isColorAndIs20Or16 ? svgPaths.p12ed5580 : is24AndColor ? svgPaths.p90b15e0 : svgPaths.p17b88680} fill={isColorAndIs24Or20Or16 ? "var(--fill-0, #5059C9)" : "var(--fill-0, black)"} id="teams" />
            </svg>
          </div>
          <div className={`absolute ${is16AndColor ? "bottom-[6.25%] left-[31.25%] right-1/4 top-[43.75%]" : is20AndColor ? "bottom-[10%] left-[30%] right-1/4 top-[40%]" : is24AndColor ? "inset-[41.69%_25.02%_12.48%_37.48%]" : "inset-[39.29%_7.14%_23.31%_66.02%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndColor ? "0 0 7 8" : is20AndColor ? "0 0 9 10" : is24AndColor ? "0 0 9 11" : "0 0 7.514 10.473"}>
              <path d={is16AndColor ? svgPaths.p21221c00 : is20AndColor ? svgPaths.p19eba180 : is24AndColor ? svgPaths.p3cb15b00 : svgPaths.p37796cc0} fill={isColorAndIs24Or20Or16 ? "var(--fill-0, #7B83EB)" : "var(--fill-0, #5059C9)"} id="teams" />
            </svg>
          </div>
          <div className={`absolute ${is16AndColor ? "inset-[6.25%_31.25%_62.5%_37.5%]" : is20AndColor ? "inset-[10%_30%_60%_40%]" : is24AndColor ? "inset-[12.89%_29.56%_62.89%_46.22%]" : "inset-[17.86%_10.71%_64.29%_71.43%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is20AndColor ? "0 0 6 6" : is24AndColor ? "0 0 5.813 5.814" : "0 0 5 5"}>
              <path d={is16AndColor ? svgPaths.p3b29e480 : is20AndColor ? svgPaths.p969ae00 : is24AndColor ? svgPaths.p7984d40 : svgPaths.pa43cb00} fill={isColorAndIs24Or20Or16 ? "var(--fill-0, #7B83EB)" : "var(--fill-0, #5059C9)"} id="teams" />
            </svg>
          </div>
          <div className={`absolute ${is16AndColor ? "inset-[31.25%_37.81%_62.5%_40.69%]" : is20AndColor ? "inset-[40%_35.15%_20%_30%]" : is24AndColor ? "inset-[29.17%_37.5%_20.83%_37.48%]" : "bottom-[10.71%] left-[35.71%] right-1/4 top-[39.29%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndColor ? "0 0 3.44 1" : is20AndColor ? "0 0 6.97003 8" : is24AndColor ? "0 0 6.006 12" : "0 0 11 14"}>
              <path clipRule={is24AndColor ? "evenodd" : undefined} d={is16AndColor ? svgPaths.p22cedbc0 : is20AndColor ? svgPaths.p3948c500 : is24AndColor ? svgPaths.p15b0bd00 : svgPaths.p1b792540} fill={isColorAndIs24Or20Or16 ? "var(--fill-0, black)" : "var(--fill-0, #7B83EB)"} fillRule={is24AndColor ? "evenodd" : undefined} id="teams" opacity={isColorAndIs24Or20Or16 ? "0.5" : undefined} />
            </svg>
          </div>
          <div className={`absolute ${is16AndColor ? "inset-[43.75%_37.5%_18.75%_31.25%]" : is20AndColor ? "inset-[30%_35.15%_60%_40.85%]" : is24AndColor ? "bottom-1/4 left-[8.33%] right-[41.67%] top-1/4" : "inset-[13.17%_31.02%_63.17%_45.31%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndColor ? "0 0 5 6" : is20AndColor ? "0 0 4.8 1.9991" : is24AndColor ? "0 0 12 12" : "0 0 6.627 6.626"}>
              <path d={is16AndColor ? svgPaths.p200e0780 : is20AndColor ? svgPaths.p3abea780 : is24AndColor ? svgPaths.p172efcf0 : svgPaths.p17fee980} fill={isColorAndIs20Or16 ? "var(--fill-0, black)" : is24AndColor ? "var(--fill-0, #4B53BC)" : "var(--fill-0, #7B83EB)"} id="teams" opacity={isColorAndIs20Or16 ? "0.5" : undefined} />
            </svg>
          </div>
          <div className={`absolute ${is16AndColor ? "bottom-1/4 left-[6.25%] right-[43.75%] top-1/4" : is20AndColor ? "inset-[40%_35.15%_20%_30%]" : is24AndColor ? "inset-[35.71%_54.17%_34.08%_21.81%]" : "inset-[28.57%_39.29%_21.43%_35.71%]"}`} data-name="teams">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndColor ? "0 0 8 8" : is20AndColor ? "0 0 6.97003 8" : is24AndColor ? "0 0 5.765 7.25" : "0 0 7 14"}>
              <path d={is16AndColor ? svgPaths.p384a980 : is20AndColor ? svgPaths.p3948c500 : is24AndColor ? svgPaths.pfae1100 : svgPaths.p3a9dce20} fill={is16AndColor ? "var(--fill-0, #4B53BC)" : is24AndColor ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="teams" opacity={is20AndColor ? "0.1" : size === "28" && theme === "Color" ? "0.5" : undefined} />
            </svg>
          </div>
        </>
      )}
      {theme === "Color" && ["28", "20", "16"].includes(size) && (
        <div className={`absolute ${is16AndColor ? "inset-[33.63%_58.19%_33.56%_14.44%]" : is20AndColor ? "inset-[30%_35.15%_60%_40.85%]" : "bottom-1/4 left-[7.14%] right-[42.86%] top-1/4"}`} data-name="teams">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is16AndColor ? "0 0 4.38 5.25" : is20AndColor ? "0 0 4.8 1.9991" : "0 0 14 14"}>
            <path d={is16AndColor ? svgPaths.p15fc1e00 : is20AndColor ? svgPaths.p3abea780 : svgPaths.p28340f00} fill={is16AndColor ? "var(--fill-0, white)" : is20AndColor ? "var(--fill-0, black)" : "var(--fill-0, #4B53BC)"} id="teams" opacity={is20AndColor ? "0.1" : undefined} />
          </svg>
        </div>
      )}
      {theme === "Color" && ["28", "20"].includes(size) && (
        <div className={`absolute ${is20AndColor ? "bottom-1/4 left-[10%] right-[40%] top-1/4" : "inset-[35.71%_56.5%_35.72%_20.78%]"}`} data-name="teams">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is20AndColor ? "0 0 10 10" : "0 0 6.361 8"}>
            <path d={is20AndColor ? svgPaths.p19814280 : svgPaths.p63ac700} fill={is20AndColor ? "var(--fill-0, #4B53BC)" : "var(--fill-0, white)"} id="teams" />
          </svg>
        </div>
      )}
      {is20AndColor && (
        <div className="absolute bottom-[35%] left-1/4 right-1/2 top-[35%]" data-name="teams">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
            <path d="M5 1H3V6H2V1H0V0H5V1Z" fill="var(--fill-0, white)" id="teams" />
          </svg>
        </div>
      )}
      {is32AndColor && (
        <>
          <div className="absolute bottom-1/4 left-[65.63%] right-[6.25%] top-[37.49%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12.002">
              <path d={svgPaths.p2d504a80} fill="var(--fill-0, #5059C9)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[15.63%_9.37%_65.63%_71.88%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d={svgPaths.p969ae00} fill="var(--fill-0, #5059C9)" id="Vector" />
            </svg>
          </div>
          <div className="absolute flex inset-[37.5%_28.12%_9.37%_31.25%] items-center justify-center">
            <div className="-rotate-90 flex-none h-[13px] w-[17px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
                  <path d={svgPaths.p1bdb28f0} fill="var(--fill-0, #7B83EB)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-[9.38%_34.37%_65.63%_40.63%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p65069f0} fill="var(--fill-0, #7B83EB)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-[31.25%] right-[46.88%] top-[37.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d={svgPaths.p48f04c0} fill="var(--fill-0, black)" id="Vector" opacity="0.5" />
            </svg>
          </div>
          <div className="absolute inset-[31.25%_47.09%_65.65%_44.94%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.55274 0.99316">
              <path d={svgPaths.p29986ac0} fill="var(--fill-0, black)" id="Vector" opacity="0.5" />
            </svg>
          </div>
          <div className="absolute bottom-[28.13%] left-[6.25%] right-1/2 top-[28.13%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p1853ff00} fill="var(--fill-0, #4B53BC)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[36.25%_57.84%_34.59%_17.85%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77777 9.3333">
              <path d={svgPaths.pa896e00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
type AppBarTabProps = {
  className?: string;
  badge?: boolean;
  label?: boolean;
  state?: "Rest" | "Hover" | "Selected" | "Dragged" | "Focus";
  type?: "Activity" | "Chat" | "Teams" | "Calendar" | "Calls" | "Files" | "Other";
};

function AppBarTab({ className, badge = true, label = true, state = "Rest", type = "Activity" }: AppBarTabProps) {
  if (type === "Activity" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Activity, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Activity" additionalClassNames="inset-[16.07%_25.74%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Activity" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Activity, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Activity" additionalClassNames="inset-[16.07%_25.74%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Activity" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Activity, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Activity" additionalClassNames="inset-[16.07%_25.74%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Activity" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Activity, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Activity" additionalClassNames="inset-[16.07%_25.74%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Activity" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Activity, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Activity" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Activity, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Activity" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Activity, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Activity" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Activity, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Activity" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Activity, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Chat" && label && state === "Rest") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Chat, Label=True, State=Rest">
        <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_32.35%] items-center justify-center" data-name="Icon-string-stack">
          <Wrapper>
            <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill1}')` }} />
          </Wrapper>
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
            <p className="leading-[12px]">Chat</p>
          </div>
        </div>
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Chat" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Chat, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Chat" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Chat" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Chat, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Chat" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Chat" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Chat, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Chat" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Chat" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Chat, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Chat" additionalClassNames="inset-[16.07%_32.35%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Chat" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Chat, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Chat" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Chat, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Chat" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Chat, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Chat" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Chat, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Chat" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Chat, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Teams" && label && state === "Rest") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Teams, Label=True, State=Rest">
        <IconStringStackText1 text="Teams" additionalClassNames="inset-[16.07%_29.41%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Teams" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Teams, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Teams" additionalClassNames="inset-[16.07%_29.41%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Teams" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Teams, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Teams" additionalClassNames="inset-[16.07%_29.41%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Teams" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Teams, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Teams" additionalClassNames="inset-[16.07%_29.41%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Teams" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Teams, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Teams" additionalClassNames="inset-[16.07%_29.41%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Teams" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Teams, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Teams" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Teams, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Teams" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Teams, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Teams" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Teams, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Teams" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Teams, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Calendar" && label && state === "Rest") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Calendar, Label=True, State=Rest">
        <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_20.59%] items-center justify-center" data-name="Icon-string-stack">
          <Wrapper>
            <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill2}')` }} />
          </Wrapper>
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
            <p className="leading-[12px]">Calendar</p>
          </div>
        </div>
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Calendar" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Calendar, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Calendar" additionalClassNames="inset-[16.07%_20.59%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Calendar" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Calendar, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Calendar" additionalClassNames="inset-[16.07%_20.59%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Calendar" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Calendar, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Calendar" additionalClassNames="inset-[16.07%_20.59%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Calendar" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Calendar, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Calendar" additionalClassNames="inset-[16.07%_20.59%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Calendar" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Calendar, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Calendar" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Calendar, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Calendar" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Calendar, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Calendar" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Calendar, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Calendar" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Calendar, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Calls" && label && state === "Rest") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Calls, Label=True, State=Rest">
        <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_32.35%] items-center justify-center" data-name="Icon-string-stack">
          <Wrapper>
            <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill3}')` }} />
          </Wrapper>
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
            <p className="leading-[12px]">Calls</p>
          </div>
        </div>
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Calls" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Calls, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Calls" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Calls" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Calls, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Calls" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Calls" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Calls, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Calls" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Calls" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Calls, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Calls" additionalClassNames="inset-[16.07%_32.35%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Calls" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Calls, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Calls" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Calls, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Calls" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Calls, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Calls" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Calls, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Calls" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Calls, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Files" && label && state === "Rest") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Files, Label=True, State=Rest">
        <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_32.35%] items-center justify-center" data-name="Icon-string-stack">
          <Wrapper>
            <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill4}')` }} />
          </Wrapper>
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
            <p className="leading-[12px]">Files</p>
          </div>
        </div>
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Files" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Files, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Files" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Files" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Files, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Files" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Files" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Files, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Files" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Files" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Files, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Files" additionalClassNames="inset-[16.07%_32.35%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Files" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Files, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Files" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Files, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Files" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Files, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Files" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Files, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Files" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Files, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Other" && label && state === "Rest") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Other, Label=True, State=Rest">
        <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_32.35%] items-center justify-center" data-name="Icon-string-stack">
          <Wrapper>
            <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill5}')` }} />
          </Wrapper>
          <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
            <p className="leading-[12px]">Label</p>
          </div>
        </div>
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Other" && label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] relative w-[68px]"} data-name="Type=Other, Label=True, State=Hover">
        <AppBarTabIconStringStackText text="Label" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Other" && label && state === "Selected") {
    return (
      <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Other, Label=True, State=Selected">
        <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        <IconStringStackText text="Label" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <Helper />}
      </div>
    );
  }
  if (type === "Other" && label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[56px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[68px]"} data-name="Type=Other, Label=True, State=Dragged">
        <AppBarTabIconStringStackText text="Label" additionalClassNames="inset-[16.07%_32.35%]" />
        {badge && <AppBarTabCounterBadgeText text="1" />}
      </div>
    );
  }
  if (type === "Other" && label && state === "Focus") {
    return (
      <div className={className || "h-[56px] relative rounded-[4px] w-[68px]"} data-name="Type=Other, Label=True, State=Focus">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <IconStringStackText1 text="Label" additionalClassNames="inset-[16.07%_32.35%]" />
          {badge && <Helper1 />}
          <div className="absolute border border-solid border-white inset-0 rounded-[4px]" data-name="Focus-ring" />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  if (type === "Other" && !label && state === "Hover") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] relative w-[48px]"} data-name="Type=Other, Label=False, State=Hover">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Other" && !label && state === "Dragged") {
    return (
      <div className={className || "bg-[#f5f5f5] h-[40px] overflow-clip relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.14)] w-[48px]"} data-name="Type=Other, Label=False, State=Dragged">
        <AppBarTabIconContainer />
        {badge && <Text text="1" />}
      </div>
    );
  }
  if (type === "Other" && !label && state === "Selected") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Other, Label=False, State=Selected">
        <AppBarTabIconContainer />
        <div className="absolute bg-[#5b5fc7] h-[32px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Other" && !label && state === "Rest") {
    return (
      <div className={className || "h-[40px] relative w-[48px]"} data-name="Type=Other, Label=False, State=Rest">
        <AppBarTabIconContainer />
        {badge && <CounterBadge />}
      </div>
    );
  }
  if (type === "Other" && !label && state === "Focus") {
    return (
      <div className={className || "h-[40px] relative rounded-[4px] w-[48px]"} data-name="Type=Other, Label=False, State=Focus">
        <Helper2 badge={badge} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    );
  }
  return (
    <div className={className || "h-[56px] overflow-clip relative rounded-[4px] w-[68px]"} data-name="Type=Activity, Label=True, State=Rest">
      <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_25.74%] items-center justify-center" data-name="Icon-string-stack">
        <Wrapper>
          <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill}')` }} />
        </Wrapper>
        <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[12px]">Activity</p>
        </div>
      </div>
      {badge && <Helper />}
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f8f9fb] flex flex-col items-stretch justify-start relative w-full h-screen overflow-hidden" data-name="MojoTech-Executive-Dashboard-Mockup">
      <div className="bg-[#e4edf3] h-[48px] overflow-clip relative shrink-0 w-full z-50" data-name="TitleBar T1.0">
        <div className="-translate-y-1/2 absolute right-[2px] top-1/2" data-name="Parent / .Base3">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button-avatar-stack">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon-button">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="More Horizontal">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2.5px] left-1/2 top-1/2 w-[12.5px]" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 2.5">
                        <path d={svgPaths.p1737d400} fill="var(--fill-0, #424242)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[28px]" data-name="Avatar">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                    <path d="M14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0Z" fill="#008AC0"/>
                    <path d="M10.2725 10.8833C9.72461 10.8833 9.25911 11.0176 8.87598 11.2861C8.49284 11.5511 8.2028 11.9181 8.00586 12.3872C7.80892 12.8563 7.71045 13.3952 7.71045 14.0039C7.71045 14.6663 7.80892 15.241 8.00586 15.728C8.2028 16.215 8.49105 16.5892 8.87061 16.8506C9.25016 17.112 9.70671 17.2427 10.2402 17.2427C10.849 17.2427 11.3503 17.0744 11.7441 16.7378C12.1416 16.3976 12.4173 15.9053 12.5713 15.2607L13.5864 15.5024C13.4647 16.0467 13.2498 16.5176 12.9419 16.915C12.6375 17.3089 12.2562 17.6115 11.7979 17.8228C11.3431 18.0304 10.8364 18.1343 10.2778 18.1343C9.51872 18.1343 8.86523 17.9696 8.31738 17.6401C7.77311 17.3107 7.35596 16.8381 7.06592 16.2222C6.77588 15.6027 6.63086 14.8651 6.63086 14.0093C6.63086 13.1929 6.78483 12.4821 7.09277 11.877C7.4043 11.2682 7.83577 10.8027 8.38721 10.4805C8.94222 10.1546 9.57422 9.9917 10.2832 9.9917C11.1032 9.9917 11.7835 10.1886 12.3242 10.5825C12.8685 10.9728 13.2445 11.5422 13.4521 12.2905L12.4316 12.5322C12.2669 11.9772 12.0055 11.5636 11.6475 11.2915C11.2894 11.0194 10.8311 10.8833 10.2725 10.8833Z" fill="white"/>
                    <path d="M18.1465 10.8833C17.5986 10.8833 17.1331 11.0176 16.75 11.2861C16.3669 11.5511 16.0768 11.9181 15.8799 12.3872C15.6829 12.8563 15.5845 13.3952 15.5845 14.0039C15.5845 14.6663 15.6829 15.241 15.8799 15.728C16.0768 16.215 16.3651 16.5892 16.7446 16.8506C17.1242 17.112 17.5807 17.2427 18.1143 17.2427C18.723 17.2427 19.2243 17.0744 19.6182 16.7378C20.0156 16.3976 20.2913 15.9053 20.4453 15.2607L21.4604 15.5024C21.3387 16.0467 21.1239 16.5176 20.8159 16.915C20.5116 17.3089 20.1302 17.6115 19.6719 17.8228C19.2171 18.0304 18.7104 18.1343 18.1519 18.1343C17.3927 18.1343 16.7393 17.9696 16.1914 17.6401C15.6471 17.3107 15.23 16.8381 14.9399 16.2222C14.6499 15.6027 14.5049 14.8651 14.5049 14.0093C14.5049 13.1929 14.6589 12.4821 14.9668 11.877C15.2783 11.2682 15.7098 10.8027 16.2612 10.4805C16.8162 10.1546 17.4482 9.9917 18.1572 9.9917C18.9772 9.9917 19.6576 10.1886 20.1982 10.5825C20.7425 10.9728 21.1185 11.5422 21.3262 12.2905L20.3057 12.5322C20.141 11.9772 19.8796 11.5636 19.5215 11.2915C19.1634 11.0194 18.7051 10.8833 18.1465 10.8833Z" fill="white"/>
                  </svg>
                  <svg className="absolute bottom-0 right-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" data-name="Presence">
                    <g clipPath="url(#clip0_2454_5471)">
                      <rect width="10" height="10" rx="5" fill="white"/>
                      <path d="M5 0C5.45898 0 5.90007 0.0602214 6.32324 0.180664C6.74642 0.301107 7.14355 0.470378 7.51465 0.688477C7.88574 0.906576 8.22266 1.16862 8.52539 1.47461C8.83138 1.77734 9.09342 2.11426 9.31152 2.48535C9.52962 2.85645 9.69889 3.25358 9.81934 3.67676C9.93978 4.09993 10 4.54102 10 5C10 5.45573 9.93978 5.89681 9.81934 6.32324C9.69889 6.74642 9.52962 7.14355 9.31152 7.51465C9.09342 7.88574 8.83138 8.22428 8.52539 8.53027C8.22266 8.83301 7.88574 9.09342 7.51465 9.31152C7.14355 9.52962 6.74479 9.69889 6.31836 9.81934C5.89518 9.93978 5.45573 10 5 10C4.54427 10 4.10319 9.93978 3.67676 9.81934C3.25358 9.69889 2.85645 9.52962 2.48535 9.31152C2.11426 9.09342 1.77572 8.83301 1.46973 8.53027C1.16699 8.22428 0.906576 7.88574 0.688477 7.51465C0.470378 7.14355 0.301107 6.74642 0.180664 6.32324C0.0602214 5.89681 0 5.45573 0 5C0 4.54427 0.0602214 4.10482 0.180664 3.68164C0.301107 3.25521 0.470378 2.85645 0.688477 2.48535C0.906576 2.11426 1.16699 1.77734 1.46973 1.47461C1.77572 1.16862 2.11426 0.906576 2.48535 0.688477C2.85645 0.470378 3.25358 0.301107 3.67676 0.180664C4.10319 0.0602214 4.54427 0 5 0ZM6.64551 3.55469C6.5153 3.55469 6.40462 3.60026 6.31348 3.69141L4.5459 5.46875L3.91602 4.84375C3.82487 4.7526 3.71582 4.70703 3.58887 4.70703C3.52702 4.70703 3.46842 4.72005 3.41309 4.74609C3.35775 4.77214 3.30729 4.80794 3.26172 4.85352C3.2194 4.89583 3.18522 4.94466 3.15918 5C3.13314 5.05534 3.12012 5.11393 3.12012 5.17578C3.12012 5.30599 3.16569 5.41667 3.25684 5.50781L4.21387 6.46484C4.30501 6.55599 4.41569 6.60156 4.5459 6.60156C4.67611 6.60156 4.78678 6.55599 4.87793 6.46484L6.97754 4.35547C7.06868 4.26432 7.11426 4.15365 7.11426 4.02344C7.11426 3.96159 7.10124 3.90299 7.0752 3.84766C7.04915 3.79232 7.01335 3.74349 6.96777 3.70117C6.92546 3.6556 6.87663 3.61979 6.82129 3.59375C6.76595 3.56771 6.70736 3.55469 6.64551 3.55469Z" fill="#6BB700"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2454_5471">
                        <rect width="10" height="10" rx="5" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Native-controls">
                <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Control-button">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="Subtract">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#424242] h-px left-1/2 rounded-[1px] top-1/2 w-[10px]" data-name="Shape" />
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Control-button">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="Maximize">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <path d={svgPaths.p701be00} fill="var(--fill-0, #424242)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Control-button">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="Dismiss">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[11px] top-1/2" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                        <path d={svgPaths.pd515600} fill="var(--fill-0, #424242)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-34px)] top-1/2" data-name="Parent / .Base2">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-center relative">
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Buttons-stack">
                <IconButton additionalClassNames="left-[calc(50%-0.75px)]">
                  <path d={svgPaths.p3b178cf0} fill="var(--fill-0, #424242)" id="Shape" />
                </IconButton>
                <IconButton additionalClassNames="left-[calc(50%+0.75px)]">
                  <path d={svgPaths.p154164f0} fill="var(--fill-0, #424242)" id="Shape" />
                </IconButton>
              </div>
              <div className="bg-white h-[32px] relative rounded-[4px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.14)] shrink-0 w-[468px]" data-name="Search">
                <div className="absolute content-stretch flex gap-[4px] items-start left-[12px] top-[6px]" data-name="Icon-string-stack">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p2e369600} fill="var(--fill-0, #616161)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Search</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.05)] bottom-0 h-px left-0 right-0" data-name="Divider" />
        <div className="-translate-y-1/2 absolute left-[22px] top-1/2" data-name="Parent / .Base1">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[28px] items-center relative">
              <Teams className="relative shrink-0 size-[24px]" size="24" theme="Color" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 flex-row min-h-0 items-stretch w-full relative overflow-hidden">
        <div className="bg-[#e6ecf3] h-full overflow-clip relative shrink-0 w-[68px] z-40" data-name="AppBar">
          <div className="absolute content-stretch flex flex-col items-start left-0 top-[4px]" data-name="Tabs-stack">
            <AppBarTab badge={false} className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" />
            <AppBarTab badge={false} className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" type="Chat" />
            <div className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" data-name="AppBar/Tab">
              <div className="absolute bg-[#5b5fc7] h-[48px] left-[2px] rounded-[20px] top-[4px] w-[2px]" data-name="Selected-bar" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-1/2 top-1/2" data-name="Icon-string-stack">
                <div className="relative shrink-0 size-[24px]" data-name="assignment_add">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="assignment_add">
                      <mask height="24" id="mask0_25_2340" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                      </mask>
                      <g mask="url(#mask0_25_2340)">
                        <path d={svgPaths.p37d6000} fill="var(--fill-0, #5B5FC7)" id="assignment_add_2" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Segoe_UI_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5b5fc7] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 10.5" }}>
                  <p className="leading-[12px]">Projects</p>
                </div>
              </div>
            </div>
            <AppBarTab badge={false} className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" type="Calendar" />
            <AppBarTab badge={false} className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" type="Calls" />
            <AppBarTab badge={false} className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" type="Files" />
            <div className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" data-name="AppBar/Tab">
              <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_25.74%] items-center justify-center" data-name="Icon-string-stack">
                <div className="relative shrink-0 size-[24px]" data-name="IconContainer">
                  <div className="absolute left-0 size-[24px] top-0" data-name="Icon-content">
                    <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill6}')` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[56px] overflow-clip relative rounded-[4px] shrink-0 w-[68px]" data-name="AppBar/Tab">
              <div className="absolute content-stretch flex flex-col gap-[2px] inset-[16.07%_25.74%] items-center justify-center" data-name="Icon-string-stack">
                <div className="relative shrink-0 size-[24px]" data-name="IconContainer">
                  <div className="absolute left-0 size-[24px] top-0" data-name="Icon-content">
                    <div className="absolute bg-[#616161] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" data-name="Vector-icon-fill" style={{ maskImage: `url('${imgVectorIconFill7}')` }} />
                  </div>
                </div>
                <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[10px] text-center whitespace-nowrap">
                  <p className="leading-[12px]">Apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col min-w-0 h-full relative overflow-y-auto overflow-x-hidden z-0">
          {children}
        </div>
      </div>
    </div>
  );
}