"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Problem",
      points: [
        "78% of adults report experiencing stress that affects their mental health",
        "Only 1 in 3 people with mental health issues receive adequate treatment",
        "Traditional therapy is costly ($150-200/session) and difficult to access",
        "Work-related stress costs employers $300B annually in lost productivity",
        "Digital solutions remain fragmented and lack personalization"
      ]
    },
    {
      title: "Solution",
      points: [
        "Calmify: AI-powered mental wellness companion available 24/7",
        "Personalized stress management techniques based on individual needs",
        "Evidence-based interventions from CBT, mindfulness, and positive psychology",
        "Real-time mood tracking with actionable insights",
        "Seamless integration with wearables for biometric stress detection"
      ]
    },
    {
      title: "Market Opportunity",
      points: [
        "Global mental wellness market valued at $120B+ with 8.4% CAGR",
        "Mental health app segment growing at 24.2% annually",
        "83% of employers now prioritize mental health solutions",
        "200M+ potential users in US and EU markets alone",
        "Pandemic accelerated adoption of digital mental health solutions by 400%"
      ]
    },
    {
      title: "Product Overview",
      points: [
        "Intuitive mobile app with AI-guided meditation and breathing exercises",
        "Personalized wellness journeys adapting to user progress and preferences",
        "Smart notification system providing support during high-stress moments",
        "Community features enabling anonymous peer support",
        "Enterprise dashboard for organizational wellness monitoring"
      ]
    },
    {
      title: "Competitive Analysis",
      points: [
        "Headspace/Calm: Strong content, but limited personalization and analytics",
        "Talkspace/BetterHelp: Human-based therapy, high cost, limited availability",
        "Woebot/Wysa: Basic AI, but lack biometric integration and scalability",
        "Calmify's differentiation: AI + biometrics + personalized intervention paths",
        "Patent-pending stress prediction algorithm gives us 18-month advantage"
      ]
    },
    {
      title: "Business Model",
      points: [
        "Freemium B2C: Basic features free, premium tier at $9.99/month",
        "B2B Enterprise: $8/employee/month for corporate wellness programs",
        "White-label solutions for health insurers and healthcare providers",
        "Data insights partnerships (anonymized, opt-in) with research institutions",
        "Expected 65% gross margins with scale efficiencies"
      ]
    },
    {
      title: "Go-to-Market Strategy",
      points: [
        "Phase 1: Direct-to-consumer launch with targeted digital marketing",
        "Phase 2: Corporate partnerships with 5 Fortune 500 companies (LOIs secured)",
        "Phase 3: Healthcare provider integration via API and EMR compatibility",
        "Strategic partnerships with influencers in wellness and productivity space",
        "Content marketing focused on mental health awareness and education"
      ]
    },
    {
      title: "Financial Projections",
      points: [
        "Year 1: $2.4M revenue, 240K active users, -$1.2M EBITDA",
        "Year 2: $8.7M revenue, 780K active users, $1.5M EBITDA",
        "Year 3: $22M revenue, 1.8M active users, $7.8M EBITDA",
        "Customer acquisition cost: $18 with 9-month payback period",
        "Projected break-even in Q2 Year 2"
      ]
    },
    {
      title: "Team",
      points: [
        "CEO: Former VP of Product at [Leading Health Tech], Stanford MBA",
        "CTO: AI researcher with 15+ publications on machine learning in healthcare",
        "CMO: Previous marketing leadership at Headspace, drove 2M+ user growth",
        "Clinical Director: Licensed psychologist, specialist in digital interventions",
        "Advisors from Google Health, Harvard Medical School, and Kaiser Permanente"
      ]
    },
    {
      title: "Closing / Ask",
      points: [
        "Seeking $5M Series A to accelerate growth and expansion",
        "Capital allocation: 40% engineering, 30% marketing, 20% operations, 10% research",
        "Strategic partners who can provide healthcare ecosystem access",
        "18-month runway to achieve 1M users and B2B expansion",
        "Together, we can transform mental wellness access for millions globally"
      ]
    }
  ];

  const nextSlide = () => {
    console.log("Moving to next slide");
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    console.log("Moving to previous slide");
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    console.log(`Jumping to slide ${index}`);
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-4xl">
      <Card className="overflow-hidden shadow-lg border-[#9381FF]/20">
        <div className="bg-gradient-to-r from-[#3A7CA5]/10 to-[#43AA8B]/10 p-8 min-h-[400px] sm:min-h-[500px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#2D3142] font-inter">
              {slides[currentSlide].title}
            </h2>
            <div className="text-sm text-[#2D3142]/70">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>
          
          <ul className="space-y-4 font-nunito">
            {slides[currentSlide].points.map((point, index) => (
              <li 
                key={index} 
                className="flex items-start gap-2 text-lg text-[#2D3142] animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-[#43AA8B] font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 border-t border-[#9381FF]/10 flex justify-between items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="border-[#3A7CA5]/30 text-[#3A7CA5] hover:bg-[#3A7CA5]/10 transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${currentSlide === index ? 'w-6 bg-[#3A7CA5]' : 'w-2 bg-[#3A7CA5]/30'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="border-[#3A7CA5]/30 text-[#3A7CA5] hover:bg-[#3A7CA5]/10 transition-all"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
