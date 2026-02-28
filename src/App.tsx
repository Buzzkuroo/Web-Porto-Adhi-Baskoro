import React from 'react';
import { Hexagon, PenTool, Code2, Brush, Layers, Terminal, Github, Mail, Twitter, ExternalLink, Trophy } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col items-center relative">
        
        {/* Sticky Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
          <div className="pointer-events-auto glass-card rounded-full px-4 py-2 flex items-center shadow-[0_4_20px_rgba(0,0,0,0.1)] backdrop-blur-xl border border-white/10 bg-white/5">
            <a 
              href="https://wa.me/6281235620752" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 group"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="font-bold text-sm tracking-wide">Hit Me at Whatsapp</span>
            </a>
          </div>
        </div>

        <main className="flex-1 flex flex-col items-center py-24 px-6 max-w-[1024px] w-full mx-auto text-center">
          
          {/* Hero Section */}
          <div className="max-w-[800px] w-full flex flex-col items-center mx-auto">
            <div className="mb-10">
              <div className="halo-effect inline-block">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-40 w-40 border-4 border-[#1a1a1a] dark:border-background-dark z-10 relative" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAByzIcowILHeU0i6aEHCwq8hUe6j6qqM6PGZO7zvmmOLoUJQeqHp1YfaY3R2cgsCn_72jHCci8xda_4zKC8qAdFyqqtJ1dK7Mp1IVMaHPfc0hNDY0auPqKdYaqOv1-w5IANEjgTHlgwf2MYPN9SJthjWgT560UrMwNjQuDevrNfbEIsy2vul9Io3kP3Pe_uzuX9P-pC_rScG_O4Wcfrr__4SSy8kKCpyCbfAjG77rG44NrTQXcMNy1w1kHe2rnsYitHfhS3hN8eg")' }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-10">
              <h1 className="text-4xl md:text-3xl font-extrabold tracking-tight">
                Adhi Baskoro
              </h1>
              <p className="text-slate-500 dark:text-[#c9929b] text-lg font-medium">
                Digital Marketing Specialist & Website Developer
              </p>
              <div className="glass-card rounded-2xl p-6 md:p-8 w-full mt-2">
                <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
                  Results-driven Digital Marketing Specialist and Junior Developer with expertise in digital advertising, campaign optimization, and growth strategies. Currently managing high-impact campaigns for Marcomm Telkomsel Area 3 Jawa Bali, leveraging Google Ads and Meta Ads to drive measurable ROI. Recognized with the Best Digital Ads award by IndiHome Telkom Indonesia in 2022. As a developer, successfully engineered three custom web applications to streamline digital marketing operations and maximize landing page optimization.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row w-full gap-4 justify-center items-center mb-16">
              <button className="flex w-full sm:w-64 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold tracking-wide shadow-lg hover:shadow-primary/40 transition-all">
                <span className="truncate">LinkedIn Profile</span>
              </button>
              <button className="flex w-full sm:w-64 cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-primary/40 dark:border-primary/50 text-slate-900 dark:text-white text-base font-bold tracking-wide hover:bg-primary/10 transition-all">
                <span className="truncate">Get Portfolio (WhatsApp)</span>
              </button>
            </div>
            
            <div className="w-full mb-16">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-8">Tech Stack & Tools Expertise</h3>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-zinc-400 mb-4">Web Development</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    <TechPill label="React" />
                    <TechPill label="TypeScript" />
                    <TechPill label="Tailwind" />
                    <TechPill label="WordPress" />
                    <TechPill label="Elementor" />
                    <TechPill label="Scalev" />
                    <TechPill label="Antigravity" />
                    <TechPill label="Vercel" />
                    <TechPill label="Lovable" />
                    <TechPill label="Claude Code" />
                    <TechPill label="Google AI Studio" />
                    <TechPill label="Google Stictch" />
                    <TechPill label="Figma" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-zinc-400 mb-4">Digital Ads</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    <TechPill label="Google Ads" />
                    <TechPill label="Meta Ads" />
                    <TechPill label="TikTok Ads" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-[#2a1418] to-transparent my-8"></div>

          {/* Portfolio Section */}
          <section id="portfolio" className="w-full mb-24 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-10 text-center">Selected Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PortfolioItem title="Fintech Mobile App" category="App Design" image="https://picsum.photos/seed/fintech/800/600" />
              <PortfolioItem title="SaaS Analytics Dashboard" category="Web Application" image="https://picsum.photos/seed/saas/800/600" />
              <PortfolioItem title="E-commerce Platform" category="Website" image="https://picsum.photos/seed/ecommerce/800/600" />
              <PortfolioItem title="Health Tracking App" category="App Design" image="https://picsum.photos/seed/health/800/600" />
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="w-full mb-24 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-10 text-center">Experience</h3>
            <div className="flex flex-col gap-6">
              <ResumeItem 
                role="Digital Campaign Specialist for Marcomm Telkomsel Area Jawa Bali" 
                company="PT. Infomedia Nusantara - Surabaya" 
                period="Aug 2023 - Present" 
                description={[
                  "Campaign Strategy: Developed comprehensive campaign plans for both organic and paid strategies to increase product visibility and engagement.",
                  "Budget Planning: Created and managed budgets for paid campaigns on Google Ads and Meta Ads to maximize ROI.",
                  "Impression-to-Lead Optimization: Enhanced conversion ratios from impressions to leads on Google Ads and Meta Ads through data-driven optimizations.",
                  "Performance Tracking: Monitored, tracked, and evaluated the performance of Google Ads and Meta Ads campaigns, providing insights for continuous improvement.",
                  "Tools & Analytics: Skilled in Facebook Business Manager, Google Tag Manager, TikTok Business Manager and analytics for advanced tracking and campaign evaluation.",
                  "Web-apps Development: Developed web-apps (Digital Ads tracking tools, KOL tracking tools, KV Library tools) for tracking performance to boost productivity."
                ]} 
              />
              <ResumeItem 
                role="Digital Strategist and Campaign Implementor for IndiHome Regional 5" 
                company="PT. Infomedia Nusantara - Surabaya" 
                period="Aug 2021 - Aug 2023" 
                description={[
                  "Regional Ad Strategy: Developed and executed paid media strategies across Facebook Ads and Google Ads for Telkom's East Java region, boosting engagement and regional visibility.",
                  "In-House Training: Provided comprehensive training on Facebook Ads, Google Ads, and Google Tag Manager, enhancing team capabilities within Telkom Regional 5.",
                  "Data Optimization: Analyzed Facebook Ads data daily to improve CTR (1-4%) and sustain at least a 1% conversion rate from traffic to leads.",
                  "Campaign Management: Set up and optimized Facebook Business Manager and Pixel tracking across 13 WiTel regions, leading and managing paid marketing activities to drive digital effectiveness regionally."
                ]} 
              />
              <ResumeItem 
                role="Digital Marketing Specialist" 
                company="PT. Getei Teknologi Indonesia - Surabaya" 
                period="Aug 2020 - Aug 2021" 
                description={[
                  "Strategy Development: Created and executed digital marketing strategies to address 400+ deadstock items, including designing, managing, maintaining, and troubleshooting campaigns.",
                  "Data Analysis: Analyzed daily Facebook ad metrics to sustain key KPIs, achieving 2% CTR, 75% OCLP, 65% LPATC, 75% ATCWA, 30-40% CR, and 2-4% RTS.",
                  "Team Leadership: Led a team managing over 425 Facebook Marketplace accounts for consistent product listing.",
                  "Massive Listing Execution: Conducted high-volume listings with iMacros, achieving 1,500+ listings/day across Java and Bali.",
                  "Product Research: Conducted market research to align products with consumer demand."
                ]} 
              />
              <ResumeItem 
                role="Digital Ads, Social Media Management, Landing Page Builder, Funnel Builder, etc." 
                company="Freelance Digital Marketing - Surabaya" 
                period="Oct 2019 - Present" 
                description={[
                  "Social Media Campaign Management: Designed, implemented, and evaluated social media marketing projects, ensuring alignment with client goals",
                  "Facebook Ads Optimization: Created and managed awareness and traffic campaigns on Facebook Ads, achieving targeted CTR rates between 2-7% through strategic ad management."
                ]} 
              />
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards" className="w-full mb-24 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-10 text-center">Awards & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AwardItem 
                title="Best Digital Ads" 
                year="2022" 
                description="Awarded for the best digital advertising campaign in IndiHome Telkom Indonesia." 
                image="https://picsum.photos/seed/award1/800/600" 
              />
              <AwardItem 
                title="Best Presenter / MC" 
                year="2022" 
                description="Recognized as the best presenter and MC for Siaga RaFi Infomedia." 
                image="https://picsum.photos/seed/award2/800/600" 
              />
            </div>
          </section>

          {/* Organizational Experience Section */}
          <section id="organization" className="w-full mb-24 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-10 text-center">Organizational Experience</h3>
            <div className="flex flex-col gap-6">
              <ResumeItem 
                role="OC External Relation" 
                company="AIESEC in Brawijaya University - Malang" 
                period="Aug 2017 - Feb 2018" 
                description={[
                  "Partnership Development: Established strategic partnerships to support project goals and mutual growth.",
                  "Project Coordination: Ensured seamless collaboration throughout each project phase, maintaining open communication and alignment with partners.",
                  "Partner Satisfaction: Actively managed partner relationships to uphold satisfaction and meet partnership objectives during project execution."
                ]} 
              />
            </div>
          </section>

          {/* Skills & Other Experience Section */}
          <section id="skills" className="w-full mb-24 text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 mb-10 text-center">Skills & Other Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-4">Soft Skills</h4>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                  <strong>Communication:</strong> Essential for conveying ideas clearly to clients, team members, and target audiences.<br/>
                  <strong>Creativity:</strong> Helps in developing engaging and original campaigns to capture audience attention.<br/>
                  <strong>Analytical Thinking:</strong> Enables data-driven decision-making, essential for optimizing campaigns.<br/>
                  <strong>Adaptability:</strong> Important in a field where trends and platforms constantly evolve.<br/>
                  <strong>Project Management:</strong> Keeps marketing initiatives organized, on track, and within budget.<br/>
                  <strong>Problem-Solving:</strong> Useful for addressing campaign challenges and finding effective solutions.<br/>
                  <strong>Team Collaboration:</strong> Vital for working across departments and with clients to meet shared goals.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-4">Training</h4>
                <ul className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm list-disc list-outside ml-4 space-y-2">
                  <li><strong>Online Class:</strong> Full Stack Facebook Ads Training in Kelas Konversi Level 1 & Level 2; Google Ads Certification Program by Google Learning Program</li>
                  <li><strong>Offline Class:</strong> Facebook Ads Scalling in SAF Bandung by Agung Hari Prabowo CMO Flimty</li>
                </ul>
              </div>
            </div>
          </section>

            <div className="w-full max-w-md">
              <div className="grid grid-cols-3 gap-6">
                <SocialIcon icon={<Github size={24} className="text-slate-700 dark:text-white" />} label="GitHub" href="https://github.com/resiadhibas" />
                <SocialIcon icon={<Mail size={24} className="text-slate-700 dark:text-white" />} label="Email" href="mailto:Resiadhi.bas@gmail.com" />
                <SocialIcon icon={<Twitter size={24} className="text-slate-700 dark:text-white" />} label="Twitter" href="#" />
              </div>
            </div>
        </main>
        
        <footer className="w-full max-w-[960px] flex flex-col gap-8 px-6 py-12 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-[#2a1418] to-transparent"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <a className="text-slate-500 dark:text-[#c9929b] text-sm font-medium hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-slate-500 dark:text-[#c9929b] text-sm font-medium hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
            <p className="text-slate-500 dark:text-zinc-500 text-sm font-normal">
              © {new Date().getFullYear()} Resiadhi Bas. Built with passion.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 rounded-full bg-[#111] border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(212,17,50,0.2)] cursor-default">
      <span className="text-sm font-medium text-slate-300 dark:text-zinc-300">{label}</span>
    </div>
  );
}

function SocialIcon({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a className="flex flex-col items-center gap-3 group" href={href}>
      <div className="rounded-full bg-slate-100 dark:bg-[#1a0c0e] p-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{label}</p>
    </a>
  );
}

function PortfolioItem({ title, category, image }: { title: string, category: string, image: string }) {
  return (
    <a href="#" className="group flex flex-col gap-4 glass-card rounded-2xl p-4 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(212,17,50,0.2)]">
      <div className="w-full aspect-video rounded-xl overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="flex flex-col px-2 pb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">{category}</span>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center justify-between">
          {title}
          <ExternalLink size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
        </h4>
      </div>
    </a>
  );
}

function ResumeItem({ role, company, period, description }: { role: string, company: string, period: string, description: string[] }) {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 transition-all hover:border-primary/20">
      <div className="md:w-1/4 flex flex-col gap-1 shrink-0">
        <span className="text-sm font-bold text-primary">{period}</span>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{company}</h4>
      </div>
      <div className="md:w-3/4 flex flex-col gap-2">
        <h5 className="text-xl font-bold text-slate-800 dark:text-slate-100">{role}</h5>
        <ul className="text-slate-600 dark:text-zinc-400 leading-relaxed list-disc list-outside ml-4 space-y-1">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AwardItem({ title, year, description, image }: { title: string, year: string, description: string, image: string }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col transition-all hover:border-primary/20 hover:shadow-[0_0_30px_-10px_rgba(212,17,50,0.1)]">
      <div className="w-full h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
          {year}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
