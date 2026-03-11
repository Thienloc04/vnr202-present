import Image from 'next/image';

export function FlipCardsSection() {
  return (
    <section className="relative py-28 px-6 md:px-8 bg-[var(--color-parchment)]">
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">
            Phần I — Đặt Vấn Đề
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-5">
            Điểm Nhìn Lịch Sử
          </h2>
          <div className="w-12 h-0.5 bg-secondary mx-auto" />
        </div>

        {/* Single card — Đặt vấn đề */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border mb-16">
          <div className="relative h-72 md:h-80 w-full">
            <Image src="/part1-img (2).png" alt="Việt Nam và cuộc chiến tranh chống Mỹ" fill className="object-cover" />
          </div>
          <div className="bg-white p-8 md:p-10">
            <p className="font-sans text-lg md:text-xl text-primary/80 leading-loose">
              Mỹ là <strong className="text-primary font-semibold">cường quốc quân sự hàng đầu thế giới</strong>, nhưng đã thất bại trước <em className="text-secondary font-medium not-italic">một dân tộc nhỏ bé ở Đông Nam Á</em>. Nhiều học giả gọi đây là <span className="font-heading italic">&ldquo;chiến tranh Việt – Mỹ&rdquo;</span>, song cũng có quan điểm cho rằng đó là một cuộc đấu tranh vì <strong className="text-accent font-semibold">hòa bình và độc lập</strong> của nhân loại tiến bộ.
            </p>
          </div>
        </div>

        {/* Constructive question */}
        <div className="relative max-w-3xl mx-auto text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-6">
            Câu hỏi kiến tạo
          </p>
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary leading-snug font-semibold text-balance">
            Bản chất của cuộc kháng chiến chống Mỹ, cứu nước là gì —
            <br className="hidden md:block" />
            <span className="text-secondary"> một cuộc chiến riêng của Việt Nam</span>,
            hay <span className="text-accent">một phần của phong trào cách mạng thế giới</span> trong thế kỷ XX?
          </h3>
        </div>

        {/* Closing quote */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -left-4 top-0 text-7xl font-heading text-secondary/15 leading-none select-none">&ldquo;</div>
          <blockquote className="border-l-2 border-secondary/40 pl-8 py-4">
            <p className="font-heading text-xl md:text-2xl text-primary italic leading-relaxed">
              Cuộc kháng chiến chống Mỹ, cứu nước là tâm điểm của cuộc đụng đầu lịch sử giữa phong trào giải phóng dân tộc, lực lượng hòa bình, dân chủ với chủ nghĩa đế quốc hiếu chiến.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
