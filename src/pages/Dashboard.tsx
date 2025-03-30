
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 md:p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">Welcome to DesignThinkAI</h1>
          <p className="text-muted-foreground text-lg">
            AI-powered tools to enhance your design thinking process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} className="text-primary" />
                <CardTitle>Behavioral Archetypes</CardTitle>
              </div>
              <CardDescription>
                Generate rich behavioral archetypes to understand your users better
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Create detailed user archetypes with personality traits, motivations, and pain points
              to guide your design process and ensure user-centered outcomes.
            </CardContent>
            <CardFooter>
              <Link to="/archetypes">
                <Button className="gap-2">
                  <span>Create Archetypes</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={20} className="text-primary" />
                <CardTitle>How Might We Questions</CardTitle>
              </div>
              <CardDescription>
                Generate thought-provoking HMW questions to frame your design challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Transform complex problems into actionable design opportunities with AI-generated
              "How Might We" questions that inspire innovative solutions.
            </CardContent>
            <CardFooter>
              <Link to="/hmw">
                <Button className="gap-2">
                  <span>Generate Questions</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="bg-accent p-6 rounded-lg border">
          <h3 className="mb-2">Getting Started</h3>
          <p className="mb-4 text-muted-foreground">
            Start by selecting a tool from the sidebar or from the cards above.
            Each tool provides AI-powered assistance to help you with your design thinking process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">Behavioral Archetypes</h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Describe your target audience</li>
                <li>Generate detailed behavioral archetypes</li>
                <li>Use archetypes to inform your design decisions</li>
              </ol>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">How Might We</h4>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Describe the problem you're trying to solve</li>
                <li>Generate thought-provoking HMW questions</li>
                <li>Use these to frame your design challenges</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
