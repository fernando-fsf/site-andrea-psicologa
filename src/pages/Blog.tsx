import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import blogPsychologyImage from '@/assets/blog-psychology-consultation.jpg';
import blogAnxietyImage from '@/assets/blog-workplace-anxiety.jpg';
import blogRelationshipImage from '@/assets/blog-relationship-therapy.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      slug: 'como-escolher-um-psicologo',
      title: 'Como escolher um psicólogo em Nova Iguaçu',
      excerpt: 'Dicas essenciais para encontrar o profissional ideal para suas necessidades. Critérios importantes, o que perguntar na primeira consulta e como avaliar se o tratamento está funcionando.',
      date: '15 de Janeiro, 2025',
      readTime: '8 min',
      category: 'Orientações',
      image: blogPsychologyImage,
      featured: false
    },
    {
      slug: 'tecnicas-ansiedade-trabalho',
      title: '5 técnicas para reduzir a ansiedade no trabalho',
      excerpt: 'Estratégias práticas da TCC que você pode aplicar no seu dia a dia profissional para gerenciar o estresse e melhorar seu bem-estar ocupacional.',
      date: '12 de Janeiro, 2025',
      readTime: '6 min',
      category: 'Ansiedade',
      image: blogAnxietyImage,
      featured: false
    },
    {
      slug: 'tcc-relacionamentos',
      title: 'TCC para relacionamentos mais saudáveis',
      excerpt: 'Como a Terapia Cognitivo-Comportamental pode melhorar seus relacionamentos familiares e amorosos através da comunicação assertiva.',
      date: '8 de Janeiro, 2025',
      readTime: '10 min',
      category: 'Relacionamentos',
      image: blogRelationshipImage,
      featured: false
    },
    {
      slug: 'primeira-sessao-terapia',
      title: 'O que acontece na sua primeira sessão de terapia',
      excerpt: 'Saiba o que esperar e como se preparar para sua primeira consulta psicológica. Desmistificando o processo terapêutico.',
      date: '5 de Janeiro, 2025',
      readTime: '7 min',
      category: 'Orientações',
      featured: false
    },
    {
      slug: 'depressao-sinais-tratamento',
      title: 'Depressão: sinais e como buscar ajuda',
      excerpt: 'Reconheça os sinais da depressão e entenda como a TCC pode ajudar no tratamento. Informações importantes sobre saúde mental.',
      date: '2 de Janeiro, 2025',
      readTime: '12 min',
      category: 'Depressão',
      featured: false
    },
    {
      slug: 'autocuidado-saude-mental',
      title: 'Autocuidado e saúde mental no dia a dia',
      excerpt: 'Práticas simples e eficazes para cuidar da sua saúde mental diariamente. Dicas de autocuidado baseadas na psicologia positiva.',
      date: '29 de Dezembro, 2024',
      readTime: '9 min',
      category: 'Bem-estar',
      featured: false
    }
  ];

  const categories = ['Todos', 'Ansiedade', 'Depressão', 'Relacionamentos', 'Orientações', 'Bem-estar'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Remove featured posts filtering since all should be shown uniformly

  return (
    <>
      <Helmet>
        <title>Blog - Andréa Matias | Artigos sobre Psicologia e Saúde Mental</title>
        <meta name="description" content="Artigos sobre psicologia, TCC, ansiedade, depressão e bem-estar mental. Dicas práticas e orientações profissionais da psicóloga Andréa Matias." />
        <meta name="keywords" content="blog psicologia, artigos TCC, ansiedade, depressão, saúde mental, Nova Iguaçu" />
        <link rel="canonical" href="https://andreamatiaspsi.com/blog" />
      </Helmet>

      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding hero-gradient" aria-labelledby="blog-title">
          <div className="container mx-auto container-padding text-center">
            <h1 id="blog-title" className="text-hero mb-6">
              Blog de Psicologia
            </h1>
            <p className="text-body-large mb-8 max-w-3xl mx-auto">
              Artigos, reflexões e dicas práticas sobre saúde mental, TCC e bem-estar. 
              Conteúdo profissional para ajudar você em sua jornada de autoconhecimento.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="section-padding bg-secondary/5" aria-labelledby="all-posts-heading">
          <div className="container mx-auto container-padding">
            <h2 id="all-posts-heading" className="text-section-title mb-8 text-center">
              {selectedCategory === 'Todos' ? 'Todos os Artigos' : `Artigos sobre ${selectedCategory}`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-body-large text-muted-foreground">
                  Nenhum artigo encontrado para sua busca.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todos');
                  }}
                  className="mt-4"
                >
                  Ver todos os artigos
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.slug} className="card-elevated group">
                    <CardContent className="p-0">
                      {post.image && (
                        <div className="mb-4">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-success font-semibold mb-3">
                          <span className="bg-success/10 px-2 py-1 rounded-full">{post.category}</span>
                        </div>
                        <h3 className="text-card-title mb-3 group-hover:text-success transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-success hover:text-success/80 font-medium text-sm flex items-center group"
                        >
                          Ler artigo completo
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding warm-gradient text-white">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-4xl font-bold font-heading mb-6">
              Não perca nenhum artigo
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Receba os novos artigos do blog diretamente no seu email. 
              Conteúdo exclusivo sobre saúde mental e bem-estar.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                type="email" 
                placeholder="Seu melhor email"
                className="bg-white text-brand-dark"
              />
              <Button className="bg-brand-dark text-white hover:bg-brand-dark/90">
                Inscrever
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Blog;