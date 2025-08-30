import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Brain, 
  HeartHandshake, 
  Puzzle, 
  Laugh, 
  Baby,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroPhoto from '@/assets/andrea-hero-photo.jpg';
import blogPsychologyImage from '@/assets/blog-psychology-consultation.jpg';
import blogAnxietyImage from '@/assets/blog-workplace-anxiety.jpg';
import blogRelationshipImage from '@/assets/blog-relationship-therapy.jpg';

const Index = () => {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "Ansiedade",
      description: "Técnicas da TCC para recuperar o equilíbrio emocional e reduzir sintomas de ansiedade generalizada, fobias e ataques de pânico."
    },
    {
      icon: Heart,
      title: "Depressão",
      description: "Apoio especializado para ressignificar pensamentos negativos, recuperar a motivação e encontrar novos caminhos."
    },
    {
      icon: HeartHandshake,
      title: "Relacionamentos",
      description: "Fortalecer vínculos familiares e amorosos através de comunicação assertiva e inteligência emocional."
    },
    {
      icon: Puzzle,
      title: "Transtornos Comportamentais",
      description: "Estratégias eficazes para romper padrões limitadores, incluindo TOC, vícios e comportamentos compulsivos."
    },
    {
      icon: Laugh,
      title: "Regulação Emocional",
      description: "Desenvolvimento de ferramentas práticas para lidar com emoções intensas de forma equilibrada e saudável."
    },
    {
      icon: Baby,
      title: "Psicologia Materno-Infantil",
      description: "Acolhimento especializado para as transformações da maternidade, depressão pós-parto e vínculos familiares."
    }
  ];


  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding hero-gradient" aria-label="Apresentação principal">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-hero animate-fade-in-up mb-6">
                Amar a si mesma é revolucionário
              </h1>
              <p className="text-body-large mb-8 max-w-2xl">
                Terapia Cognitivo-Comportamental especializada em ansiedade, depressão e relacionamentos. 
                Atendimento presencial em Nova Iguaçu e online para todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="emerald"
                  size="lg"
                  onClick={() => setIsSchedulingOpen(true)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/sobre">
                    Conheça meu trabalho
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={heroPhoto}
                  alt="Andréa Matias - Psicóloga especializada em TCC"
                  className="rounded-2xl shadow-lg w-full max-w-md mx-auto animate-gentle-float"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold text-sm">CRP 05/56720</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-primary/5" aria-labelledby="about-heading">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-heading" className="text-section-title mb-6">
              Olá, sou Andréa Matias
            </h2>
            <p className="text-body-large mb-8">
              Psicóloga formada há mais de 8 anos, especializada em Terapia Cognitivo-Comportamental (TCC). 
              Minha missão é ajudar pessoas a desenvolverem uma relação mais saudável consigo mesmas e com o mundo ao seu redor.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-card-title mb-2">500+ Pacientes</h3>
                <p className="text-sm text-muted-foreground">Atendidos com sucesso</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-card-title mb-2">8+ Anos</h3>
                <p className="text-sm text-muted-foreground">De experiência clínica</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-card-title mb-2">TCC Especializada</h3>
                <p className="text-sm text-muted-foreground">Abordagem científica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding" aria-labelledby="services-heading">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-section-title mb-6">
              Áreas de Especialização
            </h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Ofereço atendimento especializado em diferentes áreas da saúde mental, 
              sempre com base na Terapia Cognitivo-Comportamental, uma abordagem científica e eficaz.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-luxury group cursor-pointer border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-emerald-light to-brand-emerald rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Blog Preview Section */}
      <section className="section-padding" aria-labelledby="blog-heading">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 id="blog-heading" className="text-section-title mb-6">
              Blog
            </h2>
            <p className="text-body-large">
              Artigos e reflexões sobre saúde mental e bem-estar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-luxury border-0">
              <CardContent className="p-0">
                <div className="mb-4">
                  <img
                    src={blogPsychologyImage}
                    alt="Como escolher um psicólogo em Nova Iguaçu"
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-card-title mb-3">
                    Como escolher um psicólogo em Nova Iguaçu
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dicas essenciais para encontrar o profissional ideal para suas necessidades...
                  </p>
                  <Link 
                    to="/blog/como-escolher-um-psicologo"
                    className="text-brand-emerald hover:text-brand-emerald-dark font-medium text-sm flex items-center transition-colors"
                  >
                    Ler artigo completo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="card-luxury border-0">
              <CardContent className="p-0">
                <div className="mb-4">
                  <img
                    src={blogAnxietyImage}
                    alt="5 técnicas para reduzir a ansiedade no trabalho"
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-card-title mb-3">
                    5 técnicas para reduzir a ansiedade no trabalho
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Estratégias práticas da TCC que você pode aplicar no seu dia a dia profissional...
                  </p>
                  <Link 
                    to="/blog/tecnicas-ansiedade-trabalho"
                    className="text-brand-emerald hover:text-brand-emerald-dark font-medium text-sm flex items-center transition-colors"
                  >
                    Ler artigo completo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="card-luxury border-0">
              <CardContent className="p-0">
                <div className="mb-4">
                  <img
                    src={blogRelationshipImage}
                    alt="TCC para relacionamentos mais saudáveis"
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-card-title mb-3">
                    TCC para relacionamentos mais saudáveis
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Como a Terapia Cognitivo-Comportamental pode melhorar seus relacionamentos...
                  </p>
                  <Link 
                    to="/blog/tcc-relacionamentos"
                    className="text-brand-emerald hover:text-brand-emerald-dark font-medium text-sm flex items-center transition-colors"
                  >
                    Ler artigo completo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/blog">
                Ver todos os artigos
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding warm-gradient text-white" aria-labelledby="contact-heading">
        <div className="container mx-auto container-padding text-center">
          <h2 id="contact-heading" className="text-4xl font-bold font-heading mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende sua primeira consulta ou tire suas dúvidas. Estou aqui para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="luxury"
              size="lg"
              onClick={() => setIsSchedulingOpen(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Consulta
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-charcoal"
              asChild
            >
              <a href="https://wa.me/5521987654321" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@andreamatiaspsi.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Nova Iguaçu, RJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Modal */}
      {isSchedulingOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Agendar Consulta</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSchedulingOpen(false)}
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <iframe
                src="https://calendly.com/andreamatiaspsi"
                width="100%"
                height="600"
                className="rounded-lg border"
                title="Agendamento de Consulta"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Index;