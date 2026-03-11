'use client';

import { Heart, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="relative bg-primary text-white py-16 px-4 md:px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 text-8xl font-black">1954</div>
        <div className="absolute bottom-0 right-0 text-8xl font-black">1975</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main message */}
        <div className="text-center mb-16 border-b border-secondary/30 pb-12">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-balance leading-[1.3]">
            Kết Luận: Sức Mạnh Dân Tộc + Sức Mạnh Thời Đại
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-[1.8] mb-6">
            Cuộc kháng chiến chống Mỹ không phải là cuộc chiến của riêng Việt Nam. Đó là tâm điểm của cuộc đụng đầu lịch sử giữa phong trào giải phóng dân tộc, lực lượng xã hội chủ nghĩa, dân chủ, hòa bình với chủ nghĩa đế quốc hiếu chiến.
          </p>
          <p className="text-xl text-secondary font-semibold">
            Thắng lợi đó là thắng lợi của lương tri nhân loại.
          </p>
        </div>

        {/* Key principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Heart className="w-10 h-10 mx-auto mb-4 text-secondary" />
            <h4 className="text-xl font-serif font-bold mb-3">Tính Chất</h4>
            <p className="text-lg text-gray-300 leading-[1.8]">
              Cuộc chiến tranh giải phóng dân tộc, bảo vệ Tổ quốc, mang tính thời đại sâu sắc
            </p>
          </div>
          <div className="text-center">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-secondary" />
            <h4 className="text-xl font-serif font-bold mb-3">Phạm Vi</h4>
            <p className="text-lg text-gray-300 leading-[1.8]">
              Không chỉ là cuộc chiến của Việt Nam mà của cả thế giới tiến bộ
            </p>
          </div>
          <div className="text-center">
            <Mail className="w-10 h-10 mx-auto mb-4 text-secondary" />
            <h4 className="text-xl font-serif font-bold mb-3">Di Sản</h4>
            <p className="text-lg text-gray-300 leading-[1.8]">
              Để lại bài học sâu sắc cho nhân loại về độc lập, tự do, hòa bình
            </p>
          </div>
        </div>

        {/* Historical acknowledgment */}
        <div className="bg-white/10 backdrop-blur border border-secondary/20 rounded-xl p-8 mb-12">
          <h4 className="text-3xl font-serif font-bold mb-6 text-center">Những Giá Trị Đạo Đức</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div>
              <h5 className="font-semibold text-secondary mb-2">Giáo Dục Lịch Sử</h5>
              <p className="text-gray-300 leading-[1.8]">
                Trang web này được tạo nhằm giáo dục về một giai đoạn quan trọng của lịch sử, đồng thời kỷ niệm những anh hùng đã hy sinh.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-secondary mb-2">Tìm Hiểu Sự Thật</h5>
              <p className="text-gray-300 leading-[1.8]">
                Nó giúp các thế hệ trẻ hiểu rõ hơn về bối cảnh lịch sử, đường lối chiến lược, và sự ủng hộ quốc tế.
              </p>
            </div>
          </div>
        </div>


        {/* Bottom message */}
        <div className="mt-12 text-center border-t border-secondary/30 pt-8">
          <p className="text-xl md:text-2xl italic text-gray-300 max-w-2xl mx-auto font-serif leading-[1.6]">
            “Không có gì quý hơn độc lập, tự do”<br/>
            <span className="text-sm text-secondary not-italic">— Chủ tịch Hồ Chí Minh</span>
          </p>
          <div className="mt-8">
            <Link
              href="/minigame"
              className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-secondary/90"
            >
              Chơi "Mảnh ghép lịch sử"
            </Link>
          </div>
        </div>
      </div>

      {/* AI Usage Footer */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-white/30 mb-8">
            AI Usage
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* Row 1 — NotebookLM */}
            <div className="flex items-center gap-3 rounded-full border border-yellow-500/40 bg-yellow-500/5 px-6 py-3">
              <span className="text-base text-white/60">Nội dung được hỗ trợ bởi</span>
              <Image src="/notebooklm-scaled.webp" alt="NotebookLM" width={28} height={28} className="rounded-sm" />
              <span className="text-base font-bold text-white">NotebookLM</span>
            </div>

            {/* Row 2 — v0 */}
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3">
              <span className="text-base text-white/60">Website được tạo bởi</span>
              <Image src="/v0-logo.png" alt="v0" width={28} height={28} className="rounded-sm" />
              <span className="text-base font-bold text-white">v0.dev</span>
              <span className="text-white/30 mx-1">&</span>
              <Image src="/claude-color.png" alt="Claude" width={28} height={28} className="rounded-sm" />
              <span className="text-base font-bold text-white">Claude</span>
            </div>
          </div>

          <p className="text-center text-xs text-white/20 mt-8">
            © 2025 HCM202 — Bản quyền thuộc về PromptEngineer
          </p>
        </div>
      </div>
    </footer>
  );
}
