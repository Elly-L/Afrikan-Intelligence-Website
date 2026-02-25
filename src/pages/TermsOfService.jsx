import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using Afrikan Intelligence's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services. The materials contained on this platform are protected by applicable copyright and trademark law.`,
  },
  {
    title: '2. Use License & API Access',
    content: `Permission is granted to access and use Afrikan Intelligence's services for personal or commercial purposes, subject to the restrictions outlined in these Terms. Our API is provided under a separate API License Agreement. Unauthorized use of the API, including reverse engineering, scraping, or attempting to extract model weights, is strictly prohibited. API keys are non-transferable and must not be shared with third parties.`,
  },
  {
    title: '3. Acceptable Use Policy',
    content: `You agree not to use our services to: (a) process or transmit content that is unlawful, harmful, threatening, abusive, or discriminatory; (b) impersonate any person or entity; (c) interfere with or disrupt the integrity or performance of the services; (d) attempt to gain unauthorized access to any part of our systems; (e) use the services to train competing AI models; or (f) violate any applicable local, national, or international law or regulation.`,
  },
  {
    title: '4. Intellectual Property',
    content: `The Afrikan Intelligence platform, including the Mimetic Engine, all AI models, software, algorithms, training data, and associated documentation, are the intellectual property of Afrikan Intelligence Ltd. and are protected by copyright, trademark, and other intellectual property laws. Our open-source contributions are governed by their respective licenses as published on our GitHub repositories.`,
  },
  {
    title: '5. Data & Language Contributions',
    content: `If you voluntarily contribute language data, recordings, or corrections to help improve our models, you grant Afrikan Intelligence a worldwide, royalty-free, irrevocable license to use, reproduce, modify, and distribute such contributions as part of our training datasets. You represent that you own or have the necessary rights to make such contributions. You may withdraw future contributions at any time but previously contributed data may remain in training sets.`,
  },
  {
    title: '6. Disclaimers & Limitations of Liability',
    content: `Our services are provided "as is" without warranty of any kind, express or implied. Afrikan Intelligence does not warrant that the services will be uninterrupted, error-free, or completely accurate. Speech translation is an evolving technology; outputs may contain errors, especially for low-resource language variants. In no event shall Afrikan Intelligence be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the services.`,
  },
  {
    title: '7. Subscription & Billing',
    content: `Paid plans are billed in advance on a monthly or annual basis. Refunds are not provided for partial months of service. We reserve the right to change our pricing with 30 days' notice. If you dispute a charge, please contact our billing team within 30 days of the charge date. Accounts that remain unpaid for more than 14 days may be suspended.`,
  },
  {
    title: '8. Termination',
    content: `We may terminate or suspend your access to our services immediately, without prior notice, if you breach these Terms. Upon termination, your right to use the services will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Nairobi, Kenya. For disputes involving users outside Kenya, we agree to attempt resolution through arbitration before pursuing litigation.`,
  },
  {
    title: '10. Changes to Terms',
    content: `We reserve the right to modify these terms at any time. We will provide at least 14 days' notice of material changes via email or a prominent notice on our website. Your continued use of our services after any changes constitutes acceptance of the new Terms. If you do not agree to the new terms, please stop using our services.`,
  },
  {
    title: '11. Contact',
    content: `For questions about these Terms of Service, please contact our legal team at: legal@afrikanintelligence.ai or Afrikan Intelligence Ltd., Westlands Business Park, Nairobi, Kenya.`,
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-sm mb-10 hover:text-orange-400 transition-colors"
            style={{ color: 'var(--text-sub)' }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center">
              <FileText className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-sm font-medium text-amber-400">Legal</span>
          </div>

          <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>Terms of Service</h1>
          <p className="text-sm mb-12" style={{ color: 'var(--text-sub)' }}>Last updated: February 2026</p>

          <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--text-body)' }}>
            Please read these Terms of Service carefully before using Afrikan Intelligence's platform and API. These terms constitute a legally binding agreement between you and Afrikan Intelligence Ltd. governing your use of all our services.
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-heading)' }}>{section.title}</h2>
                <p className="leading-relaxed" style={{ color: 'var(--text-body)' }}>{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}