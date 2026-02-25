import React, { useState } from 'react';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Building2, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const tr = useT();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@afrikanintelligence.ai',
      link: 'mailto:hello@afrikanintelligence.ai',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Nairobi, Kenya',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 700 000 000',
    },
  ];

  return (
    <main className="bg-slate-950 pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
              {tr(T.contact.badge)}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {tr(T.contact.title)}<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Whether you're a researcher, investor, developer, or grant maker, 
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-14 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white font-medium hover:text-orange-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <>
                          <p className="text-white font-medium">{item.value}</p>
                          {item.subvalue && (
                            <p className="text-slate-400 text-sm mt-1">{item.subvalue}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interest Areas */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-800/90 to-orange-900/20 border border-slate-700/50">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-5">{tr(T.contact.lookingFor)}</h3>
                <div className="space-y-3.5">
                  {[
                    { emoji: '🔬', rKey: 'r1' },
                    { emoji: '💰', rKey: 'r2' },
                    { emoji: '🏥', rKey: 'r3' },
                    { emoji: '🏦', rKey: 'r4' },
                    { emoji: '🌍', rKey: 'r5' },
                  ].map(({ emoji, rKey }) => (
                    <div key={rKey} className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">{emoji}</span>
                      <span className="text-slate-300 text-sm sm:text-base">{tr(T.contact[rKey])}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-10 rounded-3xl bg-slate-800/50 border border-green-500/30">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{tr(T.contact.sent)}</h3>
                          <p className="text-slate-400">{tr(T.contact.sentDesc)}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-slate-800/50 border border-slate-700/50">
                  <h2 className="text-2xl font-bold text-white mb-8">{tr(T.contact.sendMessage)}</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">{tr(T.contact.name)}</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <Input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500/20"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">{tr(T.contact.email)}</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500/20"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">{tr(T.contact.company)}</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <Input
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">{tr(T.contact.interest)}</label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      >
                        <SelectTrigger className="h-12 bg-slate-900/50 border-slate-700 text-white focus:border-orange-500 focus:ring-orange-500/20">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="api">API Access</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">{tr(T.contact.message)}</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                        <Textarea
                          placeholder="Tell us about your project or interest..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="pl-12 min-h-[150px] bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 focus:ring-orange-500/20"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl text-lg"
                    >
                      {tr(T.contact.send)}
                        <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}