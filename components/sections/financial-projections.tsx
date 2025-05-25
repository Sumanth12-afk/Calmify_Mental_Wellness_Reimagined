"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const financialData = [
  { year: 'Q1 Y1', revenue: 0.3, users: 40, ebitda: -0.4 },
  { year: 'Q2 Y1', revenue: 0.5, users: 80, ebitda: -0.3 },
  { year: 'Q3 Y1', revenue: 0.7, users: 130, ebitda: -0.3 },
  { year: 'Q4 Y1', revenue: 0.9, users: 240, ebitda: -0.2 },
  { year: 'Q1 Y2', revenue: 1.8, users: 350, ebitda: -0.1 },
  { year: 'Q2 Y2', revenue: 2.2, users: 450, ebitda: 0.2 },
  { year: 'Q3 Y2', revenue: 2.7, users: 600, ebitda: 0.5 },
  { year: 'Q4 Y2', revenue: 4.0, users: 780, ebitda: 0.9 },
  { year: 'Q1 Y3', revenue: 5.5, users: 1000, ebitda: 1.8 },
  { year: 'Q2 Y3', revenue: 7.0, users: 1300, ebitda: 2.2 },
  { year: 'Q3 Y3', revenue: 9.5, users: 1600, ebitda: 3.5 },
  { year: 'Q4 Y3', revenue: 12.0, users: 1800, ebitda: 4.2 }
];

const keyMetrics = [
  { label: "Customer Acquisition Cost", value: "$18", detail: "Industry average: $25-35" },
  { label: "Payback Period", value: "9 months", detail: "Industry average: 12-18 months" },
  { label: "Projected Break-Even", value: "Q2 Year 2", detail: "18 months from launch" },
  { label: "Year 3 Revenue", value: "$22M", detail: "916% growth from Year 1" }
];

export function FinancialProjections() {
  console.log("Financial Projections section rendered");
  
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
              Financial Projections
            </h2>
            <p className="text-lg text-[#2D3142]/70 font-nunito">
              Our growth trajectory and financial outlook for the next three years.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-4 mb-8 max-w-5xl mx-auto"
        >
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={financialData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3A7CA5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3A7CA5" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#43AA8B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#43AA8B" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorEbitda" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9381FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9381FF" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E1E7EF" />
                <XAxis dataKey="year" stroke="#2D3142" />
                <YAxis stroke="#2D3142" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#3A7CA5" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($ millions)" />
                <Area type="monotone" dataKey="users" stroke="#43AA8B" fillOpacity={1} fill="url(#colorUsers)" name="Users (thousands)" />
                <Area type="monotone" dataKey="ebitda" stroke="#9381FF" fillOpacity={1} fill="url(#colorEbitda)" name="EBITDA ($ millions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#3A7CA5] rounded-full" />
              <span className="text-sm text-[#2D3142]/70">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#43AA8B] rounded-full" />
              <span className="text-sm text-[#2D3142]/70">Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#9381FF] rounded-full" />
              <span className="text-sm text-[#2D3142]/70">EBITDA</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-[#E1E7EF] hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-sm font-medium text-[#2D3142]/70 mb-2 font-inter">{metric.label}</h3>
                  <p className="text-2xl font-bold text-[#3A7CA5] mb-1 font-inter">{metric.value}</p>
                  <p className="text-xs text-[#2D3142]/60 font-nunito">{metric.detail}</p>
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
          className="mt-12 p-6 bg-white rounded-xl border border-[#E1E7EF] shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-[#2D3142] mb-4 font-inter">Capital Allocation Plan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-gradient-to-b from-[#3A7CA5] to-[#3A7CA5]/70 flex items-center justify-center">
                <span className="text-white font-bold text-xl">40%</span>
              </div>
              <p className="text-center text-sm font-medium text-[#2D3142] font-inter">Engineering</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-gradient-to-b from-[#43AA8B] to-[#43AA8B]/70 flex items-center justify-center">
                <span className="text-white font-bold text-xl">30%</span>
              </div>
              <p className="text-center text-sm font-medium text-[#2D3142] font-inter">Marketing</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-gradient-to-b from-[#9381FF] to-[#9381FF]/70 flex items-center justify-center">
                <span className="text-white font-bold text-xl">20%</span>
              </div>
              <p className="text-center text-sm font-medium text-[#2D3142] font-inter">Operations</p>
            </div>
            <div className="space-y-2">
              <div className="h-32 rounded-lg bg-gradient-to-b from-[#F17105] to-[#F17105]/70 flex items-center justify-center">
                <span className="text-white font-bold text-xl">10%</span>
              </div>
              <p className="text-center text-sm font-medium text-[#2D3142] font-inter">Research</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
