import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { params, operation } = await request.json();
  return await handlePostOperation(operation, params);
}

async function handlePostOperation(operation: string, params: any) {
  switch (operation) {
    case "RegistrationForm":
      return registrationForm(params);
    default:
      return NextResponse.json({
        success: false,
        message: `Operation "${operation}" not supported.`,
      });
  }
}

async function registrationForm(params: any) {
  return NextResponse.json({ success: true, message: "Operation 1 completed", data: params });
}
