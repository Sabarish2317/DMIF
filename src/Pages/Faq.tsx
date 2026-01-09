import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import DropdownSelect from "../Components/Common/Dropdown";

type QA = { q: string; a: string };
type SectionKey = "Program" | "Students" | "Outcomes" | "Fees";

const DATA: Record<SectionKey, QA[]> = {
  Program: [
    { 
      q: "What is the DMIF Guided Mentorship Program?", 
      a: "It is a structured, hands-on mentorship program where learners are guided to work on high-value outcomes like patents or research papers. Instead of passively attending lectures, you will actively engage in research, innovation, and problem-solving under the guidance of experts." 
    },
    { 
      q: "How is it different from regular courses?", 
      a: "Unlike conventional courses that rely on slides and theory, this program emphasizes outcome-based learning. You won’t just learn concepts—you will create something tangible, whether it’s a patent draft or a publishable research paper, with constant mentorship at every step." 
    },
    { 
      q: "What tracks are offered?", 
      a: "We currently offer two specialized tracks: (1) Patents Track, where you will learn to prepare an Invention Disclosure Form (IDF) and Technical Invention Document (TID), and (2) Research Paper Track, where you will produce a conference-ready manuscript suitable for top-tier journals or events." 
    },
    { 
      q: "How are sessions delivered?", 
      a: "Sessions are conducted weekly in a live online format, usually lasting 40–60 minutes. In addition to these interactive sessions, you’ll also receive asynchronous reviews, reading materials, and exercises to ensure steady progress throughout the mentorship." 
    },
    { 
      q: "What is Active Learning™?", 
      a: "Active Learning™ is our proprietary framework that ensures you don’t just absorb information but apply it in real time. Instead of passive listening, you’ll work on practical exercises and projects that gradually build towards your final patent or paper." 
    }
  ],
  Students: [
    { 
      q: "Who is eligible to apply?", 
      a: "This program is open to school and college students, early professionals, and entrepreneurs who are curious, motivated, and ready to invest effort in innovation or research. No prior research or patent experience is required." 
    },
    { 
      q: "Do I need a technical background?", 
      a: "Not at all. While some participants may come from engineering or science backgrounds, our mentors guide you from the basics, providing frameworks and examples that make it easy for non-technical learners to understand and contribute." 
    },
    { 
      q: "Can non-engineering students join?", 
      a: "Yes. Innovation and research are inherently interdisciplinary. Students from arts, business, law, and social sciences are equally welcome. In fact, diverse backgrounds often lead to more unique and impactful outcomes." 
    },
    { 
      q: "How much time should I commit?", 
      a: "We recommend at least 3–4 hours per week. This includes attending the live mentorship session, reviewing feedback, and working on assigned tasks. The more consistent effort you put in, the stronger your final outcome will be." 
    },
    { 
      q: "Will I get one-on-one guidance?", 
      a: "Yes. Our model is designed to ensure every learner receives personalized guidance. Mentors provide direct feedback on your work, help you refine your ideas, and answer questions in both group and one-on-one settings." 
    }
  ],
  Outcomes: [
    { 
      q: "What will I achieve at the end?", 
      a: "By the end of the program, you will either have a patent draft ready for filing or a research paper prepared for submission to conferences or journals. These are tangible outcomes that you can showcase in your career or academic journey." 
    },
    { 
      q: "Can I really file a patent or publish a paper?", 
      a: "Yes. Our structured framework ensures that you don’t just learn the process but actually create work that meets professional standards. Many of our students have successfully filed patents or published papers with our support." 
    },
    { 
      q: "How does this help in jobs or placements?", 
      a: "Employers look for candidates who go beyond textbook knowledge. Having a patent or publication demonstrates initiative, problem-solving, and innovation—qualities that significantly strengthen your resume and placement prospects." 
    },
    { 
      q: "Does this support higher studies abroad?", 
      a: "Yes. Patents and publications are highly valued in international universities, especially Ivy League and top global institutions. They set you apart from other applicants and add substantial weight to your application portfolio." 
    },
    { 
      q: "Can this help with PR or Green Card?", 
      a: "Definitely. Patents and published research are strong evidence of extraordinary ability, which can be used in visa and immigration applications. Many countries recognize these as key achievements in global talent programs." 
    }
  ],
  Fees: [
    { 
      q: "What is the program fee?", 
      a: "The Patents Track is priced at $899 (discounted) and the Research Papers Track at $599 (discounted). These fees cover live mentorship, review sessions, and access to all program resources. Considering the outcomes, it’s a high-value investment in your career." 
    },
    { 
      q: "Are scholarships available?", 
      a: "Yes. We offer limited scholarships and early-bird discounts for students who apply early. These are allocated on a first-come, first-served basis, so it’s best to secure your spot quickly." 
    },
    { 
      q: "How can I pay?", 
      a: "Payments can be made securely online via credit card, debit card, or net banking." 
    },
    { 
      q: "Are seats limited?", 
      a: "Yes, we deliberately keep each batch small to ensure personalized mentorship. Once seats are filled, applications will be deferred to the next cycle, so early registration is strongly recommended." 
    },
    { 
      q: "How do I apply?", 
      a: "You can apply by filling out the application form on our website. Once submitted, our team will review your application and confirm your seat along with further onboarding instructions." 
    }
  ]
};


const FAQ: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("Program");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="heading mb-2">Frequently Asked Questions</h2>

      {/* Mobile Dropdown */}
<div className="md:hidden mb-6">
  <DropdownSelect
    value={activeSection}
    onChange={(val) => {
      setActiveSection(val as SectionKey);
      setOpenIndex(null);
    }}
    options={Object.keys(DATA).map((key) => ({
      label: key,
      value: key,
    }))}
  />
</div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-1/4 border-r">
          {Object.keys(DATA).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key as SectionKey);
                setOpenIndex(null);
              }}
              className={`text-left px-4 py-3 border-l-4 transition ${
                activeSection === key
                  ? "border-[#003579] bg-[#003579] text-white font-semibold"
                  : "border-transparent text-gray-700 hover:bg-gray-100"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="flex-1">
          {DATA[activeSection].map((item, idx) => (
            <div
              key={idx}
              className="border rounded  mb-3 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex justify-between cursor-pointer items-center text-left px-4 py-3 ${
                  openIndex === idx ? "bg-[#003579] text-white" : "bg-white text-gray-800"
                }`}
              >
                <span className="font-medium">{item.q}</span>
                <span className="ml-2">
  {openIndex === idx ? (
    <ChevronUp className="w-5 h-5" />
  ) : (
    <ChevronDown className="w-5 h-5" />
  )}
</span>
  
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 pt-2 bg-white text-gray-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
