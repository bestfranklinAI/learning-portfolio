import { motion } from 'framer-motion';
import { Timeline, SkillGrowthChart, BeforeAfterCard } from '../components/ui';
import { CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.jpg';
import selfieImg from '../assets/selfie.png';
import skillsComparisonImg from '../assets/skills-strategies-comparison.png';
import beforeAssessmentImg from '../assets/before-semester-assessment.png';
import afterAssessmentImg from '../assets/after-semester-assessment.png';

// Timeline data for the semester journey
const timelineItems = [
  {
    week: 'Week 1',
    title: 'The Starting Point',
    description: 'In my self-assessment, I scored low on confidence, communication, and team skills. I found myself constantly using filler words like "uhm" and "like," which made me appear less confident. I knew I needed to work on presenting myself more professionally.',
    isActive: false,
  },
  {
    week: 'Week 4',
    title: 'The Turning Point',
    description: 'The mock interview was a game-changer. I learned to use the STAR framework to structure my answers, which gave me confidence. I also learned how to polish my CV to match job descriptions and showcase my personality consistently through both my CV and job interview responses.',
    isActive: true,
  },
  {
    week: 'Week 9',
    title: 'Learning About My Audience',
    description: 'I learned how to create a compelling pitch deck that tells a story. The key was making myself clear—guiding the audience from problem to solution in a logical flow. I realized that being "accurate" isn\'t the same as being "clear" to non-finance audiences.',
    isActive: true,
  },
  {
    week: 'Week 13',
    title: 'Putting It All Together',
    description: 'In the final pitch Q&A, we faced tough questions about our assumptionsspecifically about workshop numbers and graduate hiring projections. We answered with confidence, backing up our claims with statistics and evidence. A huge transformation from Week 1.',
    isActive: true,
  },
];

// Skill growth data with numeric 1-5 scale (based on self-assessment)
const skillData: { name: string; startScore: number; endScore: number; color: string }[] = [
  { name: 'Communicating Your Ideas', startScore: 3, endScore: 5, color: '#6366f1' },
  { name: 'Critical Thinking', startScore: 4, endScore: 4, color: '#10b981' },
  { name: 'Independent Learning', startScore: 4, endScore: 4, color: '#8b5cf6' },
  { name: 'Leadership', startScore: 3, endScore: 5, color: '#f59e0b' },
  { name: 'Team Skills', startScore: 3, endScore: 5, color: '#ec4899' },
  { name: 'Language Use', startScore: 3, endScore: 4, color: '#14b8a6' },
  { name: 'Confidence in Written Communication', startScore: 3, endScore: 4, color: '#f97316' },
  { name: 'Confidence in Spoken Communication', startScore: 3, endScore: 4, color: '#8b5cf6' },
  { name: 'GenAI Literacy Skills', startScore: 4, endScore: 5, color: '#06b6d4' },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Student Info Hero Section */}
      <section 
        className="relative py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-indigo-100 text-sm font-medium">
                Learning Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CHEUNG, Hau Yin Franklin
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-2">
              20950031
            </p>
            <p className="text-lg text-indigo-200">
              LABU 2060 T01
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Selfie Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-white ring-2 ring-indigo-100">
                <img 
                  src={selfieImg} 
                  alt="Franklin Cheung" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                My LABU2060 Learning Journey
              </h2>
              
              <div className="prose prose-slate prose-lg max-w-none">
                <p>
                  When I started LABU2060, I honestly thought communication was just a "nice to have" compared to my finance skills. I could build complex financial models, but when it came to explaining them? That's where I struggled. In Week 1, I was that student who used too many "uhm"s and "I think"s, and I knew it was hurting how people perceived me.
                </p>

                <p>
                  My goal was simple: I wanted my speaking to match the quality of my work. Over 13 weeks, I learned to structure my thoughts using the STAR framework, practiced until my filler words became pauses, and eventually delivered a business pitch where I could handle tough Q&A with confidence.
                </p>

                <p>
                  This portfolio documents that journey—the struggles, the breakthroughs, and the skills I developed along the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              My Semester Timeline
            </h2>
            <p className="text-lg text-slate-600">
              The key moments that shaped my learning this semester.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Timeline items={timelineItems} />
            <div className="space-y-6">
              <SkillGrowthChart skills={skillData} />
              {/* Evidence: Skills & Strategies Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4"
              >
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">📸 Evidence: Self-Assessment Comparison</p>
                <img 
                  src={skillsComparisonImg} 
                  alt="Skills and Strategies Comparison - Before and After" 
                  className="w-full rounded-lg border border-slate-100"
                />
                <p className="text-sm text-slate-600 mt-3 italic">
                  My self-assessment at the beginning (highlighted in yellow, left) vs. end of the course (highlighted in yellow, right), showing measurable growth in key areas, especially in leadership, team skills and communication.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Skills Self-Assessment Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Communication Skills Self-Assessment
            </h2>
            <p className="text-lg text-slate-600">
              Beyond skills and strategies, I also tracked my overall communication effectiveness using a standardized self-assessment tool throughout the semester.
            </p>
          </motion.div>

          {/* Before and After Assessment Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Before Assessment */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-sm border border-amber-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 font-bold">W1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Before Semester</h3>
                    <p className="text-sm text-slate-500">Week 1 Assessment</p>
                  </div>
                </div>

                <div className="bg-white/60 rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">Score Breakdown:</span>
                  </div>
                  <div className="flex gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">2 A's</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">8 B's</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">4 C's</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-amber-600">43</span>
                    <span className="text-sm text-slate-500">/ 60 points</span>
                  </div>
                </div>

                <div className="bg-amber-100/50 rounded-lg p-3">
                  <p className="text-sm text-amber-800 font-medium">
                    📊 Interpretation: "Effective communicator who only occasionally causes communication failure"
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wide">📸 Evidence</p>
                <img 
                  src={beforeAssessmentImg} 
                  alt="Before Semester Communication Assessment" 
                  className="w-full rounded-lg border border-amber-100 shadow-sm"
                />
              </div>
            </motion.div>

            {/* After Assessment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-sm border border-emerald-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">W13</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">After Semester</h3>
                    <p className="text-sm text-slate-500">Week 13 Assessment</p>
                  </div>
                </div>

                <div className="bg-white/60 rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">Score Breakdown:</span>
                  </div>
                  <div className="flex gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">8 A's</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">6 B's</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">1 C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-emerald-600">52</span>
                    <span className="text-sm text-slate-500">/60 points</span>
                  </div>
                </div>

                <div className="bg-emerald-100/50 rounded-lg p-3">
                  <p className="text-sm text-emerald-800 font-medium">
                    📊 Interpretation: "Exceptionally effective communicator who almost never causes misunderstanding"
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wide">📸 Evidence</p>
                <img 
                  src={afterAssessmentImg} 
                  alt="After Semester Communication Assessment" 
                  className="w-full rounded-lg border border-emerald-100 shadow-sm"
                />
              </div>
            </motion.div>
          </div>

          {/* Score Improvement Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-amber-600">43</span>
                  <p className="text-xs text-slate-500">Week 1</p>
                </div>
                <ArrowRight className="w-6 h-6 text-indigo-400" />
                <div className="text-center">
                  <span className="text-3xl font-bold text-emerald-600">52</span>
                  <p className="text-xs text-slate-500">Week 13</p>
                </div>
                <div className="ml-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                  +9 points
                </div>
              </div>
              <div className="flex-1 md:border-l md:border-indigo-200 md:pl-6">
                <h4 className="font-semibold text-slate-800 mb-2">Reflection on My Growth</h4>
                <p className="text-sm text-slate-600">
                  This 9-point improvement represents my transformation from an "occasionally effective" to an "exceptionally effective" communicator. 
                  The shift from 4 C's to only 1 C shows I've addressed my major weaknesses, particularly in <strong>reducing filler words</strong>, <strong>structuring my responses</strong>, and <strong>maintaining audience engagement</strong>. 
                  These improvements directly correlate with the STAR framework training in Phase I and the audience-focused pitch preparation in Phase II.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section - Competencies & Transferable Skills */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Competencies & Transferable Skills Developed
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              The self-assessments above quantify my growth, but the real value lies in the specific competencies I've developed. 
              These transferable skills were cultivated through the coursework in LABU2060, from the Mock Interview in Phase I to the Business Pitch in Phase II.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Linked to Communication Assessment
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> Evidenced in Skill Growth
              </span>
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Communicative Competencies */}
            <BeforeAfterCard
              beforeTitle="Communicative Competencies: Before"
              beforeContent="I struggled with audience awareness, I would use technical jargon without considering whether my listeners understood. My spoken language was filled with filler words, and I lacked the ability to adapt my message for different audiences. This contributed to my lower scores in 'Language Use' (3/5) and 'Communicating Ideas' (3/5) at the start."
              afterTitle="Communicative Competencies: After"
              afterContent="I developed strong audience awareness and learned effective use of spoken language. Now I tailor my message to my audience, using clear and simple language for non-finance stakeholders while maintaining technical accuracy when needed. This is reflected in my improved scores: 'Communicating Ideas' jumped to 5/5 and 'Language Use' to 4/5."
            />
            
            {/* Academic Competencies */}
            <BeforeAfterCard
              beforeTitle="Academic Competencies: Before"
              beforeContent="My arguments lacked structure and evidence. I would make claims without backing them up with data, and my written communication was often unclear and unfocused. My 'Critical Thinking' started at 4/5, but my 'Confidence in Written Communication' was only 3/5."
              afterTitle="Academic Competencies: After"
              afterContent="I now excel at the effective use of evidence to support my arguments. Whether defending our 63% IRR projection or explaining market assumptions, I always back up claims with statistics and research. My 'Confidence in Written Communication' improved to 4/5, and I maintained strong critical thinking throughout the course."
            />

            {/* Interpersonal Competencies */}
            <BeforeAfterCard
              beforeTitle="Interpersonal Competencies: Before"
              beforeContent="I was nervous during team discussions and struggled to assert my ideas confidently. Eye contact was difficult, and I often deferred to others instead of contributing my perspective. My 'Team Skills' and 'Leadership' both started at 3/5, and my 'Confidence in Spoken Communication' was also 3/5."
              afterTitle="Interpersonal Competencies: After"
              afterContent="I've developed the ability to communicate confidently in team settings, maintaining eye contact and presenting ideas with conviction. The STAR framework gave me structure, which in turn gave me confidence. My 'Team Skills' and 'Leadership' both improved to 5/5, and 'Confidence in Spoken Communication' rose to 4/5."
            />

            {/* Intercultural & GenAI Competencies */}
            <BeforeAfterCard
              beforeTitle="Digital & Intercultural Competencies: Before"
              beforeContent="Working in diverse teams, I sometimes struggled to adapt my communication style to different perspectives. Additionally, while I was familiar with GenAI tools, I hadn't fully integrated them into my learning process. My 'GenAI Literacy Skills' started at 4/5."
              afterTitle="Digital & Intercultural Competencies: After"
              afterContent="I learned to be more mindful of different perspectives and adapt my communication accordingly. I also leveraged GenAI (ChatGPT) effectively for brainstorming and stress-testing arguments during the Business Plan writing process. My 'GenAI Literacy Skills' improved to 5/5, demonstrating my ability to use AI as a learning and productivity tool."
            />
          </div>

          {/* Coursework Connection Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-white rounded-2xl p-6 border border-slate-200"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">How Coursework Contributed to My Growth</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-indigo-600 font-semibold text-sm">I</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Phase I: Mock Interview</h4>
                  <p className="text-sm text-slate-600">
                    The STAR framework training directly improved my <strong>Communicative</strong> and <strong>Interpersonal Competencies</strong>. 
                    Structuring my answers reduced filler words and boosted my confidence in spoken communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-semibold text-sm">II</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Phase II: Business Pitch & Plan</h4>
                  <p className="text-sm text-slate-600">
                    The pitch preparation enhanced my <strong>Academic Competencies</strong> (evidence-based arguments) and <strong>Digital Competencies</strong> (GenAI for writing support). 
                    The group collaboration strengthened my Leadership and Team Skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
