"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, LineChart, Building2, Users, BarChart } from "lucide-react";

const marketStats = [
  {
    title: "Global Market Value",
    value: "$120B+",
    growth: "8.4% CAGR",
    icon: <TrendingUp className="h-5 w-5 text-[#3A7CA5]" />
  },
  {
    title: "App Segment Growth",
    value: "24.2%",
    growth: "Annual Growth",
    icon: <LineChart className="h-5 w-5 text-[#3A7CA5]" />
  },
  {
    title: "Employer Adoption",
    value: "83%",
    growth: "Prioritize Mental Health",
    icon: <Building2 className="h-5 w-5 text-[#3A7CA5]" />
  },
  {
    title: "Potential Users",
    value: "200M+",
    growth: "US & EU Markets",
    icon: <Users className="h-5 w-5 text-[#3A7CA5]" />
  },
  {
    title: "Pandemic Impact",
    value: "400%",
    growth: "Accelerated Adoption",
    icon: <BarChart className="h-5 w-5 text-[#3A7CA5]" />
  }
];

export function MarketOpportunity() {
  console.log("Market Opportunity section rendered");
  
  return (
    <section id="market" className="py-20 px-4 md:px-6 container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter mb-4">
            Market Opportunity
          </h2>
          <p className="text-lg text-[#2D3142]/70 font-nunito">
            The mental wellness industry is experiencing unprecedented growth, creating a massive opportunity.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-[#E1E7EF] hover:shadow-md transition-all hover:border-[#3A7CA5]/30">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-[#2D3142] font-inter">{stat.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#3A7CA5]/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-[#3A7CA5] font-inter">{stat.value}</p>
                  <p className="text-sm text-[#2D3142]/70 font-nunito">{stat.growth}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 p-6 bg-gradient-to-r from-[#3A7CA5]/10 to-[#43AA8B]/10 rounded-xl text-center max-w-2xl mx-auto"
      >
        <p className="text-lg font-medium text-[#2D3142] font-nunito">
          &quot;The mental health app market is projected to reach $4.9 billion by 2027, representing one of the fastest-growing segments in digital health.&quot;
        </p>
        <p className="text-sm text-[#2D3142]/70 mt-2 font-inter">- Global Market Insights Report, 2025</p>
      </motion.div>
    </section>
  );
}
