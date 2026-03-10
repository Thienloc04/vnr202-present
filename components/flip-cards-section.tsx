'use client';

import { useState } from 'react';
import { Globe2, Users } from 'lucide-react';

interface FlipCardProps {
  front: {
    title: string;
    icon: React.ReactNode;
    subtitle: string;
  };
  back: {
    title: string;
    content: string;
  };
}

function FlipCard({ front, back }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white border-2 border-primary rounded-lg p-8 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="mb-4 text-primary">{front.icon}</div>
          <h3 className="text-2xl font-bold text-primary mb-3">{front.title}</h3>
          <p className="text-gray-600 text-sm">{front.subtitle}</p>
          <p className="text-xs text-gray-400 mt-6">Bấm để lật thẻ</p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-secondary text-white border-2 border-secondary rounded-lg p-8 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-2xl font-bold mb-4">{back.title}</h3>
          <p className="text-sm leading-relaxed">{back.content}</p>
        </div>
      </div>
    </div>
  );
}

export function FlipCardsSection() {
  const cards: FlipCardProps[] = [
    {
      front: {
        title: 'Chiến Tranh Việt - Mỹ',
        icon: <Globe2 className="w-12 h-12" />,
        subtitle: 'Một dân tộc nhỏ đối đầu cường quốc số 1 thế giới',
      },
      back: {
        title: 'Bản Hùng Ca Của Nhân Loại',
        content: 'Trên bản đồ thế giới, đó là hai quốc gia với sức mạnh hoàn toàn bất cân xứng. Nhưng tinh thần, ý chí, và sự lãnh đạo của Đảng Cộng sản Việt Nam đã khiến điều không thể trở thành có thể.',
      },
    },
    {
      front: {
        title: 'Câu Hỏi Kiến Tạo',
        icon: <Users className="w-12 h-12" />,
        subtitle: 'Vì sao một dân tộc nhỏ lại đánh bại cường quốc số 1?',
      },
      back: {
        title: 'Sức Mạnh Nội Sinh Hay Thời Đại?',
        content: 'Đó là sự kết hợp hoàn hảo giữa sức mạnh dân tộc và sức mạnh thời đại. Đó là quyết tâm chiến lược, đường lối chính xác, và sự ủng hộ của nhân dân thế giới. Là một cuộc chiến không chỉ của Việt Nam, mà của cả nhân loại.',
      },
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Điểm Nhìn Lịch Sử
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đặt vấn đề: Tại sao một dân tộc nhỏ bé lại đánh bại cường quốc?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <FlipCard key={index} {...card} />
          ))}
        </div>

        <div className="mt-16 border-l-4 border-secondary pl-6 py-4">
          <p className="text-lg text-gray-700 italic">
            "Không có ranh giới cho cái thiện. Lịch sử chứng minh rằng cuộc chiến này là tâm điểm của cuộc đụng đầu lịch sử giữa phong trào giải phóng dân tộc với chủ nghĩa đế quốc."
          </p>
        </div>
      </div>
    </section>
  );
}
