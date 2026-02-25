import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you contact us, request API access, or sign up for our services. This includes your name, email address, company name, and any messages you send us. We also collect usage data, including pages visited, features used, and technical information such as your browser type, IP address, and device identifiers.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and fulfill your requests; send you technical notices, updates, and support messages; and monitor and analyze trends, usage, and activity in connection with our services. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.`,
  },
  {
    title: '3. Data Storage & Sovereignty',
    content: `Afrikan Intelligence is committed to African data sovereignty. We process and store data within data centers located on the African continent wherever technically feasible. Audio data processed through our speech-to-speech translation services is not retained beyond the duration of the active session unless you explicitly opt in to data contribution for model improvement.`,
  },
  {
    title: '4. Cookies & Tracking Technologies',
    content: `We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`,
  },
  {
    title: '5. Third-Party Services',
    content: `Our service may contain links to third-party websites or services that are not owned or controlled by Afrikan Intelligence. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.`,
  },
  {
    title: '6. Security',
    content: `The security of your data is important to us. We use commercially acceptable means to protect your personal information, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately and we will take steps to remove such information.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at: privacy@afrikanintelligence.ai or write to us at Afrikan Intelligence Ltd., Westlands Business Park, Nairobi, Kenya.`,
  },
];

export default function PrivacyPolicy() {
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
            <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center">
              <Shield className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-sm font-medium text-orange-400">Legal</span>
          </div>

          <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--text-heading)' }}>Privacy Policy</h1>
          <p className="text-sm mb-12" style={{ color: 'var(--text-sub)' }}>Last updated: February 2026</p>

          <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--text-body)' }}>
            Afrikan Intelligence ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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