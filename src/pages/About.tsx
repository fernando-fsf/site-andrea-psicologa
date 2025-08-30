import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users, 
  Brain,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroPhoto from '@/assets/andrea-hero-photo.jpg';

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Graduação em Psicologia pela Universidade Estácio de Sá (2015)",
      year: "2015"
    },
    {
      icon: Award,
      title: "Especialização em TCC",
      description: "Pós-graduação em Terapia Cognitivo-Comportamental pelo Instituto de Psicologia Cognitiva",
      year: "2017"
    },
    {
      icon: Brain,
      title: "Formação Continuada",
      description: "Cursos de atualização em Mindfulness, Terapia de Aceitação e Compromisso (ACT)",
      year: "2023"
    }
  ];

  const approach = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Ofereço um espaço seguro e sem julgamentos, onde você pode se expressar livremente."
    },
    {
      icon: Brain,
      title: "Abordagem Científica",
      description: "Utilizo técnicas da TCC baseadas em evidências científicas para resultados eficazes."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada terapia é adaptada às necessidades específicas de cada paciente."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Andréa Matias - Psicóloga TCC em Nova Iguaçu | Formação e Experiência</title>
        <meta name="description" content="Conheça a trajetória de Andréa Matias, psicóloga especializada em TCC com mais de 8 anos de experiência. Formação, abordagem e valores profissionais." />
        <meta name="keywords" content="sobre Andréa Matias, psicóloga Nova Iguaçu, formação TCC, experiência psicologia" />
        <link rel="canonical" href="https://andreamatiaspsi.com/sobre" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding hero-gradient">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero mb-6">
                Olá, sou Andréa Matias
              </h1>
              <p className="text-body-large mb-8">
                Psicóloga especializada em Terapia Cognitivo-Comportamental, 
                dedicada a ajudar pessoas a desenvolverem uma relação mais saudável consigo mesmas.
              </p>
              <div className="flex justify-center">
                <img
                  src={heroPhoto}
                  alt="Andréa Matias - Psicóloga CRP 05/56720"
                  className="rounded-2xl shadow-lg w-full max-w-sm"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-section-title mb-6">Minha Trajetória</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-body-large mb-6">
                    Minha jornada na psicologia começou com o desejo de compreender e ajudar pessoas a 
                    superarem seus desafios emocionais. Formada em Psicologia há mais de 8 anos, 
                    especializei-me em Terapia Cognitivo-Comportamental por acreditar em sua eficácia 
                    científica e prática.
                  </p>
                  <p className="text-body-large mb-6">
                    Ao longo dos anos, tive o privilégio de acompanhar centenas de pessoas em suas 
                    jornadas de autoconhecimento e transformação. Cada história me ensina algo novo 
                    e reforça minha paixão por esta profissão.
                  </p>
                  <p className="text-body-large">
                    Acredito que toda pessoa tem o potencial para mudança e crescimento. Meu papel 
                    é oferecer as ferramentas e o suporte necessários para que isso aconteça.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">500+ Pacientes Atendidos</h3>
                      <p className="text-sm text-muted-foreground">Com histórias de transformação</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">8+ Anos de Experiência</h3>
                      <p className="text-sm text-muted-foreground">Dedicados à prática clínica</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold">CRP 05/56720</h3>
                      <p className="text-sm text-muted-foreground">Registro profissional ativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-6">Formação Profissional</h2>
              <p className="text-body-large">
                Educação continuada e especialização para oferecer o melhor atendimento
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {qualifications.map((qual, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <qual.icon className="w-8 h-8 text-success" />
                    </div>
                    <div className="text-sm text-success font-semibold mb-2">{qual.year}</div>
                    <h3 className="text-card-title mb-3">{qual.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {qual.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-6">Minha Abordagem</h2>
              <p className="text-body-large max-w-3xl mx-auto">
                A Terapia Cognitivo-Comportamental é uma abordagem focada no presente, 
                que ajuda a identificar e modificar padrões de pensamento e comportamento disfuncionais.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <Card key={index} className="card-elevated text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-card-title mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding warm-gradient text-white">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-4xl font-bold font-heading mb-6">
              Vamos começar sua jornada?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Estou aqui para ajudar você a desenvolver uma relação mais saudável consigo mesmo.
            </p>
            <Button 
              className="bg-white text-brand-dark hover:bg-white/90 mb-8"
              asChild
            >
              <Link to="/contato">
                Agendar Primeira Consulta
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@andreamatiaspsi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(21) 98765-4321</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nova Iguaçu, RJ</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;