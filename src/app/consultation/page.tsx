import { AIChat } from "@/components/ai-chat";

export default function ConsultationPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Let's Work Together</h1>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          I'm here to help you bring your ideas to life. Whether you need technical guidance,
          architecture design, or implementation support, let's discuss how I can assist you.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <AIChat />
      </div>
    </div>
  );
} 