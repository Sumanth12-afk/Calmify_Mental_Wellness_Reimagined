"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Building, Sparkles, LineChart, PercentCircle } from "lucide-react";

const businessModels = [
  {
    icon: <DollarSign className="h-6 w-6 text-[#3A7CA5]" />,
    title: "B2C Freemium",
    description: "Basic features free, premium tier at $9.99/month",
    highlight: "45% conversion from free to premium"
  },
  {
    icon: <Building className="h-6 w-6 text-[#3A7CA5]" />,
    title: "B2B Enterprise",
    description: "$8/employee/month for corporate wellness programs",
    highlight: "38% projected market share by Year 3"
  },
  {
    icon: <Sparkles className="h-6 w-6 text-[#3A7CA5]" />,
    title: "White-Label Solutions",
    description: "Custom solutions for health insurers and healthcare providers",
    highlight: "15 partner agreements in pipeline"
  },
  {
    icon: <LineChart className="h-6 w-6 text-[#3A7CA5]" />,
    title: "Data Insights",
    description: "Anonymized, opt-in data partnerships with research institutions",
    highlight: "High-value secondary revenue stream"
  },
  {
    icon: <PercentCircle className="h-6 w-6 text-[#3A7CA5]" />,
    title: "Gross Margins",
    description: "Expected 65% gross margins with scale efficiencies",
    highlight: "Highly scalable SaaS model"
  }
];

export function BusinessModel() {
  console.log("Business Model section rendered");
  
  return (
    <section className="py-20 px-4 md:px-6 bg-[#F7FAFC]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter mb-4">
              Business Model
            </h2>
            <p className="text-lg text-[#2D3142]/70 font-nunito">
              Our multi-faceted approach to generating sustainable revenue and growth.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessModels.map((model, index) => (
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
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D3142] mb-2 font-inter">{model.title}</h3>
                  <p className="text-[#2D3142]/70 font-nunito mb-4">{model.description}</p>
                  <div className="bg-[#3A7CA5]/5 p-3 rounded-md">
                    <p className="text-sm font-medium text-[#3A7CA5] font-inter">{model.highlight}</p>
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
          className="mt-12 bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto"
        >
          <div className="p-1 bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B]" />
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-[#2D3142] mb-4 font-inter">Revenue Projection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-[#2D3142]/70 font-nunito text-sm">Year 1</p>
                <p className="text-2xl font-bold text-[#3A7CA5] font-inter">$2.4M</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#3A7CA5] h-2 rounded-full" style={{ width: '10%' }} />
                </div>
                <div className="flex justify-between text-xs text-[#2D3142]/50">
                  <span>240K users</span>
                  <span>-$1.2M EBITDA</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-[#2D3142]/70 font-nunito text-sm">Year 2</p>
                <p className="text-2xl font-bold text-[#3A7CA5] font-inter">$8.7M</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#3A7CA5] h-2 rounded-full" style={{ width: '40%' }} />
                </div>
                <div className="flex justify-between text-xs text-[#2D3142]/50">
                  <span>780K users</span>
                  <span>$1.5M EBITDA</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-[#2D3142]/70 font-nunito text-sm">Year 3</p>
                <p className="text-2xl font-bold text-[#3A7CA5] font-inter">$22M</p>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#3A7CA5] h-2 rounded-full" style={{ width: '100%' }} />
                </div>
                <div className="flex justify-between text-xs text-[#2D3142]/50">
                  <span>1.8M users</span>
                  <span>$7.8M EBITDA</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
