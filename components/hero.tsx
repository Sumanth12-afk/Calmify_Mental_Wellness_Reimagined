"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  console.log("Hero component rendered");
  
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3142] font-inter leading-tight">
            Mental Wellness <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B]">
              Reimagined
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#2D3142]/80 font-nunito max-w-lg">
            AI-powered mental wellness companion available 24/7. Personalized stress management for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B] hover:opacity-90 transition-all text-base"
            >
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#3A7CA5]/30 text-[#3A7CA5] hover:bg-[#3A7CA5]/10 transition-all text-base"
            >
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r ${i % 2 === 0 ? 'from-[#3A7CA5] to-[#3A7CA5]' : 'from-[#43AA8B] to-[#43AA8B]'}`} />
              ))}
            </div>
            <p className="text-sm text-[#2D3142]/70">
              <span className="font-semibold">4.9/5</span> from over 10,000+ reviews
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A7CA5]/20 to-[#43AA8B]/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E1E7EF]">
                <div className="h-8 bg-[#F7FAFC] border-b border-[#E1E7EF] flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="h-16 bg-gradient-to-r from-[#3A7CA5]/10 to-[#43AA8B]/10 rounded-lg animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded-md w-3/4" />
                    <div className="h-4 bg-gray-100 rounded-md w-full" />
                    <div className="h-4 bg-gray-100 rounded-md w-2/3" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-[#3A7CA5]/10 rounded-lg" />
                    <div className="h-20 bg-[#43AA8B]/10 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-4 w-8 h-8 bg-[#9381FF]/30 rounded-full blur-sm" />
          <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-[#43AA8B]/30 rounded-full blur-sm" />
        </motion.div>
      </div>
    </section>
  );
}
