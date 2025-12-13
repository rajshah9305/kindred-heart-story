import { useState } from "react";
import { Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  name: string;
  message: string;
  date: string;
  likes: number;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "Sarah M.",
    message: "Your light continues to shine through all of us who were fortunate enough to know you. Forever grateful for the inspiration you've given me.",
    date: "December 10, 2024",
    likes: 24,
  },
  {
    id: 2,
    name: "James K.",
    message: "A true beacon of hope. The world was better because you were in it, and your legacy lives on in every life you touched.",
    date: "December 8, 2024",
    likes: 31,
  },
  {
    id: 3,
    name: "Maria L.",
    message: "I carry your words with me every day. 'Rise by lifting others' - you showed us how to live with purpose and grace.",
    date: "December 5, 2024",
    likes: 18,
  },
];

export const MemorialMessages = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and message are required.",
        variant: "destructive",
      });
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      likes: 0,
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    
    toast({
      title: "Message shared",
      description: "Thank you for sharing your tribute.",
    });
  };

  const handleLike = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    ));
  };

  return (
    <section id="messages" className="py-32 px-4 bg-card/10 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm mb-8">
            <span className="text-xs tracking-widest text-primary/70">VOICES OF REMEMBRANCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            MEMORIAL MESSAGES
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your memories, thoughts, and tributes. Every message becomes part of an eternal tapestry of love.
          </p>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="mb-16 p-8 border border-border/30 bg-card/20 rounded-sm">
          <h3 className="text-lg tracking-wider text-primary mb-6">LEAVE YOUR TRIBUTE</h3>
          <div className="space-y-4">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
            />
            <Textarea
              placeholder="Share your message, memory, or tribute..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-background/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
            />
            <Button 
              type="submit" 
              className="w-full bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              SHARE MESSAGE
            </Button>
          </div>
        </form>

        {/* Messages List */}
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className="p-6 border border-border/30 bg-card/20 rounded-sm transition-all duration-300 hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-primary font-medium tracking-wide">{msg.name}</h4>
                  <span className="text-xs text-muted-foreground">{msg.date}</span>
                </div>
                <button
                  onClick={() => handleLike(msg.id)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{msg.likes}</span>
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{msg.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
