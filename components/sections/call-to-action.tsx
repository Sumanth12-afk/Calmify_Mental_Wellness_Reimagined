"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  console.log("Call to Action section rendered");
  
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B] text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
            Join Us in Transforming Mental Wellness
          </h2>
          <p className="text-lg text-white/80 mb-8 font-nunito">
            We're seeking $5M in Series A funding to accelerate our growth and expand our reach, bringing mental wellness to millions globally.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-inter">Investment Opportunity</h3>
                <ul className="space-y-2 text-white/80 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>$5M Series A to accelerate growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>18-month runway to 1M users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>B2B expansion across industries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>Strategic healthcare partnerships</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-inter">Capital Allocation</h3>
                <ul className="space-y-2 text-white/80 font-nunito">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>40% Engineering & Product Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>30% Marketing & User Acquisition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>20% Operations & Team Expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>10% Research & Clinical Validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[#3A7CA5] hover:bg-white/90 transition-all text-base"
            >
              Request Investor Deck
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-all text-base"
            >
              Schedule a Meeting
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
