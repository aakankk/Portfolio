import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Code,
  Database,
  Brain,
  Award,
  Users,
  Target,
  Zap,
  Star,
  Trophy,
  BookOpen,
  Coffee
} from "lucide-react";

// Import new components
import AnimatedCounter from "@/components/AnimatedCounter";
import SkillProgressBar from "@/components/SkillProgressBar";
import FloatingParticles from "@/components/FloatingParticles";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingActionButton from "@/components/FloatingActionButton";
import InteractiveTimeline from "@/components/InteractiveTimeline";

// Import AI-generated images
import heroBackground from "@/assets/hero-background.jpg";
import aboutIllustration from "@/assets/about-illustration.jpg";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";
import project3Image from "@/assets/project-3.jpg";
import skillsBackground from "@/assets/skills-background.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Netflix-Clone",
      type: "Self Project",
      date: "May '25",
      description: "Developed a Netflix-like web app using React.js for frontend & Firebase for authentication & database management",
      highlights: [
        "Implemented user authentication (signup, login, logout) with Firebase and managed user-specific data in Firestore",
        "Integrated dynamic content with reusable React components, responsive UI, & real-time updates to enhance UX & scalability"
      ],
      tech: ["React.js", "Firebase", "Firestore", "Authentication"]
    },
    {
      title: "Rice Variety Prediction using PyTorch",
      type: "Self Project", 
      date: "May '24",
      description: "Developed a DL model in PyTorch to classify rice grain varieties based on physical characteristics from the Kaggle dataset",
      highlights: [
        "Implemented data preprocessing, feature normalization, and custom neural network architecture, achieving high test accuracy",
        "Built an end-to-end machine learning pipeline including training, validation, evaluation and visualization"
      ],
      tech: ["PyTorch", "Python", "Machine Learning", "Data Processing"]
    },
    {
      title: "XORRO PUF Analysis",
      type: "Course Project — Prof.Purushottam Kar, IIT KANPUR",
      date: "May '24 - June '24",
      description: "Achieved 99% accuracy in cracking advanced XORRO PUF using a linear model by tuning regularization and learning rate",
      highlights: [
        "Conceptualized various non-linear models such as Decision Trees to plot Hanuman and Heatmap of Words",
        "Achieved 100% accuracy with a 3.99 query rate using maximum entropy gain as the decision tree's splitting criterion"
      ],
      tech: ["Machine Learning", "Security Analysis", "Decision Trees", "Regularization"]
    },
    {
      title: "Computer Vision Library using C",
      type: "Stamatics IIT Kanpur",
      date: "May '23 - July '23",
      description: "Developed a library showcasing expertise in image basics, pixel manipulation & build intuition about its inner workflow",
      highlights: [
        "Applied nearest-neighbor, bilinear interpolation for resizing & color space transformations for RGB to hue conversion",
        "Implemented convolutional filters for image enhancement, colour shifting & edge detection using feature extraction algos"
      ],
      tech: ["C Programming", "Computer Vision", "Image Processing", "Algorithms"]
    },
    {
      title: "Non-Linear Regression Optimization",
      type: "Course Project — Prof.Debdeep Kundu, IIT KANPUR",
      date: "Sep '23",
      description: "Applied non-linear regression techniques with the Gauss-Newton method to optimize parameters, (i.d.) normal errors",
      highlights: [
        "Utilized Gauss-Newton and Nelder-Mead methods for parameter estimation, ensuring robust model convergence and accuracy",
        "Conducted analysis, computed confidence intervals & assessed normality using Q-Q plots to validate model assumptions"
      ],
      tech: ["Statistical Analysis", "Optimization", "Gauss-Newton", "Model Validation"]
    },
    {
      title: "Finlatics Equity Market Analysis",
      type: "Self Project",
      date: "March '22 - May '22",
      description: "Evaluated 20+ stocks across 7 industries benchmarking the financial performance across 10+ parameters on a daily basis",
      highlights: [
        "Achieved over 4% market returns by compiling analysis findings into a report proposing long-term investment scopes",
        "Awarded LoP by Founder for actively engaging in equity research & proving acumen in executing real-time strategies"
      ],
      tech: ["Financial Analysis", "Market Research", "Data Analysis", "Investment Strategy"]
    }
  ];

  const skillsData = [
    { skill: "Python", level: 90 },
    { skill: "Machine Learning", level: 85 },
    { skill: "React.js", level: 80 },
    { skill: "PyTorch", level: 85 },
    { skill: "C/C++", level: 80 },
    { skill: "JavaScript", level: 75 },
    { skill: "Data Analysis", level: 90 },
    { skill: "Firebase", level: 70 },
    { skill: "Computer Vision", level: 85 },
    { skill: "Statistical Analysis", level: 90 },
    { skill: "MySQL", level: 75 },
    { skill: "Web Development", level: 80 }
  ];

  const positions = [
    {
      title: "Secretary in Fine Arts Team, Antragini, IIT Kanpur",
      date: "2022-23",
      highlights: [
        "Co-led a team of 5-members & 4-volunteers providing logistics and F & B support across the 3 days of the cultural fest",
        "Organized 6+ fine arts events worth 20k+ prizes witnessing a total participation of 200+ from 30+ colleges of India"
      ]
    },
    {
      title: "Junior Research in Events, Techkriti, IIT Kanpur", 
      date: "2021-22",
      highlights: [
        "Co-ordinated with 14-member team to assemble 1st ever database of students from 30+ schools of Madhya Pradesh",
        "Registered 100+ students for open school championship actively engaging them in talks, exhibitions and workshops"
      ]
    },
    {
      title: "Junior Executive, Udgosh, IIT Kanpur",
      date: "2021-22", 
      highlights: [
        "Compiled a list of email addresses from 20+ schools with an 11-member team to lead marketing & promotions of sports",
        "Conducted the national open school quiz & talks witnessed by 150+ students of 6th-12th class divided across 3 pools"
      ]
    }
  ];

  const achievements = [
    "Certificate in Strategy consulting virtual experience program by BCG and Fundamentals of digital marketing by Google",
    "Completed Introduction to machine learning for trading by QuantInsti & First Python programme of UST by Coursera"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative">
      <FloatingParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-white/20 dark:border-border/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gradient">Aakanksha Kumari</h2>
            <div className="hidden md:flex space-x-6 items-center">
              {['about', 'stats', 'timeline', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-muted-foreground hover:text-primary transition-smooth capitalize magnetic"
                >
                  {section}
                </button>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})` 
        }}
      >
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient animate-bounce-slow">Aakanksha</span>
            <br />
            <span className="text-foreground">Kumari</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Final Year Undergraduate
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Department of Mathematics and Scientific Computing
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
            Machine Learning Engineer & Full-Stack Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="animate-glow magnetic hover-tilt"
            >
              <Zap className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="magnetic hover-tilt"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/aakankkk" className="text-muted-foreground hover:text-primary transition-smooth magnetic">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:aakankshah21@iitk.ac.in" className="text-muted-foreground hover:text-primary transition-smooth magnetic">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-20 px-6 bg-muted/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Impressive Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="hover-lift bg-gradient-card text-center hover-tilt">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                <AnimatedCounter end={6} suffix="+" />
                <p className="text-muted-foreground mt-2">Major Projects</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card text-center hover-tilt">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-accent mx-auto mb-4" />
                <AnimatedCounter end={99} suffix="%" />
                <p className="text-muted-foreground mt-2">Model Accuracy</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card text-center hover-tilt">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <AnimatedCounter end={300} suffix="+" />
                <p className="text-muted-foreground mt-2">Students Reached</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card text-center hover-tilt">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-4" />
                <AnimatedCounter end={4} suffix="+" />
                <p className="text-muted-foreground mt-2">Years Learning</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">My Journey</h2>
          <InteractiveTimeline />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Machine Learning Engineer and Full-Stack Developer currently pursuing my Bachelor's 
                degree in Mathematics and Scientific Computing at IIT Kanpur. With a strong foundation in both 
                theoretical concepts and practical implementation, I specialize in developing innovative solutions 
                that bridge the gap between complex algorithms and real-world applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans across various domains including computer vision, financial analysis, web development, 
                and data science. I'm particularly interested in building scalable applications that leverage the power 
                of machine learning to solve meaningful problems.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutIllustration} 
                alt="Professional developer illustration" 
                className="rounded-lg shadow-elegant w-full h-auto hover-tilt magnetic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Education</h2>
          <div className="space-y-6">
            <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Bachelor of Science</CardTitle>
                    <CardDescription className="text-lg">Mathematics and Scientific Computing</CardDescription>
                    <p className="text-primary font-semibold">Indian Institute of Technology, Kanpur</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">2021 - Present</Badge>
                    <p className="text-lg font-bold text-primary mt-2">CPI: 6.2/10</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
                <CardHeader>
                  <CardTitle>CBSE (XII)</CardTitle>
                  <CardDescription>JVM Shyamali, Ranchi</CardDescription>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="secondary">2020</Badge>
                    <span className="text-lg font-bold text-primary">90.6%</span>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
                <CardHeader>
                  <CardTitle>CBSE (X)</CardTitle>
                  <CardDescription>DAV Public School Gandhi Nagar, Ranchi</CardDescription>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="secondary">2018</Badge>
                    <span className="text-lg font-bold text-primary">92.8%</span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Key Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => {
              const projectImages = [project1Image, project2Image, project3Image];
              const projectImage = index < 3 ? projectImages[index] : null;
              
              return (
                <Card key={index} className="hover-lift bg-gradient-card animate-slide-up hover-tilt magnetic group" style={{animationDelay: `${index * 0.1}s`}}>
                  {projectImage && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={projectImage} 
                        alt={`${project.title} preview`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                        <Badge variant="outline" className="mb-2 group-hover:border-primary transition-colors duration-300">{project.type}</Badge>
                      </div>
                      <Badge variant="secondary">{project.date}</Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <Target className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs magnetic">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skillItem, index) => (
              <div key={skillItem.skill} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <SkillProgressBar 
                  skill={skillItem.skill} 
                  level={skillItem.level} 
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
          
          {/* Technology Categories */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
              <CardHeader>
                <CardTitle className="text-lg text-center">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "Python", "R", "JavaScript"].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs magnetic">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
              <CardHeader>
                <CardTitle className="text-lg text-center">ML/AI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter"].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs magnetic">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
              <CardHeader>
                <CardTitle className="text-lg text-center">Web Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "HTML", "CSS", "Firebase", "MySQL"].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs magnetic">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card hover-tilt magnetic">
              <CardHeader>
                <CardTitle className="text-lg text-center">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Canva", "MS Office", "G-Suite"].map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs magnetic">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Leadership & Experience</h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <Card key={index} className="hover-lift bg-gradient-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                    </div>
                    <Badge variant="secondary">{position.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {position.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <Users className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Achievements & Certifications</h2>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift bg-gradient-card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 hover-lift bg-gradient-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center">Extra-Curricular Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mt-1 mr-4 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Participated in a group dance performance by 20+ members during the Freshers' dance showcase organized at IIT Kanpur
                  </p>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mt-1 mr-4 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Achieved an online chess rating of 1300+ in Rapid and 900+ in Blitz tournaments recognized internationally by the FIDE
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always open to discussing new opportunities and innovative projects
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-lift bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:aakankshah21@iitk.ac.in" className="text-muted-foreground hover:text-primary transition-smooth">
                  aakankshah21@iitk.ac.in
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+917856853024" className="text-muted-foreground hover:text-primary transition-smooth">
                  +91-7856853024
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-card">
              <CardContent className="p-6 text-center">
                <Github className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <a href="https://github.com/aakankkk" className="text-muted-foreground hover:text-primary transition-smooth" target="_blank" rel="noopener noreferrer">
                  @aakankkk
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="animate-glow" onClick={() => window.open('mailto:aakankshah21@iitk.ac.in')}>
            <Mail className="mr-2 h-5 w-5" />
            Send Me an Email
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Aakanksha Kumari. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
