import { ServiceStatus } from './components/service-status.jsx';
import { useSystemHealth } from './hooks/use-system-health.js';

const foundations = [
  ['01', 'Giao diện', 'React, Vite và Tailwind'],
  ['02', 'API chính', 'Express và PostgreSQL'],
  ['03', 'Dịch vụ AI', 'FastAPI, sẵn sàng gắn model'],
];

export default function App() {
  const health = useSystemHealth();

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="page-shell">
        <header className="flex items-center justify-between border-b border-line py-5">
          <a href="/" className="brand-mark" aria-label="MiraiGo — trang chủ">
            <span aria-hidden="true">未来</span>
            <span>MiraiGo</span>
          </a>
          <span className="text-xs tracking-[0.18em] text-ink-faint uppercase">Project base</span>
        </header>

        <div className="hero-layout">
          <section className="py-14 sm:py-20 lg:py-28">
            <p className="eyebrow">Nền tảng học tiếng Nhật cho người Việt</p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[0.98] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Một nền móng rõ ràng cho hành trình đến{' '}
              <span className="text-vermilion">tương lai.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              Base dự án đã tách ranh giới giao diện, API và nhận dạng chữ viết để đội ngũ có thể
              phát triển từng phần mà không làm rối kiến trúc chung.
            </p>

            <div className="mt-12 border-t border-line">
              {foundations.map(([number, title, detail]) => (
                <div key={number} className="foundation-row">
                  <span className="font-mono text-xs text-vermilion">{number}</span>
                  <strong className="text-sm font-semibold">{title}</strong>
                  <span className="text-sm text-ink-muted">{detail}</span>
                </div>
              ))}
            </div>
          </section>

          <aside className="hero-aside">
            <div className="kana-rail" aria-hidden="true">
              <span>み</span>
              <span>ら</span>
              <span>い</span>
              <span>ご</span>
            </div>
            <ServiceStatus
              status={health.status}
              version={health.data?.version}
              onRetry={health.retry}
            />
          </aside>
        </div>
      </div>
    </main>
  );
}
