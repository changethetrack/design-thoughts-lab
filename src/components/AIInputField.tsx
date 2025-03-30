
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface AIInputFieldProps {
  placeholder?: string;
  onSubmit: (input: string) => void;
  isProcessing?: boolean;
  className?: string;
}

export function AIInputField({
  placeholder = "Ask AI for assistance...",
  onSubmit,
  isProcessing = false,
  className = "",
}: AIInputFieldProps) {
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter your request before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="resize-none pr-12 min-h-[80px]"
        disabled={isProcessing}
      />
      <Button
        type="submit"
        size="icon"
        className="absolute bottom-3 right-3"
        disabled={isProcessing || !input.trim()}
      >
        <Send size={16} />
      </Button>
    </form>
  );
}
