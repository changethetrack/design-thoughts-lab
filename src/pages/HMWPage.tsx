
import React, { useState } from "react";
import { AIInputField } from "@/components/AIInputField";
import { HMWCard, HMWQuestion } from "@/components/HMWCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Helper function to generate mock HMW questions (simulating AI responses)
const generateMockHMWQuestions = (prompt: string): HMWQuestion[] => {
  // This would be replaced with actual AI calls in a real implementation
  return [
    {
      id: `hmw-${Date.now()}-1`,
      question: `How might we help users better understand ${prompt} without overwhelming them?`,
      context: "Focusing on simplifying complex information",
    },
    {
      id: `hmw-${Date.now()}-2`,
      question: `How might we create more engaging experiences around ${prompt} that drive user retention?`,
      context: "Addressing engagement and retention challenges",
    },
    {
      id: `hmw-${Date.now()}-3`,
      question: `How might we measure the success of ${prompt} initiatives in a meaningful way?`,
      context: "Establishing metrics for success",
    },
    {
      id: `hmw-${Date.now()}-4`,
      question: `How might we make ${prompt} more accessible to users with different abilities?`,
      context: "Enhancing accessibility and inclusivity",
    },
    {
      id: `hmw-${Date.now()}-5`,
      question: `How might we leverage existing user behaviors to introduce ${prompt} naturally?`,
      context: "Building on established patterns",
    },
  ];
};

const HMWPage = () => {
  const [hmwQuestions, setHmwQuestions] = useState<HMWQuestion[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateHMW = (prompt: string) => {
    setIsGenerating(true);
    
    // Simulate API delay
    setTimeout(() => {
      try {
        const newQuestions = generateMockHMWQuestions(prompt);
        setHmwQuestions(prev => [...newQuestions, ...prev]);
        toast({
          title: "Questions generated",
          description: `Created ${newQuestions.length} "How Might We" questions`,
        });
      } catch (error) {
        toast({
          title: "Generation failed",
          description: "An error occurred while generating the questions",
          variant: "destructive",
        });
        console.error(error);
      } finally {
        setIsGenerating(false);
      }
    }, 1500);
  };

  const handleLike = (id: string) => {
    toast({
      description: "Question marked as useful",
    });
  };

  const handleDislike = (id: string) => {
    toast({
      description: "Question marked as not useful",
    });
  };

  const handleClearAll = () => {
    setHmwQuestions([]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h1 className="mb-2">How Might We</h1>
              <p className="text-muted-foreground">
                Generate thought-provoking "How Might We" questions to frame your design challenges
              </p>
            </div>
            {hmwQuestions.length > 0 && (
              <Button variant="outline" onClick={handleClearAll}>
                Clear All
              </Button>
            )}
          </div>

          {isGenerating && (
            <div className="mb-6 p-4 border rounded-lg flex items-center gap-3 animate-fade-in">
              <Loader2 size={20} className="animate-spin text-primary" />
              <span>Generating questions...</span>
            </div>
          )}

          <div className="space-y-4">
            {hmwQuestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">
                  No questions generated yet
                </p>
                <p className="text-sm text-muted-foreground">
                  Use the input field below to describe the problem you're trying to solve
                </p>
              </div>
            ) : (
              hmwQuestions.map((hmw) => (
                <HMWCard 
                  key={hmw.id} 
                  hmw={hmw} 
                  onLike={handleLike}
                  onDislike={handleDislike}
                />
              ))
            )}
          </div>
        </div>
      </div>
      
      <div className="border-t p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <AIInputField
            placeholder="Describe the problem or challenge you're facing (e.g., 'users struggle to navigate our complex application')..."
            onSubmit={handleGenerateHMW}
            isProcessing={isGenerating}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Be specific about the problem, context, user needs, and constraints to generate more relevant questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HMWPage;
