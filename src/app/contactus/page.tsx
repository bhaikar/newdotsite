'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Card from '@/components/contactcard';
import SocialChannelCard from '@/components/SocialChannelCard';

const LinkedInIcon = (
  <svg viewBox="0 0 448 512" className="h-6 w-6" fill="#60a5fa">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const InstagramIcon = (
  <svg viewBox="0 0 448 512" className="h-6 w-6" fill="#fb7185">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const GmailIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#f87171">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const GitHubIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#e2e8f0">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const channels = [
  {
    href: 'https://www.linkedin.com/company/devops-team-mce/posts/?feedView=all',
    label: 'LinkedIn',
    handle: 'devops-team-mce',
    meta: '150+ connections',
    icon: LinkedInIcon,
    iconBg: 'rgba(96,165,250,0.12)',
    accent: '#60a5fa',
  },
  {
    href: 'https://www.instagram.com/devops_malnad/',
    label: 'Instagram',
    handle: '@devops_malnad',
    meta: '1k+ followers',
    icon: InstagramIcon,
    iconBg: 'rgba(251,113,133,0.12)',
    accent: '#fb7185',
  },
  {
    href: 'mailto:devopsteammalnad@gmail.com',
    label: 'Gmail',
    handle: 'devopsteammalnad@gmail.com',
    meta: 'Fastest reply',
    icon: GmailIcon,
    iconBg: 'rgba(248,113,113,0.12)',
    accent: '#f87171',
  },
  {
    href: 'https://github.com/Devops-Malnad',
    label: 'GitHub',
    handle: 'Devops-Malnad',
    meta: 'Open source',
    icon: GitHubIcon,
    iconBg: 'rgba(226,232,240,0.1)',
    accent: '#e2e8f0',
  },
];

const ContactUsPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pb-14 text-center sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            reach the team
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Let&rsquo;s talk DevOps.
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 sm:w-32" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Got a question about Hack.MCE, want in on the next workshop, or looking to
            collaborate on something? Call one of our organizers directly, or find us on
            the channels below.
          </p>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Direct line
              </h2>
              <Card />
            </div>

            <div>
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Channels
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {channels.map((channel) => (
                  <SocialChannelCard key={channel.label} {...channel} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
