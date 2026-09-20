import { useState, type ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpen, Brain, ChartNoAxesCombined, ChevronLeft, CircleUserRound, Flame, GraduationCap, Headphones, House, Languages, Menu, MessageCircleMore, Moon, Search, Settings, Sparkles, Sun, Trophy, Type, X, Zap } from 'lucide-react';

const nav = [
  ['/', 'Tổng quan', House], ['/vocabulary', 'Từ vựng', Languages], ['/kanji', 'Kanji', Type],
  ['/grammar', 'Ngữ pháp', BookOpen], ['/listening', 'Luyện nghe', Headphones], ['/reading', 'Luyện đọc', GraduationCap],
  ['/flashcards', 'Flashcard', Brain], ['/quiz', 'Quiz', Sparkles], ['/jlpt', 'JLPT Practice', Trophy],
  ['/tutor', 'AI Tutor', MessageCircleMore], ['/progress', 'Tiến độ', ChartNoAxesCombined], ['/settings', 'Cài đặt', Settings],
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return <div className={dark ? 'app dark' : 'app'}>
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="brand"><span className="brand-glyph">未来</span><span className="brand-name">MiraiGo</span><button className="icon-button mobile-close" onClick={closeMobile}><X size={19}/></button></div>
      <nav className="nav-list" aria-label="Điều hướng chính">
        {nav.map(([to, label, Icon]) => <NavLink key={to} to={to} onClick={closeMobile} className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}><Icon size={19}/><span>{label}</span></NavLink>)}
      </nav>
      <div className="sidebar-card"><Zap size={18}/><div><strong>1.280 XP</strong><span>Còn 120 XP để lên cấp</span></div></div>
      <button className="collapse-button" onClick={() => setCollapsed(v => !v)}><ChevronLeft size={18}/><span>Thu gọn</span></button>
    </aside>
    <div className="mobile-scrim" onClick={closeMobile}/>
    <div className="workspace">
      <header className="topbar">
        <button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Mở menu"><Menu size={21}/></button>
        <label className="search-box"><Search size={18}/><input placeholder="Tìm từ vựng, Kanji, ngữ pháp..."/></label>
        <div className="top-actions">
          <div className="stat-pill"><Flame size={17}/><strong>12</strong><span>ngày</span></div>
          <div className="stat-pill xp"><Zap size={17}/><strong>1.280</strong><span>XP</span></div>
          <button className="icon-button" onClick={() => setDark(v => !v)} aria-label="Đổi giao diện">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
          <div className="profile-wrap"><button className="avatar-button" onClick={() => setProfileOpen(v => !v)}><span>HN</span><div><strong>Bảo Huyền</strong><small>JLPT N4</small></div></button>{profileOpen && <div className="profile-menu"><Link to="/profile" onClick={() => setProfileOpen(false)}><CircleUserRound size={17}/> Hồ sơ cá nhân</Link><Link to="/settings" onClick={() => setProfileOpen(false)}><Settings size={17}/> Cài đặt</Link></div>}</div>
        </div>
      </header>
      <main className="content">{children}</main>
      <nav className="bottom-nav">{nav.slice(0, 5).map(([to,label,Icon]) => <NavLink key={to} to={to}><Icon size={20}/><span>{label}</span></NavLink>)}</nav>
    </div>
  </div>;
}
