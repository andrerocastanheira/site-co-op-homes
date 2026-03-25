import { NextRequest, NextResponse } from 'next/server';

interface ContactBody {
  nome?: string;
  email?: string;
  telemovel?: string;
  tipoPedido?: string;
  projeto?: string;
  mensagem?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    const { nome, email, tipoPedido, projeto, mensagem } = body;

    // Validate required fields
    if (!nome || !email || !tipoPedido || !projeto || !mensagem) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatórios em falta.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido.' },
        { status: 400 }
      );
    }

    // Minimum message length
    if (mensagem.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Mensagem demasiado curta.' },
        { status: 400 }
      );
    }

    // Mock: log the received data (in production, send email or save to DB)
    console.log('Contact form submission:', {
      nome,
      email,
      telemovel: body.telemovel || null,
      tipoPedido,
      projeto,
      mensagem,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Mensagem recebida!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}
