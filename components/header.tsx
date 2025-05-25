"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log("Mobile menu state:", mobileMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E1E7EF] bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B] flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="text-xl font-bold text-[#2D3142] font-inter">Calmify</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#problem" className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors font-medium">Problem</a>
          <a href="#solution" className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors font-medium">Solution</a>
          <a href="#market" className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors font-medium">Market</a>
          <a href="#product" className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors font-medium">Product</a>
          <a href="#team" className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors font-medium">Team</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline"
            className="border-[#3A7CA5]/30 text-[#3A7CA5] hover:bg-[#3A7CA5]/10 transition-all"
          >
            Contact Us
          </Button>
          <Button 
            className="bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B] hover:opacity-90 transition-all"
          >
            Download App
          </Button>
        </div>
        
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#2D3142]" />
          ) : (
            <Menu className="h-6 w-6 text-[#2D3142]" />
          )}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E1E7EF] bg-white">
          <nav className="flex flex-col p-4 space-y-3">
            <a 
              href="#problem" 
              className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors py-2 px-4 rounded-md hover:bg-[#F7FAFC]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors py-2 px-4 rounded-md hover:bg-[#F7FAFC]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#market" 
              className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors py-2 px-4 rounded-md hover:bg-[#F7FAFC]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Market
            </a>
            <a 
              href="#product" 
              className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors py-2 px-4 rounded-md hover:bg-[#F7FAFC]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>
            <a 
              href="#team" 
              className="text-[#2D3142]/70 hover:text-[#3A7CA5] transition-colors py-2 px-4 rounded-md hover:bg-[#F7FAFC]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <Button 
                variant="outline"
                className="w-full border-[#3A7CA5]/30 text-[#3A7CA5] hover:bg-[#3A7CA5]/10 transition-all"
              >
                Contact Us
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B] hover:opacity-90 transition-all"
              >
                Download App
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
