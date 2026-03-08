"use client";

import { useState } from "react";
import ExpandableSection from "@/components/ExpandableSection";

interface Principle {
  title: string;
  explanation: string;
  example: string;
}

const SectionIcon = ({ type }: { type: "transformation" | "love" | "spiritual" }) => {
  const icons = {
    transformation: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    love: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    spiritual: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  return icons[type];
};

const PrincipleCard = ({
  principle,
  index,
  sectionType,
}: {
  principle: Principle;
  index: number;
  sectionType: "transformation" | "love" | "spiritual";
}) => {
  const sectionColors = {
    transformation: {
      bg: "bg-gradient-to-br from-[#0A3200]/5 to-[#379634]/5",
      border: "border-l-4 border-[#379634]",
      number: "bg-gradient-to-br from-[#0A3200] to-[#379634]",
      accent: "text-[#379634]",
    },
    love: {
      bg: "bg-gradient-to-br from-[#74F2CE]/10 to-[#379634]/5",
      border: "border-l-4 border-[#74F2CE]",
      number: "bg-gradient-to-br from-[#74F2CE] to-[#379634]",
      accent: "text-[#74F2CE]",
    },
    spiritual: {
      bg: "bg-gradient-to-br from-[#0A3200]/5 to-[#74F2CE]/5",
      border: "border-l-4 border-[#0A3200]",
      number: "bg-gradient-to-br from-[#0A3200] to-[#74F2CE]",
      accent: "text-[#0A3200]",
    },
  };

  const colors = sectionColors[sectionType];

  return (
    <div
      className={`${colors.bg} ${colors.border} p-6 rounded-[6px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
      style={{
        backgroundImage: sectionType === "love"
          ? "radial-gradient(circle at 100% 0%, rgba(116, 242, 206, 0.08) 0%, transparent 50%)"
          : sectionType === "transformation"
          ? "radial-gradient(circle at 100% 0%, rgba(55, 150, 52, 0.06) 0%, transparent 50%)"
          : "radial-gradient(circle at 100% 0%, rgba(10, 50, 0, 0.05) 0%, transparent 50%)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className={`${colors.number} text-white font-heading font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
        >
          {index + 1}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-3 leading-snug">
            {principle.title}
          </h3>

          <p className="font-body text-[var(--color-text)] leading-relaxed mb-4">
            {principle.explanation}
          </p>

          <div className="bg-white/40 border border-[var(--color-border)] rounded-[4px] px-4 py-3 backdrop-blur-sm">
            <p className="font-body text-sm text-[var(--color-text)]">
              <span className={`font-bold ${colors.accent}`}>Example:</span>{" "}
              <span className="italic">{principle.example}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({
  title,
  description,
  type,
  isExpanded,
  onToggle,
}: {
  title: string;
  description: string;
  type: "transformation" | "love" | "spiritual";
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const headerColors = {
    transformation: "from-[#0A3200] via-[#0A3200] to-[#379634]",
    love: "from-[#74F2CE] via-[#74F2CE] to-[#379634]",
    spiritual: "from-[#0A3200] via-[#379634] to-[#74F2CE]",
  };

  return (
    <button
      onClick={onToggle}
      className="w-full text-left hover:opacity-95 transition-opacity"
    >
      <div className={`bg-gradient-to-r ${headerColors[type]} rounded-[6px] p-8 mb-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
        }} />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-white/80">
                <SectionIcon type={type} />
              </div>
              <div>
                <span className="text-white/70 font-body text-xs font-bold uppercase tracking-widest block">
                  {type === "transformation" && "Growth & Change"}
                  {type === "love" && "Connection & Care"}
                  {type === "spiritual" && "Faith & Purpose"}
                </span>
                <h2 className="font-heading text-3xl font-bold text-white mt-2 text-balance">{title}</h2>
                <p className="font-body text-base text-white/90 max-w-2xl mt-2">{description}</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg
                className={`w-6 h-6 text-white/80 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

const PersonalJourney = () => (
  <div className="mb-12">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Left accent */}
      <div className="md:col-span-1 hidden md:flex justify-center">
        <div className="w-1 h-full bg-gradient-to-b from-[#379634] via-[#74F2CE] to-[#379634] rounded-full" />
      </div>

      {/* Main content */}
      <div className="md:col-span-11">
        <div className="bg-gradient-to-br from-[#f4fff9] to-white border border-[#c8f0e0] rounded-[8px] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mb-6 pb-6 border-b-2 border-[#c8f0e0]">
            <h2 className="font-heading text-3xl font-bold text-[#0A3200] mb-2">My Journey</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#379634] to-[#74F2CE] rounded-full" />
          </div>

          <div className="space-y-6">
            <p className="font-body text-[var(--color-text)] leading-relaxed text-lg">
              For a long time, I felt like I was running on a treadmill—<span className="font-bold text-[#379634]">moving fast, exhausted, but ultimately going nowhere</span>. I lacked the fundamental clarity on how to actually live life rather than just survive it. That changed when I met Mahatria.
            </p>

            <p className="font-body text-[var(--color-text)] leading-relaxed text-lg">
              Through his <span className="font-bold">'This and That' program</span>—a rigorous journey of 12 sessions, each spanning 2 hours—I was forced to look into a mirror and face the raw, uncomfortable truths about my own 'stuckness'. Mahatria didn't just give me theories; he gave me a <span className="text-[#379634] font-bold">blueprint for living in light</span>.
            </p>

            <div className="bg-gradient-to-r from-[#74F2CE]/20 to-[#379634]/10 border-l-4 border-[#74F2CE] px-6 py-4 rounded-[4px] my-6">
              <p className="font-body text-[var(--color-text)] leading-relaxed italic">
                These 33 principles are the result of that coaching. They are raw, they are challenging, and they require a level of vulnerability I wasn't used to showing.
              </p>
            </div>

            <p className="font-body text-[var(--color-text)] leading-relaxed text-lg">
              I've learned that implementing all of these at once is impossible; instead, <span className="font-bold">pick one principle and follow it religiously for 21 days</span> before moving to the next. I suggest starting with <span className="text-[#379634] font-bold">'Transformation' or 'Love'</span> before advancing to 'Spiritual Alignment'.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const IntroCard = () => (
  <div className="mb-12 relative">
    <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#74F2CE] opacity-10 rounded-full blur-3xl" />
    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#379634] opacity-5 rounded-full blur-3xl" />

    <div className="relative bg-white border border-[#c8f0e0] rounded-[8px] p-8 md:p-10">
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#74F2CE] bg-opacity-20 rounded-full border border-[#74F2CE] border-opacity-40">
        <span className="w-2 h-2 bg-[#74F2CE] rounded-full" />
        <span className="text-xs font-bold text-[#0A3200] uppercase tracking-wider">Guided Framework</span>
      </div>

      <h3 className="font-heading text-2xl font-bold text-[#0A3200] mb-3">A Blueprint for Living in Light</h3>
      <p className="font-body text-[var(--color-text)] leading-relaxed">
        This is not a quick-fix guide. These principles require commitment, vulnerability, and consistent practice. Start with one. Give it 21 days. Watch how it transforms your life.
      </p>
    </div>
  </div>
);

const DividerLine = ({ accent = "secondary" }: { accent?: "primary" | "secondary" | "mint" }) => {
  const colors = {
    primary: "from-[#0A3200] to-transparent",
    secondary: "from-[#379634] to-transparent",
    mint: "from-[#74F2CE] to-transparent",
  };
  return <div className={`h-px bg-gradient-to-r ${colors[accent]} my-12`} />;
};

export default function TransformationBlogContent() {
  const [expandedSection, setExpandedSection] = useState<"transformation" | "love" | "spiritual" | null>(null);

  const transformationPrinciples: Principle[] = [
    {
      title: "Evolving Consciousness",
      explanation: "Real transformation isn't about changing your external circumstances; it's about evolving how you perceive and process the world.",
      example: "Instead of changing jobs because of a 'bad boss,' you change your mindset to see every interaction as a lesson in leadership.",
    },
    {
      title: "1% Knowing, 99% Implementation",
      explanation: "Knowledge without action is just data; implementation is where the life change actually happens.",
      example: "Knowing that a morning routine is healthy is the 1%; actually getting out of bed when the alarm goes off is the 99%.",
    },
    {
      title: "Start Where You Are",
      explanation: "It doesn't matter what resources you lack; what matters is what you do with what you currently have.",
      example: "If you want to start a business, don't wait for a loan; start by selling one service or product using the laptop you already own.",
    },
    {
      title: "Small Progress Leads to Possibilities",
      explanation: "Sustained effort on small tasks eventually creates massive, life-changing opportunities.",
      example: "Learning one new professional skill for 15 minutes a day seems small, but over a year, it makes you the most qualified person for a promotion.",
    },
    {
      title: "C.D.S.I.E (Deservingness)",
      explanation: "Desires only become reality through Consistent Directed Self-Motivated Intelligent Effort.",
      example: "To get a promotion, you don't just wish for it; you consistently provide value and take initiative without being asked.",
    },
    {
      title: "Comfort Zone vs. Growth Zone",
      explanation: "Transformation requires a willingness to step through uncomfortable transitions to reach a higher state.",
      example: "Feeling the 'pit in your stomach' before a difficult conversation is the sign you are entering the growth zone.",
    },
    {
      title: "Altitudinal Breakthrough",
      explanation: "Attitudes, once shaped, become behaviors that either build your life or destroy it.",
      example: "If you cultivate an attitude of 'the world is against me,' you will subconsciously sabotage every helpful hand offered to you.",
    },
    {
      title: "Co-author of Destiny",
      explanation: "You are the co-author of your path; the beliefs you hold at the start define the outcome.",
      example: "Starting a marriage believing 'it probably won't last' ensures that you won't put in the effort required to save it when things get tough.",
    },
    {
      title: "Total Responsibility",
      explanation: "Life is your responsibility; blaming others is a leak in your power.",
      example: "When a project fails, instead of blaming the economy, you ask, 'What could I have done differently to prepare?'.",
    },
    {
      title: "Direction of Intelligence",
      explanation: "What you manifest is determined by where you focus your intellectual energy.",
      example: "Using your intelligence to solve a recurring problem at home rather than using it to win an argument about who caused the problem.",
    },
    {
      title: "Dynamic Acceptance (A.C.R.)",
      explanation: "Accept the unchangeable, change the changeable, and remove yourself from the unacceptable.",
      example: "Accepting your height, changing your fitness level, and leaving a relationship where there is no respect.",
    },
  ];

  const lovePrinciples: Principle[] = [
    {
      title: "Happiness Guarantees Love",
      explanation: "Love doesn't make you happy; being a happy person is what makes love possible.",
      example: "Finding joy in your own hobbies first so you don't look to your partner to be your only source of entertainment.",
    },
    {
      title: "Giving Over Receiving",
      explanation: "Love is a giving emotion; enter relationships focusing on what you can contribute.",
      example: "Instead of waiting for a 'thank you,' find satisfaction in the act of making your spouse's favorite meal.",
    },
    {
      title: "Ego vs. Everything",
      explanation: "When ego enters a room, love leaves; when ego leaves, everything else comes.",
      example: "Apologizing first after a fight, even if you were only 10% wrong, just to preserve the connection.",
    },
    {
      title: "Forgiveness",
      explanation: "Drop hurt by forgiving others and drop guilt by forgiving myself.",
      example: "Letting go of a grudge against a friend from years ago so you can finally stop replaying that pain in your head.",
    },
    {
      title: "Wait for Emotions to Settle",
      explanation: "Intelligence is impaired when emotions are high; abstain from decisions until you are calm.",
      example: "Putting your phone away when you're angry so you don't send a text that ends a five-year friendship in five seconds.",
    },
    {
      title: "Relationship Trade-offs",
      explanation: "Relationships come with trade-offs; some expectations will be met, others won't.",
      example: "Accepting that your partner is messy but kind, rather than constantly fighting to make them 'perfect'.",
    },
    {
      title: "Choice-maker vs. Consequence-receiver",
      explanation: "Clarity in life comes from knowing when you are making a choice and when you are receiving its consequence.",
      example: "If you choose to work long hours for a promotion, you must accept the consequence of less leisure time without complaining.",
    },
    {
      title: "The Non-negotiables",
      explanation: "Quality time, empathy, and explicit expressions are required for deep bonds.",
      example: "Actually saying 'I appreciate how hard you work' out loud rather than assuming they already know it.",
    },
    {
      title: "Make Others Feel Beautiful",
      explanation: "Life feels beautiful when you make others feel beautiful about themselves.",
      example: "Giving a sincere compliment to a stranger or coworker and watching their day brighten, which in turn brightens yours.",
    },
    {
      title: "Take 'You-Turns'",
      explanation: "It's not about whose mistake it was, but whose life it is; take charge.",
      example: "Instead of waiting for your sibling to call and apologize, you call them because you value the relationship more than the 'win'.",
    },
    {
      title: "Path to Divinity",
      explanation: "Love leads to peace, peace to silence, and silence to the Divine.",
      example: "Creating such a harmonious environment at home that your mind finally feels quiet enough to meditate or pray.",
    },
  ];

  const spiritualPrinciples: Principle[] = [
    {
      title: "Flow with Life",
      explanation: "Faithfully execute your choices and gratefully accept whatever consequences follow.",
      example: "Applying for your dream job with total effort, but accepting a 'no' with the belief that a better fit is coming.",
    },
    {
      title: "Prem, Sat, Chit, Anand",
      explanation: "Center your existence on Love, Truth, Consciousness, and Bliss.",
      example: "Basing a business decision on what is truthful (Sat) rather than what is just most profitable.",
    },
    {
      title: "Selfless Purpose",
      explanation: "Subordinate your personal likes and dislikes to the purpose of your life.",
      example: "Waking up early to volunteer even though you 'like' sleeping in, because your purpose is to serve.",
    },
    {
      title: "Gratitude as a Virtue",
      explanation: "Gratitude is the mother of all virtues and cannot coexist with mental disturbance.",
      example: "When you are stuck in traffic, listing things you are thankful for to stop the 'disturbance' of road rage.",
    },
    {
      title: "The Spiritual Chain",
      explanation: "Gratitude births love, love births devotion, and faith births surrender.",
      example: "Starting your day with thanks, which makes you feel more loving toward your family, eventually leading to a deeper faith in life.",
    },
    {
      title: "Power of Faith",
      explanation: "Miracles happen when you operate from a state of total faith.",
      example: "Taking a leap into a new career because you have faith in your abilities, and watching unexpected doors open for you.",
    },
    {
      title: "Faith Brings God",
      explanation: "Faith is the vehicle that brings a divine presence into your daily experience.",
      example: "When facing a health crisis, using faith to feel a sense of peace that transcends the medical data.",
    },
    {
      title: "Miraculous Combination",
      explanation: "Success is the power of the object + intelligent effort + faith in the energy.",
      example: "Studying hard for an exam (effort) while maintaining total faith that you will recall the right information (energy).",
    },
    {
      title: "Nobler Ideals",
      explanation: "The bigger the goal and nobler the ideal, the stronger the motivation and the deeper the faith.",
      example: "Working to build a charity for orphans provides a level of 'energy' that working just for a paycheck never could.",
    },
    {
      title: "Energy from Silence",
      explanation: "Derive energy for your actions by connecting to faith, peace, and silence.",
      example: "Taking ten minutes of silence before a high-stakes presentation to find your center and speak with power.",
    },
    {
      title: "Divinity in All Things",
      explanation: "Find happiness in small things, success in big things, and divinity in all things through surrender.",
      example: "Appreciating a simple sunset (small thing) while surrendering your largest life fears to meditation (all things).",
    },
  ];

  return (
    <>
      <PersonalJourney />

      <DividerLine accent="mint" />

      <IntroCard />

      <DividerLine accent="secondary" />

      <div>
        <div className="relative">
          <SectionHeader
            title="11 Ways to Accelerate Transformation"
            description="Focus on these to shift your internal state and take ownership of your results. These are your building blocks for change."
            type="transformation"
            isExpanded={expandedSection === "transformation"}
            onToggle={() => setExpandedSection(expandedSection === "transformation" ? null : "transformation")}
          />

          {expandedSection !== "transformation" && (
            <div className="absolute -top-12 -right-8 z-20">
              <div className="relative">
                {/* Manga-style dialog box */}
                <div className="bg-white border-2 border-[#379634] rounded-[8px] px-3 py-2 shadow-lg">
                  <p className="text-xs font-bold text-[#379634] whitespace-nowrap">Click to expand!</p>
                </div>
                {/* Pointer/tail pointing to the section */}
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"
                  style={{
                    filter: "drop-shadow(0 -1px 0 #379634)",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {expandedSection === "transformation" && (
          <div className="space-y-5 animate-in fade-in duration-300">
            {transformationPrinciples.map((principle, idx) => (
              <PrincipleCard
                key={idx}
                principle={principle}
                index={idx}
                sectionType="transformation"
              />
            ))}
          </div>
        )}
      </div>

      <DividerLine accent="primary" />

      <div>
        <SectionHeader
          title="11 Ways to Experience the Bliss of Love"
          description="Transform your relationships from transactions into deep, enlivening connections. These principles guide you toward meaningful bonds."
          type="love"
          isExpanded={expandedSection === "love"}
          onToggle={() => setExpandedSection(expandedSection === "love" ? null : "love")}
        />

        {expandedSection === "love" && (
          <div className="space-y-5 animate-in fade-in duration-300">
            {lovePrinciples.map((principle, idx) => (
              <PrincipleCard
                key={idx}
                principle={principle}
                index={idx}
                sectionType="love"
              />
            ))}
          </div>
        )}
      </div>

      <DividerLine accent="mint" />

      <div>
        <SectionHeader
          title="11 Ways to be Spiritually Aligned"
          description="Flow with life and stay centered in truth and gratitude. These principles connect you to something greater than yourself."
          type="spiritual"
          isExpanded={expandedSection === "spiritual"}
          onToggle={() => setExpandedSection(expandedSection === "spiritual" ? null : "spiritual")}
        />

        {expandedSection === "spiritual" && (
          <div className="space-y-5 animate-in fade-in duration-300">
            {spiritualPrinciples.map((principle, idx) => (
              <PrincipleCard
                key={idx}
                principle={principle}
                index={idx}
                sectionType="spiritual"
              />
            ))}
          </div>
        )}
      </div>

      <DividerLine accent="secondary" />

      <div className="bg-gradient-to-br from-[#0A3200] to-[#379634] rounded-[8px] p-10 text-white">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-[#74F2CE] rounded-full" />
          <h2 className="font-heading text-2xl font-bold">Implementation Strategy</h2>
        </div>
        <p className="font-body text-base text-white/90 leading-relaxed max-w-2xl">
          Follow <span className="font-bold">one principle for 21 days</span>. Start with{" "}
          <span className="text-[#74F2CE]">'Accelerate Transformation' or 'Bliss of Love'</span>. Move to{" "}
          <span className="text-[#74F2CE]">'Spiritually Aligned'</span> only once the others are
          integrated into your daily actions.
        </p>
        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="font-body text-sm text-white/70">
            💡 Tip: Write down your chosen principle, commit it to memory, and revisit it daily. Change
            happens through repetition and reflection.
          </p>
        </div>
      </div>
    </>
  );
}
