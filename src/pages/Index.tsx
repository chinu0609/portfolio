
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ArrowRight, Code, User, Book } from "lucide-react";

const Index = () => {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Engineer. Researcher. Explorer of Intelligent Systems.";

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      }
    };
    typeText();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const projects = [
    {
      title: "Agentic Contract Validator",
      description: "Multi-agent system for automated legal document analysis using LLMs and knowledge graphs. Reduces manual review time by 85%.",
      tech: ["Python", "LangChain", "GPT-4", "Neo4j", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "RAG-Enhanced Research Assistant",
      description: "Intelligent research assistant that processes scientific papers and generates contextual insights using vector embeddings and retrieval-augmented generation.",
      tech: ["Python", "ChromaDB", "Transformers", "Streamlit", "OpenAI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Pipeline",
      description: "Real-time object detection and tracking system for autonomous systems with custom YOLO implementation and edge deployment.",
      tech: ["PyTorch", "OpenCV", "CUDA", "TensorRT", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Multi-Modal AI Agent",
      description: "Conversational AI that processes text, images, and audio inputs to provide comprehensive responses using ensemble learning.",
      tech: ["Python", "Whisper", "CLIP", "LangChain", "Redis"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "C++", "Rust", "SQL"],
    "AI/ML": ["PyTorch", "TensorFlow", "Transformers", "LangChain", "OpenCV", "Scikit-learn"],
    "Tools": ["Docker", "Kubernetes", "Git", "AWS", "GCP", "MongoDB", "PostgreSQL"],
    "Domains": ["Computer Vision", "NLP", "Agentic AI", "MLOps", "Research", "System Design"]
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-cyan-400 font-mono text-lg font-bold">
              ~/chinmay-bhosale
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "projects", "skills", "insights", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CHINMAY
            </div>
            <div className="text-3xl md:text-5xl font-bold text-slate-300 mb-6">
              BHOSALE
            </div>
          </div>
          
          <div className="font-mono text-xl md:text-2xl text-cyan-400 mb-8 h-8">
            {currentText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build practical AI systems that learn, reason, and act.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-3 text-lg font-mono"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-mono"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            $ whoami
          </h2>
          <Card className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <span className="text-cyan-400 font-mono">&gt;</span> Curiosity-driven AI Engineer passionate about building intelligent systems that push the boundaries of what's possible.
                </p>
                <p>
                  <span className="text-cyan-400 font-mono">&gt;</span> I specialize in agentic AI, large language models, and computer vision, focusing on real-world applications that solve complex problems.
                </p>
                <p>
                  <span className="text-cyan-400 font-mono">&gt;</span> Open-source advocate who believes in collaborative innovation. My work spans contract validation systems, RAG implementations, and autonomous AI agents.
                </p>
                <p>
                  <span className="text-cyan-400 font-mono">&gt;</span> When I'm not coding, you'll find me exploring the latest research papers, contributing to open-source projects, or experimenting with cutting-edge AI architectures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            $ ls ./projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-purple-500/50 text-purple-300 font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-mono">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 font-mono">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            $ cat ./skills.json
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-slate-300 font-mono text-sm hover:text-cyan-300 transition-colors cursor-default">
                        - {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            $ tail -f ./lab_notes.md
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "The Future of Agentic AI",
                date: "2024-03-15",
                preview: "Exploring how autonomous agents will reshape human-AI collaboration..."
              },
              {
                title: "RAG vs Fine-tuning: A Practical Guide",
                date: "2024-03-08", 
                preview: "When to use retrieval-augmented generation and when to fine-tune your models..."
              },
              {
                title: "Building Production-Ready Computer Vision",
                date: "2024-02-28",
                preview: "Lessons learned from deploying CV models at scale..."
              }
            ].map((post, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-cyan-400">{post.title}</h3>
                    <span className="text-slate-500 font-mono text-sm">{post.date}</span>
                  </div>
                  <p className="text-slate-300">{post.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            $ ./connect.sh
          </h2>
          <Card className="bg-slate-900/50 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-xl text-slate-300 mb-8">
                Ready to build something extraordinary together?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-3 text-lg font-mono">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-mono">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg font-mono">
                  <User className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
              <div className="mt-8">
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-2 font-mono">
                  <Book className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyan-500/20">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 font-mono">
            <span className="text-cyan-400">chinmay@ai-engineer:~$</span> Built with passion for intelligent systems
          </p>
          <p className="text-slate-500 font-mono text-sm mt-2">
            © 2024 Chinmay Bhosale. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
