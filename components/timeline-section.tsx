'use client';

import { useState } from 'react';

type PhaseId = 'phase1' | 'phase2';

interface EventBlock {
  label: string;
  title: string;
  content: string;
  highlight?: boolean;
}

const phases: Record<PhaseId, { period: string; title: string; intro: string; events: EventBlock[] }> = {
  phase1: {
    period: '1965 – 1968',
    title: 'Đường lối và sự lãnh đạo giai đoạn đầu',
    intro: 'Trước việc đế quốc Mỹ chuyển sang chiến lược "Chiến tranh cục bộ" — đưa quân viễn chinh Mỹ và chư hầu trực tiếp tham chiến tại miền Nam, đồng thời mở rộng chiến tranh phá hoại ra miền Bắc — Hội nghị Trung ương Đảng lần thứ 11 và 12 (năm 1965) đã quyết định động viên lực lượng cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của Mỹ.',
    events: [
      {
        label: 'Tư tưởng chỉ đạo',
        title: 'Giữ Vững Thế Tiến Công',
        content: 'Tư tưởng chỉ đạo của Đảng là giữ vững và phát triển thế tiến công ở miền Nam, đồng thời chuyển hướng xây dựng kinh tế ở miền Bắc để phù hợp với điều kiện có chiến tranh.',
      },
      {
        label: 'Miền Bắc',
        title: 'Hậu Phương Lớn',
        content: 'Miền Bắc trở thành hậu phương lớn, vừa chiến đấu chống chiến tranh phá hoại bằng không quân và hải quân của Mỹ, vừa đảm bảo sản xuất nông nghiệp, công nghiệp, và chi viện cho tiền tuyến miền Nam.',
      },
      {
        label: 'Miền Nam',
        title: 'Đánh Bại Phản Công Mùa Khô',
        content: 'Quân dân miền Nam đã liên tiếp đánh bại các cuộc phản công chiến lược mùa khô của Mỹ.',
      },
      {
        label: 'Bước ngoặt 1968',
        title: 'Tổng Tiến Công Tết Mậu Thân',
        content: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 — thắng lợi mang tính bước ngoặt — đã giáng đòn quyết liệt vào ý chí xâm lược của Mỹ, buộc Mỹ phải xuống thang chiến tranh, tuyên bố ngừng ném bom miền Bắc không điều kiện và chấp nhận đàm phán tại Hội nghị Paris.',
        highlight: true,
      },
    ],
  },
  phase2: {
    period: '1969 – 1975',
    title: 'Từ "Việt Nam hóa chiến tranh" đến toàn thắng',
    intro: 'Sau thất bại của "Chiến tranh cục bộ", Mỹ chuyển sang chiến lược "Việt Nam hóa chiến tranh" dưới thời Tổng thống Nixon.',
    events: [
      {
        label: '1969 – 1973',
        title: 'Đập Tan Chiến Lược Mới',
        content: 'Đảng đã lãnh đạo nhân dân phối hợp cùng lực lượng cách mạng Lào và Campuchia đập tan các cuộc hành quân của Mỹ – ngụy, làm thất bại một bước quan trọng chiến lược "Việt Nam hóa chiến tranh".',
      },
      {
        label: 'Xuân – Hè 1972',
        title: 'Điện Biên Phủ Trên Không',
        content: 'Thắng lợi của cuộc Tiến công chiến lược Xuân Hè 1972, cùng trận chiến đấu oanh liệt "Điện Biên Phủ trên không" — đánh bại cuộc tập kích bằng B-52 của Mỹ vào Hà Nội, Hải Phòng (tháng 12/1972) — đã buộc Mỹ phải ký kết Hiệp định Paris (27/1/1973), rút hết quân Mỹ và chư hầu về nước.',
        highlight: true,
      },
      {
        label: '1973 – 1975',
        title: 'Kiên Quyết Thế Tiến Công',
        content: 'Khi Mỹ rút quân nhưng vẫn tiếp tục viện trợ cho chính quyền Sài Gòn để phá hoại Hiệp định, Đảng (qua Hội nghị Trung ương 21) chỉ đạo kiên quyết giữ vững tư tưởng tiến công.',
      },
      {
        label: '30/4/1975',
        title: 'Đại Thắng Mùa Xuân',
        content: 'Từ cuối năm 1974, nhận thấy thời cơ chiến lược đã đến, Bộ Chính trị hạ quyết tâm giải phóng hoàn toàn miền Nam. Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 diễn ra với 3 chiến dịch lớn: Chiến dịch Tây Nguyên, Chiến dịch Huế – Đà Nẵng và Chiến dịch Hồ Chí Minh lịch sử, kết thúc thắng lợi vào ngày 30/4/1975, hoàn thành sự nghiệp thống nhất đất nước.',
        highlight: true,
      },
    ],
  },
};

export function TimelineSection() {
  const [activePhase, setActivePhase] = useState<PhaseId>('phase1');
  const current = phases[activePhase];

  return (
    <section className="relative py-28 px-6 md:px-8 overflow-hidden bg-[#1a0a0a] text-white">
      {/* Background image placeholder */}
      <div className="absolute inset-0 img-placeholder opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="relative z-10 text-sm text-white/30 italic text-center max-w-xs">
            [ Ảnh AI: Chủ tịch Hồ Chí Minh đang đọc lời kêu gọi, phong cách tranh sơn dầu, tông đỏ bầm ]
          </p>
        </div>
      </div>

      {/* Red overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a] via-[#2a0505]/80 to-[#1a0a0a]" />

      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Background year watermarks */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <div className="absolute -top-8 -right-8 font-heading text-[12rem] font-black leading-none">1965</div>
        <div className="absolute -bottom-8 -left-8 font-heading text-[12rem] font-black leading-none">1975</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-secondary/80 mb-4 font-semibold">
            Phần II — Đường Lối Lãnh Đạo
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-5">
            Lãnh Đạo Cách Mạng Cả Nước
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-5" />
          <p className="font-sans text-lg text-white/50">
            Đường lối kháng chiến chống Mỹ, cứu nước của Đảng (1965 – 1975)
          </p>
        </div>

        {/* Phase toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex rounded-lg border border-white/10 p-1 bg-white/5">
            {(['phase1', 'phase2'] as PhaseId[]).map((id) => (
              <button
                key={id}
                onClick={() => setActivePhase(id)}
                className={`px-8 py-3 rounded-md font-sans text-lg font-semibold transition-all duration-200 ${
                  activePhase === id
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {phases[id].period}
              </button>
            ))}
          </div>
        </div>

        {/* Phase content */}
        <div className="animate-in fade-in duration-300" key={activePhase}>
          {/* Phase header */}
          <div className="mb-10">
            <span className="font-sans text-secondary text-2xl uppercase tracking-widest font-bold">
              {current.period}
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              {current.title}
            </h3>
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-3xl">
              {current.intro}
            </p>
          </div>

          {/* Event blocks with left border timeline */}
          <div className="relative pl-8 border-l border-white/10">
            <div className="space-y-8">
              {current.events.map((event) => (
                <div key={event.title} className="relative">
                  {/* Dot on the line */}
                  <div className={`absolute -left-[calc(2rem+0.3rem)] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                    event.highlight
                      ? 'bg-secondary border-secondary shadow-md shadow-secondary/40'
                      : 'bg-white/10 border-white/20'
                  }`} />

                  <div className={`rounded-lg p-6 border transition-colors ${
                    event.highlight
                      ? 'bg-white/10 border-secondary/30'
                      : 'bg-white/5 border-white/5'
                  }`}>
                    <span className={`inline-block font-sans text-lg uppercase tracking-widest font-bold mb-3 ${
                      event.highlight ? 'text-secondary' : 'text-white/40'
                    }`}>
                      {event.label}
                    </span>
                    <h4 className="font-heading text-2xl font-bold mb-2">{event.title}</h4>
                    <p className="font-sans text-lg text-white/65 leading-relaxed">{event.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three overlapping circles - Quân sự / Chính trị / Ngoại giao */}
        <div className="mt-20 flex flex-col items-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Phương châm hành động</p>
          <div className="relative w-64 h-44 mx-auto">
            <div className="absolute left-0 top-0 w-28 h-28 rounded-full border-2 border-secondary/50 flex items-center justify-center bg-secondary/10 backdrop-blur-sm">
              <span className="font-heading text-xs font-bold text-secondary text-center">Quân sự</span>
            </div>
            <div className="absolute right-0 top-0 w-28 h-28 rounded-full border-2 border-accent/50 flex items-center justify-center bg-accent/10 backdrop-blur-sm">
              <span className="font-heading text-xs font-bold text-accent text-center">Ngoại giao</span>
            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-28 h-28 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <span className="font-heading text-xs font-bold text-white/80 text-center">Chính trị</span>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <p className="font-heading text-2xl md:text-3xl italic text-white/70 leading-relaxed">
            &ldquo;Không có gì quý hơn độc lập, tự do&rdquo;
          </p>
          <p className="font-sans text-base text-secondary mt-3">— Chủ tịch Hồ Chí Minh</p>
        </div>
      </div>
    </section>
  );
}
