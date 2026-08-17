import "server-only";

type QuickAnswer = {
  answer: string;
  suggestedPrompt?: string;
};

const serviceSummary = "Go Execution helps with web development, SEO, paid advertising, branding, content, video and animation, mobile apps, and growth strategy.";

export const chatbotInstructions = `You are the concise website assistant for Go Execution, a digital growth agency. Answer in a warm, helpful way using only these facts: ${serviceSummary} A visitor can book a free consultation through the contact page. Never invent pricing, timelines, guarantees, client results, policies, or contact details. If a visitor needs a tailored quote or a detailed answer, invite them to book a free consultation. Keep answers under 90 words and do not use markdown tables.`;

export function getQuickAnswer(input: string): QuickAnswer {
  const question = input.toLowerCase().trim();

  if (/price|pricing|cost|quote|budget|how much/.test(question)) {
    return { answer: "Every project is scoped around your goals and requirements, so the best next step is a free consultation. The team can then prepare a tailored recommendation and quote.", suggestedPrompt: "Book a free consultation" };
  }

  if (/time|timeline|how long|delivery time|process/.test(question)) {
    return { answer: "In 48 to 72 hrs.", suggestedPrompt: "How do I get started?" };
  }

  if (/contact|consult|call|talk|meeting|get started/.test(question)) {
    return { answer: "You can book a free consultation using the button below this chat. Share a little about your goals and the Go Execution team will follow up.", suggestedPrompt: "Book a free consultation" };
  }

  if (/service|help|offer|seo|website|web development|ads|branding|app|marketing/.test(question)) {
    return { answer: `${serviceSummary} Tell me what you are looking to improve and I can point you in the right direction.`, suggestedPrompt: "Which service is right for me?" };
  }

  return { answer: "I can help with Go Execution's services, getting started, project timelines, and consultations. For a detailed recommendation, book a free consultation and the team will tailor it to your goals.", suggestedPrompt: "What services do you offer?" };
}
