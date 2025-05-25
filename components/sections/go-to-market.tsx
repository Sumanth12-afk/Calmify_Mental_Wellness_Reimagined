"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function GoToMarket() {
  console.log("Go-to-Market section rendered");
  
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
            Go-to-Market Strategy
          </h2>
          <p className="text-lg text-[#2D3142]/70 font-nunito">
            Our phased approach to market entry and expansion.
          </p>
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#E1E7EF] transform md:translate-x-[-0.5px]" />
          
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:ml-0 mb-12 md:mb-24"
          >
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex md:justify-end md:w-1/2 pb-6 md:pr-8">
                <div className="max-w-sm">
                  <div className="bg-[#3A7CA5] text-white font-semibold py-1 px-4 rounded-full inline-block mb-3 font-inter">
                    Phase 1: Months 1-6
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D3142] mb-2 font-inter">Direct-to-Consumer Launch</h3>
                  <p className="text-[#2D3142]/70 font-nunito">
                    Focused digital marketing campaign targeting individuals seeking mental wellness solutions. Initial user acquisition through social media, App Store optimization, and content marketing.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-[#3A7CA5] rounded-full transform -translate-x-3 md:-translate-x-4 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <Card className="border-[#E1E7EF] shadow-sm">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3A7CA5] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Targeted digital marketing campaigns</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3A7CA5] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">App Store and Google Play optimization</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3A7CA5] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Content marketing via mental health blogs</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3A7CA5] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Early user feedback loops</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
          
          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative md:ml-0 mb-12 md:mb-24"
          >
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:order-2 flex md:justify-start md:w-1/2 pb-6 md:pl-8">
                <div className="max-w-sm">
                  <div className="bg-[#43AA8B] text-white font-semibold py-1 px-4 rounded-full inline-block mb-3 font-inter">
                    Phase 2: Months 7-12
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D3142] mb-2 font-inter">Corporate Partnerships</h3>
                  <p className="text-[#2D3142]/70 font-nunito">
                    Expansion into B2B market with corporate wellness programs. Five Fortune 500 companies have already signed Letters of Intent to implement Calmify for employee wellness.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-[#43AA8B] rounded-full transform -translate-x-3 md:-translate-x-4 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="md:order-1 md:w-1/2 md:pr-8">
                <Card className="border-[#E1E7EF] shadow-sm">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#43AA8B] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">5 Fortune 500 companies with signed LOIs</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#43AA8B] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Enterprise dashboard deployment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#43AA8B] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">HR integration services</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#43AA8B] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Corporate wellness ROI metrics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
          
          {/* Phase 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative md:ml-0"
          >
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex md:justify-end md:w-1/2 pb-6 md:pr-8">
                <div className="max-w-sm">
                  <div className="bg-[#9381FF] text-white font-semibold py-1 px-4 rounded-full inline-block mb-3 font-inter">
                    Phase 3: Months 13-24
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D3142] mb-2 font-inter">Healthcare Integration</h3>
                  <p className="text-[#2D3142]/70 font-nunito">
                    Expanding into healthcare provider networks through API integrations and EMR compatibility. Partnerships with insurers to offer Calmify as a covered wellness benefit.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-[#9381FF] rounded-full transform -translate-x-3 md:-translate-x-4 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <Card className="border-[#E1E7EF] shadow-sm">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#9381FF] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">API and EMR compatibility development</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#9381FF] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Health insurance provider partnerships</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#9381FF] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Wellness influencer marketing campaigns</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#9381FF] rounded-full" />
                        <p className="text-[#2D3142]/80 font-nunito">Mental health awareness and education</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
