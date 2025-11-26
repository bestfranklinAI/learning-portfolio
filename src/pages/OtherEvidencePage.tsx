import { motion } from 'framer-motion';
import { Video, BookOpen, Lightbulb, ExternalLink, FileText, Brain } from 'lucide-react';
import { CompetencyBadge } from '../components/ui';

interface LearningEvidenceCardProps {
  title: string;
  source: string;
  whatILearned: string;
  type: 'video' | 'module' | 'article';
  howIUsedIt: string;
  competencyBadge?: { label: string; variant: 'academic' | 'communicative' | 'interpersonal' | 'highlight' | 'default' };
  externalLink?: string;
}

function LearningEvidenceCard({ 
  title, 
  source,
  whatILearned,
  type, 
  howIUsedIt,
  competencyBadge,
  externalLink
}: LearningEvidenceCardProps) {
  const iconConfig = {
    video: { Icon: Video, bgColor: 'bg-red-50', textColor: 'text-red-600' },
    module: { Icon: BookOpen, bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    article: { Icon: FileText, bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' }
  };
  
  const { Icon, bgColor, textColor } = iconConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${bgColor}`}>
          <Icon className={`w-6 h-6 ${textColor}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mt-0 mb-1">
                {title}
              </h3>
              <p className="text-sm text-slate-500 mb-0">{source}</p>
            </div>
            {externalLink && (
              <a 
                href={externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          {competencyBadge && (
            <div className="mt-2">
              <CompetencyBadge label={competencyBadge.label} variant={competencyBadge.variant} />
            </div>
          )}
        </div>
      </div>

      {/* What I Learned */}
      <p className="text-slate-600 mb-4 leading-relaxed" style={{ lineHeight: '1.8' }}>{whatILearned}</p>

      {/* How I Used It */}
      <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-1 mt-0">How I Applied This</h4>
            <p className="text-sm text-slate-600 mb-0 leading-relaxed" style={{ lineHeight: '1.7' }}>{howIUsedIt}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function OtherEvidencePage() {
  const evidenceItems: LearningEvidenceCardProps[] = [
    {
      title: '9 Business Model Examples For Social Enterprises',
      source: 'Social Mission Canada',
      whatILearned: 'This article was a turning point for our project. We were struggling with what I called the "Charity vs Business" problem. How do you create a social enterprise that generates real returns while staying true to its mission? The article introduced me to several business model archetypes, and one in particular resonated: the Service Subsidization Model. The idea is simple but powerful. You generate profits from one revenue stream (in our case, corporate gifting) and use those profits to fund the social mission (SEN training) that might not be profitable on its own.',
      type: 'article',
      howIUsedIt: 'I directly applied the Service Subsidization Model to Hello Cocoa. Our B2B corporate gifting revenue funds the SEN training program. This gave us a clear answer to the investor question "How is this sustainable?" We are not asking for ongoing donations. We are building a self funding engine where profitable chocolate sales continuously reinvest into skills training. This framework made our business model pitch significantly more credible.',
      competencyBadge: { label: 'Academic Competency', variant: 'academic' },
      externalLink: 'https://socialmissioncanada.ca/9-business-model-examples-for-social-enterprises/'
    },
    {
      title: 'The BCG and McKinsey Problem Solving Process',
      source: 'Slideworks',
      whatILearned: 'This resource taught me the "Seven Steps of Problem Solving" used by top consulting firms. More importantly, it introduced me to the Issue Tree technique. An Issue Tree breaks down a complex problem into its component parts, ensuring you address root causes rather than symptoms. I was struck by how similar this is to the STAR framework from Phase I. Both are about imposing structure on complexity.',
      type: 'article',
      howIUsedIt: 'When our team was researching SEN unemployment, the data was overwhelming. There were studies about discrimination, lack of training, poor job matching, inadequate support systems. Using the Issue Tree, I mapped these into two main branches: supply side issues (SEN individuals lack marketable skills) and demand side issues (employers lack awareness and accommodation resources). This led directly to our "Two Pronged Solution" in the pitch. We address skills gaps through chocolate training and employer resistance through corporate gifting partnerships that normalize SEN employment. Without the Issue Tree, we might have tried to solve everything at once and solved nothing well.',
      competencyBadge: { label: 'Critical Thinking', variant: 'highlight' },
      externalLink: 'https://slideworks.io/resources/mckinsey-problem-solving-process'
    },
    {
      title: 'The STAR Framework Video',
      source: 'Week 2 Course Material',
      whatILearned: 'This was the first structured framework I encountered in the course, and it fundamentally changed how I think about communication. Before this video, I would answer interview questions by rambling through events in chronological order. The STAR method taught me that every good answer has four parts: set the scene (Situation), define your responsibility (Task), describe what you specifically did (Action), and quantify the outcome (Result). The video also emphasized something I had never considered: the Result should be the longest part of your answer because that is what the interviewer actually cares about.',
      type: 'video',
      howIUsedIt: 'I used STAR far beyond interviews. When writing our business plan Executive Summary, I structured it the same way: here is the problem (Situation), here is what we are trying to achieve (Task), here is our approach (Action), here is the impact (Result). The judges commented that our Executive Summary was "exceptionally clear." That clarity came directly from applying the STAR logic to written communication, not just spoken.',
      competencyBadge: { label: 'Communicative Competency', variant: 'communicative' }
    },
    {
      title: 'Audience Awareness Module',
      source: 'Week 7 Self Learning',
      whatILearned: 'This module shifted my perspective on what "good communication" means. Before, I thought clarity was about what I said. After this module, I understood that clarity is about what the listener understands. These are not the same thing. The module used examples of technical experts who lost their audience by using jargon, and salespeople who connected by using the listener\'s own vocabulary. It made me realize that every communication decision should start with the question: who is receiving this?',
      type: 'module',
      howIUsedIt: 'As the finance lead, my instinct was to use precise financial terminology like "EBITDA," "Operating Leverage," and "Working Capital Cycle." These are accurate terms. But remembering that our judges might not be finance professionals, I rewrote my pitch section to use accessible equivalents. Instead of "Operating Leverage," I said "Our fixed costs stay constant while revenue grows." Instead of "EBITDA," I said "Profit before accounting adjustments." The meaning stayed the same, but the barrier to understanding dropped significantly.',
      competencyBadge: { label: 'Communicative Competency', variant: 'communicative' }
    },
    {
      title: 'ChatGPT 5 as a Critique Partner',
      source: 'GenAI Tool',
      whatILearned: 'Using AI as a sounding board taught me something important about feedback: it is only useful if you know how to filter it. ChatGPT excelled at logical stress testing. When I presented our IRR assumptions, it immediately identified that our training costs might be underestimated. But it also gave generic advice about "influencer marketing" that did not fit our B2B strategy at all. The skill is not just getting feedback. The skill is knowing which feedback to accept and which to discard.',
      type: 'module',
      howIUsedIt: 'I used ChatGPT to simulate investor skepticism before our actual pitch. I would input our assumptions and ask "What are the three biggest weaknesses in this plan?" The responses helped me anticipate Q&A challenges. When a judge later questioned our 63% IRR, I was ready with the B2B pivot explanation because I had already rehearsed that defense with AI. However, I consciously rejected the AI\'s marketing suggestions because I understood our business model better than the AI could from a short prompt.',
      competencyBadge: { label: 'Academic Competency', variant: 'academic' }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Other Learning Evidence
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
              The mock interview and business pitch were the visible assessments, but my learning 
              extended far beyond those formal moments. The resources below shaped how I approached 
              every assignment in this course. Each one contributed something specific to my 
              development as a communicator.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed" style={{ lineHeight: '1.9' }}>
              What I find most valuable looking back is how these resources connected to each other. 
              A framework I learned in Week 2 showed up in my business plan. A consulting technique 
              from an external article structured my pitch. Learning is not linear. It is networked.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evidence Cards Grid */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {evidenceItems.slice(0, 2).map((item, index) => (
              <LearningEvidenceCard key={index} {...item} />
            ))}
          </div>
          
          <div className="mt-6 space-y-6">
            {evidenceItems.slice(2).map((item, index) => (
              <LearningEvidenceCard key={index + 2} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Synthesis Reflection */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-semibold text-slate-800">
                Connecting the Dots
              </h2>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed" style={{ lineHeight: '1.9' }}>
              <p>
                Looking back at these five resources, I see a pattern that was not obvious while 
                I was learning. Each one taught me a framework for imposing structure on complexity. 
                STAR gives structure to storytelling. Issue Trees give structure to problem analysis. 
                The Service Subsidization Model gives structure to social enterprise design. Audience 
                Awareness gives structure to message tailoring.
              </p>
              
              <p>
                The deeper insight is that these skills are transferable across contexts. The STAR 
                logic that helped me answer interview questions also helped me write a clear Executive 
                Summary. The Issue Tree that clarified our problem analysis also helped me structure 
                my pitch section. The Audience Awareness that made me simplify financial jargon also 
                made me a better teammate when explaining concepts to non-finance members.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  The Meta Skill
                </h3>
                <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.9' }}>
                  If I had to name one overarching skill I developed through this course, it would 
                  be <strong>framework fluency</strong>. The ability to recognize when a situation 
                  calls for a particular structure, and the flexibility to adapt that structure 
                  to the specific context. Whether I am pitching to investors, interviewing for 
                  jobs, or writing reports for future managers, I now have a toolkit of mental 
                  models that I can deploy as needed. LABU2060 gave me more than communication 
                  techniques. It gave me a way of thinking about communication.
                </p>
              </div>

              <p className="mt-6">
                These are not skills I will leave behind after this course ends. When I am presenting 
                financial analysis to managers, I will use the Lighthouse Technique for eye contact 
                and the STAR structure for explanations. When I am pitching ideas to teams, I will 
                use Issue Trees to break down problems and Audience Awareness to tailor my message. 
                When I go through real job interviews, I will use the Pause Over Filler strategy 
                and PREP for impromptu questions. The learning continues because the skills 
                transfer everywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
