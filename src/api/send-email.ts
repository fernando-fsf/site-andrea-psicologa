import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Pega a chave de API das variáveis de ambiente da Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Permite apenas requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message, phone } = req.body;

    // Validação simples dos dados recebidos
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // Envia o e-mail usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Contato Site <psiandreamatias@gmail.com>', // E-mail verificado no Resend
      to: ['estudecivil@gmail.com'], // Para onde a mensagem será enviada
      subject: `Nova mensagem do site: ${subject}`,
      html: `
        <h1>Nova Mensagem do Formulário de Contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }

    return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro inesperado.' });
  }
}
