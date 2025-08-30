import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar,
  MessageCircle,
  Send,
  Instagram,
  Facebook
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornarei seu contato em até 24 horas.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contato - Andréa Matias | Agende sua Consulta de Psicologia</title>
        <meta name="description" content="Entre em contato com a psicóloga Andréa Matias. Agende sua consulta de TCC em Nova Iguaçu ou online. WhatsApp, email e formulário de contato disponíveis." />
        <meta name="keywords" content="contato psicóloga Nova Iguaçu, agendar consulta TCC, psicologia online, Andréa Matias" />
        <link rel="canonical" href="https://andreamatiaspsi.com/contato" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding hero-gradient">
          <div className="container mx-auto container-padding text-center">
            <h1 className="text-hero mb-6">
              Vamos conversar?
            </h1>
            <p className="text-body-large mb-8 max-w-3xl mx-auto">
              Estou aqui para ajudar você em sua jornada de bem-estar mental. 
              Entre em contato para agendar sua consulta ou tirar suas dúvidas.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-card-title mb-3">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fale comigo diretamente pelo WhatsApp
                  </p>
                  <Button className="btn-primary w-full" asChild>
                    <a href="https://wa.me/5521987654321" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      (21) 98765-4321
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-card-title mb-3">Email</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Envie sua mensagem por email
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:contato@andreamatiaspsi.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-card-title mb-3">Agendamento Online</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agende sua consulta online
                  </p>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-success" />
                    Envie sua mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(21) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Assunto da mensagem"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-me um pouco sobre o que você gostaria de conversar..."
                        rows={5}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-primary w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-success" />
                      Informações de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Localização</h4>
                        <p className="text-sm text-muted-foreground">
                          Nova Iguaçu, Rio de Janeiro<br/>
                          Atendimento presencial e online
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Telefone/WhatsApp</h4>
                        <p className="text-sm text-muted-foreground">
                          (21) 98765-4321
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-muted-foreground">
                          contato@andreamatiaspsi.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Horário de Atendimento</h4>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br/>
                          Sábado: 8h às 12h<br/>
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle>Redes Sociais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.instagram.com/andreamatiaspsi" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.facebook.com/andreamatiaspsi" target="_blank" rel="noopener noreferrer">
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Primeira consulta</h4>
                    <p className="text-sm text-muted-foreground">
                      Na primeira consulta, conversaremos sobre suas necessidades e expectativas. 
                      É um momento para você me conhecer e decidir se sou a profissional ideal para te acompanhar.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-6">Perguntas Frequentes</h2>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Como funciona a consulta online?</h3>
                  <p className="text-sm text-muted-foreground">
                    As consultas online são realizadas via Google Meet em horário agendado. 
                    Você precisa apenas de um dispositivo com câmera e internet estável.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Qual a duração das sessões?</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada sessão tem duração de 50 minutos. A frequência é definida de acordo 
                    com suas necessidades, geralmente semanal ou quinzenal.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Aceita convênio médico?</h3>
                  <p className="text-sm text-muted-foreground">
                    Atualmente não trabalho com convênios, mas posso fornecer o recibo 
                    para reembolso junto ao seu plano de saúde.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Como cancelar ou remarcar?</h3>
                  <p className="text-sm text-muted-foreground">
                    Cancelamentos devem ser feitos com pelo menos 24h de antecedência. 
                    Remarcações podem ser feitas via WhatsApp ou email.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;