import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // TODO: Integrar com CRM, email (Resend/SendGrid) ou webhook
    // Por agora, apenas regista no servidor
    console.log("[Orçamento]", data);

    return NextResponse.json(
      { success: true, message: "Pedido de orçamento recebido com sucesso." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
