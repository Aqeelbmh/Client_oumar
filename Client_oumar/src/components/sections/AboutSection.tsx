import { Card, CardContent } from "@/components/ui/card";
import { User, BookOpen, Globe, Users } from "lucide-react";

const AboutSection = () => {
  const interests = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Arts & Humanities",
      description: "Passionate about exploring various forms of creative expression and cultural studies."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Languages",
      description: "Enthusiastic about language acquisition and cross-cultural communication."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Social Sciences",
      description: "Interested in understanding societies, cultures, and human relationships."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Interdisciplinary Studies",
      description: "Committed to connecting different fields of knowledge for innovative solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30 opacity-0">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading text-3xl md:text-4xl mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            A cultural bridge-builder with diverse academic experiences across Africa and a passion for interdisciplinary collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="mb-4">
            I am a dedicated and academically driven individual with a strong background in arts, languages, social sciences, and modern studies. Passionate about cultural diversity and societal dynamics, I strive to enhance critical thinking, cross-cultural understanding, and interdisciplinary collaboration.            </p>
            <p className="mb-4">
            With a solid educational foundation from institutions in Mali, Niger, and Indonesia, I have developed expertise in research, language learning, and public discourse. My goal is to address global challenges, contribute to meaningful research, and promote positive change through education, communication, and international collaboration.            </p>
            <p>
              My approach combines anaBeyond academics, I actively engage in volunteer work, student mentorship, and professional development initiatives. I am fluent in multiple languages, including English, Arabic, French, and Bahasa Indonesia, allowing me to connect with diverse communities and navigate multicultural environments effectively.lytical thinking with creative problem-solving, allowing me to contribute meaningfully to collaborative projects across various disciplines.
            </p>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    {interest.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{interest.title}</h3>
                  <p className="text-sm text-foreground/70">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
