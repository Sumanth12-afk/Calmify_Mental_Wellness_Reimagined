"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    background: "Former VP of Product at [Leading Health Tech], Stanford MBA",
    image: "bg-gradient-to-br from-[#3A7CA5] to-[#43AA8B]"
  },
  {
    name: "Dr. Alex Chen",
    role: "CTO & Co-Founder",
    background: "AI researcher with 15+ publications on machine learning in healthcare",
    image: "bg-gradient-to-br from-[#43AA8B] to-[#9381FF]"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Marketing Officer",
    background: "Previous marketing leadership at Headspace, drove 2M+ user growth",
    image: "bg-gradient-to-br from-[#9381FF] to-[#3A7CA5]"
  },
  {
    name: "Dr. Emily Williams",
    role: "Clinical Director",
    background: "Licensed psychologist, specialist in digital interventions",
    image: "bg-gradient-to-br from-[#F17105] to-[#3A7CA5]"
  }
];

const advisors = [
  {
    name: "Dr. Robert Chang",
    role: "Clinical Advisor",
    affiliation: "Harvard Medical School"
  },
  {
    name: "Jennifer Wu",
    role: "Tech Advisor",
    affiliation: "Google Health"
  },
  {
    name: "David Miller",
    role: "Healthcare Strategy",
    affiliation: "Kaiser Permanente"
  }
];

export function Team() {
  console.log("Team section rendered");
  
  return (
    <section id="team" className="py-20 px-4 md:px-6 container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter mb-4">
            Our Team
          </h2>
          <p className="text-lg text-[#2D3142]/70 font-nunito">
            Meet the passionate experts behind Calmify who are revolutionizing mental wellness.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-[#E1E7EF] hover:shadow-md transition-all overflow-hidden">
              <CardContent className="p-0">
                <div className={`${member.image} h-48 flex items-center justify-center`}>
                  <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center text-2xl font-bold text-[#3A7CA5]">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2D3142] font-inter">{member.name}</h3>
                  <p className="text-[#3A7CA5] font-medium mb-2 font-inter">{member.role}</p>
                  <p className="text-sm text-[#2D3142]/70 font-nunito mb-4">{member.background}</p>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-[#E1E7EF] flex items-center justify-center text-[#2D3142]/70 hover:bg-[#3A7CA5] hover:text-white transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#E1E7EF] flex items-center justify-center text-[#2D3142]/70 hover:bg-[#3A7CA5] hover:text-white transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#E1E7EF] flex items-center justify-center text-[#2D3142]/70 hover:bg-[#3A7CA5] hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
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
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-[#2D3142] mb-6 text-center font-inter">Advisory Board</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <Card key={index} className="border-[#E1E7EF]">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-[#2D3142] font-inter">{advisor.name}</h4>
                <p className="text-[#3A7CA5] font-medium text-sm mb-1 font-inter">{advisor.role}</p>
                <p className="text-[#2D3142]/70 text-sm font-nunito">{advisor.affiliation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
