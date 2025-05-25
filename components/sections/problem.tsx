"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Brain, DollarSign, UserX, PieChart } from "lucide-react";

const problems = [
  {
    icon: <Activity className="h-6 w-6 text-[#3A7CA5]" />,
    title: "High Stress Prevalence",
    description: "78% of adults report experiencing stress that affects their mental health"
  },
  {
    icon: <UserX className="h-6 w-6 text-[#3A7CA5]" />,
    title: "Treatment Gap",
    description: "Only 1 in 3 people with mental health issues receive adequate treatment"
  },
  {
    icon: <DollarSign className="h-6 w-6 text-[#3A7CA5]" />,
    title: "Cost Barriers",
    description: "Traditional therapy is costly ($150-200/session) and difficult to access"
  },
  {
    icon: <PieChart className="h-6 w-6 text-[#3A7CA5]" />,
    title: "Productivity Loss",
    description: "Work-related stress costs employers $300B annually in lost productivity"
  },
  {
    icon: <Brain className="h-6 w-6 text-[#3A7CA5]" />,
    title: "Fragmented Solutions",
    description: "Digital solutions remain fragmented and lack personalization"
  },
];

export function Problem() {
  console.log("Problem section rendered");
  
  return (
    <section id="problem" className="py-20 px-4 md:px-6 container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter mb-4">
            The Problem We&apos;re Solving
          </h2>
          <p className="text-lg text-[#2D3142]/70 font-nunito">
            Mental health challenges affect millions globally, yet barriers to care remain significant.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-[#E1E7EF] hover:shadow-md transition-all hover:border-[#3A7CA5]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#3A7CA5]/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2D3142] mb-2 font-inter">{item.title}</h3>
                <p className="text-[#2D3142]/70 font-nunito">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
