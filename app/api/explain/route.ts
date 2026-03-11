import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const cache = new Map<string, { explanation: string; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    const cached = cache.get(text);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json({ explanation: cached.explanation });
    }

    if (!text || text.length > 500) {
      return NextResponse.json(
        { error: 'Text quá dài (tối đa 500 ký tự)' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error("❌ API Key không tồn tại!");
      return NextResponse.json(
        { error: 'Server chưa cấu hình API Key' },
        { status: 500 }
      );
    }

    console.log("✅ API Key đã nhận:", apiKey.substring(0, 10) + "...");

    const genAI = new GoogleGenerativeAI(apiKey);
    // ĐỔI MODEL NAME
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Giải thích ngắn gọn và dễ hiểu đoạn văn bản sau trong bối cảnh lịch sử Việt Nam (dưới 100 từ, bằng tiếng Việt): "${text}"`;

    console.log("📤 Đang gửi request tới Gemini...");
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    console.log("✅ Nhận được phản hồi từ Gemini");

    cache.set(text, { explanation, timestamp: Date.now() });

    return NextResponse.json({ explanation });

  } catch (error: any) {
    // ✅ LOG CHI TIẾT LỖI
    console.error('❌ Server Error Details:');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    
    return NextResponse.json(
      { error: `Lỗi: ${error.message}` },
      { status: 500 }
    );
  }
}