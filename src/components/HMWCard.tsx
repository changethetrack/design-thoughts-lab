
import React from "react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export interface HMWQuestion {
  id: string;
  question: string;
  context?: string;
}

interface HMWCardProps {
  hmw: HMWQuestion;
  onLike?: (id: string) => void;
  onDislike?: (id: string) => void;
}

export function HMWCard({ hmw, onLike, onDislike }: HMWCardProps) {
  const { toast } = useToast();
  
  const handleCopy = () => {
    navigator.clipboard.writeText(hmw.question);
    toast({
      title: "Copied to clipboard",
      description: "Question copied to clipboard",
    });
  };
  
  return (
    <Card className="animate-fade-in">
      <CardHeader className="py-4 px-5">
        <h3 className="text-lg font-medium">{hmw.question}</h3>
      </CardHeader>
      
      {hmw.context && (
        <CardContent className="py-0 px-5">
          <p className="text-sm text-muted-foreground">{hmw.context}</p>
        </CardContent>
      )}
      
      <CardFooter className="py-3 px-5 flex justify-between">
        <div className="flex gap-2">
          {onLike && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLike(hmw.id)}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <ThumbsUp size={16} className="mr-1" />
              Useful
            </Button>
          )}
          
          {onDislike && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDislike(hmw.id)}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <ThumbsDown size={16} className="mr-1" />
              Not useful
            </Button>
          )}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2"
        >
          <Copy size={16} className="mr-1" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
}
