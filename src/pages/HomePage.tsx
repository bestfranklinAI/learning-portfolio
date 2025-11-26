import { motion } from 'framer-motion';
import { Timeline, SkillGrowthChart, BeforeAfterCard } from '../components/ui';
import heroImg from '../assets/hero.jpg';
import selfieImg from '../assets/selfie.png';

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
    description: 'In the final pitch Q&A, we faced tough questions about our assumptions—specifically about workshop numbers and graduate hiring projections. We answered with confidence, backing up our claims with statistics and evidence. A huge transformation from Week 1.',
    isActive: true,
  },
];

// Skill growth data with numeric 1-10 scale
const skillData: { name: string; startScore: number; endScore: number; color: string }[] = [
  { name: 'Communicating Your Ideas', startScore: 3, endScore: 9, color: '#6366f1' },
  { name: 'Critical Thinking', startScore: 5, endScore: 8, color: '#10b981' },
  { name: 'Independent Learning', startScore: 6, endScore: 9, color: '#8b5cf6' },
  { name: 'Leadership', startScore: 4, endScore: 7, color: '#f59e0b' },
  { name: 'Team Skills', startScore: 3, endScore: 8, color: '#ec4899' },
  { name: 'Language Use', startScore: 5, endScore: 8, color: '#14b8a6' },
  { name: 'Confidence in Written Communication', startScore: 5, endScore: 9, color: '#f97316' },
  { name: 'Confidence in Spoken Communication', startScore: 3, endScore: 9, color: '#8b5cf6' },
  { name: 'GenAI Literacy Skills', startScore: 2, endScore: 8, color: '#06b6d4' },
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
            <SkillGrowthChart skills={skillData} />
          </div>
        </div>
      </section>

      {/* Before & After Section - Competencies & Transferable Skills */}
      <section className="py-16 bg-white">
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
            <p className="text-lg text-slate-600">
              The common competencies and transferable skills I've cultivated throughout this course.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Communicative Competencies */}
            <BeforeAfterCard
              beforeTitle="Communicative Competencies: Before"
              beforeContent="I struggled with audience awareness—I would use technical jargon without considering whether my listeners understood. My spoken language was filled with filler words, and I lacked the ability to adapt my message for different audiences."
              afterTitle="Communicative Competencies: After"
              afterContent="I developed strong audience awareness and learned effective use of spoken language. Now I tailor my message to my audience, using clear and simple language for non-finance stakeholders while maintaining technical accuracy when needed."
            />
            
            {/* Academic Competencies */}
            <BeforeAfterCard
              beforeTitle="Academic Competencies: Before"
              beforeContent="My arguments lacked structure and evidence. I would make claims without backing them up with data, and my written communication was often unclear and unfocused."
              afterTitle="Academic Competencies: After"
              afterContent="I now excel at the effective use of evidence to support my arguments. Whether defending our 63% IRR projection or explaining market assumptions, I always back up claims with statistics and research. My confidence in written communication has grown significantly."
            />

            {/* Interpersonal Competencies */}
            <BeforeAfterCard
              beforeTitle="Interpersonal Competencies: Before"
              beforeContent="I was nervous during team discussions and struggled to assert my ideas confidently. Eye contact was difficult, and I often deferred to others instead of contributing my perspective."
              afterTitle="Interpersonal Competencies: After"
              afterContent="I've developed the ability to communicate confidently in team settings, maintaining eye contact and presenting ideas with conviction. The STAR framework gave me structure, which in turn gave me confidence to engage effectively with teammates and audiences."
            />

            {/* Intercultural Competencies */}
            <BeforeAfterCard
              beforeTitle="Intercultural Competencies: Before"
              beforeContent="Working in diverse teams, I sometimes struggled to adapt my communication style to different perspectives and backgrounds. I wasn't always aware of how my message might be received by others."
              afterTitle="Intercultural Competencies: After"
              afterContent="I learned to be more mindful of different perspectives and adapt my communication accordingly. This skill was essential during our group pitch where we had to present complex ideas to a diverse audience of evaluators."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
