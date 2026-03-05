interface ChatMessage {
    text: string;
    sender: 'bot' | 'user';
    options?: string[];
}

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../data/colors';

const Chatbot = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { text: "Hi there! I'm DigiBot. How can I help you scale your business today?", sender: 'bot', options: ["Explore Services", "Check Pricing", "Book a Free Audit", "Talk to a Human"] }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const userMsg = inputValue;
        setInputValue("");
        handleOptionClick(userMsg);
    };

    const handleOptionClick = (option: string) => {
        setMessages(prev => [...prev, { text: option, sender: 'user' }]);
        setIsTyping(true);

        setTimeout(() => {
            let botResponse: ChatMessage = { text: "", sender: 'bot', options: [] };

            switch (option) {
                case "Explore Services":
                    botResponse = {
                        text: "Great! To help you better, what is your main goal right now?",
                        sender: 'bot',
                        options: ["Scale sales with ads", "Get more local customers", "Improve my website", "Long term SEO growth", "Manage my social media"]
                    };
                    break;
                case "Scale sales with ads":
                    botResponse = {
                        text: "Ads are a great way to grow fast! Which platform do you prefer?",
                        sender: 'bot',
                        options: ["Google Ads", "Meta Ads", "Help me choose"]
                    };
                    break;
                case "Google Ads":
                    botResponse = { text: "Redirecting you to our Google Ads service page...", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/services/google-ads');
                    break;
                case "Meta Ads":
                    botResponse = { text: "Taking you to our Meta Ads (FB & Insta) service page...", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/services/meta-ads');
                    break;
                case "Help me choose":
                    botResponse = { text: "No problem! Google Ads are best for people searching for you, while Meta ads are great for building brand awareness. Check out both on our services page.", sender: 'bot', options: ["See All Services", "Back to Menu"] };
                    break;
                case "Get more local customers":
                    botResponse = { text: "Local reach is key! Navigating to our GMB & Local SEO page.", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/services/gmb');
                    break;
                case "Improve my website":
                    botResponse = { text: "A fast, clean website is the foundation. Taking you to Web Development.", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/services/web-development');
                    break;
                case "Long term SEO growth":
                    botResponse = { text: "SEO is a marathon, not a sprint. Let's look at our SEO services.", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/services/google-seo');
                    break;
                case "Manage my social media":
                    botResponse = { text: "Consistency is everything on social. Heading to Social Media Management.", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/services/social-media');
                    break;
                case "See All Services":
                    navigate('/services');
                    botResponse = { text: "Here are all our services.", sender: 'bot', options: ["Back to Menu"] };
                    break;
                case "Check Pricing":
                    botResponse = { text: "Here is our standard pricing range:\n• SEO: ₹6,500 - ₹12,000/mo\n• Ads Fee: ₹6,500 - ₹18,000/mo\n• Social Media: ₹5,500/mo\n• Web Design: ₹6,500 - ₹30,000", sender: 'bot', options: ["View Pricing Page", "Back to Menu"] };
                    break;
                case "View Pricing Page":
                    navigate('/pricing');
                    botResponse = { text: "I've taken you to our pricing page.", sender: 'bot', options: ["Back to Menu"] };
                    break;
                case "Book a Free Audit":
                    botResponse = { text: "Excellent choice! A site audit is the first step to growth. I'll take you to the contact page.", sender: 'bot', options: ["Back to Menu"] };
                    navigate('/contact');
                    break;
                case "Talk to a Human":
                    botResponse = { text: "You can reach our team at hello@digiudaan.com or call +91 88856 93465.", sender: 'bot', options: ["Back to Menu"] };
                    break;
                case "Back to Menu":
                    botResponse = { text: "How else can I help you?", sender: 'bot', options: ["Explore Services", "Check Pricing", "Book a Free Audit", "Talk to a Human"] };
                    break;
                default:
                    botResponse = { text: "I'm still learning! You can try asking about 'price', 'seo', or 'contact'.", sender: 'bot', options: ["Back to Menu"] };
            }

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            <div
                className="chatbot-trigger"
                onClick={() => setIsOpen(!isOpen)}
                style={{ position: "fixed", bottom: "30px", right: "30px", width: "56px", height: "56px", background: colors.accent, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)", zIndex: 1000, transition: "transform 0.3s", fontSize: "22px" }}
            >
                {isOpen ? "✕" : "💬"}
            </div>

            {isOpen && (
                <div className="chatbot-window" style={{ position: "fixed", bottom: "100px", right: "30px", width: "350px", height: "500px", background: "#0a0514", backdropFilter: "blur(20px)", borderRadius: "20px", border: `1px solid ${colors.border}`, boxShadow: "0 20px 50px rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div style={{ padding: "16px", background: colors.accent, color: "white", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                        <div style={{ width: "36px", height: "36px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🤖</div>
                        <div>
                            <div style={{ fontWeight: "700", fontSize: "15px" }}>DigiBot</div>
                            <div style={{ fontSize: "11px", opacity: 0.8 }}>Online • AI Assistant</div>
                        </div>
                    </div>
                    <div style={{ flex: 1, padding: "16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "12px", WebkitOverflowScrolling: "touch" }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{ alignSelf: m.sender === 'bot' ? 'flex-start' : 'flex-end', maxWidth: "85%" }}>
                                <div style={{ padding: "10px 14px", borderRadius: "12px", background: m.sender === 'bot' ? "rgba(255,255,255,0.1)" : colors.accent, color: "white", fontSize: "13px", lineHeight: "1.5", whiteSpace: "pre-wrap" }}>{m.text}</div>
                                {m.sender === 'bot' && m.options && (
                                    <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                        {m.options.map((opt, oi) => (
                                            <button key={oi} onClick={() => handleOptionClick(opt)} style={{ padding: "8px 12px", background: "transparent", border: `1px solid ${colors.accent}`, borderRadius: "20px", color: colors.accent, fontSize: "12px", cursor: "pointer", minHeight: "36px" }}>{opt}</button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && <div style={{ alignSelf: "flex-start", padding: "10px 15px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", fontSize: "12px", color: colors.subText }}>Typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>
                    <div style={{ padding: "12px", background: "rgba(0,0,0,0.3)", borderTop: `1px solid ${colors.border}`, display: "flex", gap: "8px", flexShrink: 0 }}>
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask me anything..." style={{ flex: 1, background: "transparent", border: "none", color: "white", outline: "none", fontSize: "14px", minHeight: "36px" }} />
                        <button onClick={handleSend} style={{ background: colors.accent, border: "none", borderRadius: "8px", width: "36px", height: "36px", color: "white", cursor: "pointer", fontSize: "14px", flexShrink: 0 }}>➤</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
