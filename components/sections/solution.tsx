"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, LineChart, Brain, Activity } from "lucide-react";

const solutions = [
  {
    icon: <Sparkles className="h-6 w-6 text-[#43AA8B]" />,
    title: "AI-Powered Companion",
    description: "Calmify uses AI to deliver personalized mental wellness support available 24/7"
  },
  {
    icon: <Brain className="h-6 w-6 text-[#43AA8B]" />,
    title: "Personalized Techniques",
    description: "Stress management techniques customized to your individual needs and preferences"
  },
  {
    icon: <Activity className="h-6 w-6 text-[#43AA8B]" />,
    title: "Evidence-Based Approach",
    description: "Interventions from CBT, mindfulness, and positive psychology with proven results"
  },
  {
    icon: <LineChart className="h-6 w-6 text-[#43AA8B]" />,
    title: "Real-Time Tracking",
    description: "Monitor your mood and stress levels with actionable insights for improvement"
  },
  {
    icon: <Clock className="h-6 w-6 text-[#43AA8B]" />,
    title: "Biometric Integration",
    description: "Seamless connection with wearables for biological stress detection and alerts"
  },
];

export function Solution() {
  console.log("Solution section rendered");
  
  return (
    <section id="solution" className="py-20 px-4 md:px-6 bg-[#F7FAFC]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter">
              Our Solution: <span className="text-[#43AA8B]">Calmify</span>
            </h2>
            <p className="text-lg text-[#2D3142]/70 font-nunito">
              We&apos;ve created an AI-powered mental wellness companion that provides personalized support exactly when you need it.
            </p>
            
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#43AA8B]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3142] mb-1 font-inter">{item.title}</h3>
                    <p className="text-[#2D3142]/70 font-nunito">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#43AA8B]/20 to-[#3A7CA5]/20 rounded-full blur-3xl" />
              <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E1E7EF] w-4/5 h-4/5 mx-auto">
                <div className="h-12 bg-gradient-to-r from-[#43AA8B] to-[#3A7CA5] flex items-center justify-center">
                  <h3 className="text-white font-semibold font-inter">Calmify</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 w-2/3 bg-gray-100 rounded-full" />
                  <div className="bg-[#43AA8B]/10 rounded-xl p-4">
                    <div className="flex gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#43AA8B]" />
                      <div className="space-y-1">
                        <div className="h-3 w-24 bg-gray-200 rounded-full" />
                        <div className="h-3 w-16 bg-gray-200 rounded-full" />
                      </div>
                    </div>
                    <div className="h-16 bg-white rounded-lg border border-[#E1E7EF] p-2">
                      <div className="h-3 w-full bg-gray-100 rounded-full" />
                      <div className="h-3 w-5/6 bg-gray-100 rounded-full mt-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-[#3A7CA5]/10 rounded-lg" />
                    <div className="h-12 bg-[#43AA8B]/10 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 right-0 md:right-10 w-10 h-10 bg-[#43AA8B]/30 rounded-full blur-sm" />
            <div className="absolute bottom-1/3 left-0 md:left-10 w-14 h-14 bg-[#3A7CA5]/20 rounded-full blur-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
