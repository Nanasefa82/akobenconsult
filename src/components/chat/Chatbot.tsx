import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendChatMessage, ChatMessage } from '../../services/gemini';
import { GEMINI_API_KEY, DEFAULT_SYSTEM_PROMPT } from '../../config/gemini';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type ConversationContext = {
  lastTopic: string;
  questionCount: number;
  lastIntent: string;
  userName: string;
  consultationRequested: boolean;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hello! I\'m the Akoben Assistant. How can I help you today with your federal contracting questions?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Conversation history for Gemini API
const initialGeminiMessages: ChatMessage[] = [
  {
    role: 'model' as const,
    parts: [{ text: DEFAULT_SYSTEM_PROMPT }]
  },
  {
    role: 'model' as const,
    parts: [{ text: 'Hello! I\'m the Akoben Assistant. How can I help you today with your federal contracting questions?' }]
  }
];

const initialContext: ConversationContext = {
  lastTopic: '',
  questionCount: 0,
  lastIntent: '',
  userName: '',
  consultationRequested: false,
};

// Intent categories
const intents = {
  greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings', 'howdy', 'hi there', 'hello there', 'how r u', 'how are u'],
  farewell: ['bye', 'goodbye', 'see you', 'talk later', 'until next time', 'cya', 'ttyl', 'see ya'],
  smallTalk: ['how are you', 'how\'s it going', 'what\'s up', 'how do you do', 'how are things', 'how r u', 'how are u', 'whats up', 'hows it going'],
  help: ['help', 'assist', 'support', 'guidance', 'need help', 'can you help', 'assistance', 'i need help'],
  about: ['about you', 'what do you do', 'who are you', 'tell me about', 'what is akoben', 'about akoben', 'company info', 'company information', 'tell me about akoben'],
  services: ['services', 'offerings', 'what do you offer', 'what can you do', 'capabilities', 'what services', 'your services', 'tell me about your services', 'what services do you offer', 'service offerings', 'what do you provide'],
  certification: ['certification', 'certify', '8(a)', 'hubzone', 'sdvosb', 'wosb', 'get certified', 'certification support', 'certification services', 'federal certifications', 'small business certification'],
  proposal: ['proposal', 'bid', 'rfp', 'solicitation', 'opportunity', 'respond to', 'tender', 'proposal management', 'capture management', 'proposal writing', 'proposal development', 'capture planning'],
  contract: ['contract', 'award', 'acquisition', 'procurement', 'federal contract', 'contract management', 'contract support', 'acquisition support', 'federal acquisition'],
  pricing: ['pricing', 'cost', 'price', 'fee', 'charge', 'budget', 'affordable', 'expensive', 'cost analysis', 'pricing strategy', 'cost pricing', 'pricing services'],
  compliance: ['compliance', 'regulation', 'requirements', 'laws', 'rules', 'regulatory', 'compliance risk', 'risk management', 'far compliance', 'dfars', 'federal regulations'],
  contact: ['contact', 'reach', 'email', 'phone', 'call', 'get in touch', 'contact info', 'contact information', 'how to contact', 'reach out'],
  schedule: ['schedule', 'appointment', 'meeting', 'consultation', 'book', 'calendly', 'talk to someone', 'free consultation', 'book a meeting', 'schedule a call', 'talk to an expert'],
  thanks: ['thank', 'thanks', 'appreciate', 'grateful', 'helpful', 'thank you', 'thx', 'ty'],
  affirmative: ['yes', 'yeah', 'sure', 'okay', 'ok', 'sounds good', 'definitely', 'absolutely', 'yep', 'yup', 'k'],
  negative: ['no', 'nope', 'not interested', 'not now', 'maybe later', 'pass', 'nah'],
  federal: ['federal experience', 'federal background', 'government experience', 'federal expertise', 'federal contracting experience', 'government contracting experience'],
};

// More detailed response templates
const responseTemplates = {
  greeting: [
    "Hello! How can I help you with federal contracting today?",
    "Hi there! Welcome to Akoben Consulting. What federal contracting questions can I answer for you?",
    "Greetings! I'm here to assist with your government contracting needs. What can I help with today?"
  ],
  
  farewell: [
    "Thank you for chatting with us today. Feel free to return whenever you have more questions!",
    "It was a pleasure assisting you. Have a great day and good luck with your federal contracting journey!",
    "Goodbye! Don't hesitate to reach out if you need further assistance with government contracting."
  ],
  
  smallTalk: [
    "I'm doing well, thanks for asking! How can I help with your federal contracting needs today?",
    "I'm here and ready to assist you with any government contracting questions. What's on your mind?",
    "I'm great! I'm designed to help businesses like yours navigate federal contracting. What can I help you with?"
  ],
  
  help: [
    "I can help with questions about federal certifications, proposal writing, contract compliance, pricing strategies, and more. What specific area do you need assistance with?",
    "I'd be happy to help! I can provide information on government contracting processes, certifications, or connect you with our experts. What do you need help with?",
    "I'm here to guide you through the federal contracting landscape. Whether it's certifications, proposals, or compliance questions, I can point you in the right direction."
  ],
  
  about: [
    "Akoben Consulting specializes in helping businesses navigate the federal contracting space. We offer services including certification assistance, proposal development, and compliance support to help you win and manage government contracts.",
    "We're a federal contracting consultancy that helps businesses win and manage government contracts. Our expertise includes certifications like 8(a) and HUBZone, proposal writing, pricing strategies, and compliance management.",
    "Akoben Consulting is your partner in government contracting success. We provide end-to-end support from certification to contract management, helping businesses of all sizes compete effectively for federal opportunities."
  ],
  
  services: [
    "Our services include federal certification assistance (8(a), HUBZone, SDVOSB, WOSB), proposal development, pricing strategies, contract management, and compliance support. Which area are you most interested in?\n\nHere's a brief overview of our core services:\n\n1. Acquisition Support - Expert guidance through the federal acquisition process, helping businesses navigate complex regulations and requirements.\n\n2. Capture & Proposal Management - Strategic capture planning and professional proposal development to position your business for success in competitive federal procurements.\n\n3. Cost & Pricing Analysis - Comprehensive cost and pricing strategies to ensure competitive yet profitable bids for government contracts.\n\n4. Compliance & Risk Management - Proactive compliance management and risk mitigation strategies to protect your business while meeting all federal requirements.\n\n5. Certification Support - Expert assistance in obtaining and maintaining critical federal certifications to expand your contracting opportunities.",
    "We offer a comprehensive suite of federal contracting services including certification support, proposal writing and review, pricing strategies, contract management, and regulatory compliance. Our team brings over two decades of experience in federal contracting to help businesses of all sizes navigate the complex government procurement landscape.\n\nOur core services include:\n\n• Acquisition Support\n• Capture & Proposal Management\n• Cost & Pricing Analysis\n• Compliance & Risk Management\n• Certification Support\n\nWhat specific service would you like to learn more about?",
    "Akoben provides expert services across the federal contracting lifecycle: certifications, opportunity assessment, proposal development, pricing strategies, and post-award management. With our deep understanding of federal procurement processes and agency needs, we help position your business for success in the competitive federal marketplace.\n\nOur services are designed to help small and medium-sized businesses successfully navigate the complex federal procurement landscape. Whether you're new to government contracting or looking to expand your federal footprint, we provide the guidance and support needed to succeed.\n\nWhich aspect of our services would you like to explore further?"
  ],
  
  certification: [
    "We offer comprehensive support for businesses seeking federal certifications like 8(a), HUBZone, SDVOSB, WOSB, and more. Our experts guide you through documentation, application submission, and maintaining certification compliance. These certifications can open doors to set-aside contracts and provide competitive advantages in the federal marketplace. Would you like to schedule a consultation about a specific certification?",
    "Our certification services help you navigate the complex application processes for programs like 8(a), HUBZone, WOSB, and SDVOSB. We've helped over 200 businesses successfully obtain these valuable designations. Federal certifications provide small businesses with access to set-aside contracts and subcontracting opportunities that might otherwise be out of reach. Which certification are you interested in?",
    "Obtaining federal certifications like 8(a) or HUBZone can significantly increase your competitive advantage. Our team provides end-to-end support through the certification process with a 95% success rate. These certifications are designed to level the playing field for historically underrepresented groups in federal contracting. Would you like to discuss your eligibility?"
  ],
  
  proposal: [
    "Our proposal management services include opportunity assessment, RFP analysis, content development, compliance review, and submission preparation. Our clients experience up to 40% higher win rates! We provide strategic capture planning and professional proposal development to position your business for success in competitive federal procurements. What type of proposal support do you need?",
    "We offer expert proposal development services that have helped clients win billions in federal contracts. This includes capture strategy, technical writing, past performance documentation, and pricing support. Our capture management services include opportunity identification and qualification, competitive analysis and positioning, win strategy development, and teaming partner identification. Are you responding to a specific opportunity?",
    "Akoben's proposal services cover the entire process from bid/no-bid decision through submission. Our team of former government contracting officers and technical experts ensure your proposals are compliant, compelling, and competitive. We leverage our deep understanding of federal procurement processes and agency needs to help position your business for success in the competitive federal marketplace. What type of contracts are you pursuing?"
  ],
  
  contract: [
    "We provide expert guidance through the federal acquisition process, helping businesses navigate complex regulations and requirements. Our contract management services include negotiation support, modification assistance, and compliance monitoring. With over 20 years of experience in federal contracting, our team offers the expertise needed to secure and manage government contracts effectively. What stage of contracting are you in?",
    "Akoben offers comprehensive contract management services to help you navigate award requirements, deliverable tracking, invoicing procedures, and regulatory compliance. Our acquisition support services include Federal Acquisition Regulation (FAR) compliance guidance, market research and opportunity identification, contract requirements analysis and planning, and contract negotiation support. Our support ensures smooth contract execution and positions you for future opportunities. Do you have a specific contract challenge?",
    "Our contract specialists assist with every aspect of federal contract execution from post-award meetings through closeout. We help you meet all requirements while maximizing profitability and building past performance for future bids. We take a personalized approach to acquisition support, tailoring our services to meet your specific needs and goals. Whether you're new to government contracting or looking to expand your federal footprint, we provide the guidance and support needed to succeed. What specific contract support do you need?"
  ],
  
  pricing: [
    "Our cost and pricing analysis services help you develop competitive yet profitable pricing strategies for government contracts. We assist with cost buildup, indirect rate calculations, and price-to-win analysis. Our comprehensive cost and pricing strategies ensure competitive yet profitable bids for government contracts. Would you like a consultation on pricing strategy?",
    "Effective pricing is crucial for federal contract success. We provide detailed market research, competitive analysis, and cost modeling to help you balance competitiveness with profitability. In government contracting, pricing is about more than just being competitive - it's about understanding the scrutiny that government agencies apply to contract pricing and ensuring your pricing strategy aligns with your business goals. Are you struggling with pricing a specific opportunity?",
    "Akoben's pricing specialists help you navigate complex pricing requirements including DCAA compliance, cost-plus structures, and indefinite delivery contracts. Our strategies help you maximize profit while remaining competitive. Our cost & pricing services include price-to-win analysis, indirect rate development, cost volume preparation, and DCAA compliance support. What pricing challenges are you facing?"
  ],
  
  compliance: [
    "We help businesses navigate the complex regulatory landscape of government contracting with our compliance and risk management services. This includes FAR/DFARS compliance, small business regulations, and industry-specific requirements. Our proactive compliance management and risk mitigation strategies protect your business while meeting all federal requirements. What compliance areas concern you most?",
    "Our compliance experts keep you on track with federal contracting regulations, helping you avoid costly mistakes and penalties. We offer compliance assessments, policy development, and ongoing monitoring services. Our compliance services include Federal Acquisition Regulation (FAR) compliance, Defense Federal Acquisition Regulation Supplement (DFARS) compliance, small business program compliance, and contract clause analysis and compliance. Is there a specific compliance issue you're concerned about?",
    "Staying compliant with federal regulations is essential for long-term contracting success. Akoben provides comprehensive compliance support including documentation systems, training, and audit preparation. Our risk management services include risk assessment and mitigation planning, compliance program development, audit preparation and support, and ongoing compliance monitoring. What regulatory areas do you need help with?"
  ],
  
  contact: [
    "You can reach our team by email at info@akobenconsulting.com, by phone at (555) 123-4567, or through our website contact form. What's the best way for someone to connect with you?",
    "Our team is available Monday through Friday, 9am-5pm Eastern. You can contact us through email, phone, or our website. Would you like our direct contact information?",
    "You can contact Akoben through multiple channels including our website contact form, direct email, or by scheduling a consultation through Calendly. What's your preferred method of communication?"
  ],
  
  schedule: [
    "You can schedule a free 30-minute consultation with one of our federal contracting specialists using our online calendar: https://calendly.com/akobenconsulting/30min. What specific topics would you like to discuss in the consultation?",
    "We offer complimentary consultation calls to discuss your federal contracting needs. You can book directly at https://calendly.com/akobenconsulting/30min. Would you like me to note any specific questions for the consultant?",
    "Our experts are available for personalized consultations - you can schedule directly through Calendly: https://calendly.com/akobenconsulting/30min. This gives you dedicated time with a specialist to discuss your specific situation. Is there a particular day that works best for you?"
  ],
  
  thanks: [
    "You're welcome! Is there anything else I can help you with regarding federal contracting?",
    "Happy to help! Don't hesitate to reach out if you have more questions about government contracting.",
    "My pleasure! Is there any other information you need about our federal contracting services?"
  ],
  
  affirmative: [
    "Great! What specific information would you like me to provide?",
    "Excellent! Let me know what details you need to move forward.",
    "Perfect! What aspects would you like me to elaborate on?"
  ],
  
  negative: [
    "I understand. If you have questions in the future about federal contracting, feel free to chat with us again.",
    "No problem. We're here whenever you need assistance with government contracting.",
    "That's fine. Don't hesitate to reach out if you change your mind or have questions later."
  ],
  
  fallback: [
    "I'm not sure I fully understand your question. Could you provide more details about what you're looking for regarding federal contracting?",
    "I'd like to help but need a bit more information. Could you rephrase your question or specify which aspect of federal contracting you're interested in?",
    "I want to make sure I address your needs correctly. Could you elaborate a bit more on your federal contracting question or which of our services you're interested in?"
  ],
  
  federal: [
    "Akoben Consulting brings over two decades of experience in federal contracting. Our team includes former federal contracting officers and program managers who understand government procurement from the inside. This expertise allows us to provide unique insights into agency priorities, evaluation criteria, and decision-making processes that influence contract awards. Our federal background enables us to help clients navigate complex regulations, position their capabilities effectively, and increase their win probability in the competitive federal marketplace. Would you like to know more about our federal experience or how it benefits your business?",
    "Our deep roots in government contracting give Akoben Consulting a significant advantage in helping clients succeed. Our team has extensive experience working within federal agencies including DoD, GSA, DHS, HHS, and VA. This firsthand knowledge of federal procurement processes allows us to provide insider perspective on how contracting officers evaluate proposals, navigate complex regulations confidently, and position your capabilities in ways that resonate with federal decision-makers. How can our federal expertise help your business today?",
    "Akoben Consulting specializes in federal contracting with expertise gained from over 20 years working within government agencies. We understand the unique challenges small and disadvantaged businesses face in the federal marketplace and provide tailored support to help them navigate set-aside programs and compete successfully for federal contracts. Our team's federal background gives clients an edge in understanding agency needs, compliance requirements, and evaluation criteria. Would you like to learn how our federal expertise can benefit your specific contracting goals?"
  ]
};

// Follow-up questions to enhance conversation
const followUpQuestions = {
  certification: [
    "Which specific certification are you interested in pursuing?",
    "Has your business previously applied for any federal certifications?",
    "Are you familiar with the eligibility requirements for the certification you're seeking?"
  ],
  
  proposal: [
    "Are you currently responding to a specific solicitation?",
    "What types of federal contracts is your organization targeting?",
    "Have you submitted federal proposals before, or is this your first time?"
  ],
  
  contract: [
    "Are you looking for pre-award or post-award contract support?",
    "What type of contract vehicle are you working with?",
    "Are there specific compliance concerns with your contract?"
  ],
  
  pricing: [
    "Are you familiar with the specific pricing requirements for your target contracts?",
    "Does your organization have established indirect rates?",
    "Are you looking for assistance with a specific pricing model like FFP or cost-plus?"
  ],
  
  compliance: [
    "Are there specific regulations you're concerned about complying with?",
    "Has your organization undergone any compliance audits previously?",
    "Are you looking to establish a compliance program or improve an existing one?"
  ],
  
  services: [
    "Which aspect of federal contracting is most challenging for your organization?",
    "Are you new to government contracting or looking to expand your federal business?",
    "What are your primary goals for working with a federal contracting consultant?"
  ],
  
  about: [
    "What specific federal contracting challenges is your organization facing?",
    "How long has your company been involved in government contracting?",
    "What types of federal opportunities are you most interested in pursuing?"
  ]
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [geminiMessages, setGeminiMessages] = useState<ChatMessage[]>(initialGeminiMessages);
  const [input, setInput] = useState('');
  const [context, setContext] = useState<ConversationContext>(initialContext);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const determineIntent = (userInput: string): string => {
    const normalizedInput = userInput.toLowerCase().trim();
    
    // Handle empty or very short inputs
    if (normalizedInput.length < 2) {
      return 'greeting';
    }
    
    // Create a scoring system for intents
    let intentScores: Record<string, number> = {};
    
    // Check each intent category and calculate scores
    for (const [intent, keywords] of Object.entries(intents)) {
      intentScores[intent] = 0;
      for (const keyword of keywords) {
        // Exact match gets highest score
        if (normalizedInput === keyword) {
          intentScores[intent] += 5;
          continue; // Skip further checks for this keyword
        }
        
        // Word boundary match gets high score
        const wordBoundaryRegex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (wordBoundaryRegex.test(normalizedInput)) {
          intentScores[intent] += 3;
          continue; // Skip further checks for this keyword
        }
        
        // Partial match gets lower score
        if (normalizedInput.includes(keyword)) {
          intentScores[intent] += 1;
          
          // Boost score for longer keyword matches
          if (keyword.length > 5) {
            intentScores[intent] += 0.5;
          }
        }
      }
    }
    
    // Find the intent with the highest score
    let maxScore = 0;
    let bestIntent = '';
    
    for (const [intent, score] of Object.entries(intentScores)) {
      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    }
    
    // If we have a clear winner with a reasonable score, return it
    if (maxScore >= 1) {
      return bestIntent;
    }
    
    // Check if this might be a follow-up to the previous topic
    if (context.lastTopic && normalizedInput.length < 20) {
      return context.lastTopic;
    }
    
    return 'fallback';
  };
  
  // Debug function to log intent detection results
  const debugIntentDetection = (userInput: string): void => {
    if (import.meta.env.DEV) {
      const intent = determineIntent(userInput);
      console.log(`Intent detected for "${userInput}": ${intent}`);
    }
  };

  const getRandomResponse = (intent: string): string => {
    const responses = responseTemplates[intent as keyof typeof responseTemplates] || responseTemplates.fallback;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const maybeAddFollowUp = (intent: string, baseResponse: string): string => {
    // Add follow-up questions occasionally to make conversation more natural
    const shouldAddFollowUp = Math.random() < 0.7 && followUpQuestions[intent as keyof typeof followUpQuestions];
    
    if (shouldAddFollowUp && context.questionCount < 2) {
      const followUps = followUpQuestions[intent as keyof typeof followUpQuestions];
      const followUp = followUps[Math.floor(Math.random() * followUps.length)];
      return `${baseResponse}\n\n${followUp}`;
    }
    
    return baseResponse;
  };

  const generateResponse = async (userInput: string): Promise<string> => {
    try {
      // Log intent detection for debugging
      debugIntentDetection(userInput);
      
      // First, determine if this is a simple intent we can handle without the API
      const intent = determineIntent(userInput);
      
      // Update conversation context regardless of response source
      setContext(prev => ({
        ...prev,
        lastTopic: intent !== 'fallback' ? intent : prev.lastTopic,
        questionCount: prev.questionCount + 1,
        lastIntent: intent
      }));
      
      // For simple intents like greetings, farewells, small talk, etc., use our predefined responses
      if (['greeting', 'farewell', 'smallTalk', 'thanks', 'affirmative', 'negative'].includes(intent)) {
        const response = getRandomResponse(intent);
        const enhancedResponse = maybeAddFollowUp(intent, response);
        return enhancedResponse;
      }
      
      // For more complex queries, check if we have a template response first
      if (responseTemplates[intent as keyof typeof responseTemplates]) {
        // If the intent is recognized and we have a template, use it
        const response = getRandomResponse(intent);
        const enhancedResponse = maybeAddFollowUp(intent, response);
        return enhancedResponse;
      }
      
      // If no template or API key is missing, return a fallback response
      if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === '') {
        console.warn('Gemini API key is missing or empty, falling back to template responses');
        return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment or contact us directly at info@akobenconsulting.com.";
      }

      // Add user message to Gemini conversation history
      const updatedGeminiMessages = [...geminiMessages, {
        role: 'user' as const,
        parts: [{ text: userInput }]
      }];
      
      // Send conversation to Gemini API
      const response = await sendChatMessage(updatedGeminiMessages, GEMINI_API_KEY);
      
      // Add Gemini's response to conversation history
      setGeminiMessages([...updatedGeminiMessages, {
        role: 'model' as const,
        parts: [{ text: response }]
      }]);
      
      return response;
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Try to fall back to template responses
      const intent = determineIntent(userInput);
      if (responseTemplates[intent as keyof typeof responseTemplates]) {
        console.log('Falling back to template response for intent:', intent);
        const response = getRandomResponse(intent);
        return maybeAddFollowUp(intent, response);
      }
      
      // If we can't determine intent or don't have a template, use a generic fallback
      if (error instanceof Error && error.message.includes('API key')) {
        return "I'm sorry, there's a configuration issue with my knowledge base connection. Please contact us directly at info@akobenconsulting.com.";
      }
      
      // Generic error message
      return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment or contact us directly at info@akobenconsulting.com.";
    }
  };

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (trimmedInput === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: trimmedInput,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get response from Gemini API
      const botResponse = await generateResponse(trimmedInput);
      
      // Add bot message
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      
      // Update conversation context with the last message for better continuity
      const intent = determineIntent(trimmedInput);
      if (intent !== 'fallback') {
        setContext(prev => ({
          ...prev,
          lastTopic: intent
        }));
      }
    } catch (error) {
      console.error('Error in chat:', error);
      
      // Try to get a template response as fallback
      let fallbackResponse = "I'm sorry, I'm having trouble connecting right now. Please try again later.";
      
      try {
        const intent = determineIntent(trimmedInput);
        if (responseTemplates[intent as keyof typeof responseTemplates]) {
          fallbackResponse = getRandomResponse(intent);
        }
      } catch (fallbackError) {
        console.error('Error generating fallback response:', fallbackError);
      }
      
      // Add error message
      const errorMessage: Message = {
        id: messages.length + 2,
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 left-6 bg-primary text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Akoben Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-800'
                    } max-w-[85%]`}
                  >
                    {message.text.split('\n\n').map((paragraph, i) => (
                      <p key={i} className={i > 0 ? 'mt-2' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                disabled={isLoading}
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 disabled:bg-gray-400"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;