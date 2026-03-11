'use client';

import Image from 'next/image';

export function MagazineSection() {
  return (
    <section className="relative py-28 px-6 md:px-8 bg-[var(--color-parchment)] overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">
            Phần IV — Hơn Cả Một Chiến Thắng
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-5">
            Tính Chất & Ý Nghĩa
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-5" />
          <p className="font-sans text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Cuộc kháng chiến chống Mỹ, cứu nước không phải cuộc chiến của riêng Việt Nam — mà là tâm điểm của cuộc đụng đầu lịch sử giữa lực lượng tiến bộ và chủ nghĩa đế quốc.
          </p>
        </div>

        {/* Two-column magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left — National value */}
          <article className="group">
            <div className="relative rounded-xl overflow-hidden border border-border bg-white">
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image src="/30-4.jpg" alt="Xe tăng húc đổ cổng Dinh Độc Lập 30/4/1975" fill className="object-cover" />
              </div>

              <div className="p-8">
                <span className="inline-block font-sans text-xs uppercase tracking-widest font-bold text-secondary mb-3">
                  Giá trị dân tộc
                </span>
                <h3 className="font-heading text-3xl font-bold text-primary mb-5">
                  Thống Nhất & Toàn Vẹn
                </h3>
                <div className="space-y-5 font-sans text-base text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-primary text-lg mb-1">Thống Nhất Đất Nước</h4>
                    <p>
                      Sau hơn 30 năm chiến đấu, đất nước được thống nhất dưới cùng một lá cờ. Việt Nam không còn bị chia cắt, dân tộc Việt không còn bị chia rẽ.
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-primary text-lg mb-1">Bảo Vệ Toàn Vẹn Lãnh Thổ</h4>
                    <p>
                      Lãnh thổ quốc gia được bảo vệ, chủ quyền được khôi phục. Việt Nam tồn tại với tư cách là một quốc gia độc lập, thống nhất trên bản đồ thế giới.
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-primary text-lg mb-1">Quyền Làm Chủ Số Phận</h4>
                    <p>
                      Dân tộc Việt Nam được quyền tự quyết số phận, lựa chọn đường lối phát triển riêng mà không bị can thiệp từ bên ngoài.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Right — International value */}
          <article className="group">
            <div className="relative rounded-xl overflow-hidden border border-border bg-white">
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image src="/peace.avif" alt="Nhân dân thế giới ủng hộ Việt Nam" fill className="object-cover" />
              </div>

              <div className="p-8">
                <span className="inline-block font-sans text-xs uppercase tracking-widest font-bold text-accent mb-3">
                  Giá trị quốc tế
                </span>
                <h3 className="font-heading text-3xl font-bold text-primary mb-5">
                  Lương Tri Nhân Loại
                </h3>
                <div className="space-y-5 font-sans text-base text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-primary text-lg mb-1">Thức Tỉnh Lương Tri</h4>
                    <p>
                      Cuộc chiến đánh thức lương tri thế giới trước tội ác chiến tranh. Tòa án quốc tế B. Russell đã lên án tội ác của đế quốc. Nhân loại tiến bộ nâng cao nhận thức.
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-primary text-lg mb-1">Đập Tan Phản Kích Đế Quốc</h4>
                    <p>
                      Thắng lợi vĩ đại nhất của lực lượng giải phóng dân tộc kể từ sau Thế chiến II — đánh dấu sự sụp đổ không thể đảo ngược của chủ nghĩa thực dân mới.
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-primary text-lg mb-1">Cổ Vũ Phong Trào Thế Giới</h4>
                    <p>
                      Thắng lợi này cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở châu Phi, Nam Mỹ, châu Á — mở đường cho các cuộc đấu tranh giành độc lập trên toàn thế giới.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Central Quote */}
        <div className="relative bg-primary text-white rounded-xl p-10 md:p-14 overflow-hidden">
          <div className="grain absolute inset-0 pointer-events-none opacity-30" />
          <div className="absolute -left-4 top-2 text-8xl font-heading text-white/5 leading-none select-none">&ldquo;</div>
          <blockquote className="relative z-10 text-center">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic leading-snug text-balance">
              Việt Nam đã chiến đấu không chỉ cho mình, mà cho cả những dân tộc đang khao khát tự do trên thế giới.
            </p>
            <footer className="mt-6">
              <div className="w-10 h-0.5 bg-secondary mx-auto mb-4" />
              <cite className="not-italic font-sans text-base text-white/50">Đảng Cộng sản Việt Nam</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
