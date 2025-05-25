"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, LineChart, Bell, Users, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="h-6 w-6 text-white" />,
    title: "Mobile App",
    description: "Intuitive mobile app with AI-guided meditation and breathing exercises",
    color: "from-[#3A7CA5] to-[#3A7CA5]/80"
  },
  {
    icon: <LineChart className="h-6 w-6 text-white" />,
    title: "Personalized Journeys",
    description: "Wellness journeys adapting to user progress and preferences",
    color: "from-[#43AA8B] to-[#43AA8B]/80"
  },
  {
    icon: <Bell className="h-6 w-6 text-white" />,
    title: "Smart Notifications",
    description: "Notification system providing support during high-stress moments",
    color: "from-[#9381FF] to-[#9381FF]/80"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Community Support",
    description: "Community features enabling anonymous peer support",
    color: "from-[#F17105] to-[#F17105]/80"
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-white" />,
    title: "Enterprise Dashboard",
    description: "Dashboard for organizational wellness monitoring",
    color: "from-[#5E548E] to-[#5E548E]/80"
  }
];

export function ProductOverview() {
  console.log("Product Overview section rendered");
  
  return (
    <section id="product" className="py-20 px-4 md:px-6 bg-[#F7FAFC]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] font-inter mb-4">
              Product Overview
            </h2>
            <p className="text-lg text-[#2D3142]/70 font-nunito">
              Discover how Calmify transforms mental wellness through technology and personalization.
            </p>
          </motion.div>
        </div>
        
        <Tabs defaultValue="features" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#E1E7EF]/50">
              <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-[#3A7CA5] data-[state=active]:shadow-sm">
                Key Features
              </TabsTrigger>
              <TabsTrigger value="interface" className="data-[state=active]:bg-white data-[state=active]:text-[#3A7CA5] data-[state=active]:shadow-sm">
                User Interface
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:text-[#3A7CA5] data-[state=active]:shadow-sm">
                Experience
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="features" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-t-lg`}>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1 font-inter">{feature.title}</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-[#2D3142]/70 font-nunito">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="interface" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto"
            >
              <div className="aspect-video bg-gradient-to-r from-[#3A7CA5]/10 to-[#43AA8B]/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#2D3142]/50 mb-2">Interface Preview</p>
                  <div className="flex justify-center gap-4">
                    <div className="w-32 h-64 bg-white rounded-xl border border-[#E1E7EF] shadow-md">
                      <div className="h-4 bg-[#3A7CA5] rounded-t-xl" />
                      <div className="p-2">
                        <div className="h-8 bg-[#F7FAFC] rounded-md mb-2" />
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-100 rounded-full w-full" />
                          <div className="h-2 bg-gray-100 rounded-full w-5/6" />
                          <div className="h-2 bg-gray-100 rounded-full w-4/6" />
                        </div>
                        <div className="h-24 bg-[#43AA8B]/10 rounded-md mt-2" />
                      </div>
                    </div>
                    <div className="w-32 h-64 bg-white rounded-xl border border-[#E1E7EF] shadow-md">
                      <div className="h-4 bg-[#43AA8B] rounded-t-xl" />
                      <div className="p-2">
                        <div className="h-16 bg-[#3A7CA5]/10 rounded-md mb-2" />
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-12 bg-[#F7FAFC] rounded-md" />
                          <div className="h-12 bg-[#F7FAFC] rounded-md" />
                          <div className="h-12 bg-[#F7FAFC] rounded-md" />
                          <div className="h-12 bg-[#F7FAFC] rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-[#2D3142] mb-2 font-inter">Intuitive Design</h3>
                <p className="text-[#2D3142]/70 font-nunito">
                  Our user interface is designed for simplicity and ease of use, with a focus on accessibility and engagement.
                </p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="experience" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-[#E1E7EF]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#2D3142] mb-4 font-inter">Daily Experience</h3>
                    <ul className="space-y-3 font-nunito">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#3A7CA5] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">1</span>
                        </div>
                        <p className="text-[#2D3142]/80">Morning check-in with personalized meditation</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#3A7CA5] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">2</span>
                        </div>
                        <p className="text-[#2D3142]/80">Stress monitoring throughout the day</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#3A7CA5] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">3</span>
                        </div>
                        <p className="text-[#2D3142]/80">Just-in-time interventions during stressful moments</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#3A7CA5] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">4</span>
                        </div>
                        <p className="text-[#2D3142]/80">Evening reflection and progress tracking</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-[#E1E7EF]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#2D3142] mb-4 font-inter">Personal Growth</h3>
                    <ul className="space-y-3 font-nunito">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#43AA8B] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">1</span>
                        </div>
                        <p className="text-[#2D3142]/80">Weekly insights and progress reports</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#43AA8B] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">2</span>
                        </div>
                        <p className="text-[#2D3142]/80">Adaptive skill-building exercises</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#43AA8B] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">3</span>
                        </div>
                        <p className="text-[#2D3142]/80">Community challenges and support groups</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#43AA8B] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">4</span>
                        </div>
                        <p className="text-[#2D3142]/80">Milestone celebrations and achievement badges</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
