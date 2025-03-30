
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export interface Archetype {
  id: string;
  name: string;
  characteristics: string[];
  description: string;
  motivations: string[];
  painPoints: string[];
}

interface ArchetypeCardProps {
  archetype: Archetype;
}

export function ArchetypeCard({ archetype }: ArchetypeCardProps) {
  const { toast } = useToast();
  
  const handleCopy = () => {
    const text = `
      Archetype: ${archetype.name}
      
      Description: ${archetype.description}
      
      Key Characteristics:
      ${archetype.characteristics.join('\n')}
      
      Motivations:
      ${archetype.motivations.join('\n')}
      
      Pain Points:
      ${archetype.painPoints.join('\n')}
    `;
    
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Archetype details copied to clipboard",
    });
  };
  
  const handleDownload = () => {
    const text = `
      Archetype: ${archetype.name}
      
      Description: ${archetype.description}
      
      Key Characteristics:
      ${archetype.characteristics.join('\n')}
      
      Motivations:
      ${archetype.motivations.join('\n')}
      
      Pain Points:
      ${archetype.painPoints.join('\n')}
    `;
    
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${archetype.name.toLowerCase().replace(/\s+/g, '-')}-archetype.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>{archetype.name}</CardTitle>
        <CardDescription>{archetype.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Key Characteristics</h4>
          <div className="flex flex-wrap gap-2">
            {archetype.characteristics.map((trait, index) => (
              <Badge key={index} variant="secondary">
                {trait}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Motivations</h4>
          <ul className="list-disc list-inside space-y-1">
            {archetype.motivations.map((motivation, index) => (
              <li key={index}>{motivation}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Pain Points</h4>
          <ul className="list-disc list-inside space-y-1">
            {archetype.painPoints.map((painPoint, index) => (
              <li key={index}>{painPoint}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="gap-2 justify-end">
        <Button size="sm" variant="outline" onClick={handleCopy}>
          <Copy size={14} className="mr-2" />
          Copy
        </Button>
        <Button size="sm" variant="outline" onClick={handleDownload}>
          <Download size={14} className="mr-2" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
}
