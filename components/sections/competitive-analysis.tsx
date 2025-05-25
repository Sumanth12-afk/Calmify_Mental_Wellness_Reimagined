"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "Headspace/Calm",
    strengths: "Strong content library, brand recognition",
    weaknesses: "Limited personalization, basic analytics",
    features: {
      ai: false,
      personalization: false,
      biometrics: false,
      intervention: false,
      prediction: false
    }
  },
  {
    name: "Talkspace/BetterHelp",
    strengths: "Human therapist access, clinical approach",
    weaknesses: "High cost, limited availability",
    features: {
      ai: false,
      personalization: true,
      biometrics: false,
      intervention: true,
      prediction: false
    }
  },
  {
    name: "Woebot/Wysa",
    strengths: "AI chatbots, accessible price point",
    weaknesses: "Basic AI, lack biometric integration",
    features: {
      ai: true,
      personalization: false,
      biometrics: false,
      intervention: false,
      prediction: false
    }
  },
  {
    name: "Calmify",
    strengths: "Advanced AI, biometric integration, personalization",
    weaknesses: "New market entrant",
    features: {
      ai: true,
      personalization: true,
      biometrics: true,
      intervention: true,
      prediction: true
    }
  },
];

export function CompetitiveAnalysis() {
  console.log("Competitive Analysis section rendered");
  
  return (
    <section className="py-20 px-4 md:px-6 container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter mb-4">
            Competitive Analysis
          </h2>
          <p className="text-lg text-[#2D3142]/70 font-nunito">
            How Calmify stands out in the mental wellness app market.
          </p>
        </motion.div>
      </div>
      
      <div className="overflow-x-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="min-w-[800px]"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F7FAFC] border-b border-[#E1E7EF]">
                <th className="p-4 text-left text-[#2D3142] font-semibold font-inter">Company</th>
                <th className="p-4 text-left text-[#2D3142] font-semibold font-inter">Strengths</th>
                <th className="p-4 text-left text-[#2D3142] font-semibold font-inter">Weaknesses</th>
                <th className="p-4 text-center text-[#2D3142] font-semibold font-inter">AI Powered</th>
                <th className="p-4 text-center text-[#2D3142] font-semibold font-inter">Personalization</th>
                <th className="p-4 text-center text-[#2D3142] font-semibold font-inter">Biometrics</th>
                <th className="p-4 text-center text-[#2D3142] font-semibold font-inter">Intervention</th>
                <th className="p-4 text-center text-[#2D3142] font-semibold font-inter">Prediction</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-[#E1E7EF] ${competitor.name === "Calmify" ? "bg-[#3A7CA5]/5" : ""}`}
                >
                  <td className="p-4">
                    <span className={`font-medium font-inter ${competitor.name === "Calmify" ? "text-[#3A7CA5] font-semibold" : "text-[#2D3142]"}`}>
                      {competitor.name}
                    </span>
                  </td>
                  <td className="p-4 text-[#2D3142]/80 font-nunito">{competitor.strengths}</td>
                  <td className="p-4 text-[#2D3142]/80 font-nunito">{competitor.weaknesses}</td>
                  <td className="p-4 text-center">
                    {competitor.features.ai ? 
                      <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {competitor.features.personalization ? 
                      <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {competitor.features.biometrics ? 
                      <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {competitor.features.intervention ? 
                      <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="p-4 text-center">
                    {competitor.features.prediction ? 
                      <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                      <X className="h-5 w-5 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 p-6 rounded-xl bg-[#F7FAFC] border border-[#E1E7EF] max-w-2xl mx-auto"
      >
        <p className="text-[#2D3142] font-medium font-nunito">
          Calmify's patent-pending stress prediction algorithm provides an 18-month competitive advantage over other wellness apps in the market.
        </p>
      </motion.div>
    </section>
  );
}
