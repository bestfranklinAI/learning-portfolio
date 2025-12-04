import { motion } from 'framer-motion';
import { 
  FeedbackBlock,
  QuoteBlock,
  CompetencyBadge,
  GoogleDriveVideo
} from '../components/ui';
import { CheckCircle, Lightbulb, Target, ArrowRight, MessageSquare, BookOpen, TrendingUp, Users, Sparkles } from 'lucide-react';
import impromptu1 from '../assets/impromptu1.png';
import impromptu2 from '../assets/impromptu2.png';

export function PhaseOnePage() {
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
              Phase I: Job Interview
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Phase I was a journey of transformation for me. I walked in thinking that interviews were 
              simply about answering questions correctly. I walked out understanding that interviews are 
              really about storytelling, composure, and connecting with another human being.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The biggest lesson? Learning to think on my feet. Whether it was structuring my experiences 
              with STAR or handling surprise questions in class, I discovered that spontaneity can be 
              trained. You just need the right frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NEW SECTION: Common Competencies & Transferable Skills Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Common Competencies & Transferable Skills
              </h2>
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                Before diving into the specific evidence and reflections, I want to outline the key competencies 
                and transferable skills that shaped my preparation and performance throughout Phase I. Understanding 
                these competencies helped me approach the job interview not as an isolated task, but as an opportunity 
                to develop skills I can carry forward into any professional context.
              </p>
            </div>

            {/* Competencies Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CompetencyBadge label="Academic Competency" variant="academic" />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Structured Thinking & Evidence-Based Responses</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  The STAR framework became my anchor for organizing thoughts logically. Instead of rambling through 
                  experiences, I learned to present evidence systematically—setting context, clarifying my role, 
                  detailing actions, and quantifying results.
                </p>
                <div className="text-xs text-indigo-700 font-medium">
                  <span className="bg-indigo-200 px-2 py-1 rounded">Applied in: Mock Interview answers</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CompetencyBadge label="Communicative Competency" variant="communicative" />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Clarity, Conciseness & Audience Awareness</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  I developed the ability to tailor my message to the interviewer's perspective. This meant 
                  anticipating what information they needed, cutting unnecessary details, and emphasizing 
                  relevance to the role I was applying for.
                </p>
                <div className="text-xs text-emerald-700 font-medium">
                  <span className="bg-emerald-200 px-2 py-1 rounded">Applied in: Impromptu speaking, Q&A</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-6 border border-violet-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Confidence, Eye Contact & Non-verbal Cues</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  Beyond words, I learned that interviews are conversations between two humans. Smiling, 
                  maintaining eye contact, and using deliberate pauses instead of fillers all contributed 
                  to projecting confidence and building rapport.
                </p>
                <div className="text-xs text-violet-700 font-medium">
                  <span className="bg-violet-200 px-2 py-1 rounded">Applied in: Body language, facial expressions</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CompetencyBadge label="Intercultural Competency" variant="intercultural" />
                  </div>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Professionalism & Contextual Adaptability</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  Understanding professional norms and adapting to different interview contexts, whether 
                  formal behavioral questions or casual conversation, required awareness of cultural 
                  expectations in workplace communication.
                </p>
                <div className="text-xs text-amber-700 font-medium">
                  <span className="bg-amber-200 px-2 py-1 rounded">Applied in: Tone, formality level</span>
                </div>
              </div>
            </div>

            {/* Transferable Skills Section */}
            <div className="bg-slate-800 rounded-xl p-6 text-white mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                Transferable Skills for Improvement
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-300 mb-2">Think-Before-Speaking</h4>
                  <p className="text-slate-300 text-sm">
                    Using strategic pauses to organize thoughts before responding, replacing filler words with 
                    confident silence.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-300 mb-2">Story-Driven Communication</h4>
                  <p className="text-slate-300 text-sm">
                    Framing experiences as narratives with clear beginnings, conflicts, and resolutions that 
                    resonate with listeners.
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-300 mb-2">Authentic Self-Presentation</h4>
                  <p className="text-slate-300 text-sm">
                    Balancing professionalism with genuine personality, showing passion while maintaining 
                    composure under pressure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section A: Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              What I Was Struggling With
            </h2>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                Before diving into the mock interview preparation, I had to confront some hard truths about 
                my speaking habits. When I watched my early practice recordings, I cringed. The filler words 
                were everywhere: "uh," "I think," "you know." Sometimes I would count three or four in a 
                single sentence. It made me sound uncertain even when I knew the material cold.
              </p>
              <p>
                Beyond the fillers, my answers felt flat. I would describe what happened in a previous 
                experience, but I never made a point. I was telling stories without endings, giving context 
                without conclusions. The listener had to guess what I was trying to communicate.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              What I Did About It
            </h2>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                I developed what I called the "Pause Over Filler" strategy. The principle was simple: 
                every time I felt an "uhm" rising in my throat, I would close my mouth and stay silent 
                for a beat instead. At first, those silences felt unbearably long. I was convinced the 
                interviewer would think I had forgotten my point.
              </p>
              <p>
                But something surprising happened. Those pauses actually made me sound more deliberate. 
                The silence signaled that I was thinking carefully, not struggling to remember. Combined 
                with the STAR framework for structuring my content, I finally felt like I was having a 
                conversation rather than performing a recitation.
              </p>
            </div>

            {/* STAR Framework - Simplified */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The STAR Framework</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { letter: 'S', title: 'Situation', desc: 'Set the scene' },
                  { letter: 'T', title: 'Task', desc: 'What was your role?' },
                  { letter: 'A', title: 'Action', desc: 'What did you do?' },
                  { letter: 'R', title: 'Result', desc: 'What happened?' },
                ].map((item) => (
                  <div key={item.letter} className="text-center">
                    <div className="w-10 h-10 bg-slate-700 text-white font-bold rounded-lg flex items-center justify-center mb-2 mx-auto">
                      {item.letter}
                    </div>
                    <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learning */}
            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">The Transferable Skill</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Silence is not awkward. It is powerful. When I stopped filling every gap with "uhm," 
                    my pauses became punctuation marks that added emphasis to key points. I carried this 
                    technique directly into Phase II when presenting our funding ask. The deliberate pause 
                    before saying "HKD 350,000" made the number land with much more weight. What started 
                    as an interview skill became a presentation skill.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section B: Video Evidence with Integrated Reflections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              My Interview Recordings & Reflections
            </h2>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                I have included recordings below that document my progression. Each recording is followed 
                by my reflection and key learnings, making it easier to understand the connection between 
                evidence and growth.
              </p>
            </div>

            <div className="space-y-12">
              {/* Pre-Mock Practice */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 bg-slate-50 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">1. Pre-Mock Practice Recording</h3>
                    <CompetencyBadge label="Communicative Competency" variant="communicative" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    This is from my early practice sessions during Week 4. You can hear the filler words clearly 
                    and notice how my answers meander without clear structure. I keep this recording as a reminder 
                    of where I started and how far I have come.
                  </p>
                </div>
                
                <div className="p-6">
                  <GoogleDriveVideo 
                    driveUrl="https://drive.google.com/file/d/1YVAF8gU4yzofLAndI52UyXdR0-nYP9PL/view?usp=drive_link"
                    title="Pre-Mock Practice Recording"
                  />
                </div>

                {/* Deep Reflection on Pre-Mock */}
                <div className="p-6 bg-red-50 border-t border-red-100">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">What I Noticed: Key Areas for Improvement</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-xs">1</span>
                        Surface-Level Answers
                      </h5>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        My responses were too brief, just a few sentences when I should have been providing rich, 
                        detailed narratives. I was answering the literal question without giving the interviewer 
                        a window into my thought process or demonstrating the depth of my experience.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-xs">2</span>
                        Lack of Confidence
                      </h5>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        Watching myself, I noticed my voice trailing off at the end of sentences, my eyes darting 
                        away when I felt uncertain, and my posture shrinking. Even when I had good content, my 
                        delivery undermined my credibility.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-xs">3</span>
                        No Personality Showing
                      </h5>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        I sounded like I was reading from a script. There was no humor, no personal anecdotes, 
                        no moments where "me" came through. The interviewer could have been talking to anyone, there 
                        was nothing that made my answers distinctly mine.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-xs">4</span>
                        Inconsistent Energy
                      </h5>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        I started strong but faded as the interview progressed. By the third question, my energy 
                        had dropped noticeably. In a real interview, this inconsistency would signal to the 
                        interviewer that I might not sustain enthusiasm on the job.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Improvement Actions */}
                <div className="p-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">How I Addressed These Issues</h4>
                  <div className="prose prose-slate max-w-none mb-6" style={{ lineHeight: '1.9' }}>
                    <p>
                      After this painful self-review, I developed a systematic approach to tackle each weakness. 
                      For the shallow answers, I forced myself to always include <strong>at least three specific details</strong>{' '}
                      in every response—a number, a name, or a concrete outcome. This pushed me to go deeper 
                      naturally rather than stopping at the surface.
                    </p>
                    <p>
                      For confidence, I practiced what I called "power positioning", sitting up straight, keeping 
                      my hands visible on the table, and forcing myself to maintain eye contact through the 
                      entire answer, not just the beginning. I also worked on ending sentences with a slight 
                      upward inflection of certainty rather than trailing off into uncertainty.
                    </p>
                    <p>
                      To showcase my personality, I identified three personal stories that revealed something 
                      unique about me, my approach to problems, my values, my humor, and practiced weaving them 
                      naturally into different types of questions. The goal was to make the interviewer remember 
                      me as an individual, not just a qualified candidate.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-slate-800 mb-1">The Result</h5>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          By the time I did my actual mock interview with the instructor, these improvements were 
                          visible. My teacher noted that I "answer step by step confidently"—a direct result of 
                          the structural and delivery changes I made after watching this early recording.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actual Mock Interview + Teacher Feedback + My Reflection */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 bg-indigo-50 border-b border-indigo-100">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">2. Actual Mock Interview with Instructor</h3>
                    <CompetencyBadge label="Academic Competency" variant="academic" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    This is the formal mock interview with my instructor. By this point, I had been drilling 
                    the STAR framework and consciously replacing fillers with pauses. The improvement is visible 
                    not just in what I say, but in how I hold myself during silences.
                  </p>
                </div>
                
                <div className="p-6">
                  <GoogleDriveVideo 
                    driveUrl="https://drive.google.com/file/d/1yvrbcZ8N2v8zFqLoUCMkq_01W9tl28d4/view?usp=drive_link"
                    title="Mock Interview with Instructor"
                  />
                </div>

                {/* Teacher Feedback - Right under the video */}
                <div className="p-6 bg-slate-50 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">What My Teacher Said</h4>
                  <FeedbackBlock type="teacher" title="Teacher Feedback">
                    <p className="mb-0">
                      My teacher noted that I <strong>"maintain a stable portrait of being analytical"</strong> and 
                      that I <strong>"answer step by step confidently."</strong> However, she also pointed out that I 
                      needed to <strong>"show my passion to the company"</strong> more clearly. The message was 
                      that competence alone is not enough.
                    </p>
                  </FeedbackBlock>
                </div>

                {/* My Reflection - Right under teacher feedback */}
                <div className="p-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">My Reflection</h4>
                  <div className="prose prose-slate max-w-none" style={{ lineHeight: '1.9' }}>
                    <p>
                      This feedback landed hard because I knew she was right. I had spent so much time perfecting 
                      the structure and eliminating fillers that I forgot to bring any emotion to the conversation. 
                      I was so focused on not making mistakes that I played it completely safe. The result was an 
                      interview that was technically correct but emotionally flat.
                    </p>
                    <p>
                      I realized that in a real job interview, technical competence gets you through the screening 
                      round. But in the final rounds, when you are sitting across from a hiring manager, what 
                      separates candidates is passion. They want to know: Does this person actually care about 
                      what we do? Will they bring energy to the team?
                    </p>
                  </div>

                  <div className="mt-6">
                    <FeedbackBlock type="action" title="How I Applied This in Phase II">
                      <p className="mb-0">
                        I carried this lesson directly into Phase II. When presenting our business pitch, I made a 
                        conscious decision to open with the human impact before the financial returns. Instead of 
                        leading with "63% IRR," I opened with the story of SEN youth gaining meaningful employment 
                        skills. The numbers came second, but they were anchored to a purpose. I showed that I cared 
                        about more than just making money. The teacher's feedback about showing passion transformed 
                        from interview advice into presentation strategy.
                      </p>
                    </FeedbackBlock>
                  </div>
                </div>
              </div>

              {/* Peer Interview + What I Learned from Shirley */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 bg-purple-50 border-b border-purple-100">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">3. Peer Interview (Shirley)</h3>
                    <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Reviewing Shirley's interview was unexpectedly educational. Her content was strong, but 
                    watching her helped me realize something I had been neglecting in my own practice: 
                    facial expressions matter just as much as words.
                  </p>
                </div>
                
                <div className="p-6">
                  <GoogleDriveVideo 
                    driveUrl="https://drive.google.com/file/d/19ykvDEuV96WBtTiDB_Ebq2kVe2MYuZjE/view?usp=drive_link"
                    title="Peer Interview: Shirley"
                  />
                </div>

                {/* What I Learned from Shirley - Right under the video */}
                <div className="p-6 bg-slate-50 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">What I Learned from Watching Shirley</h4>
                  
                  <div className="prose prose-slate max-w-none mb-6" style={{ lineHeight: '1.9' }}>
                    <p>
                      When I reviewed Shirley's mock interview, I was initially focused on her verbal content. 
                      Her answers were logical and well structured. She hit all the key points and demonstrated 
                      clear knowledge of the role. But something felt off, and it took me a while to identify it.
                    </p>
                    <p>
                      Throughout the entire interview, Shirley maintained a completely neutral facial expression. 
                      No smiles, no raised eyebrows, no visual cues of enthusiasm. Even when describing a project 
                      she was supposedly excited about, her face told a different story. It made her seem 
                      disconnected from her own words.
                    </p>
                  </div>

                  <QuoteBlock
                    quote="Confidence is visual, not just verbal. Shirley's neutral expression taught me that a smile is not just about being friendly. It is a signal that you genuinely want to be there, that you are engaged with the conversation, that you are human."
                    author="My Key Takeaway"
                    type="peer"
                  />
                </div>

                {/* How I Applied This */}
                <div className="p-6 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">How I Applied This Learning</h4>
                  <div className="prose prose-slate max-w-none" style={{ lineHeight: '1.9' }}>
                    <p>
                      This observation was a mirror for my own behavior. I watched my practice recordings again 
                      and noticed the same pattern. I was so focused on what I was saying that my face went blank. 
                      I looked serious when I should have looked engaged.
                    </p>
                    <p>
                      In Phase II, I consciously worked on what I called the "smile and scan" technique. When I 
                      introduced our team at the start of the pitch, I smiled and made eye contact with different 
                      audience members. When I delivered our key financial projections, I let genuine enthusiasm 
                      show on my face. It felt theatrical at first, but when I watched the recording, it looked 
                      natural. The technique that felt forced in practice appeared authentic in performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NEW SECTION: In-Class Activities Supporting Phase I Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                In-Class Activities Supporting My Learning
              </h2>
              <CompetencyBadge label="Communicative Competency" variant="communicative" />
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                Beyond the mock interview itself, several in-class activities played a crucial role in developing 
                the skills I needed. These exercises gave me low-stakes opportunities to practice thinking on my 
                feet, which proved invaluable when the pressure was on during the actual interview.
              </p>
            </div>

            {/* The Moment I Froze */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">The Moment I Froze: Week 3 Impromptu Speaking</h3>
                  <p className="text-slate-600 italic">"Should leaders ever lie to their teams?"</p>
                </div>
              </div>
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8" style={{ lineHeight: '1.9' }}>
              <p>
                I remember sitting in class during Week 3 when the instructor threw this question at us without 
                warning. My mind went completely blank. I said something like "No, I don't think so" and sat down. 
                It was embarrassing because I knew I had more to say, but I couldn't organize my thoughts fast enough.
              </p>
              <p>
                What I realized in that moment was that I lacked a mental framework for spontaneous arguments. 
                I could analyze things on paper, but when asked to speak on the spot, I defaulted to binary 
                yes/no answers without any reasoning or nuance.
              </p>
            </div>

            {/* Challenge to Solution Flow */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h4 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center text-sm">1</span>
                  The Challenge
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  When put on the spot, I gave a one word answer with no structure. I had the knowledge inside my 
                  head about ethical leadership, situational ethics, and the importance of context. But I could not 
                  retrieve it fast enough to form a coherent argument. This exposed a gap in my ability to think 
                  and speak simultaneously.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-sm">2</span>
                  Active Learning Solution
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  After class, I revisited the course videos on "Good vs Bad Responses" and discovered the 
                  PREP Framework. This gave me a simple mental scaffold to hang my thoughts on, even when I 
                  had no time to prepare: make a Point, give a Reason, provide an Example, then restate the Point.
                </p>
              </div>
            </div>

            {/* PREP Framework Visual */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                The PREP Framework
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { letter: 'P', title: 'Point', desc: 'State your position clearly' },
                  { letter: 'R', title: 'Reason', desc: 'Explain why you believe this' },
                  { letter: 'E', title: 'Example', desc: 'Provide concrete evidence' },
                  { letter: 'P', title: 'Point', desc: 'Reinforce your conclusion' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center bg-white rounded-lg p-4 border border-amber-100">
                    <div className="w-10 h-10 bg-amber-600 text-white font-bold rounded-lg flex items-center justify-center mb-2 mx-auto">
                      {item.letter}
                    </div>
                    <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Result */}
            <div className="bg-slate-800 rounded-xl p-6 text-white mb-8">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-amber-400" />
                The Payoff: Second Prompt
              </h4>
              <p className="text-slate-200 leading-relaxed mb-4">
                A few weeks later, I was given another impromptu question: <em className="text-amber-300">"When is it okay to break the rules?"</em> 
                This time, I paused for two seconds, ran PREP through my head, and delivered a structured response 
                about how rules exist to serve a purpose, and when following them violates that purpose, 
                thoughtful rule breaking becomes ethical leadership.
              </p>
              <div className="flex items-center gap-2 text-amber-300">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">This "pause and structure" skill carried directly into my Mock Interview</span>
              </div>
            </div>

            {/* Competency Highlight */}
            <div className="p-5 bg-violet-50 rounded-xl border border-violet-200 mb-8">
              <div className="flex items-start gap-3">
                <CompetencyBadge label="Interpersonal Competency" variant="interpersonal" />
              </div>
              <p className="text-slate-700 mt-3 leading-relaxed">
                The real breakthrough was not just the framework itself, but the composure it gave me. 
                In my mock interview, when the instructor asked an unexpected follow up question, I used 
                the same "pause, structure, speak" technique. Instead of panicking or rambling, I gave 
                myself permission to think for a moment. That pause communicated confidence, not uncertainty.
              </p>
            </div>

            {/* Impromptu Speaking Evidence */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">In-Class Impromptu Speaking Practice</h3>
                  <p className="text-sm text-slate-500">Evidence of active learning under time constraints</p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4" style={{ lineHeight: '1.9' }}>
                Throughout the course, our instructor gave us impromptu speaking exercises where we had to 
                think of something to say within <strong>one minute</strong>. These exercises were invaluable 
                practice for learning how to speak under pressure and time constraints while relating our 
                personality in our answers and showcasing who we are as individuals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg border border-indigo-200 overflow-hidden">
                  <img src={impromptu1} alt="Impromptu Speaking Exercise 1" className="w-full" />
                  <p className="text-xs text-slate-500 p-3 text-center">Impromptu question prompt from class</p>
                </div>
                <div className="bg-white rounded-lg border border-indigo-200 overflow-hidden">
                  <img src={impromptu2} alt="Impromptu Speaking Exercise 2" className="w-full" />
                  <p className="text-xs text-slate-500 p-3 text-center">Another impromptu exercise example</p>
                </div>
              </div>

              <div className="bg-white/70 rounded-lg p-4 border border-indigo-100">
                <h4 className="font-semibold text-slate-800 mb-2">What These Exercises Taught Me</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span><strong>Time management:</strong> How to organize thoughts quickly when you only have seconds to prepare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span><strong>Authenticity:</strong> How to connect questions to personal experiences that showcase my personality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span><strong>Composure:</strong> How to stay calm and collected even when caught off guard</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Phase I Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Phase I Summary: Building the Foundation
              </h2>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-white mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Takeaways from Phase I</h3>
              <div className="prose prose-invert max-w-none" style={{ lineHeight: '1.9' }}>
                <p className="text-slate-200">
                  Phase I taught me that job interviews are not tests to pass—they are conversations to have. 
                  The skills I developed here extend far beyond any single interview. I learned to structure 
                  my thoughts under pressure, project confidence through non-verbal cues, and most importantly, 
                  show genuine passion while maintaining composure.
                </p>
              </div>
            </div>

            {/* Competency Summary Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-slate-800">Academic Competency</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  <strong>Phase I:</strong> Used STAR framework for structured, evidence-based answers
                </p>
                <p className="text-indigo-700 text-sm leading-relaxed">
                  <strong>→ Phase II:</strong> Will apply structured reasoning to business pitch Q&A and written plan
                </p>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-slate-800">Communicative Competency</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  <strong>Phase I:</strong> Developed clarity, reduced fillers, practiced impromptu speaking
                </p>
                <p className="text-emerald-700 text-sm leading-relaxed">
                  <strong>→ Phase II:</strong> Will simplify complex financial data for non-expert audience
                </p>
              </div>
              
              <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-violet-600" />
                  <span className="font-semibold text-slate-800">Interpersonal Competency</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  <strong>Phase I:</strong> Built confidence through pausing, learned from peer's non-verbal gaps
                </p>
                <p className="text-violet-700 text-sm leading-relaxed">
                  <strong>→ Phase II:</strong> Will use "smile and scan" technique during team pitch presentation
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-slate-800">Intercultural Competency</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  <strong>Phase I:</strong> Adapted formality to interview context, maintained professionalism
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  <strong>→ Phase II:</strong> Will balance investor-facing professionalism with authentic passion
                </p>
              </div>
            </div>

            {/* Transferable Skills to Phase II */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Transferable Skills I Will Carry into Phase II
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-800">Strategic Pausing</h4>
                    <p className="text-slate-600 text-sm">
                      The "Pause Over Filler" technique will help me deliver key financial figures with gravitas 
                      during the pitch. A deliberate pause before "HKD 350,000" or "63% IRR" makes numbers land harder.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-800">Passion Before Process</h4>
                    <p className="text-slate-600 text-sm">
                      My teacher's feedback about showing passion transformed my approach. In Phase II, I will 
                      lead with human impact (SEN youth employment) before financial returns, anchoring numbers 
                      to purpose.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-800">Visual Confidence</h4>
                    <p className="text-slate-600 text-sm">
                      Learning from Shirley's neutral expression, I will consciously use the "smile and scan" 
                      technique, smiling while making eye contact across the audience to project engagement and 
                      enthusiasm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-800">Framework Thinking</h4>
                    <p className="text-slate-600 text-sm">
                      STAR and PREP frameworks taught me that structure reduces cognitive load. In Phase II, 
                      I will use similar frameworks to handle investor Q&A, quickly organizing my response before 
                      speaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Reflection */}
            <div className="mt-8 p-6 bg-slate-100 rounded-xl border border-slate-200">
              <QuoteBlock
                quote="Phase I was where I learned to speak with structure. Phase II will be where I learn to speak with persuasion. The interview taught me how to present myself; the pitch will teach me how to sell an idea. But the foundation—composure, authenticity, and audience awareness—remains the same."
                author="My Reflection"
                type="self"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
