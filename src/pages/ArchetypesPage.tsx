
import React, { useState } from "react";
import { AIInputField } from "@/components/AIInputField";
import { ArchetypeCard, Archetype } from "@/components/ArchetypeCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Helper function to generate mock archetypes (simulating AI responses)
const generateMockArchetype = (prompt: string): Archetype => {
  // This would be replaced with actual AI calls in a real implementation
  return {
    id: Date.now().toString(),
    name: `${prompt.split(" ")[0]} Enthusiast`,
    description: `A persona who is deeply engaged with ${prompt} and seeks to integrate it into their daily life.`,
    characteristics: [
      "Tech-savvy",
      "Curious",
      "Problem-solver",
      "Early adopter",
      "Community-oriented"
    ],
    motivations: [
      `To find new ways to leverage ${prompt}`,
      "To stay ahead of trends",
      "To connect with like-minded individuals",
      "To optimize their workflow"
    ],
    painPoints: [
      "Overwhelmed by too many options",
      "Frustrated by poor user experiences",
      "Concerned about privacy and security",
      "Limited time to learn new tools"
    ]
  };
};

const ArchetypesPage = () => {
  const [archetypes, setArchetypes] = useState<Archetype[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateArchetype = (prompt: string) => {
    setIsGenerating(true);
    
    // Simulate API delay
    setTimeout(() => {
      try {
        const newArchetype = generateMockArchetype(prompt);
        setArchetypes(prev => [newArchetype, ...prev]);
        toast({
          title: "Archetype generated",
          description: `Created "${newArchetype.name}" archetype`,
        });
      } catch (error) {
        toast({
          title: "Generation failed",
          description: "An error occurred while generating the archetype",
          variant: "destructive",
        });
        console.error(error);
      } finally {
        setIsGenerating(false);
      }
    }, 1500);
  };

  const handleClearAll = () => {
    setArchetypes([]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h1 className="mb-2">Behavioral Archetypes</h1>
              <p className="text-muted-foreground">
                Generate detailed user archetypes to guide your design process
              </p>
            </div>
            {archetypes.length > 0 && (
              <Button variant="outline" onClick={handleClearAll}>
                Clear All
              </Button>
            )}
          </div>

          {isGenerating && (
            <div className="mb-6 p-4 border rounded-lg flex items-center gap-3 animate-fade-in">
              <Loader2 size={20} className="animate-spin text-primary" />
              <span>Generating archetype...</span>
            </div>
          )}

          <div className="space-y-6">
            {archetypes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">
                  No archetypes generated yet
                </p>
                <p className="text-sm text-muted-foreground">
                  Use the input field below to describe your target audience
                </p>
              </div>
            ) : (
              archetypes.map((archetype) => (
                <ArchetypeCard key={archetype.id} archetype={archetype} />
              ))
            )}
          </div>
        </div>
      </div>
      
      <div className="border-t p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <AIInputField
            placeholder="Describe your target audience (e.g., 'busy professionals who need to organize their work life')..."
            onSubmit={handleGenerateArchetype}
            isProcessing={isGenerating}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Be specific about demographics, behaviors, needs, and context to generate more accurate archetypes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchetypesPage;
