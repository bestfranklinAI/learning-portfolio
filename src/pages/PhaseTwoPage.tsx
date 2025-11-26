import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  GenAIChatContainer,
  FinancialHighlightCard,
  QuoteBlock,
  CompetencyBadge,
  FeedbackBlock
} from '../components/ui';
import { FileText, Presentation, CheckCircle, AlertCircle, TrendingUp, Users, Lightbulb, Camera } from 'lucide-react';
import financialPhoto from '../assets/financial.jpg';
import groupPhoto from '../assets/group.jpg';

// GenAI conversation
const genAIMessages = [
  {
    role: 'user' as const,
    content: `Hi Chat, we are working on project 'SENsational' for Hello Cocoa. We are requesting HKD 350k. Attached please find our financial plan. Please critique the feasibility of a 63% IRR and identify any gaps in our expense assumptions regarding SEN training costs.`,
  },
  {
    role: 'ai' as const,
    content: `Thank you for sharing the project details. Here's my critique:

**IRR Analysis (63%):**
The 63% IRR is ambitious but potentially achievable if your B2B corporate gifting strategy in Year 2 materializes as planned. However:

1. **Training Cost Assumptions:** Your SEN training cost estimates appear conservative. Specialized training typically requires higher instructor-to-trainee ratios and additional support staff.
   
   **Recommendation:** Consider increasing your training budget buffer by 15-20%.

2. **Revenue Ramp-up:** The transition to high-margin B2B sales assumes quick market penetration.

3. **Marketing Strategy:** [Generic suggestions about social media and influencers...]

The financial model fundamentals are sound, but expense assumptions need refinement.`,
  },
];

// Tab component for Deep Dive sections
function ReflectionTab({ 
  active, 
  label, 
  onClick, 
  icon: Icon 
}: { 
  active: boolean; 
  label: string; 
  onClick: () => void;
  icon: React.ElementType;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
        active 
          ? 'bg-slate-800 text-white' 
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}

export function PhaseTwoPage() {
  const [activeTab, setActiveTab] = useState<'strengths' | 'improvements' | 'future'>('strengths');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Phase II: The Business Pitch
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
              Phase II represented a fundamentally different challenge from the mock interview. 
              This was no longer about selling myself. It was about selling a vision, defending 
              financial projections, and working as a cohesive team under pressure. As the finance 
              lead for "SENsational" by Hello Cocoa, I was responsible for making HKD 350,000 sound 
              like a reasonable ask.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed" style={{ lineHeight: '1.9' }}>
              The pitch taught me that communication in a business context requires a different 
              kind of confidence. It is not just about sounding sure of yourself. It is about 
              demonstrating that you have done the work, anticipated the questions, and can 
              defend your assumptions under scrutiny.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Context */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              About Our Project
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">SENsational by Hello Cocoa</h3>
                
                <p className="text-slate-600 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
                  Our social enterprise focuses on training Special Educational Needs youth through 
                  artisanal chocolate production. The business model is built on what I later learned 
                  to call "Service Subsidization." We use profits from corporate gifting to fund 
                  the vocational training that gives SEN individuals meaningful employment skills.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6" style={{ lineHeight: '1.9' }}>
                  My role as Finance Lead meant I was responsible for making the numbers tell a 
                  compelling story. I had to convince investors that this was not just a good cause, 
                  but a viable business that would generate returns while creating social impact.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Team Size', value: '4 Members' },
                    { label: 'My Role', value: 'Finance Lead' },
                    { label: 'Target', value: 'SEN Youth' },
                    { label: 'Focus', value: 'Skills Training' },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                      <p className="font-semibold text-slate-800 text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <FinancialHighlightCard
                title="The Numbers"
                metrics={[
                  { label: 'Funding Ask', value: 'HKD 350K', highlight: true },
                  { label: 'Projected IRR', value: '63%', highlight: true },
                  { label: 'Break-even', value: 'Year 2' },
                  { label: 'Strategy', value: 'B2B Gifting' },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes Photos */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-6 h-6 text-slate-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                Behind the Scenes
              </h2>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed" style={{ lineHeight: '1.9' }}>
              Building a pitch is not just about the final presentation. It is about the hours of 
              brainstorming, the late night spreadsheet sessions, and the practice runs that shape 
              the final product. Here are some moments from our preparation journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Financial Planning Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={financialPhoto} 
                      alt="Financial planning whiteboard session" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-2">Financial Brainstorming Session</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      This whiteboard captures our early attempts to map out the business model 
                      and financial projections. You can see the raw thinking before it became 
                      polished slides. Those scribbles eventually became the 63% IRR calculation.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Group Practice Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={groupPhoto} 
                      alt="Team practicing pitch in library" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-2">Pitch Practice in the Library</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      One of many practice sessions where we rehearsed transitions and timing. 
                      This is where the "handover rehearsal" idea was born after we realized 
                      our individual sections did not flow together smoothly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Reflection Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Deep Dive: Pitch Performance Analysis
              </h2>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed" style={{ lineHeight: '1.9' }}>
              Rather than just describing what happened, I want to analyze specific moments from 
              our pitch and connect them to the communication competencies I developed throughout 
              this course.
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              <ReflectionTab 
                active={activeTab === 'strengths'} 
                label="What Worked" 
                onClick={() => setActiveTab('strengths')}
                icon={CheckCircle}
              />
              <ReflectionTab 
                active={activeTab === 'improvements'} 
                label="What Needed Work" 
                onClick={() => setActiveTab('improvements')}
                icon={AlertCircle}
              />
              <ReflectionTab 
                active={activeTab === 'future'} 
                label="Future Application" 
                onClick={() => setActiveTab('future')}
                icon={TrendingUp}
              />
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'strengths' && (
                <div className="space-y-8">
                  {/* Question 1: Effective Parts */}
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold">1</span>
                      <h3 className="text-lg font-semibold text-slate-800">Which Parts Were Effective and Why?</h3>
                    </div>
                    
                    <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CompetencyBadge label="Academic Competency" variant="academic" />
                          <span className="text-sm font-medium text-slate-600">Evidence Based Persuasion</span>
                        </div>
                        <p>
                          The most effective moment in our pitch came when I presented the 63% IRR projection. 
                          Instead of simply displaying the number and moving on, I contextualized it within 
                          our business strategy. I explained that Year 1 focuses on B2C direct sales at 
                          lower margins, but Year 2 pivots heavily toward B2B corporate gifting where 
                          bulk orders from companies like HSBC and Cathay Pacific would drive significantly 
                          higher profit margins.
                        </p>
                        <p className="mt-3">
                          This worked because I was not just presenting data. I was telling the story 
                          behind the data. The judges could see that we had thought through the "how," 
                          not just the "what." When they later challenged the IRR assumption during Q&A, 
                          I was ready because I had already laid the logical foundation.
                        </p>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <CompetencyBadge label="Communicative Competency" variant="communicative" />
                          <span className="text-sm font-medium text-slate-600">Audience Connection</span>
                        </div>
                        <p>
                          Another effective element was our opening. Instead of starting with the problem 
                          statement as most teams did, we opened with a human moment. My teammate introduced 
                          a brief story about a SEN youth who struggled to find employment despite being 
                          skilled and motivated. This immediately created emotional stakes before we 
                          transitioned into the business model.
                        </p>
                        <p className="mt-3">
                          This sequencing was intentional. We knew the judges would hear multiple pitches 
                          that day. By leading with a human story rather than statistics, we differentiated 
                          ourselves in the first 30 seconds. The business case became more compelling 
                          because it was anchored to a person, not just a problem.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Question 3: Visual Delivery */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">3</span>
                      <h3 className="text-lg font-semibold text-slate-800">What Made Our Visual Delivery Effective?</h3>
                    </div>
                    
                    <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                          <span className="text-sm font-medium text-slate-600">Stage Presence</span>
                        </div>
                        <p>
                          I used what I call the "Lighthouse Technique" for eye contact. Instead of 
                          looking at the screen or my notes, I systematically scanned the room like a 
                          lighthouse beam, making brief eye contact with each judge during different 
                          parts of my section. This created the impression that I was speaking directly 
                          to each person rather than delivering a rehearsed monologue.
                        </p>
                      </div>

                      <div className="mt-4">
                        <p className="font-medium text-slate-800 mb-2">Pitch Deck Design Strategy</p>
                        <p>
                          For the financial slides specifically, I worked with our design lead to create 
                          high contrast visualizations. Our growth curve used a bright green line against 
                          a dark navy background. This was a deliberate choice because I knew from the 
                          Audience Awareness module that busy slides lose attention. By making the key 
                          metric the only bright element on screen, I controlled where the judges looked 
                          while I spoke.
                        </p>
                        <p className="mt-3">
                          I also eliminated bullet points from my slides entirely. Instead, each slide 
                          had one number or one phrase. The detail lived in my verbal delivery, not 
                          on the screen. This forced the judges to listen to me rather than read ahead, 
                          which gave me more control over the pacing of information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'improvements' && (
                <div className="space-y-8">
                  {/* Question 2: Parts Needing Improvement */}
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-semibold">2</span>
                      <h3 className="text-lg font-semibold text-slate-800">Which Parts Needed Improvement?</h3>
                    </div>
                    
                    <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                      <p>
                        Watching the recording afterward, I noticed a significant issue with our team 
                        transitions. When I finished my financial section and handed over to our operations 
                        lead, there was an awkward two second pause. Neither of us had scripted the 
                        handover, so it felt disjointed. The judges were briefly confused about whether 
                        I was done speaking.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 border border-amber-200 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CompetencyBadge label="Collaborative Competency" variant="default" />
                        </div>
                        <p className="text-slate-600">
                          This exposed a gap in our team coordination. We had practiced our individual 
                          sections extensively, but we did not rehearse the transitions as a unit. In a 
                          pitch that emphasized teamwork as a core value, the awkward handovers undermined 
                          our message. The content said "we work well together" but our delivery said 
                          "we prepared separately."
                        </p>
                      </div>

                      <p className="mt-4">
                        If I could do it again, I would script explicit bridge sentences like "Now let me 
                        hand you over to Jessica, who will walk you through how we actually make this 
                        happen operationally." This creates a seamless narrative thread rather than a 
                        series of disconnected segments.
                      </p>
                    </div>
                  </div>

                  {/* Question 4: Verbal/Vocal Improvements */}
                  <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold">4</span>
                      <h3 className="text-lg font-semibold text-slate-800">Verbal and Vocal Delivery Gaps</h3>
                    </div>
                    
                    <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                      <p>
                        The biggest gap in my delivery was monotony. When I listen to the recording, 
                        my pacing and tone remain almost constant throughout my section. I speak at 
                        the same speed whether I am explaining routine projections or delivering our 
                        funding ask. This flatness made it harder for the judges to identify what I 
                        wanted them to remember.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-red-500" />
                            Pacing Issues
                          </h4>
                          <p className="text-sm text-slate-600">
                            I should have slowed down dramatically when delivering the ask: "We are 
                            seeking... three hundred and fifty thousand... Hong Kong dollars." The pauses 
                            between phrases would have added weight. Instead, I rushed through it at 
                            the same pace as everything else, which diminished the impact.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-red-500" />
                            Tonal Variation
                          </h4>
                          <p className="text-sm text-slate-600">
                            When talking about growth projections, my voice should have carried more 
                            energy and enthusiasm. When discussing risks, a more measured tone would 
                            have communicated thoughtfulness. Instead, everything sounded the same, 
                            which made the content feel less dynamic than it actually was.
                          </p>
                        </div>
                      </div>

                      <p className="mt-4">
                        Looking back, I was so focused on accuracy that I neglected expressiveness. 
                        The content was strong, but my delivery did not match the ambition of our vision. 
                        This is something I need to consciously work on: treating vocal variation as a 
                        strategic tool, not just a performance flourish.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'future' && (
                <div className="space-y-8">
                  {/* Question 5: SMART Goal Alignment */}
                  <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-semibold">5</span>
                      <h3 className="text-lg font-semibold text-slate-800">SMART Goal Alignment</h3>
                    </div>
                    
                    <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                      <p>
                        At the beginning of the course, I set a SMART goal focused on "projecting 
                        confidence through structured delivery." Looking at my pitch performance, 
                        I believe I achieved this goal. The evidence is in how I handled the Q&A 
                        challenge on our IRR assumptions. I did not stumble or become defensive. 
                        I acknowledged the judge's concern, explained our reasoning, and offered 
                        the specific market data that supported our projections.
                      </p>

                      <div className="bg-white rounded-lg p-4 border border-violet-200 mt-4">
                        <h4 className="font-semibold text-slate-800 mb-3">Goal Achievement Assessment</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>Structured delivery using logical frameworks</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>Maintained composure during challenging Q&A</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>Used evidence to support all claims</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-500" />
                            <span>Vocal expressiveness needs continued development</span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4">
                        However, the analysis also revealed a new gap that was not part of my 
                        original goal: expressiveness and energy management. My next SMART goal 
                        needs to focus specifically on vocal variation as a communication tool.
                      </p>
                    </div>
                  </div>

                  {/* Question 6: Key Insights */}
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-white text-indigo-700 flex items-center justify-center text-sm font-semibold">6</span>
                      <h3 className="text-lg font-semibold text-white">Key Insights for Future Professional Contexts</h3>
                    </div>
                    
                    <div className="space-y-4 text-white" style={{ lineHeight: '1.9' }}>
                      <p>
                        The most important insight I am taking from this experience is that leadership 
                        communication is not just about accuracy. It is about energy injection. When I 
                        present financial analysis to future managers, the numbers need to be correct, 
                        but my delivery needs to convey conviction. Stakeholder buy in does not come 
                        from data alone. It comes from how confidently that data is presented.
                      </p>

                      <div className="bg-white/15 backdrop-blur rounded-lg p-4 mt-4">
                        <h4 className="font-semibold text-amber-300 mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5" />
                          Transferable Applications
                        </h4>
                        <ul className="space-y-2 text-indigo-50">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-300 mt-1">•</span>
                            <span>Client presentations: Use the "story first, data second" sequencing to create emotional stakes before presenting analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-300 mt-1">•</span>
                            <span>Team meetings: Apply the Lighthouse Technique to engage every stakeholder, not just the most senior person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-300 mt-1">•</span>
                            <span>Job interviews: Use pacing variation to emphasize key achievements rather than delivering everything at the same tempo</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-300 mt-1">•</span>
                            <span>Written communication: Apply the same "contextualize data" principle when writing reports and memos</span>
                          </li>
                        </ul>
                      </div>

                      <p className="mt-4 text-amber-200 font-medium">
                        The pitch was not just a course assignment. It was a rehearsal for real professional 
                        scenarios where my ability to communicate with confidence will determine whether 
                        my ideas get adopted or ignored.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Documents */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Our Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-slate-600" />
                  <h3 className="font-semibold text-slate-800">Business Plan</h3>
                </div>
                <div className="aspect-[4/3] bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 text-sm">
                  [Upload Business Plan PDF]
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Presentation className="w-5 h-5 text-slate-600" />
                  <h3 className="font-semibold text-slate-800">Pitch Deck</h3>
                </div>
                <div className="aspect-[4/3] bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 text-sm">
                  [Upload Pitch Deck PDF]
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Writing Reflection */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Process Writing: How We Developed the Business Plan
              </h2>
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                The business plan went through multiple rounds of feedback from three different 
                sources: GenAI, a peer reviewer, and my teacher. Each source offered something 
                different, and learning to synthesize their input was itself a valuable skill.
              </p>
            </div>

            {/* Three Feedback Sources */}
            <div className="space-y-6">
              <FeedbackBlock type="teacher" title="Teacher Feedback on Written Plan">
                <p className="mb-3">
                  My teacher reviewed our draft and pointed out that several of our market 
                  assumptions lacked proper citations. For example, we claimed that "the corporate 
                  gifting market in Hong Kong is growing at 8% annually" but did not provide a source.
                </p>
                <p className="mb-0">
                  She emphasized that in academic and professional writing, every claim needs 
                  backing. I went back and added citations from the Hong Kong Trade Development 
                  Council and Deloitte market reports. This strengthened our credibility and 
                  made the plan feel more rigorous.
                </p>
              </FeedbackBlock>

              <FeedbackBlock type="peer" title="Peer Reviewer Feedback">
                <p className="mb-3">
                  My peer reviewer gave me feedback that I initially dismissed but later realized 
                  was crucial. She said the financial table in Section 4 was "difficult to read" 
                  and that she had to squint to understand which column was which.
                </p>
                <p className="mb-0">
                  At first I thought this was just a formatting preference. But then I realized: 
                  if a peer struggled to read it, a busy investor definitely would. I simplified 
                  the layout by removing redundant columns, adding clearer headers, and using 
                  alternating row colors. The content stayed the same but became significantly 
                  more accessible.
                </p>
              </FeedbackBlock>

              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <CompetencyBadge label="Synthesis Competency" variant="highlight" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3">What I Learned About Feedback Integration</h4>
                <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.9' }}>
                  Each feedback source had different strengths. The AI was excellent at stress 
                  testing logical assumptions but gave generic marketing advice that did not fit 
                  our specific B2B strategy. My peer caught usability issues that I was too close 
                  to the document to see. My teacher ensured academic rigor and proper attribution. 
                  The skill is knowing when to accept feedback and when to push back. Not all 
                  feedback is equally valid, and learning to filter is part of becoming a better 
                  communicator.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GenAI Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                How I Used GenAI as a Critique Partner
              </h2>
              <CompetencyBadge label="Academic Competency" variant="academic" />
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                I used ChatGPT 4.0 as a tool to stress test our financial assumptions before 
                submitting our plan. My goal was not to have AI write content for me, but to 
                have it challenge our logic the way an investor might.
              </p>
            </div>

            <GenAIChatContainer
              title="My Conversation with ChatGPT 4.0"
              messages={genAIMessages}
            />

            <div className="mt-8 space-y-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What I Took From This Feedback
                </h4>
                <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.9' }}>
                  The AI correctly identified that our SEN training costs were probably 
                  underestimated. Specialized training does require lower instructor to trainee 
                  ratios and additional support infrastructure. We revised our expense assumptions 
                  upward by 15%, which made our model more realistic even if it slightly reduced 
                  our projected returns.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  What I Discarded
                </h4>
                <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.9' }}>
                  The AI also gave generic marketing suggestions about "influencer partnerships" 
                  and "social media campaigns." These made sense for a B2C chocolate brand, but 
                  our Year 2 strategy focused heavily on B2B corporate gifting where personal 
                  relationships and corporate sales channels matter more than Instagram reach. 
                  I recognized this as a limitation of AI: it gives plausible sounding advice 
                  that may not fit your specific context. The skill is knowing when to say 
                  "that does not apply to us."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Peer Team Review */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                What I Learned from Watching Team 5 (EcoPoint)
              </h2>
              <CompetencyBadge label="Collaborative Competency" variant="default" />
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-6" style={{ lineHeight: '1.9' }}>
              <p>
                Reviewing another team's pitch was unexpectedly valuable. Team 5 presented EcoPoint, 
                a sustainability focused app concept. Their content was genuinely strong. They had 
                done thorough research, their market analysis was solid, and their revenue projections 
                were reasonable. On paper, their pitch should have been excellent.
              </p>
              <p>
                But watching their delivery revealed a critical problem: the team did not feel like 
                a team. Each member presented their section competently, but the transitions were 
                jarring. When one person finished, there was often an awkward pause before the next 
                person started. During Q&A, it became even more apparent. When a judge asked about 
                the marketing strategy, the marketing lead answered, but other team members looked 
                away or seemed unsure whether to add anything.
              </p>
            </div>

            <QuoteBlock
              quote="A pitch is a team performance, not a series of solo presentations stitched together. Watching Team 5 made me realize that how you work together on stage matters just as much as what each person says individually."
              author="My Observation"
              type="peer"
            />

            <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-600" />
                How This Changed My Team's Approach
              </h4>
              <div className="text-slate-700 leading-relaxed space-y-4" style={{ lineHeight: '1.9' }}>
                <p>
                  After watching their pitch, I proposed what I called a "handover rehearsal" for 
                  our team. We dedicated an entire practice session just to transitions. We scripted 
                  explicit bridge sentences like "I have walked you through the financial opportunity. 
                  Now Jessica will explain how we actually make this happen operationally."
                </p>
                <p>
                  We also practiced Q&A as a team. We agreed on signals for when someone else should 
                  jump in to support an answer. If a question touched on multiple areas, we would 
                  tag team the response rather than having one person try to cover everything alone.
                </p>
                <p>
                  The result was that our pitch felt like one cohesive narrative rather than four 
                  separate segments. The judges later commented that we seemed "well coordinated," 
                  which was directly because we had learned from watching a team that was not.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
