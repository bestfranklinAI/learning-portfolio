import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

interface GenAIChatContainerProps {
  title?: string;
  messages: ChatMessage[];
  className?: string;
}

export function GenAIChatContainer({ 
  title = 'GenAI Prompt & Response', 
  messages, 
  className = '' 
}: GenAIChatContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-50 rounded-xl border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Header - mimics chat window */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-sm font-medium text-gray-600 ml-2">{title}</span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 font-mono text-sm">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'ai' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
            )}
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                message.role === 'user'
                  ? 'bg-white border border-gray-200'
                  : 'bg-indigo-50 border border-indigo-100'
              }`}
            >
              <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                {message.content}
              </p>
            </div>
            {message.role === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <User className="w-4 h-4 text-slate-600" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
