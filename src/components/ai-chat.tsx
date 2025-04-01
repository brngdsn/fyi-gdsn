"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSpinner } from "@/components/icons";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { api } from "@/trpc/react";
import { useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Braun's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sendMessage = api.chat.sendMessage.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || sendMessage.isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = await sendMessage.mutateAsync({ message: userMessage });
      setMessages((prev) => [...prev, response]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4 min-h-[400px]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {sendMessage.isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted/50 rounded-lg px-4 py-2">
              <AnimatedSpinner className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <Card className="relative overflow-hidden rounded-xl border bg-white dark:border-gray-800 dark:bg-gradient-to-r dark:from-black dark:to-neutral-950 dark:shadow-2xl">
        <form onSubmit={handleSubmit} className="flex gap-2 p-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-[60px] border-0 bg-transparent focus-visible:ring-0"
          />
          <Button 
            type="submit" 
            disabled={sendMessage.isLoading}
            className="shrink-0"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </form>
      </Card>
    </div>
  );
} 