'use client';

import { useState } from 'react';
import { CircleDot } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  details: string[];
  icon?: React.ReactNode;
}

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineItems: TimelineItem[] = [
    {
      year: '1965',
      title: 'Quyết Tâm Chiến Lược',
      subtitle: 'Hội nghị Trung ương Đảng lần thứ 11 & 12',
      details: [
        'Quyết đánh bại cuộc chiến tranh xâm lược của Mỹ',
        'Bảo vệ miền Bắc, giải phóng miền Nam',
        'Hoàn thành cách mạng dân tộc dân chủ nhân dân',
      ],
    },
    {
      year: '1965 - Vị Trí Nhiệm Vụ',
      title: 'Tiền Tuyến & Hậu Phương',
      subtitle: 'Kết hợp chặt chẽ hai miền',
      details: [
        'Miền Nam: Tiền tuyến lớn',
        'Miền Bắc: Hậu phương lớn cùng xây dựng CNXH',
        'Hết lòng chi viện cho miền Nam',
      ],
    },
    {
      year: '1966',
      title: 'Chân Lý Vĩ Đại',
      subtitle: 'Lời kêu gọi của Chủ tịch Hồ Chí Minh',
      details: [
        '"Không có gì quý hơn độc lập, tự do"',
        'Trở thành kim chỉ nam cho toàn dân tộc',
        'Thống nhất ý chí chiến đấu',
      ],
    },
    {
      year: '1965 - 1975',
      title: 'Phương Châm Hành Động',
      subtitle: 'Ba mặt trận đấu tranh',
      details: [
        'Kết hợp quân sự với chính trị và ngoại giao',
        'Lâu dài dựa vào sức mình là chính',
        'Tranh thủ tối đa sự đồng tình quốc tế',
      ],
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-primary to-primary/95 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(/timeline-graphic.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 text-8xl font-black">1965</div>
        <div className="absolute bottom-10 left-10 text-8xl font-black">1975</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Trái Tim Của Cuộc Chiến
          </h2>
          <p className="text-lg text-gray-200">
            Đường Lối Lãnh Đạo (1965-1975)
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-secondary/30 transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative cursor-pointer transition-all duration-300"
                onClick={() => setActiveIndex(index)}
              >
                {/* Desktop alternating layout */}
                <div
                  className={`hidden md:flex ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <div
                      className={`transform transition-all duration-300 ${
                        activeIndex === index
                          ? 'scale-100 opacity-100'
                          : 'scale-95 opacity-75 hover:opacity-90'
                      }`}
                    >
                      <div className="bg-white/10 backdrop-blur border border-secondary/30 rounded-lg p-6 hover:border-secondary/50 transition-colors">
                        <span className="text-secondary font-bold text-lg">{item.year}</span>
                        <h3 className="text-2xl font-bold mt-2 mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{item.subtitle}</p>
                        {activeIndex === index && (
                          <ul className="space-y-2 text-sm text-gray-200 animate-in fade-in slide-in-from-top-4 duration-300">
                            {item.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-auto flex justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        activeIndex === index
                          ? 'bg-secondary border-secondary scale-150'
                          : 'bg-white/20 border-secondary'
                      }`}
                    />
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden">
                  <div
                    className={`border-l-4 pl-6 pb-8 transition-colors ${
                      activeIndex === index ? 'border-secondary' : 'border-secondary/30'
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur border border-secondary/30 rounded-lg p-4">
                      <span className="text-secondary font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{item.subtitle}</p>
                      {activeIndex === index && (
                        <ul className="space-y-1 text-xs text-gray-200">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-secondary">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center border-t border-secondary/30 pt-12">
          <p className="text-2xl md:text-3xl font-bold text-balance leading-relaxed">
            Giữ vững và phát triển thế tiến công<br/>
            <span className="text-secondary">Đánh lâu dài, dựa vào sức mình là chính</span>
          </p>
        </div>
      </div>
    </section>
  );
}
