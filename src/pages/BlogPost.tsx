import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  Home
} from 'lucide-react';
import blogPsychologyImage from '@/assets/blog-psychology-consultation.jpg';
import blogAnxietyImage from '@/assets/blog-workplace-anxiety.jpg';
import blogRelationshipImage from '@/assets/blog-relationship-therapy.jpg';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog posts data
  const blogPosts = {
    'como-escolher-um-psicologo': {
      title: 'Como escolher um psicólogo em Nova Iguaçu',
      excerpt: 'Dicas essenciais para encontrar o profissional ideal para suas necessidades',
      date: '15 de Janeiro, 2025',
      readTime: '8 min',
      category: 'Orientações',
      image: blogPsychologyImage,
      content: `
        <h2>A importância de uma escolha consciente</h2>
        <p>Escolher um psicólogo é uma decisão importante que pode impactar significativamente sua jornada de bem-estar mental. Em Nova Iguaçu, há diversos profissionais qualificados, mas encontrar aquele que mais se adequa às suas necessidades específicas requer alguns cuidados.</p>
        
        <h2>Critérios essenciais na escolha</h2>
        <h3>1. Verificação do registro profissional</h3>
        <p>Sempre verifique se o profissional possui registro ativo no Conselho Regional de Psicologia (CRP). Este é o primeiro e mais importante critério de segurança.</p>
        
        <h3>2. Especialização e abordagem terapêutica</h3>
        <p>Cada psicólogo tem sua especialização. Para questões como ansiedade e depressão, a Terapia Cognitivo-Comportamental (TCC) tem se mostrado muito eficaz devido à sua base científica sólida.</p>
        
        <h3>3. Experiência clínica</h3>
        <p>Profissionais com mais experiência tendem a ter um repertório mais amplo de técnicas e estratégias terapêuticas.</p>
        
        <h2>Perguntas importantes para a primeira consulta</h2>
        <ul>
          <li>Qual é sua formação e especialização?</li>
          <li>Qual abordagem terapêutica você utiliza?</li>
          <li>Qual sua experiência com casos similares ao meu?</li>
          <li>Como funciona o processo terapêutico?</li>
          <li>Qual a frequência recomendada das sessões?</li>
        </ul>
        
        <h2>Sinais de que você encontrou o profissional certo</h2>
        <p>Um bom psicólogo deve criar um ambiente seguro, demonstrar empatia, explicar claramente o processo terapêutico e respeitar seu ritmo. A conexão terapêutica é fundamental para o sucesso do tratamento.</p>
        
        <h2>Conclusão</h2>
        <p>Lembre-se: a terapia é um investimento em si mesmo. Não hesite em buscar ajuda profissional quando sentir necessidade. O primeiro passo é sempre o mais difícil, mas também o mais corajoso.</p>
      `
    },
    'tecnicas-ansiedade-trabalho': {
      title: '5 técnicas para reduzir a ansiedade no trabalho',
      excerpt: 'Estratégias práticas da TCC que você pode aplicar no seu dia a dia profissional',
      date: '12 de Janeiro, 2025',
      readTime: '6 min',
      category: 'Ansiedade',
      image: blogAnxietyImage,
      content: `
        <h2>A ansiedade no ambiente profissional</h2>
        <p>O ambiente de trabalho pode ser uma fonte significativa de estresse e ansiedade. Prazos apertados, pressão por resultados e relacionamentos interpessoais desafiadores são alguns dos fatores que podem desencadear sintomas ansiosos.</p>
        
        <h2>5 Técnicas eficazes da TCC</h2>
        
        <h3>1. Respiração diafragmática</h3>
        <p>Uma técnica simples mas poderosa. Inspire pelo nariz por 4 segundos, segure por 4 segundos e expire pela boca por 6 segundos. Repita por 2-3 minutos quando sentir ansiedade.</p>
        
        <h3>2. Reestruturação cognitiva</h3>
        <p>Identifique pensamentos catastróficos ("Vou ser demitido se errar") e os substitua por pensamentos mais realistas ("Erros fazem parte do aprendizado").</p>
        
        <h3>3. Técnica do grounding (ancoragem)</h3>
        <p>Quando a ansiedade surgir, nomeie:</p>
        <ul>
          <li>5 coisas que você pode ver</li>
          <li>4 coisas que pode tocar</li>
          <li>3 coisas que pode ouvir</li>
          <li>2 coisas que pode cheirar</li>
          <li>1 coisa que pode sentir o gosto</li>
        </ul>
        
        <h3>4. Pausas programadas</h3>
        <p>A cada 2 horas, faça uma pausa de 5-10 minutos. Levante-se, caminhe, estique-se ou pratique uma respiração consciente.</p>
        
        <h3>5. Organização e priorização</h3>
        <p>Use a matriz de Eisenhower para classificar tarefas por urgência e importância. Isso reduz a sensação de sobrecarga.</p>
        
        <h2>Implementando as técnicas</h2>
        <p>Comece implementando uma técnica por vez. A prática consistente é mais importante que a perfeição. Se a ansiedade persistir ou interferir significativamente em sua vida, busque ajuda profissional.</p>
      `
    },
    'tcc-relacionamentos': {
      title: 'TCC para relacionamentos mais saudáveis',
      excerpt: 'Como a Terapia Cognitivo-Comportamental pode melhorar seus relacionamentos',
      date: '8 de Janeiro, 2025',
      readTime: '10 min',
      category: 'Relacionamentos',
      image: blogRelationshipImage,
      content: `
        <h2>O impacto dos relacionamentos na saúde mental</h2>
        <p>Relacionamentos saudáveis são fundamentais para nosso bem-estar emocional. A TCC oferece ferramentas valiosas para melhorar a qualidade dos nossos vínculos afetivos, seja em relacionamentos amorosos, familiares ou de amizade.</p>
        
        <h2>Princípios da TCC aplicados aos relacionamentos</h2>
        
        <h3>Identificação de padrões disfuncionais</h3>
        <p>Muitas vezes repetimos padrões de comportamento aprendidos na infância. A TCC ajuda a identificar esses padrões e compreender como eles afetam nossos relacionamentos atuais.</p>
        
        <h3>Comunicação assertiva</h3>
        <p>Aprender a expressar necessidades, sentimentos e limites de forma clara e respeitosa é fundamental. A comunicação assertiva reduz conflitos e fortalece a conexão.</p>
        
        <h2>Técnicas práticas para relacionamentos</h2>
        
        <h3>1. Escuta ativa</h3>
        <p>Pratique ouvir verdadeiramente, sem interromper ou julgar. Reflita sobre o que a pessoa está dizendo antes de responder.</p>
        
        <h3>2. Validação emocional</h3>
        <p>Reconheça e valide os sentimentos do outro, mesmo quando não concordar com a situação. "Entendo que você se sinta frustrado" é mais eficaz que "Você não deveria se sentir assim".</p>
        
        <h3>3. Uso de "eu" em vez de "você"</h3>
        <p>Em vez de "Você nunca me ouve", tente "Eu me sinto ignorada quando não posso terminar minha frase".</p>
        
        <h3>4. Resolução de conflitos</h3>
        <p>Foque no problema específico, não na pessoa. Busque soluções em conjunto em vez de "vencer" a discussão.</p>
        
        <h2>Quando buscar terapia de casal ou familiar</h2>
        <p>Se os conflitos são frequentes, a comunicação está comprometida ou há padrões tóxicos, a terapia pode oferecer um espaço seguro para trabalhar essas questões com orientação profissional.</p>
        
        <h2>Construindo relacionamentos mais saudáveis</h2>
        <p>Lembre-se: relacionamentos saudáveis exigem trabalho de ambas as partes. A TCC fornece as ferramentas, mas a aplicação consistente é que gera mudanças duradouras.</p>
      `
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button variant="outline">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getAbsoluteImageUrl = (imagePath: string) => {
    const imageName = imagePath.split('/').pop()?.split('.')[0];
    const imageMap: { [key: string]: any } = {
      'blog-psychology-consultation': blogPsychologyImage,
      'blog-workplace-anxiety': blogAnxietyImage,
      'blog-relationship-therapy': blogRelationshipImage,
    };
    const imageUrl = imageMap[imageName as keyof typeof imageMap] || '';
    return `https://andreamatiaspsi.com${imageUrl}`;
  };

  const formatDateForSchema = (dateString: string) => {
    const months: { [key: string]: string } = {
      'Janeiro': '01', 'Fevereiro': '02', 'Março': '03', 'Abril': '04', 
      'Maio': '05', 'Junho': '06', 'Julho': '07', 'Agosto': '08', 
      'Setembro': '09', 'Outubro': '10', 'Novembro': '11', 'Dezembro': '12'
    };
    const parts = dateString.replace(',', '').split(' ');
    const day = parts[0].padStart(2, '0');
    const month = months[parts[2]];
    const year = parts[3];
    return `${year}-${month}-${day}`;
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentPost.title,
    "description": currentPost.excerpt,
    "image": getAbsoluteImageUrl(currentPost.image),
    "author": {
      "@type": "Person",
      "name": "Andréa Matias",
      "url": "https://andreamatiaspsi.com/sobre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Andréa Matias Psicologia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://andreamatiaspsi.com/favicon.ico"
      }
    },
    "datePublished": formatDateForSchema(currentPost.date),
    "dateModified": formatDateForSchema(currentPost.date)
  };

  const relatedPosts = [
    {
      slug: 'primeira-sessao-terapia',
      title: 'O que acontece na sua primeira sessão de terapia',
      category: 'Orientações'
    },
    {
      slug: 'autocuidado-saude-mental',
      title: 'Autocuidado e saúde mental no dia a dia',
      category: 'Bem-estar'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${currentPost.title} | Blog Andréa Matias`}</title>
        <meta name="description" content={currentPost.excerpt} />
        <meta name="keywords" content={`${currentPost.category.toLowerCase()}, psicologia, TCC, Nova Iguaçu`} />
        <link rel="canonical" href={`https://andreamatiaspsi.com/blog/${slug}`} />
        <meta property="og:title" content={currentPost.title} />
        <meta property="og:description" content={currentPost.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://andreamatiaspsi.com/blog/${slug}`} />
        <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen">
        {/* Navigation */}
        <section className="section-padding bg-primary/5">
          <nav className="container mx-auto container-padding" aria-label="Navegação do artigo">
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center text-success hover:text-success/80 font-medium"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Link>
              <Link
                to="/"
                className="inline-flex items-center text-muted-foreground hover:text-success font-medium"
              >
                <Home className="w-4 h-4 mr-2" />
                Página Principal
              </Link>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Article Header Image */}
              {currentPost.image && (
                <div className="mb-8">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-success font-semibold mb-4">
                <span className="bg-success/10 px-3 py-1 rounded-full">{currentPost.category}</span>
              </div>

              <h1 className="text-hero mb-6">
                {currentPost.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime} de leitura</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-medium">Compartilhar:</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="p-2">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <article className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none prose-headings:font-heading prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:mb-4 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
            </article>
          </div>
        </section>

        {/* Author CTA */}
        <section className="section-padding bg-secondary/10">
          <div className="container mx-auto container-padding">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-section-title mb-4">
                    Precisa de ajuda profissional?
                  </h3>
                  <p className="text-body-large mb-6">
                    Se você se identificou com este artigo e gostaria de conversar sobre suas questões pessoais,
                    estou aqui para ajudar. Agende uma consulta para começarmos sua jornada de bem-estar.
                  </p>
                  <Button className="btn-primary" asChild>
                    <Link to="/contato">
                      Agendar Consulta
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-padding" aria-labelledby="related-posts-heading">
          <div className="container mx-auto container-padding">
            <h2 id="related-posts-heading" className="text-section-title mb-8 text-center">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((post) => (
                <Card key={post.slug} className="card-elevated group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-success font-semibold mb-3">
                      <span className="bg-success/10 px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-card-title mb-4 group-hover:text-success transition-colors">
                      {post.title}
                    </h3>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-success hover:text-success/80 font-medium text-sm flex items-center group"
                    >
                      Ler artigo
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Voltar ao Blog
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Página Principal
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogPost;
