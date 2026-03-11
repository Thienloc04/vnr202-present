'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Clock, Flame, Trophy, RefreshCw, Home, CheckCircle2 } from 'lucide-react';

interface Pair {
  id: number;
  left: string;
  right: string;
}

interface FloatingPoint {
  id: number;
  points: number;
  x: number;
  y: number;
}

interface ScoreboardEntry {
  id: string;
  name: string;
  score: number;
  time: number;
}

interface PendingResult {
  score: number;
  time: number;
}

type GameState = 'idle' | 'playing' | 'won' | 'lost';

const SCOREBOARD_URL = 'https://69b0f1c0adac80b427c375bc.mockapi.io/scoreboard';
const TOP_LIMIT = 5;
const SCOREBOARD_POLL_MS = 3000;

const ALL_PAIRS: Pair[] = [
  {
    id: 1,
    left: 'Ký kết Hiệp định Giơnevơ (7/1954)',
    right: 'Miền Bắc được hoàn toàn giải phóng, bước vào thời kỳ chuyển cách mạng sang giai đoạn XHCN.',
  },
  {
    id: 2,
    left: 'Phong trào "Đồng khởi" (1959 - 1960)',
    right: 'Chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công.',
  },
  {
    id: 3,
    left: 'Đại hội đại biểu toàn quốc lần thứ III của Đảng (9/1960)',
    right: 'Đề ra đường lối tiến hành đồng thời hai chiến lược cách mạng ở hai miền Nam - Bắc.',
  },
  {
    id: 4,
    left: 'Chiến lược "Chiến tranh cục bộ" (1965 - 1968) của Mỹ',
    right: 'Đưa hàng chục vạn quân viễn chinh Mỹ và chư hầu vào trực tiếp tham chiến tại miền Nam.',
  },
  {
    id: 5,
    left: 'Hội nghị Trung ương 11 và 12 (năm 1965)',
    right: 'Quyết định phát động cuộc kháng chiến chống Mỹ, cứu nước trên phạm vi toàn quốc.',
  },
  {
    id: 6,
    left: 'Vị trí, nhiệm vụ của miền Bắc',
    right: 'Là hậu phương lớn, vừa xây dựng CNXH, vừa chống chiến tranh phá hoại và chi viện cho tiền tuyến.',
  },
  {
    id: 7,
    left: 'Vị trí, nhiệm vụ của miền Nam',
    right: 'Là tiền tuyến lớn, trực tiếp đương đầu với quân Mỹ và chư hầu.',
  },
  {
    id: 8,
    left: 'Phương châm chiến lược của Đảng (từ 1965)',
    right: 'Đánh lâu dài, dựa vào sức mình là chính, kết hợp chặt chẽ 3 mặt trận: quân sự, chính trị, ngoại giao.',
  },
  {
    id: 9,
    left: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân (1968)',
    right: 'Giáng đòn bất ngờ, làm phá sản chiến lược "Chiến tranh cục bộ", buộc Mỹ phải xuống thang và đàm phán.',
  },
  {
    id: 10,
    left: 'Chiến lược "Việt Nam hóa chiến tranh" (1969 - 1973) của Mỹ',
    right: 'Dùng người Việt đánh người Việt, rút dần quân Mỹ và mở rộng chiến tranh sang Campuchia, Lào.',
  },
  {
    id: 11,
    left: 'Chiến dịch Đường 9 - Nam Lào (1971)',
    right: 'Đập tan cuộc hành quân "Lam Sơn 719", góp phần đánh bại một bước quan trọng chiến lược "Việt Nam hóa chiến tranh".',
  },
  {
    id: 12,
    left: 'Chiến thắng "Điện Biên Phủ trên không" (12/1972)',
    right: 'Đập tan cuộc tập kích chiến lược bằng B-52 vào Hà Nội, Hải Phòng, buộc Mỹ phải ký Hiệp định chấm dứt chiến tranh.',
  },
  {
    id: 13,
    left: 'Ký kết Hiệp định Paris (27/1/1973)',
    right: 'Buộc Mỹ rút hết quân viễn chinh về nước, giúp ta hoàn thành mục tiêu chiến lược "đánh cho Mỹ cút".',
  },
  {
    id: 14,
    left: 'Nghị quyết Trung ương 21 (7/1973)',
    right: 'Nhấn mạnh con đường cách mạng miền Nam là bạo lực vũ trang, kiên quyết tiến công địch sau khi Mỹ rút quân.',
  },
  {
    id: 15,
    left: 'Chiến thắng Phước Long (cuối 1974 - đầu 1975)',
    right: 'Đòn trinh sát chiến lược, tạo cơ sở thực tiễn để Bộ Chính trị quyết tâm mở cuộc Tổng tiến công và nổi dậy.',
  },
  {
    id: 16,
    left: 'Cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975',
    right: 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước, thực hiện trọn vẹn mục tiêu "đánh cho ngụy nhào".',
  },
  {
    id: 17,
    left: 'Ý nghĩa lịch sử đối với dân tộc (1975)',
    right: 'Chấm dứt vĩnh viễn ách thống trị của chủ nghĩa đế quốc, hoàn thành trọn vẹn cách mạng dân tộc dân chủ nhân dân.',
  },
  {
    id: 18,
    left: 'Ý nghĩa lịch sử đối với thế giới (1975)',
    right: 'Làm phá sản chiến tranh thực dân kiểu mới của Mỹ, mở ra sự sụp đổ của hệ thống thuộc địa kiểu mới.',
  },
  {
    id: 19,
    left: 'Bài học kinh nghiệm về "Ngọn cờ lãnh đạo"',
    right: 'Giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội nhằm huy động sức mạnh toàn dân đánh Mỹ.',
  },
  {
    id: 20,
    left: 'Tính chất cốt lõi của cuộc kháng chiến chống Mỹ',
    right: 'Không chỉ là đấu tranh giải phóng dân tộc mà còn là tâm điểm của phong trào cách mạng thế giới thế kỷ XX.',
  },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sortScoreboard(entries: ScoreboardEntry[]): ScoreboardEntry[] {
  return [...entries].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.time !== b.time) return a.time - b.time;
    return a.name.localeCompare(b.name);
  });
}

function canEnterTopFive(candidate: PendingResult, board: ScoreboardEntry[]): boolean {
  const sorted = sortScoreboard(board);
  if (sorted.length < TOP_LIMIT) return true;
  const boundary = sorted[TOP_LIMIT - 1];
  if (!boundary) return true;
  if (candidate.score > boundary.score) return true;
  if (candidate.score === boundary.score && candidate.time <= boundary.time) return true;
  return false;
}

function normalizeScoreboard(raw: unknown): ScoreboardEntry[] {
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item): ScoreboardEntry | null => {
      if (!item || typeof item !== 'object') return null;

      const record = item as Record<string, unknown>;
      const id = String(record.id ?? '');
      const name = String(record.name ?? 'Ẩn danh').trim() || 'Ẩn danh';
      const score = Number(record.score);
      const time = Number(record.time);

      if (!id || Number.isNaN(score) || Number.isNaN(time)) {
        return null;
      }

      return {
        id,
        name,
        score,
        time,
      };
    })
    .filter((entry): entry is ScoreboardEntry => entry !== null);
}

// ─────────────────────────────────────────────
// Start Screen
// ─────────────────────────────────────────────
function StartScreen({
  onStart,
  scoreboard,
  scoreboardLoading,
  scoreboardError,
  onRefreshScoreboard,
}: {
  onStart: () => void;
  scoreboard: ScoreboardEntry[];
  scoreboardLoading: boolean;
  scoreboardError: string | null;
  onRefreshScoreboard: () => void;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 text-white">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-rose-700/50 bg-rose-950/30 rounded-full text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
          <span>Minigame</span>
          <span>·</span>
          <span>Kháng chiến chống Mỹ 1954–1975</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter mb-1">MẢNH GHÉP</h1>
        <h2 className="text-4xl sm:text-5xl font-black text-rose-400 tracking-tight mb-6">LỊCH SỬ</h2>

        <p className="text-zinc-400 mb-8 leading-relaxed">
          Ghép đúng các sự kiện lịch sử với kết quả và ý nghĩa tương ứng.
          <br />
          Nhanh tay trước khi hết giờ!
        </p>

        {/* Rules */}
        <div className="text-left bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-8 space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Luật chơi</h3>
          <div className="space-y-2.5 text-sm text-zinc-400">
            <div className="flex items-start gap-3">
              <span className="text-rose-400 shrink-0 font-bold mt-0.5">①</span>
              <span>
                Chọn một thẻ ở <strong className="text-white">cột trái</strong> (Sự kiện / Đường lối)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-rose-400 shrink-0 font-bold mt-0.5">②</span>
              <span>
                Ghép với thẻ tương ứng ở <strong className="text-white">cột phải</strong> (Kết quả / Ý nghĩa)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 shrink-0 font-bold w-7 text-right">+10</span>
              <span>điểm cho mỗi cặp ghép đúng</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 shrink-0 font-bold w-7 text-right">+5</span>
              <span>
                điểm thưởng thêm cho mỗi bậc <strong className="text-white">win streak</strong> liên tiếp
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">60 giây</strong> để hoàn thành 10 cặp ghép ngẫu nhiên
              </span>
            </div>
          </div>
        </div>

        <section className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-left">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-yellow-400">Scoreboard Top 5</h3>
            <button
              onClick={onRefreshScoreboard}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Làm mới
            </button>
          </div>

          {scoreboardLoading ? (
            <p className="text-sm text-zinc-500">Đang tải bảng xếp hạng...</p>
          ) : scoreboardError ? (
            <p className="text-sm text-red-400">{scoreboardError}</p>
          ) : scoreboard.length === 0 ? (
            <p className="text-sm text-zinc-500">Chưa có điểm nào được lưu.</p>
          ) : (
            <div className="space-y-2">
              {scoreboard.map((entry, idx) => (
                <div
                  key={entry.id}
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2"
                >
                  <span className="text-xs font-black text-zinc-400">#{idx + 1}</span>
                  <span className="truncate text-sm font-semibold text-zinc-200">{entry.name}</span>
                  <span className="text-sm font-black text-yellow-400">{entry.score}</span>
                  <span className="text-xs text-blue-400">{entry.time}s</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <button
          onClick={onStart}
          className="w-full bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-black text-lg py-4 rounded-xl transition-colors shadow-lg shadow-rose-900/30"
        >
          BẮT ĐẦU CHƠI
        </button>

        <Link
          href="/"
          className="mt-5 inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
        >
          <Home className="w-4 h-4" />
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function MinigamePage() {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [leftOrder, setLeftOrder] = useState<number[]>([]);
  const [rightOrder, setRightOrder] = useState<number[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [wrongLeft, setWrongLeft] = useState<number | null>(null);
  const [wrongRight, setWrongRight] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [floatingPoints, setFloatingPoints] = useState<FloatingPoint[]>([]);
  const [scoreboard, setScoreboard] = useState<ScoreboardEntry[]>([]);
  const [scoreboardLoading, setScoreboardLoading] = useState(true);
  const [scoreboardError, setScoreboardError] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState('');
  const [pendingResult, setPendingResult] = useState<PendingResult | null>(null);
  const [isTopFiveCandidate, setIsTopFiveCandidate] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [roundId, setRoundId] = useState(0);

  const fpCounter = useRef(0);
  const lockRef = useRef(false);
  const evaluatedRoundRef = useRef<number | null>(null);

  const loadScoreboard = useCallback(async (options?: { silent?: boolean }) => {
    const silent = options?.silent === true;

    if (!silent) {
      setScoreboardLoading(true);
      setScoreboardError(null);
    }

    try {
      const res = await fetch(SCOREBOARD_URL, { cache: 'no-store' });
      if (!res.ok) {
        throw new Error('Không thể tải bảng xếp hạng');
      }

      const data = await res.json();
      const normalized = normalizeScoreboard(data);
      setScoreboard(sortScoreboard(normalized).slice(0, TOP_LIMIT));
      setScoreboardError(null);
    } catch {
      if (!silent) {
        setScoreboardError('Không tải được scoreboard, vui lòng thử lại sau.');
        setScoreboard([]);
      }
    } finally {
      if (!silent) {
        setScoreboardLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    void loadScoreboard();
  }, [loadScoreboard]);

  // Near real-time scoreboard updates via polling and tab focus refresh.
  useEffect(() => {
    const pollId = window.setInterval(() => {
      void loadScoreboard({ silent: true });
    }, SCOREBOARD_POLL_MS);

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        void loadScoreboard({ silent: true });
      }
    };

    const handleFocus = () => {
      void loadScoreboard({ silent: true });
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.clearInterval(pollId);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleFocus);
    };
  }, [loadScoreboard]);

  const startGame = useCallback(() => {
    const selected = shuffle([...ALL_PAIRS]).slice(0, 10);
    setPairs(selected);
    setLeftOrder(shuffle(selected.map((p) => p.id)));
    setRightOrder(shuffle(selected.map((p) => p.id)));
    setSelectedLeft(null);
    setMatchedIds([]);
    setWrongLeft(null);
    setWrongRight(null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(60);
    setGameState('playing');
    setFloatingPoints([]);
    setPlayerName('');
    setPendingResult(null);
    setIsTopFiveCandidate(false);
    setSaveStatus('idle');
    setRoundId((prev) => prev + 1);
    lockRef.current = false;
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState('lost');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  // Win detection
  useEffect(() => {
    if (gameState === 'playing' && matchedIds.length === 10) {
      const t = setTimeout(() => setGameState('won'), 400);
      return () => clearTimeout(t);
    }
  }, [matchedIds.length, gameState]);

  // Evaluate top-5 condition once per round when a game ends.
  useEffect(() => {
    if (gameState !== 'won' && gameState !== 'lost') return;
    if (scoreboardLoading) return;
    if (evaluatedRoundRef.current === roundId) return;

    const result = {
      score,
      time: 60 - timeLeft,
    };

    setPendingResult(result);
    setIsTopFiveCandidate(canEnterTopFive(result, scoreboard));
    setSaveStatus('idle');
    evaluatedRoundRef.current = roundId;
  }, [gameState, roundId, score, scoreboard, scoreboardLoading, timeLeft]);

  const saveScore = useCallback(async () => {
    if (!pendingResult || !isTopFiveCandidate) return;
    const finalName = playerName.trim();

    if (!finalName) {
      setSaveStatus('error');
      return;
    }

    setSaveStatus('saving');

    try {
      const res = await fetch(SCOREBOARD_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: finalName,
          score: pendingResult.score,
          time: pendingResult.time,
        }),
      });

      if (!res.ok) {
        throw new Error('Save failed');
      }

      setSaveStatus('saved');
      setIsTopFiveCandidate(false);
      await loadScoreboard();
    } catch {
      setSaveStatus('error');
    }
  }, [isTopFiveCandidate, loadScoreboard, pendingResult, playerName]);

  const handleLeftClick = (id: number) => {
    if (gameState !== 'playing' || lockRef.current) return;
    if (matchedIds.includes(id)) return;
    setSelectedLeft((prev) => (prev === id ? null : id));
  };

  const handleRightClick = (id: number, e: React.MouseEvent) => {
    if (gameState !== 'playing' || lockRef.current) return;
    if (matchedIds.includes(id)) return;
    if (selectedLeft === null) return;

    if (selectedLeft === id) {
      // Correct match
      const points = 10 + streak * 5;
      const newStreak = streak + 1;
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const fpId = ++fpCounter.current;

      setScore((s) => s + points);
      setStreak(newStreak);
      setMaxStreak((ms) => Math.max(ms, newStreak));
      setMatchedIds((prev) => [...prev, id]);
      setSelectedLeft(null);
      setFloatingPoints((prev) => [
        ...prev,
        { id: fpId, points, x: rect.left + rect.width / 2, y: rect.top + 8 },
      ]);
      setTimeout(() => {
        setFloatingPoints((prev) => prev.filter((fp) => fp.id !== fpId));
      }, 1100);
    } else {
      // Wrong match
      lockRef.current = true;
      setWrongLeft(selectedLeft);
      setWrongRight(id);
      setStreak(0);
      setTimeout(() => {
        setWrongLeft(null);
        setWrongRight(null);
        setSelectedLeft(null);
        lockRef.current = false;
      }, 700);
    }
  };

  const getPair = (id: number) => pairs.find((p) => p.id === id)!;
  const progressPct = (matchedIds.length / 10) * 100;
  const timerUrgent = timeLeft <= 10;
  const timerWarning = timeLeft <= 20 && !timerUrgent;
  const topFive = scoreboard.slice(0, TOP_LIMIT);

  if (gameState === 'idle') {
    return (
      <StartScreen
        onStart={startGame}
        scoreboard={topFive}
        scoreboardLoading={scoreboardLoading}
        scoreboardError={scoreboardError}
        onRefreshScoreboard={() => {
          void loadScoreboard();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%       { transform: translateX(-7px); }
          30%       { transform: translateX(7px); }
          50%       { transform: translateX(-5px); }
          70%       { transform: translateX(5px); }
          85%       { transform: translateX(-2px); }
        }
        @keyframes float-up {
          0%   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1.3); }
          60%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(-72px) scale(0.9); }
        }
        .shake-anim  { animation: shake 0.65s ease-in-out; }
        .float-point { animation: float-up 1.1s ease-out forwards; }
      `}</style>

      {/* Floating score popups */}
      {floatingPoints.map((fp) => (
        <div
          key={fp.id}
          className="fixed z-50 pointer-events-none float-point font-black text-xl text-emerald-400 drop-shadow-lg"
          style={{ left: fp.x, top: fp.y }}
        >
          +{fp.points}
        </div>
      ))}

      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Title */}
          <div className="flex items-center gap-2 min-w-0">
            <Link href="/" className="text-zinc-500 hover:text-white transition-colors shrink-0" title="Trang chủ">
              <Home className="w-4 h-4" />
            </Link>
            <span className="text-zinc-600">|</span>
            <span className="text-sm font-black text-white tracking-tight hidden sm:block">MẢNH GHÉP LỊCH SỬ</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            {/* Score */}
            <div className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-base sm:text-lg font-black text-yellow-400">{score}</span>
              <span className="text-xs text-zinc-500 hidden sm:inline">điểm</span>
            </div>

            {/* Streak */}
            <div
              className={`flex items-center gap-1 transition-opacity ${streak > 0 ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={streak === 0}
            >
              <Flame className={`w-4 h-4 ${streak >= 4 ? 'text-amber-300' : 'text-orange-400'}`} />
              <span className="text-sm font-bold text-orange-400">x{streak}</span>
            </div>

            {/* Timer */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono font-black text-base sm:text-lg transition-colors ${
                timerUrgent
                  ? 'bg-red-950/50 border-red-500 text-red-400 animate-pulse'
                  : timerWarning
                  ? 'bg-yellow-950/30 border-yellow-600/70 text-yellow-400'
                  : 'bg-zinc-900 border-zinc-700 text-emerald-400'
              }`}
            >
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{String(timeLeft).padStart(2, '0')}</span>
            </div>

            {/* Restart */}
            <button
              onClick={startGame}
              className="text-zinc-500 hover:text-white transition-colors"
              title="Chơi lại"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-zinc-800/80">
          <div
            className="h-full bg-gradient-to-r from-rose-600 via-orange-500 to-yellow-400 transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </header>

      {/* ── Game Area ── */}
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-5">
        {/* Status hint */}
        <p className="text-center text-xs sm:text-sm text-zinc-500 mb-4">
          Đã ghép:{' '}
          <span className="text-white font-bold">
            {matchedIds.length}
          </span>
          {' '}/ 10&nbsp;&nbsp;·
          {selectedLeft !== null ? (
            <span className="text-rose-400 ml-2">Chọn mảnh ghép vế phải ↓</span>
          ) : (
            <span className="text-zinc-600 ml-2">Chọn một sự kiện ở cột trái →</span>
          )}
        </p>

        {/* Two-column card grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* ── Left Column ── */}
          <div>
            <h2 className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-400 mb-3">
              <span className="w-1 h-3.5 bg-rose-500 rounded-full shrink-0" />
              Sự kiện / Đường lối
            </h2>
            <div className="space-y-2">
              {leftOrder.map((id) => {
                const pair = getPair(id);
                const isMatched = matchedIds.includes(id);
                const isSelected = selectedLeft === id;
                const isWrong = wrongLeft === id;

                return (
                  <button
                    key={id}
                    onClick={() => handleLeftClick(id)}
                    disabled={isMatched}
                    className={[
                      'w-full text-left rounded-lg border px-2.5 py-2 sm:px-3.5 sm:py-2.5',
                      'text-[11px] sm:text-xs leading-relaxed transition-all duration-150',
                      isMatched &&
                        'bg-emerald-950/20 border-emerald-800/40 text-emerald-500/50 cursor-not-allowed opacity-60',
                      isWrong &&
                        'bg-red-950/50 border-red-500 text-red-300 shake-anim cursor-not-allowed',
                      isSelected &&
                        'bg-rose-950/40 border-rose-400 text-white ring-1 ring-rose-500/20 shadow-md shadow-rose-900/20 cursor-pointer',
                      !isMatched &&
                        !isWrong &&
                        !isSelected &&
                        'bg-zinc-900 border-zinc-700/80 text-zinc-300 cursor-pointer hover:border-rose-500/50 hover:bg-zinc-800 hover:text-white',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div className="flex items-start gap-2">
                      {isMatched ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <span
                          className={`shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-rose-400 bg-rose-500/30'
                              : 'border-zinc-600'
                          }`}
                        >
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 block" />
                          )}
                        </span>
                      )}
                      <span>{pair.left}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div>
            <h2 className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
              <span className="w-1 h-3.5 bg-blue-500 rounded-full shrink-0" />
              Kết quả / Ý nghĩa
            </h2>
            <div className="space-y-2">
              {rightOrder.map((id) => {
                const pair = getPair(id);
                const isMatched = matchedIds.includes(id);
                const isWrong = wrongRight === id;
                const isActive = selectedLeft !== null && !isMatched && !isWrong;

                return (
                  <button
                    key={id}
                    onClick={(e) => handleRightClick(id, e)}
                    disabled={isMatched || selectedLeft === null}
                    className={[
                      'w-full text-left rounded-lg border px-2.5 py-2 sm:px-3.5 sm:py-2.5',
                      'text-[11px] sm:text-xs leading-relaxed transition-all duration-150',
                      isMatched &&
                        'bg-emerald-950/20 border-emerald-800/40 text-emerald-500/50 cursor-not-allowed opacity-60',
                      isWrong &&
                        'bg-red-950/50 border-red-500 text-red-300 shake-anim cursor-not-allowed',
                      isActive &&
                        'bg-zinc-900 border-zinc-700/80 text-zinc-300 cursor-pointer hover:border-blue-500/50 hover:bg-zinc-800 hover:text-white',
                      !isMatched &&
                        !isWrong &&
                        !isActive &&
                        'bg-zinc-900/40 border-zinc-800/60 text-zinc-500 cursor-not-allowed',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div className="flex items-start gap-2">
                      {isMatched ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <span className="shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full border border-zinc-700 inline-block" />
                      )}
                      <span>{pair.right}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-yellow-400">Scoreboard Top 5</h3>
            <button
              onClick={() => void loadScoreboard()}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Làm mới
            </button>
          </div>

          {scoreboardLoading ? (
            <p className="text-sm text-zinc-500">Đang tải bảng xếp hạng...</p>
          ) : scoreboardError ? (
            <p className="text-sm text-red-400">{scoreboardError}</p>
          ) : topFive.length === 0 ? (
            <p className="text-sm text-zinc-500">Chưa có điểm nào được lưu.</p>
          ) : (
            <div className="space-y-2">
              {topFive.map((entry, idx) => (
                <div
                  key={entry.id}
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2"
                >
                  <span className="text-xs font-black text-zinc-400">#{idx + 1}</span>
                  <span className="truncate text-sm font-semibold text-zinc-200">{entry.name}</span>
                  <span className="text-sm font-black text-yellow-400">{entry.score}</span>
                  <span className="text-xs text-blue-400">{entry.time}s</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* ── Result Overlay ── */}
      {(gameState === 'won' || gameState === 'lost') && (
        <div className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-7 sm:p-8 max-w-sm w-full text-center shadow-2xl">
            {gameState === 'won' ? (
              <>
                <div className="text-6xl mb-3">🏆</div>
                <h2 className="text-2xl font-black text-yellow-400 mb-1">CHIẾN THẮNG!</h2>
                <p className="text-zinc-400 text-sm mb-6">Bạn đã ghép đúng tất cả 10 cặp!</p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-3">⏰</div>
                <h2 className="text-2xl font-black text-red-400 mb-1">HẾT GIỜ!</h2>
                <p className="text-zinc-400 text-sm mb-6">
                  Đã ghép được{' '}
                  <span className="text-white font-bold">{matchedIds.length}</span>
                  /10 cặp.
                </p>
              </>
            )}

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-2 mb-6 bg-zinc-950 rounded-xl p-4">
              <div>
                <div className="text-2xl font-black text-yellow-400">{score}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Điểm số</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-400">{maxStreak}</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Streak cao nhất</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">
                  {matchedIds.length}
                  <span className="text-base text-zinc-600">/10</span>
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Ghép đúng</div>
              </div>
            </div>

            {isTopFiveCandidate && pendingResult && (
              <div className="mb-6 rounded-xl border border-emerald-700/50 bg-emerald-950/20 p-4 text-left">
                <p className="text-sm font-bold text-emerald-400">Top 5 mới! Nhập tên để lưu điểm:</p>
                <p className="text-xs text-zinc-400 mt-1">
                  Điểm: <span className="text-yellow-400 font-bold">{pendingResult.score}</span>
                  {' · '}
                  Thời gian: <span className="text-blue-400 font-bold">{pendingResult.time}s</span>
                </p>
                <div className="mt-3 flex gap-2">
                  <input
                    value={playerName}
                    onChange={(e) => {
                      setPlayerName(e.target.value);
                      if (saveStatus === 'error') setSaveStatus('idle');
                    }}
                    maxLength={40}
                    placeholder="Nhập tên của bạn"
                    className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                  />
                  <button
                    onClick={() => void saveScore()}
                    disabled={saveStatus === 'saving'}
                    className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saveStatus === 'saving' ? 'Đang lưu...' : 'Lưu điểm'}
                  </button>
                </div>
                {saveStatus === 'error' && (
                  <p className="mt-2 text-xs text-red-400">Vui lòng nhập tên hợp lệ hoặc thử lưu lại.</p>
                )}
              </div>
            )}

            {saveStatus === 'saved' && (
              <p className="mb-6 rounded-lg border border-emerald-700/50 bg-emerald-950/20 px-3 py-2 text-sm text-emerald-400">
                Đã lưu điểm vào bảng xếp hạng top 5.
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={startGame}
                className="flex-1 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                <RefreshCw className="w-4 h-4" />
                Chơi lại
              </button>
              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                <Home className="w-4 h-4" />
                Trang chủ
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
