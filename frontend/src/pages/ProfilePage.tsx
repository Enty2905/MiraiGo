import { Award, Camera, CheckCircle2, Mail, MapPin, Pencil, ShieldCheck } from 'lucide-react';

export function ProfilePage() {
  return <div className="page profile-page">
    <header className="page-title"><div><span className="section-kicker">Tài khoản học viên</span><h1>Hồ sơ cá nhân</h1><p>Quản lý thông tin và nhìn lại hành trình học của Huyền.</p></div></header>
    <section className="profile-cover"><div className="profile-avatar"><span>HN</span><button aria-label="Đổi ảnh đại diện"><Camera size={16}/></button></div><div className="profile-identity"><div><h2>Bảo Huyền</h2><span><CheckCircle2 size={15}/> Thành viên tích cực</span></div><p><Mail size={15}/> huyen.phan@miraigo.vn</p><p><MapPin size={15}/> Việt Nam · Múi giờ GMT+7</p></div><button className="edit-profile" onClick={()=>alert('Mở form chỉnh sửa hồ sơ')}><Pencil size={16}/> Chỉnh sửa hồ sơ</button></section>
    <div className="profile-layout"><section className="panel"><span className="section-kicker">Mục tiêu học tập</span><h2>Chinh phục JLPT N4</h2><p className="profile-description">Huyền đang xây nền từ vựng và Kanji để chuẩn bị cho kỳ thi JLPT. Mục tiêu hiện tại là duy trì ít nhất 30 phút học mỗi ngày.</p><div className="profile-goals"><div><span>Tiến độ lộ trình</span><strong>68%</strong><i><em style={{width:'68%'}}/></i></div><div><span>Mục tiêu tuần</span><strong>4h 35m / 6h</strong><i><em style={{width:'76%'}}/></i></div></div></section><aside className="profile-badges"><article><Award/><div><strong>12 ngày</strong><span>Streak dài nhất</span></div></article><article><ShieldCheck/><div><strong>1.280 XP</strong><span>Tổng kinh nghiệm</span></div></article><article><span className="jp-badge">漢</span><div><strong>128 Kanji</strong><span>Đã ghi nhớ</span></div></article></aside></div>
  </div>
}
