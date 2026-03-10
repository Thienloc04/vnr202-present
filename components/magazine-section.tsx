'use client';

import { Flag, Globe } from 'lucide-react';

export function MagazineSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Tính Chất & Ý Nghĩa
          </h2>
          <p className="text-xl text-gray-600">
            Hơn cả một chiến thắng - Một đối với lịch sử
          </p>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left column - National value */}
          <div className="relative">
            <div className="bg-white rounded-lg border-2 border-primary overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Header with icon */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 flex items-center gap-4">
                <Flag className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-black">Giá Trị Dân Tộc</h3>
                  <p className="text-sm text-gray-200">30/4/1975 - Ngày Thống Nhất</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-3">Thống Nhất Đất Nước</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Sau hơn 30 năm chiến đấu, đất nước được thống nhất dưới cùng một lá cờ. Việt Nam không còn bị chia cắt, dân tộc Việt không còn bị chia rẽ.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-bold text-primary mb-3">Bảo Vệ Toàn Vẹn Lãnh Thổ</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Lãnh thổ quốc gia được bảo vệ, chủ quyền được khôi phục. Việt Nam tồn tại với tư cách là một quốc gia độc lập, thống nhất trên bản đồ thế giới.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-bold text-primary mb-3">Quyền Làm Chủ Số Phận</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Dân tộc Việt Nam được quyền tự quyết số phận, lựa chọn đường lối phát triển riêng của mình mà không bị can thiệp từ bên ngoài.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - International value */}
          <div className="relative">
            <div className="bg-white rounded-lg border-2 border-secondary overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Header with icon */}
              <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white p-8 flex items-center gap-4">
                <Globe className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-black">Giá Trị Quốc Tế</h3>
                  <p className="text-sm text-gray-200">Ý Nghĩa Lịch Sử Toàn Cầu</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-3">Thức Tỉnh Lương Tri Nhân Loại</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Cuộc chiến kích thích cảnh tỉnh thế giới về tội ác chiến tranh. Tòa án quốc tế B. Russell đã lên án tội ác của đế quốc. Nhân dân thế giới nâng cao nhận thức.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-bold text-secondary mb-3">Đập Tan Phản Kích Đế Quốc</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Thắng lợi của nhân dân Việt Nam là thắng lợi lớn nhất của lực lượng giải phóng dân tộc sau Thế chiến II. Đó là sự sụp đổ của chủ nghĩa thực dân mới.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-bold text-secondary mb-3">Cổ Vũ Phong Trào Toàn Thế Giới</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Thắng lợi này cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở châu Phi, Nam Mỹ, châu Á. Nó mở đầu cho các cuộc chiến tranh giải phóng khác.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Quote */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12 text-center">
          <p className="text-2xl md:text-3xl font-black mb-4 text-balance leading-snug">
            "Việt Nam chiến đấu không chỉ cho mình,<br/>
            mà cho cả những dân tộc đang khao khát tự do trên thế giới."
          </p>
          <p className="text-sm text-gray-200 mt-6 italic">Đảng Cộng sản Việt Nam</p>
        </div>

        {/* Bottom stat boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { number: '30', label: 'Năm Chiến Đấu', color: 'primary' },
            { number: '3', label: 'Mặt Trận Chiến Lược', color: 'secondary' },
            { number: '5', label: 'Nước Đồng Minh Mỹ', color: 'red-600' },
            { number: '∞', label: 'Tâm Trí Nhân Dân', color: 'yellow-600' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-${stat.color} text-white rounded-lg p-6 text-center border-2 border-${stat.color}`}
              style={{
                backgroundColor: stat.color === 'primary' ? 'rgb(21, 21, 21)' : 
                                 stat.color === 'secondary' ? 'rgb(139, 69, 19)' :
                                 stat.color === 'red-600' ? 'rgb(220, 38, 38)' :
                                 'rgb(202, 138, 4)',
              }}
            >
              <div className="text-3xl md:text-4xl font-black">{stat.number}</div>
              <div className="text-sm md:text-base font-semibold mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
