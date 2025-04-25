import axios from 'axios';

// Define the base URL for Gemini API
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta';

// Interface for chat message
export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

// Interface for chat request
interface ChatRequest {
  contents: ChatMessage[];
  generationConfig?: {
    temperature?: number;
    topP?: number;
    topK?: number;
    maxOutputTokens?: number;
  };
}

// Interface for chat response
export interface ChatResponse {
  candidates: {
    content: {
      parts: { text: string }[];
      role: string;
    };
    finishReason: string;
    index: number;
  }[];
}

/**
 * Send a message to the Gemini API and get a response
 * @param messages Array of chat messages
 * @param apiKey Gemini API key
 * @returns Promise with the chat response
 */
export const sendChatMessage = async (
  messages: ChatMessage[],
  apiKey: string
): Promise<string> => {
  try {
    // Validate API key
    if (!apiKey || apiKey.trim() === '') {
      throw new Error('Gemini API key is missing or empty');
    }

    // Prepare the request payload
    const payload: ChatRequest = {
      contents: messages,
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024,
      },
    };

    // Make the API request
    const response = await axios.post<ChatResponse>(
      `${GEMINI_API_URL}/models/gemini-pro:generateContent?key=${apiKey}`,
      payload
    );

    // Extract and return the response text
    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0 &&
      response.data.candidates[0].content &&
      response.data.candidates[0].content.parts &&
      response.data.candidates[0].content.parts.length > 0
    ) {
      return response.data.candidates[0].content.parts[0].text;
    }

    throw new Error('Invalid response format from Gemini API');
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};