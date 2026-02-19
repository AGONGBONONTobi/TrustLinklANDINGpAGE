
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function askAssistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the TrustLink Assistant. TrustLink is a startup bridging the trust gap between sellers and buyers in Nigeria and Benin. 
        Process: 
        1. Seller creates link. 
        2. Buyer pays via link (using Paystack). Funds are HELD. 
        3. QR code generated for buyer. 
        4. Delivery person scans buyer's QR code on delivery. 
        5. Seller gets transaction code to withdraw funds.
        6. Security: If QR not scanned in 48h, buyer is refunded.
        Keep answers short, professional, and friendly. Speak primarily in French (as the request was in French) but can answer in English too.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Comment puis-je vous aider avec TrustLink ?";
  }
}
