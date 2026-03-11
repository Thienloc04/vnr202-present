'use client';

import { useState } from 'react';
import { Globe, Plane, Heart } from 'lucide-react';

interface MapPoint {
  id: string;
  name: string;
  category: 'enemy' | 'ally' | 'protest';
  icon: React.ReactNode;
  color: string;
  info: string;
}

export function WorldMapSection() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  const mapPoints: MapPoint[] = [
    {
      id: 'us',
      name: 'Hoa Kỳ',
      category: 'enemy',
      icon: <Plane className="w-5 h-5" />,
      color: 'bg-red-600',
      info: 'Quốc gia chủ mưu tiến hành chiến tranh xâm lược. Huy động quân viễn chinh và liên minh quân sự.',
    },
    {
      id: 'australia',
      name: 'Úc',
      category: 'enemy',
      icon: <Plane className="w-5 h-5" />,
      color: 'bg-red-500',
      info: 'Chư hầu của Mỹ. Cử quân tham chiến tại Việt Nam Nam.',
    },
    {
      id: 'southkorea',
      name: 'Hàn Quốc',
      category: 'enemy',
      icon: <Plane className="w-5 h-5" />,
      color: 'bg-red-500',
      info: 'Cửa hàng quân sự của Mỹ. Tham gia quy mô lớn.',
    },
    {
      id: 'ussr',
      name: 'Liên Xô',
      category: 'ally',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-blue-600',
      info: 'Cung cấp khối lượng khổng lồ vũ khí, đạn dược, thuốc men và đào tạo nhân lực.',
    },
    {
      id: 'china',
      name: 'Trung Quốc',
      category: 'ally',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-blue-600',
      info: 'Đóng vai trò chi viện chiến lược quan trọng cho Việt Nam.',
    },
    {
      id: 'cuba',
      name: 'Cu Ba',
      category: 'ally',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-blue-500',
      info: 'Nước anh em xã hội chủ nghĩa, ủng hộ Việt Nam.',
    },
    {
      id: 'usa-protest',
      name: 'Mỹ (Phong Trào)',
      category: 'protest',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-yellow-600',
      info: 'Phong trào phản chiến toàn cầu. Sinh viên, người dân, tòa án quốc tế B. Russell.',
    },
    {
      id: 'france',
      name: 'Pháp',
      category: 'protest',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-yellow-600',
      info: 'Biểu tình ủng hộ Việt Nam, lên tiếng phản đối chiến tranh.',
    },
    {
      id: 'africa',
      name: 'Châu Phi',
      category: 'protest',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-yellow-600',
      info: 'Phong trào giải phóng dân tộc ủng hộ Việt Nam.',
    },
  ];

  const categories = [
    { key: 'enemy', label: 'Lực Lượng Xâm Lược', color: 'bg-red-600' },
    { key: 'ally', label: 'Lực Lượng Chi Viện', color: 'bg-blue-600' },
    { key: 'protest', label: 'Phong Trào Ủng Hộ', color: 'bg-yellow-600' },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Bức Tranh Toàn Cầu
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Minh Chứng Lịch Sử: Cuộc chiến không phải của riêng Việt Nam
          </p>
        </div>

        {/* Globe Visualization */}
        <div className="relative mb-12">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-8">
            {categories.map((cat) => (
              <div key={cat.key} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${cat.color}`} />
                <span className="text-sm font-semibold text-primary">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Interactive map points */}
          <div className="relative bg-gray-50 rounded-lg border-2 border-primary p-8 md:p-12 overflow-hidden">
            {/* Background map */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(/world-connections.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            <div className="relative z-10 mb-8">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
              <p className="text-center text-gray-600 mb-8">
                Chọn các quốc gia để xem chi tiết sự tham gia trong cuộc chiến
              </p>
            </div>

            {/* Point grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {mapPoints.map((point) => (
                <button
                  key={point.id}
                  onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                    activePoint === point.id
                      ? `${point.color} text-white border-opacity-100 shadow-lg scale-105`
                      : 'bg-white border-gray-200 text-primary hover:border-primary'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {point.icon}
                    <span className="font-bold text-sm">{point.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Info box */}
          {activePoint && (
            <div className="relative z-20 mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="bg-gray-800 text-white p-8 rounded-lg border-2 border-secondary">
                <h3 className="text-2xl font-bold mb-4">
                  {mapPoints.find((p) => p.id === activePoint)?.name}
                </h3>
                <p className="text-lg leading-relaxed">
                  {mapPoints.find((p) => p.id === activePoint)?.info}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quote */}
        <div className="border-l-4 border-secondary pl-8 py-6">
          <p className="text-xl md:text-2xl font-bold text-primary mb-4 text-balance">
            Không có ranh giới cho cái thiện
          </p>
          <p className="text-lg text-gray-600 italic">
            Nhân dân thế giới đã đứng về phía Việt Nam trong cuộc đụng đầu lịch sử này. Đó là sự kết hợp của sức mạnh dân tộc với sức mạnh thời đại.
          </p>
        </div>
      </div>
    </section>
  );
}
