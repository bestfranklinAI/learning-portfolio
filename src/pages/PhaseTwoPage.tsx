import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  CompetencyBadge,
  GoogleDriveVideo
} from '../components/ui';
import { FileText, Presentation, CheckCircle, AlertCircle, TrendingUp, Users, Lightbulb, Camera, ChevronDown, GraduationCap, Bot, Video, Play, ExternalLink } from 'lucide-react';
import financialPhoto from '../assets/financial.jpg';
import groupPhoto from '../assets/group.jpg';
import pitchPdf from '../assets/LABU2060-SENsational-pitch.pdf';
import businessPlanPdf from '../assets/LABU2060 - Final Business Plan.pdf';
import chatgpt1 from '../assets/chatgpt1.png';
import chatgpt2 from '../assets/chatgpt2.png';
import chatgpt3 from '../assets/chatgpt3.png';
import peerQuestionImg from '../assets/peer-question-financial.png';
import instructorFeedbackImg from '../assets/instructor-feedback-financial.png';
import franklinPhoto from '../assets/franklin.png';
import whitneyPhoto from '../assets/whitney.png';

// GenAI conversation - removed, using screenshots instead

export function PhaseTwoPage() {
  const [isPitchExpanded, setIsPitchExpanded] = useState(false);
  const [isBusinessPlanExpanded, setIsBusinessPlanExpanded] = useState(false);

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

      {/* Behind the Scenes Photos */}
      <section className="py-12 bg-slate-50">
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
                      One of many practice sessions where we rehearsed in group study rooms at the library. We enjoyed the team dynamic so much, giving each other feedback on delivery and content.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Evidence Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                <Video className="w-5 h-5 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Pitch Video Evidence
              </h2>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed" style={{ lineHeight: '1.9' }}>
              The following videos document my pitch journey from self-practice to the final presentation. 
              Each recording captures a different stage of development and allows for comparison of growth.
            </p>

            <div className="space-y-8">
              {/* Self Practice Pitch Video */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Play className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Self Practice Pitch (In-Class)</h3>
                    <p className="text-sm text-slate-500">Individual rehearsal before the final presentation</p>
                  </div>
                </div>
                <GoogleDriveVideo
                  driveUrl="https://drive.google.com/file/d/1yC_0WW49NRBSV9K3KEc7pgrFsGpdcaCC/view?usp=drive_link"
                  title="In-Class Self Practice Pitch"
                />
                
                {/* Self Practice Reflection */}
                <div className="p-6 bg-amber-50 border-t border-amber-100">
                  <div className="flex items-center gap-2 mb-4">
                    <CompetencyBadge label="Communicative Competency" variant="communicative" />
                    <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-3">Self-Reflection on Practice Session</h4>
                  <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                    <p>
                      During this in-class self-practice session, I was not fully prepared, which affected the 
                      clarity of my delivery. Watching the recording, I noticed several areas that needed improvement:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-amber-200">
                        <h5 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Areas for Improvement
                        </h5>
                        <ul className="text-sm text-slate-600 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span><strong>Body orientation:</strong> I frequently turned toward the slides rather than facing the audience, which diminished audience engagement and made it seem like I was reading from the screen.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span><strong>Vocal monotony:</strong> My tone remained flat throughout, lacking the vocal variety needed to emphasize key points and maintain audience interest.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span><strong>Audience awareness:</strong> The lack of eye contact and forward-facing posture made the pitch feel more like a presentation to a screen rather than a persuasive appeal to potential investors.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          What I Did Well
                        </h5>
                        <ul className="text-sm text-slate-600 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span><strong>Body gestures:</strong> I used natural hand movements to illustrate key ideas, which added visual interest and helped emphasize important points.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span><strong>Content structure:</strong> Despite the delivery challenges, the logical flow of my financial section remained coherent.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h5 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Improvements Applied in Final Pitch
                      </h5>
                      <ul className="text-sm text-slate-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Practiced maintaining forward-facing posture and only glancing briefly at slides for reference</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Incorporated vocal variation—slowing down for emphasis on key figures like "63% IRR" and raising energy during growth projections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Expanded my use of hand gestures to be more deliberate and meaningful</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Applied the "Lighthouse Technique" for systematic eye contact with judges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Final Business Pitch Video */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Play className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">My Final Business Pitch</h3>
                    <p className="text-sm text-slate-500">Our team's official pitch presentation • Timestamp: 2:35 - 8:12</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1">
                    <img 
                      src={franklinPhoto} 
                      alt="Franklin presenting the final business pitch" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6 flex flex-col justify-center bg-gradient-to-br from-green-50 to-emerald-50">
                    <h4 className="font-semibold text-slate-800 mb-3">Final Pitch Recording</h4>
                    <p className="text-slate-600 mb-4" style={{ lineHeight: '1.8' }}>
                      This recording captures our team's official business pitch for "SENsational" by Hello Cocoa. 
                      My section covers the financial projections and funding ask, demonstrating the improvements 
                      I made after reflecting on my practice session.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-green-200 mb-4">
                      <p className="text-sm text-slate-600">
                        <strong>My segment:</strong> 2:35 - 8:12 (Financial Analysis & Funding Ask)
                      </p>
                    </div>
                    <a
                      href="https://hkust.zoom.us/rec/play/ZiZRsDoyfQ0ocppk1JBkOdRFeYOKDa0_q7dwFpfOVxS4KcpbhPQLSBj-ktKmC5mozhzB3tX-jp6Tf1wC.tLDBIemiFjV8jcZI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-fit"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch Full Pitch Recording
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Reflection Section 1: What Worked */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Worked in Our Pitch
              </h2>
            </div>

            <div className="space-y-8">
              {/* Evidence Based Persuasion */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-4">
                  <CompetencyBadge label="Academic Competency" variant="academic" />
                  <span className="text-sm font-medium text-slate-600">Evidence Based Persuasion</span>
                </div>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    The most effective moment in our pitch came when I presented the 63% IRR projection. 
                    Instead of simply displaying the number and moving on, I contextualized it within 
                    our business strategy. I explained that Year 1 focuses on B2C direct sales at 
                    lower margins, but Year 2 pivots heavily toward B2B corporate gifting where 
                    bulk orders from companies like HSBC and Cathay Pacific would drive significantly 
                    higher profit margins.
                  </p>
                  <p>
                    This worked because I was not just presenting data. I was telling the story 
                    behind the data. The judges could see that we had thought through the "how," 
                    not just the "what." When they later challenged the IRR assumption during Q&A, 
                    I was ready because I had already laid the logical foundation.
                  </p>
                </div>
              </div>

              {/* Audience Connection */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-2 mb-4">
                  <CompetencyBadge label="Communicative Competency" variant="communicative" />
                  <span className="text-sm font-medium text-slate-600">Audience Connection</span>
                </div>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    Another effective element was our opening. Instead of starting with the problem 
                    statement as most teams did, we opened with a human moment. My teammate introduced 
                    a brief story about a SEN youth who struggled to find employment despite being 
                    skilled and motivated. This immediately created emotional stakes before we 
                    transitioned into the business model.
                  </p>
                  <p>
                    This sequencing was intentional. We knew the judges would hear multiple pitches 
                    that day. By leading with a human story rather than statistics, we differentiated 
                    ourselves in the first 30 seconds. The business case became more compelling 
                    because it was anchored to a person, not just a problem.
                  </p>
                </div>
              </div>

              {/* Stage Presence */}
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-center gap-2 mb-4">
                  <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                  <span className="text-sm font-medium text-slate-600">Stage Presence & Visual Delivery</span>
                </div>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    I used what I call the "Lighthouse Technique" for eye contact. Instead of 
                    looking at the screen or my notes, I systematically scanned the room like a 
                    lighthouse beam, making brief eye contact with each judge during different 
                    parts of my section. This created the impression that I was speaking directly 
                    to each person rather than delivering a rehearsed monologue.
                  </p>
                  <p>
                    For the financial slides specifically, I worked with our design lead to create 
                    high contrast visualizations. Our growth curve used a bright green line against 
                    a dark navy background. I also eliminated bullet points from my slides entirely. 
                    Instead, each slide had one number or one phrase. The detail lived in my verbal 
                    delivery, not on the screen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Reflection Section 2: What Needed Improvement */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                What Needed Improvement
              </h2>
            </div>

            <div className="space-y-8">
              {/* Team Transitions */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Team Transitions</h3>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    Watching the recording afterward, I noticed a significant issue with our team 
                    transitions. When I finished my financial section and handed over to our operations 
                    lead, there was an awkward two second pause. Neither of us had scripted the 
                    handover, so it felt disjointed. The judges were briefly confused about whether 
                    I was done speaking.
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CompetencyBadge label="Collaborative Competency" variant="default" />
                    </div>
                    <p className="text-slate-600">
                      This exposed a gap in our team coordination. We had practiced our individual 
                      sections extensively, but we did not rehearse the transitions as a unit. In a 
                      pitch that emphasized teamwork as a core value, the awkward handovers undermined 
                      our message.
                    </p>
                  </div>

                  <p>
                    If I could do it again, I would script explicit bridge sentences like "Now let me 
                    hand you over to Franklin, who will walk you through how we actually make this 
                    happen operationally."
                  </p>
                </div>
              </div>

              {/* Verbal/Vocal Delivery */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Verbal and Vocal Delivery Gaps</h3>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    The biggest gap in my delivery was monotony. When I listen to the recording, 
                    my pacing and tone remain almost constant throughout my section. I speak at 
                    the same speed whether I am explaining routine projections or delivering our 
                    funding ask. This flatness made it harder for the judges to identify what I 
                    wanted them to remember.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        Pacing Issues
                      </h4>
                      <p className="text-sm text-slate-600">
                        I should have slowed down dramatically when delivering the ask: "We are 
                        seeking... three hundred and fifty thousand... Hong Kong dollars." The pauses 
                        between phrases would have added weight.
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
                        have communicated thoughtfulness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Reflection Section 3: Future Application */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Future Application & SMART Goals
              </h2>
            </div>

            <div className="space-y-8">
              {/* SMART Goal Alignment */}
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">SMART Goal Alignment</h3>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    At the beginning of the course, I set a SMART goal focused on "projecting 
                    confidence through structured delivery." Looking at my pitch performance, 
                    I believe I achieved this goal. The evidence is in how I handled the Q&A 
                    challenge on our IRR assumptions.
                  </p>

                  <div className="bg-white rounded-lg p-4 border border-violet-200">
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
                </div>
              </div>

              {/* Key Insights - Fixed colors for readability */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  Key Insights for Future Professional Contexts
                </h3>
                
                <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.9' }}>
                  <p>
                    The most important insight I am taking from this experience is that leadership 
                    communication is not just about accuracy. It is about energy injection. When I 
                    present financial analysis to future managers, the numbers need to be correct, 
                    but my delivery needs to convey conviction.
                  </p>

                  <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-indigo-200">
                    <h4 className="font-semibold text-indigo-800 mb-3">Transferable Applications</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span><strong>Client presentations:</strong> Use "story first, data second" sequencing to create emotional stakes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span><strong>Team meetings:</strong> Apply the Lighthouse Technique to engage every stakeholder</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span><strong>Job interviews:</strong> Use pacing variation to emphasize key achievements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span><strong>Written communication:</strong> Apply "contextualize data" principle in reports</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-indigo-800 font-medium">
                    The pitch was not just a course assignment. It was a rehearsal for real professional 
                    scenarios where my ability to communicate with confidence will determine whether 
                    my ideas get adopted or ignored.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Peer Review Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Peer Review: Business Pitch Analysis
              </h2>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Peer Review: Whitney's Business Pitch</h3>
                  <p className="text-sm text-slate-500">Peer performance analysis • Timestamp: 14:49 - 18:14</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <img 
                    src={whitneyPhoto} 
                    alt="Whitney presenting her business pitch" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-2 mb-3">
                    <CompetencyBadge label="Communicative Competency" variant="communicative" />
                    <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-3">Peer Reflection: Whitney's Presentation</h4>
                  <div className="space-y-4 text-slate-700" style={{ lineHeight: '1.8' }}>
                    <p>
                      Whitney demonstrated exceptional fluency in delivering her ideas, complemented by effective 
                      body gestures and consistent eye contact with the audience. Her professional tone and 
                      confident demeanor created a polished presentation style.
                    </p>
                    
                    <div className="grid gap-3">
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <h5 className="font-semibold text-green-800 mb-1 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Strengths
                        </h5>
                        <p className="text-sm text-slate-600">
                          Excellent verbal fluency, natural body language, strong eye contact, and a professional, 
                          confident delivery that commanded attention.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-amber-200">
                        <h5 className="font-semibold text-amber-800 mb-1 text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Area for Consideration
                        </h5>
                        <p className="text-sm text-slate-600">
                          While occasional brief pauses occurred when recalling content, the more significant 
                          observation was <strong>information density</strong>. Whitney's fluency and extensive 
                          knowledge led her to pack substantial content into her pitch. For first-time listeners, like 
                          potential investors, this volume of information can be challenging to process in real-time.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-indigo-200">
                        <h5 className="font-semibold text-indigo-800 mb-1 text-sm flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Key Takeaway: The Pyramid Narrative
                        </h5>
                        <p className="text-sm text-slate-600">
                          This observation reinforced the <strong>pyramid narrative structure</strong> taught in class: 
                          the distinction between an elevator pitch, a full investor pitch, and a comprehensive business 
                          plan. Each format demands different levels of detail. Sometimes <strong>less is more</strong>, pinpointing 
                          only the most critical points allows the audience to absorb and remember the core message. 
                          Adapting content depth to context and audience capacity is a crucial communication skill.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://hkust.zoom.us/rec/play/ZiZRsDoyfQ0ocppk1JBkOdRFeYOKDa0_q7dwFpfOVxS4KcpbhPQLSBj-ktKmC5mozhzB3tX-jp6Tf1wC.tLDBIemiFjV8jcZI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-fit mt-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Watch Whitney's Pitch (14:49 - 18:14)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pitch Deck - Collapsible Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setIsPitchExpanded(!isPitchExpanded)}
              className="w-full bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold text-slate-900">
                    Our Pitch Deck: SENsational by Hello Cocoa
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Click to {isPitchExpanded ? 'collapse' : 'view'} our full pitch presentation
                  </p>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-transform ${isPitchExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-slate-600" />
              </div>
            </button>

            {isPitchExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <iframe
                    src={pitchPdf}
                    className="w-full h-[600px]"
                    title="SENsational Pitch Deck"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                    <p className="text-sm text-slate-600">
                      📄 LABU2060-SENsational-pitch.pdf
                    </p>
                    <a
                      href={pitchPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Open in new tab →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Business Plan PDF - Collapsible Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setIsBusinessPlanExpanded(!isBusinessPlanExpanded)}
              className="w-full bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold text-slate-900">
                    Our Final Business Plan
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Click to {isBusinessPlanExpanded ? 'collapse' : 'view'} our full business plan document
                  </p>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-transform ${isBusinessPlanExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-slate-600" />
              </div>
            </button>

            {isBusinessPlanExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <iframe
                    src={businessPlanPdf}
                    className="w-full h-[600px]"
                    title="SENsational Final Business Plan"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                    <p className="text-sm text-slate-600">
                      📄 LABU2060 - Final Business Plan.pdf
                    </p>
                    <a
                      href={businessPlanPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-600 hover:text-emerald-800 font-medium"
                    >
                      Open in new tab →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Process Writing Reflection - Feedback from All Sources */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Process Writing: Feedback That Shaped Our Plan
              </h2>
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                The business plan went through multiple rounds of feedback from three different 
                sources: <strong>GenAI</strong>, <strong>peers</strong>, and my <strong>teacher</strong>. 
                Each source offered something different, and learning to synthesize their input was 
                itself a valuable skill. These feedback loops were instrumental in making our plan 
                more robust and persuasive.
              </p>
            </div>

            {/* GenAI Feedback Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">GenAI Feedback (ChatGPT via HKUST)</h3>
                <CompetencyBadge label="Academic Competency" variant="academic" />
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100 mb-4">
                <p className="text-slate-700 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
                  I uploaded our business plan to ChatGPT (provided by HKUST) and prompted it to act as 
                  an <strong>expert financial planner</strong>. I asked it to critique my financial section 
                  specifically, focusing on <strong>tone</strong>, <strong>robustness of assumptions</strong>, 
                  and <strong>clarity of projections</strong>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg border border-cyan-200 overflow-hidden">
                    <img src={chatgpt1} alt="ChatGPT Conversation 1" className="w-full" />
                    <p className="text-xs text-slate-500 p-2 text-center">Uploading the plan for review</p>
                  </div>
                  <div className="bg-white rounded-lg border border-cyan-200 overflow-hidden">
                    <img src={chatgpt2} alt="ChatGPT Conversation 2" className="w-full" />
                    <p className="text-xs text-slate-500 p-2 text-center">AI critique on financial assumptions</p>
                  </div>
                  <div className="bg-white rounded-lg border border-cyan-200 overflow-hidden">
                    <img src={chatgpt3} alt="ChatGPT Conversation 3" className="w-full" />
                    <p className="text-xs text-slate-500 p-2 text-center">Detailed feedback on tone & robustness</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Benefits of GenAI Feedback
                    </h4>
                    <p className="text-sm text-slate-600">
                      GenAI was excellent at <strong>stress-testing logical assumptions</strong>. It identified 
                      that our SEN training costs might be underestimated and suggested increasing our buffer 
                      by 15-20%. This helped us anticipate investor skepticism.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Limitations of GenAI Feedback
                    </h4>
                    <p className="text-sm text-slate-600">
                      GenAI also gave <strong>generic marketing advice</strong> about influencer partnerships 
                      that didn't fit our B2B strategy. The skill is knowing when to accept feedback and 
                      when to push back based on context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Peer Feedback Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Peer Feedback on Financial Model</h3>
                <CompetencyBadge label="Collaborative Competency" variant="default" />
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
                      Our peer reviewers asked probing questions about our financial model that pushed us 
                      to strengthen our assumptions. They specifically challenged:
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>The <strong>growth rate assumptions</strong> in our revenue projections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>The <strong>sustainability of our business model</strong> long-term</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>How we would <strong>scale training operations</strong> as demand grew</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-slate-800 mb-2">My Response to Peer Feedback</h4>
                      <p className="text-sm text-slate-600">
                        I revised our financial section to include more detailed breakdowns of our growth 
                        assumptions and added a sensitivity analysis showing how the model performs under 
                        different scenarios. This made our projections more credible.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-blue-200 overflow-hidden">
                    <p className="text-xs text-slate-500 p-3 bg-slate-50 font-medium uppercase tracking-wide">📸 Evidence: Peer Questions</p>
                    <img src={peerQuestionImg} alt="Peer Questions on Financial Model" className="w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Feedback Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Teacher Feedback on Initial Draft</h3>
                <CompetencyBadge label="Academic Competency" variant="academic" />
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                    <p className="text-xs text-slate-500 p-3 bg-slate-50 font-medium uppercase tracking-wide">📸 Evidence: Instructor Feedback</p>
                    <img src={instructorFeedbackImg} alt="Instructor Feedback on Financial Plan" className="w-full" />
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
                      Our instructor provided detailed feedback on our initial draft, asking for more 
                      specificity in key operational areas:
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Number of SEN staff</strong> we planned to train and employ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>The <strong>exact period of our training sections</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span><strong>Timeline for scaling</strong> operations</span>
                      </li>
                    </ul>
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-slate-800 mb-2">My Response to Teacher Feedback</h4>
                      <p className="text-sm text-slate-600">
                        I added specific numbers: "Train 15 SEN individuals in Year 1, scaling to 40 by Year 3" 
                        and "8-week intensive training program with 2-week on-the-job transition." This level 
                        of detail demonstrated we had thought through implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Synthesis */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-semibold text-slate-800">What I Learned About Feedback Integration</h3>
              </div>
                <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.9' }}>
                Each feedback source had different strengths. <strong>GenAI</strong>{' '}was excellent at stress-testing 
                logical assumptions but gave generic advice that didn't always fit our context. <strong>Peers</strong>{' '} 
                caught practical issues and asked questions a real investor would ask. My <strong>teacher</strong>{' '} 
                ensured academic rigor and pushed for specificity. Together, these three sources of feedback helped 
                us create a plan that was <strong>logical, practical, and detailed</strong>{' '}, ready to withstand 
                scrutiny from judges.
                </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
