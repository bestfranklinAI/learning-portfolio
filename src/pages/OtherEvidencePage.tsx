import { motion } from 'framer-motion';
import { Video, BookOpen, Lightbulb, ExternalLink, FileText, Brain, Users, Bot, Library } from 'lucide-react';
import { CompetencyBadge } from '../components/ui';
import assessmentCenterImg from '../assets/assessment-center.jpg';
import aiInterviewImg from '../assets/ai-interview.png';
import libraryGuideImg from '../assets/library-guide.png';

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
      howIUsedIt: 'I used STAR far beyond interviews. When writing our business plan Executive Summary, I structured it the same way: here is the problem (Situation), here is what we are trying to achieve (Task), here is our approach (Action), here is the impact (Result).',
      competencyBadge: { label: 'Communicative Competency', variant: 'communicative' }
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
          {/* Mock Assessment Center Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-800 mb-0">
                  Mock Assessment Center Experience
                </h2>
                <p className="text-sm text-slate-500">Organized by my Department</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Photo Evidence */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">📸 Evidence: Assessment Center Activity</p>
                <img 
                  src={assessmentCenterImg} 
                  alt="Mock Assessment Center - Animal Drawing Activity" 
                  className="w-full rounded-lg border border-slate-100"
                />
                <p className="text-sm text-slate-600 mt-3 italic">
                  The "Draw an Animal" icebreaker activity where participants introduced themselves through animal metaphors.
                </p>
              </div>

              {/* Reflection Content */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">The Experience</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    This semester, I participated in a mock assessment center organized by my department. It was a great opportunity to apply what I learned in LABU2060 in a realistic professional setting. One memorable activity asked us to <strong>draw an animal that represents ourselves</strong>, then walk around the room to find another animal we'd want as a business partner.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                  <h3 className="font-semibold text-slate-800 mb-3">My Choice: The Lion 🦁</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    I drew a <strong>lion</strong> because I aspire to be a strong leader in the business world, someone who can confidently lead teams and take charge in high-stakes situations. This directly reflects the <strong>Leadership</strong> and <strong>Confidence in Spoken Communication</strong> skills I developed through LABU2060, particularly during the Phase II group pitch where I presented our financial projections with conviction.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                  <h3 className="font-semibold text-slate-800 mb-3">My Partner: The Owl 🦉</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    I chose an <strong>owl</strong> as my ideal business partner—an animal whose head can turn 360° with great senses. This represents someone with exceptional <strong>awareness</strong> and <strong>perspective-taking abilities</strong>. This choice reflects my understanding of <strong>Intercultural Competency</strong> and <strong>Team Skills</strong>: a good team needs both bold leaders and thoughtful observers who can see what others miss.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <CompetencyBadge label="Leadership" variant="highlight" />
                  <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                  <CompetencyBadge label="Team Skills" variant="default" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Interview Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-800 mb-0">
                  Interviews by AI
                </h2>
                <p className="text-sm text-slate-500">AI-Powered Interview Preparation Tool</p>
              </div>
              <a 
                href="https://interviewsby.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <span>Visit Tool</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Reflection Content */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">What It Is</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    <strong>Interviews by AI</strong> is an innovative AI tool that helped me polish my interviewing skills beyond what classroom practice could offer. The AI agent analyzes both my <strong>voice</strong> and <strong>video</strong> in real-time, providing constructive feedback on aspects like tone, pacing, filler words, body language, and eye contact.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-semibold text-slate-800 mb-3">How It Helped Me</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    I found this tool incredibly useful for practicing the skills I learned in Phase I. The AI would flag my filler words ("uhm," "like") and remind me to use <strong>strategic pauses</strong> instead, exactly what my instructor emphasized. It also tracked my eye contact and body language, helping me apply the <strong>Lighthouse Technique</strong> even when practicing alone. The instant feedback loop accelerated my improvement significantly.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1 mt-0">Connection to LABU2060</h4>
                      <p className="text-sm text-slate-600 mb-0 leading-relaxed" style={{ lineHeight: '1.7' }}>
                        This tool extended my learning from the Mock Interview. While LABU2060 taught me the <strong>STAR framework</strong> and theory of non-verbal communication, Interviews by AI gave me unlimited practice with objective, data-driven feedback on my actual performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <CompetencyBadge label="Communicative Competency" variant="communicative" />
                  <CompetencyBadge label="GenAI Literacy" variant="academic" />
                  <CompetencyBadge label="Independent Learning" variant="default" />
                </div>
              </div>

              {/* Screenshot Evidence */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">📸 Evidence: AI Interview Tool</p>
                <img 
                  src={aiInterviewImg} 
                  alt="Interviews by AI - AI-Powered Interview Preparation" 
                  className="w-full rounded-lg border border-slate-100"
                />
                <p className="text-sm text-slate-600 mt-3 italic">
                  The AI interview platform provides real-time analysis of voice, video, and communication patterns.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Library Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Library className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-800 mb-0">
                  LABU2060 Library Guide
                </h2>
                <p className="text-sm text-slate-500">Research Resources for Phase II Project</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Screenshot Evidence */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">📸 Evidence: Library Guide</p>
                <img 
                  src={libraryGuideImg} 
                  alt="LABU2060 Library Guide for Phase II Research" 
                  className="w-full rounded-lg border border-slate-100"
                />
                <p className="text-sm text-slate-600 mt-3 italic">
                  The comprehensive library guide with research databases and business planning resources.
                </p>
              </div>

              {/* Reflection Content */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">What It Taught Me</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    This library guide was a game-changer for our Phase II research. It introduced me to powerful databases and tools I didn't know existed:
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>Statista</strong> — For market size and industry statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>data.gov.hk</strong> — For Hong Kong-specific government data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong>ProQuest</strong> — For academic and business research</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                  <h3 className="font-semibold text-slate-800 mb-3">How I Applied It</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                    The guide also included links to resources for constructing business plans and pitches. I used <strong>Statista</strong> to find chocolate market data for our Hello Cocoa projections, and <strong>data.gov.hk</strong> for SEN employment statistics in Hong Kong. This elevated my <strong>Academic Competency</strong>—instead of making unsupported claims, I could back every assumption with credible, citable data. When judges questioned our market assumptions, I could point to specific sources.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <CompetencyBadge label="Academic Competency" variant="academic" />
                  <CompetencyBadge label="Critical Thinking" variant="highlight" />
                  <CompetencyBadge label="Independent Learning" variant="default" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Synthesis Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-slate-800">The Meta Skill: Framework Fluency</h3>
              </div>
              <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.9' }}>
                Looking back at all these learning experiences, I see a common thread. Each one taught me a <strong>framework for imposing structure on complexity</strong>. STAR gives structure to storytelling. Issue Trees give structure to problem analysis. The Library Guide gives structure to research. Even the Assessment Center's animal exercise gave structure to self-reflection.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4" style={{ lineHeight: '1.9' }}>
                LABU2060 gave me more than communication techniques. It gave me a way of thinking about communication, and tools like AI Interview and the Library Guide extended that learning beyond the classroom. These are skills I will carry into my career.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
