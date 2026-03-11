'use client';

import { Heart, MapPin, Mail } from 'lucide-react';
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
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-balance">
            Kết Luận: Sức Mạnh Dân Tộc + Sức Mạnh Thời Đại
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6">
            Cuộc kháng chiến chống Mỹ không phải là cuộc chiến của riêng Việt Nam. Đó là tâm điểm của cuộc đụng đầu lịch sử giữa phong trào giải phóng dân tộc, lực lượng xã hội chủ nghĩa, dân chủ, hòa bình với chủ nghĩa đế quốc hiếu chiến.
          </p>
          <p className="text-lg text-secondary font-bold">
            Thắng lợi đó là thắng lợi của lương tri nhân loại.
          </p>
        </div>

        {/* Key principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h4 className="text-lg font-bold mb-2">Tính Chất</h4>
            <p className="text-gray-300">
              Cuộc chiến tranh giải phóng dân tộc, bảo vệ Tổ quốc, mang tính thời đại sâu sắc
            </p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h4 className="text-lg font-bold mb-2">Phạm Vi</h4>
            <p className="text-gray-300">
              Không chỉ là cuộc chiến của Việt Nam mà của cả thế giới tiến bộ
            </p>
          </div>
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h4 className="text-lg font-bold mb-2">Di Sản</h4>
            <p className="text-gray-300">
              Để lại bài học sâu sắc cho nhân loại về độc lập, tự do, hòa bình
            </p>
          </div>
        </div>

        {/* Historical acknowledgment */}
        <div className="bg-white/10 backdrop-blur border border-secondary/30 rounded-lg p-8 mb-12">
          <h4 className="text-2xl font-bold mb-4 text-center">Những Giá Trị Đạo Đức</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-bold text-secondary mb-2">Giáo Dục Lịch Sử</h5>
              <p className="text-gray-300">
                Trang web này được tạo nhằm giáo dục về một giai đoạn quan trọng của lịch sử, đồng thời kỷ niệm những anh hùng đã hy sinh.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-secondary mb-2">Tìm Hiểu Sự Thật</h5>
              <p className="text-gray-300">
                Nó giúp các thế hệ trẻ hiểu rõ hơn về bối cảnh lịch sử, đường lối chiến lược, và sự ủng hộ quốc tế.
              </p>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="border-t border-secondary/30 pt-8 text-center">
          <p className="text-gray-300 mb-4">
            <strong>Bài Thuyết Trình Sáng Tạo</strong>
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Chủ đề: Cuộc Chiến Của Riêng Ai? - Kháng Chiến Chống Mỹ (1954-1975)<br/>
            Môn học: Lịch Sử Đảng Cộng Sản Việt Nam
          </p>
          
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-bold">★</span>
              <span>Tạo bởi v0.app - Hiện thực hóa cuộc thuyết trình sáng tạo</span>
            </div>
            <p className="text-xs mt-4">
              © 2026 Bài Thuyết Trình Sáng Tạo. Tất cả quyền lợi được bảo lưu.
            </p>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center border-t border-secondary/30 pt-8">
          <p className="text-base md:text-lg italic text-gray-300 max-w-2xl mx-auto">
            "Không có gì quý hơn độc lập, tự do"<br/>
            <span className="text-sm text-secondary">— Chủ tịch Hồ Chí Minh</span>
          </p>
          <div className="mt-8">
            <Link
              href="/minigame"
              className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-secondary/90"
            >
              Chơi "Mảnh ghép lịch sử"
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
