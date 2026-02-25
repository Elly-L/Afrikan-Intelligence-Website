import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Code, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Team() {
  const team = [
    {
      name: 'Elly Odhiambo',
      role: 'Founder & CEO',
      title: 'The Strategist',
      image: '/src/assets/team/elly.jpg',
      description: 'Operator with deep roots in African fintech and logistics. Elly understands how traders move money, how doctors diagnose patients, and how AI reaches the last-mile. He\'s building the go-to-market that gets this tech into the hands of 1.2 billion people.',
      tags: ['Strategy', 'Operations', 'Go-to-Market'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Chris Kinyua',
      role: 'Co-Founder & CTO',
      title: 'The Architect',
      image: '/src/assets/team/chris.jpeg',
      description: 'Deep machine learning engineer obsessed with latency optimization. Chris builds the neural core that makes 178ms possible. Quantization, edge deployment, and acoustic modeling are his north stars.',
      tags: ['Engineering', 'ML Ops', 'Inference'],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const advisors = [
    {
      name: 'Dr. Amara Okonkwo',
      role: 'AI Research Advisor',
      org: 'Former Google Brain',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Joseph Mwangi',
      role: 'FinTech Advisor',
      org: 'M-Pesa Foundation',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Dr. Fatima Hassan',
      role: 'Linguistics Advisor',
      org: 'University of Nairobi',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
  ];

  return (
    <main className="bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
              Meet the Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              The Hacker &<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">
                The Hustler
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Building Africa's acoustic infrastructure takes vision, engineering, 
              and relentless execution. Meet the founders making it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="relative py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative p-8 md:p-10 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-lg opacity-50`} />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-2xl"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-orange-400 text-sm font-medium">{member.title}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{member.name}</h3>
                      <p className="text-slate-400 mt-1 mb-4">{member.role}</p>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {member.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                          <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                          <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="relative py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advisors & Partners
            </h2>
            <p className="text-slate-400">
              Guided by experts in AI, FinTech, and African markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500 text-center"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 ring-4 ring-slate-700 group-hover:ring-orange-500/50 transition-all duration-300"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{advisor.name}</h3>
                <p className="text-orange-400 text-sm font-medium mb-1">{advisor.role}</p>
                <p className="text-slate-500 text-sm">{advisor.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="relative py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-800/90 to-orange-900/20 border border-slate-700/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Team
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              We're looking for passionate engineers, researchers, and operators who want to 
              decolonize AI and build technology that serves 1.2 billion people.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
              >
                View Open Roles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}