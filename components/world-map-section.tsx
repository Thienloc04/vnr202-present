'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MapPoint {
  id: string;
  name: string;
  category: 'enemy' | 'ally' | 'protest';
  info: string;
  details: string[];
  image?: string;
  imagePlaceholder?: string;
}

const mapPoints: MapPoint[] = [
  {
    id: 'us',
    name: 'Hoa Kỳ',
    category: 'enemy',
    info: 'Quốc gia chủ mưu tiến hành chiến tranh xâm lược. Huy động hàng trăm ngàn quân viễn chinh cùng vũ khí hiện đại nhất.',
    details: [
      'Triển khai tối đa hơn 543.000 quân viễn chinh tại Việt Nam (đỉnh điểm năm 1969)',
      'Sử dụng "Chiến tranh cục bộ" (1965–1968), sau chuyển sang "Việt Nam hóa chiến tranh" (1969–1973)',
      'Rải hơn 7 triệu tấn bom trên Đông Dương — gấp 3 lần tổng lượng bom trong Thế chiến II',
      'Sử dụng chất độc da cam/dioxin hủy diệt sinh thái, gây hậu quả kéo dài hàng thập kỷ',
      'Mở cuộc tập kích chiến lược B-52 vào Hà Nội, Hải Phòng (12/1972) nhưng thất bại — "Điện Biên Phủ trên không"',
      'Buộc phải ký Hiệp định Paris (27/1/1973) và rút toàn bộ quân về nước',
    ],
    image: '/linh-my-o-vn.jpg',
  },
  {
    id: 'southkorea',
    name: 'Hàn Quốc',
    category: 'enemy',
    info: 'Đồng minh quân sự lớn nhất của Mỹ — cử lực lượng tham chiến quy mô lớn tại miền Nam Việt Nam.',
    details: [
      'Cử tổng cộng khoảng 320.000 lượt quân sang Việt Nam trong giai đoạn 1964–1973',
      'Cao điểm có đến 50.000 quân đồn trú tại miền Nam',
      'Các đơn vị tiêu biểu: Sư đoàn Mãnh Hổ, Lữ đoàn Rồng Xanh, Sư đoàn Bạch Mã',
      'Đổi lại, Hàn Quốc nhận viện trợ kinh tế và quân sự lớn từ Mỹ, thúc đẩy giai đoạn công nghiệp hóa',
    ],
    image: '/SouthKorea.webp'
  },
  {
    id: 'australia',
    name: 'Úc',
    category: 'enemy',
    info: 'Đồng minh quân sự của Mỹ, cử quân đội sang tham chiến tại Việt Nam.',
    details: [
      'Cử khoảng 60.000 lượt quân tham chiến trong giai đoạn 1962–1972',
      'Triển khai cả lục quân, không quân và hải quân',
      'Phong trào phản chiến trong nước Úc ngày càng mạnh, gây áp lực rút quân',
      'Rút toàn bộ lực lượng chiến đấu vào năm 1972',
    ],
  },
  {
    id: 'thailand',
    name: 'Thái Lan',
    category: 'enemy',
    info: 'Cho phép Mỹ sử dụng căn cứ quân sự và cử quân tham chiến.',
    details: [
      'Cung cấp 7 căn cứ không quân lớn cho Mỹ triển khai B-52 và máy bay chiến đấu',
      'Đến cuối cuộc chiến, hơn 40.000 quân nhân Thái Lan đã phục vụ tại Việt Nam với nhiều vai trò khác nhau.',
      'Căn cứ U-Tapao là nơi xuất kích chính của các phi vụ ném bom chiến lược',
    ],
  },
  {
    id: 'philippines',
    name: 'Philippines',
    category: 'enemy',
    info: 'Cử lực lượng hỗ trợ quân sự cho liên minh do Mỹ dẫn đầu.',
    details: [
      'Cử khoảng 2.000 quân (chủ yếu là lực lượng dân sự và y tế) sang Việt Nam',
      'Cung cấp căn cứ quân sự tại Clark và Subic Bay cho hoạt động hậu cần của Mỹ',
      'Vai trò chủ yếu mang tính hỗ trợ hơn là trực tiếp tham chiến',
    ],
  },
  {
    id: 'newzealand',
    name: 'New Zealand',
    category: 'enemy',
    info: 'Đồng minh của Mỹ trong liên minh quân sự, cử quân tham chiến tại Việt Nam.',
    details: [
      'Cử khoảng 3.900 lượt quân sang Việt Nam trong giai đoạn 1964–1972',
      'Chủ yếu hoạt động tại tỉnh Phước Tuy cùng quân Úc',
      'Phong trào phản chiến trong nước cũng dâng cao, gây tranh cãi chính trị lớn',
    ],
  },
  {
    id: 'ussr',
    name: 'Liên Xô',
    category: 'ally',
    info: 'Cung cấp khối lượng khổng lồ vũ khí, đạn dược, thuốc men, tên lửa phòng không và đào tạo chuyên gia quân sự.',
    details: [
      'Viện trợ quân sự trị giá hàng tỷ đô la trong suốt cuộc chiến',
      'Cung cấp hệ thống tên lửa phòng không SAM-2 — vũ khí chủ lực bắn hạ B-52 và máy bay Mỹ',
      'Viện trợ xe tăng T-54/55, pháo 130mm, tên lửa chống tăng, radar phòng không',
      'Đào tạo hàng ngàn sĩ quan và chuyên gia kỹ thuật Việt Nam tại Liên Xô',
      'Hỗ trợ xây dựng cơ sở hạ tầng quốc phòng và kinh tế miền Bắc',
    ],
    image: '/soviet.jpg',
  },
  {
    id: 'china',
    name: 'Trung Quốc',
    category: 'ally',
    info: 'Chi viện chiến lược quan trọng — vũ khí, lương thực, quân trang và xây dựng cơ sở hạ tầng.',
    details: [
      'Cử tổng cộng khoảng 320.000 lượt bộ đội công binh và phòng không sang hỗ trợ miền Bắc (1965–1968)',
      'Xây dựng, sửa chữa đường sắt, cầu đường, sân bay bị Mỹ đánh phá',
      'Viện trợ vũ khí bộ binh, đạn dược, lương thực, quân trang với số lượng lớn',
      'Là hậu phương chiến lược, trung chuyển viện trợ từ các nước XHCN sang Việt Nam qua đường bộ',
    ],
    image: '/china.jpg',
  },
  {
    id: 'northkorea',
    name: 'Bắc Triều Tiên',
    category: 'ally',
    info: 'Đồng minh XHCN kiên định — cử phi công và chuyên gia quân sự trực tiếp hỗ trợ Việt Nam chống chiến tranh phá hoại của Mỹ.',
    details: [
      'Cử phi công và đơn vị không quân sang hỗ trợ miền Bắc Việt Nam chống máy bay Mỹ (1966–1969)',
      'Viện trợ vũ khí, đạn dược và vật tư quân sự cho Việt Nam Dân chủ Cộng hòa',
      'Chủ tịch Kim Nhật Thành tuyên bố sẵn sàng chiến đấu bên cạnh nhân dân Việt Nam',
      'Đào tạo sĩ quan và kỹ thuật viên quân sự Việt Nam tại Bình Nhưỡng',
    ],
  },
  {
    id: 'cuba',
    name: 'Cu Ba',
    category: 'ally',
    info: 'Nước anh em XHCN, kiên quyết ủng hộ cuộc đấu tranh giải phóng của Việt Nam.',
    details: [
      'Lãnh tụ Fidel Castro công khai tuyên bố: "Vì Việt Nam, Cuba sẵn sàng hiến dâng cả máu của mình"',
      'Cử chuyên gia quân sự và y tế sang hỗ trợ Việt Nam',
      'Là tiếng nói mạnh mẽ tại các diễn đàn quốc tế bảo vệ chính nghĩa của Việt Nam',
      'Truyền cảm hứng đấu tranh chống đế quốc cho phong trào giải phóng dân tộc toàn cầu',
    ],
    image: '/cuba_vietnam.jpg',
  },
  {
    id: 'usa-protest',
    name: 'Phong trào tại Mỹ',
    category: 'protest',
    info: 'Phong trào phản chiến rầm rộ. Đỉnh điểm là "Mùa thu kháng chiến" (1969) buộc chính phủ Mỹ phải rút quân.',
    details: [
      'Ngày 15/10/1969 — "Moratorium Day": hàng triệu người Mỹ xuống đường biểu tình phản chiến trên khắp nước Mỹ',
      'Ngày 15/11/1969: hơn 500.000 người biểu tình tại Washington D.C. — cuộc biểu tình lớn nhất lịch sử Mỹ thời điểm đó',
      'Phong trào lan rộng từ sinh viên đại học đến cựu chiến binh, giáo sĩ, nhà báo, nghệ sĩ',
      'Sự kiện thảm sát Mỹ Lai (1968) bị phanh phui càng đẩy dư luận chống chiến tranh lên đỉnh điểm',
      'Mục sư Martin Luther King Jr. lên tiếng phản đối chiến tranh từ năm 1967, gọi chính phủ Mỹ là "kẻ sử dụng bạo lực lớn nhất trên thế giới"',
      'Huyền thoại quyền anh Muhammad Ali từ chối nhập ngũ, tuyên bố: "Tôi không có tranh chấp gì với Việt Cộng"',
      'Gây áp lực chính trị cực lớn, buộc Tổng thống Nixon phải thúc đẩy rút quân',
    ],
    image: '/anti-vietnamwar.webp',
  },
  {
    id: 'europe',
    name: 'Châu Âu',
    category: 'protest',
    info: 'Paris, London — biển người biểu tình ủng hộ Việt Nam. Tòa án quốc tế B. Russell lên án tội ác chiến tranh của Mỹ.',
    details: [
      'Tòa án Quốc tế Bertrand Russell (1966–1967) xét xử và kết luận Mỹ phạm tội diệt chủng tại Việt Nam',
      'Paris: Hàng trăm ngàn người biểu tình ủng hộ Việt Nam, đặc biệt trong phong trào tháng 5/1968',
      'London: Biểu tình trước Đại sứ quán Mỹ thu hút hàng chục ngàn người tham gia',
      'Thụy Điển: Thủ tướng Olof Palme công khai lên án chiến tranh, so sánh vụ ném bom Hà Nội với tội ác phát xít',
      'Cờ Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được cắm trên nóc Nhà thờ Đức Bà Paris — biểu tượng mạnh mẽ của sự ủng hộ từ nhân dân Pháp',
      'Nhiều nước Tây Âu gây áp lực ngoại giao đòi Mỹ chấm dứt chiến tranh',
    ],
  },
  {
    id: 'africa-latam',
    name: 'Châu Phi & Nam Mỹ',
    category: 'protest',
    info: 'Các phong trào giải phóng dân tộc ở châu Phi, châu Á, Nam Mỹ được cổ vũ mạnh mẽ bởi cuộc kháng chiến của nhân dân Việt Nam.',
    details: [
      'Che Guevara từng nói: "Hãy tạo ra hai, ba, nhiều Việt Nam!" — trở thành khẩu hiệu cách mạng',
      'Phong trào giải phóng ở Angola, Mozambique, Guinea-Bissau lấy cảm hứng từ chiến thắng Việt Nam',
      'Nelson Mandela và ANC (Nam Phi) coi Việt Nam là biểu tượng của ý chí chống áp bức',
      'Các nước Phong trào Không liên kết bày tỏ sự ủng hộ mạnh mẽ tại Liên Hợp Quốc',
      'Chile, Argentina, Brazil: phong trào sinh viên và công nhân biểu tình ủng hộ Việt Nam',
    ],
  },
];

const categories = [
  { key: 'enemy', label: 'Phe đế quốc xâm lược', color: 'bg-red-500', textColor: 'text-red-600', borderColor: 'border-red-200', bgHover: 'hover:bg-red-50' },
  { key: 'ally', label: 'Chi viện XHCN', color: 'bg-accent', textColor: 'text-accent', borderColor: 'border-blue-200', bgHover: 'hover:bg-blue-50' },
  { key: 'protest', label: 'Phong trào ủng hộ', color: 'bg-yellow-500', textColor: 'text-yellow-700', borderColor: 'border-yellow-200', bgHover: 'hover:bg-yellow-50' },
] as const;

export function WorldMapSection() {
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const activeData = mapPoints.find((p) => p.id === activePoint);
  const activeCat = activeData ? categories.find(c => c.key === activeData.category) : null;

  return (
    <section className="relative py-28 px-6 md:px-8 bg-white overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">
            Phần III — Minh Chứng Lịch Sử
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-5">
            Bức Tranh Toàn Cầu
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-5" />
          <p className="font-sans text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Cuộc kháng chiến chống Mỹ không phải xung đột song phương. Mỹ đã biến Việt Nam thành nơi thử nghiệm chiến lược chiến tranh — &ldquo;điểm nóng&rdquo; nhất của cuộc đối đầu ý thức hệ toàn cầu.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <div key={cat.key} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
              <span className="font-sans text-base font-medium text-primary/70">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Map area with background image */}
        <div className="relative rounded-xl border border-border bg-[var(--color-parchment)] overflow-hidden">
          {/* Map background */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'url(/world-connections.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10 p-6 md:p-10">
            {/* Interactive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {mapPoints.map((point) => {
                const cat = categories.find(c => c.key === point.category)!;
                const isActive = activePoint === point.id;
                return (
                  <button
                    key={point.id}
                    onClick={() => setActivePoint(isActive ? null : point.id)}
                    className={`relative p-4 rounded-lg border transition-all duration-200 text-left ${
                      isActive
                        ? `${cat.color} text-white border-transparent shadow-md`
                        : `bg-white ${cat.borderColor} ${cat.bgHover}`
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {!isActive && <div className={`w-2 h-2 rounded-full shrink-0 ${cat.color}`} />}
                      <span className={`font-sans font-semibold text-base ${isActive ? 'text-white' : cat.textColor}`}>
                        {point.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        {activeData && activeCat && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              {/* Image */}
              {activeData.image && (
                <div className="relative h-80 md:h-96 w-full">
                  <Image
                    src={activeData.image}
                    alt={activeData.name}
                    fill
                    className="object-contain bg-black"
                  />
                </div>
              )}
              <div className="bg-primary text-white p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${activeCat.color}`} />
                  <span className="font-sans text-sm uppercase tracking-wider text-white/50">{activeCat.label}</span>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-3">{activeData.name}</h3>
                <p className="font-sans text-white/80 text-lg leading-relaxed mb-5">{activeData.info}</p>
                {activeData.details.length > 0 && (
                  <ul className="space-y-2.5 border-t border-white/10 pt-5">
                    {activeData.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <span className="text-secondary shrink-0 mt-0.5">▸</span>
                        <span className="font-sans text-xl text-white/70 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quote */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute -left-4 top-0 text-7xl font-heading text-secondary/15 leading-none select-none">&ldquo;</div>
          <blockquote className="border-l-2 border-secondary/40 pl-8 py-4">
            <p className="font-heading text-xl md:text-2xl text-primary italic leading-relaxed">
              Không có ranh giới cho cái thiện. Nhân dân thế giới đã đứng về phía Việt Nam trong cuộc đụng đầu lịch sử này.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
