"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSpinner } from "@/components/icons";
import { ArrowUpIcon, PlusIcon, CalendarIcon } from "@radix-ui/react-icons";
import { api } from "@/trpc/react";
import { useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [hasStartedChat, setHasStartedChat] = useState(false);
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
    if (!hasStartedChat) {
      setHasStartedChat(true);
    }
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = await sendMessage.mutateAsync({ message: userMessage });
      setMessages((prev) => [...prev, response]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className={`flex flex-col ${hasStartedChat ? 'min-h-[calc(100vh-400px)]' : 'h-[calc(100vh-400px)]'}`}>
      <div className={`flex-1 ${!hasStartedChat ? 'flex items-center justify-center' : ''}`}>
        <div className="space-y-4 w-full">
          {!hasStartedChat ? (
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Let's Work Together</h1>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                I'm here to help you bring your ideas to life. Whether you need technical guidance,
                architecture design, or implementation support, let's discuss how I can assist you.
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className={`${hasStartedChat ? 'mt-8' : 'mt-4'}`}>
        <Card className="relative overflow-hidden rounded-xl border bg-white dark:border-gray-800 dark:bg-gradient-to-r dark:from-black dark:to-neutral-950 dark:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-2 p-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[80px] border-0 bg-transparent focus-visible:ring-0 resize-none"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <CalendarIcon className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                type="submit" 
                disabled={sendMessage.isLoading}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <ArrowUpIcon className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
} 