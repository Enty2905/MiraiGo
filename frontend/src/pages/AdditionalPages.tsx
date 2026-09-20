import { useState } from 'react';
import { Bell, Clock3, LockKeyhole, Play, SlidersHorizontal, Volume2 } from 'lucide-react';

const listening = [
  ['N4','駅でのアナウンス','Thông báo tại nhà ga','08:20','Đang học'],
  ['N4','週末の予定','Kế hoạch cuối tuần','06:45','Mới'],
  ['N3','会社での会話','Hội thoại tại công ty','11:10','Khó'],
];
const reading = [
  ['N4','日本のコンビニ','Cửa hàng tiện lợi ở Nhật','5 phút','12 từ mới'],
  ['N4','春のお花見','Ngắm hoa anh đào mùa xuân','7 phút','18 từ mới'],
  ['N3','働き方の変化','Thay đổi trong cách làm việc','10 phút','24 từ mới'],
];

export function ListeningPage(){const [playing,setPlaying]=useState('');return <Module title="Luyện nghe" subtitle="Nghe theo ngữ cảnh thật, kiểm tra transcript sau khi hoàn thành"><div className="module-list">{listening.map(([level,jp,vi,time,status])=><article key={jp}><button className={playing===jp?'media-button playing':'media-button'} onClick={()=>setPlaying(playing===jp?'':jp)}>{playing===jp?<Volume2/>:<Play/>}</button><div><span className="level-tag">{level}</span><h3>{jp}</h3><p>{vi}</p></div><div className="module-meta"><span><Clock3 size={14}/>{time}</span><strong>{playing===jp?'Đang phát':status}</strong></div></article>)}</div></Module>}
export function ReadingPage(){return <Module title="Luyện đọc" subtitle="Đọc hiểu từng bước với từ khóa và câu hỏi kiểm tra"><div className="module-list">{reading.map(([level,jp,vi,time,words])=><article key={jp}><span className="reading-symbol">読</span><div><span className="level-tag">{level}</span><h3>{jp}</h3><p>{vi}</p></div><div className="module-meta"><span>{time}</span><strong>{words}</strong><button onClick={()=>alert(`Mở bài đọc: ${vi}`)}>Bắt đầu</button></div></article>)}</div></Module>}
export function JlptPage(){return <Module title="JLPT Practice" subtitle="Luyện theo cấu trúc đề và theo dõi từng kỹ năng"><div className="jlpt-hero"><div><span className="section-kicker">Mục tiêu hiện tại</span><h2>JLPT N4</h2><p>18 ngày học · 62% lộ trình</p></div><div className="jlpt-ring"><strong>62%</strong></div></div><div className="practice-grid">{[['Từ vựng','30 câu','20 phút',72],['Kanji','25 câu','18 phút',58],['Ngữ pháp','30 câu','25 phút',64],['Đọc hiểu','12 bài','35 phút',46],['Nghe hiểu','20 câu','30 phút',38]].map(([name,q,time,progress])=><article key={String(name)}><span>{name}</span><h3>{q}</h3><p>{time} · Độ khó vừa</p><div className="mini-progress"><i style={{width:`${progress}%`}}/></div><button onClick={()=>alert(`Bắt đầu luyện ${name}`)}>Bắt đầu luyện</button></article>)}</div></Module>}
export function SettingsPage(){const [notice,setNotice]=useState(true);const [audio,setAudio]=useState(true);return <Module title="Cài đặt" subtitle="Tùy chỉnh trải nghiệm học tập của bạn"><div className="settings-grid"><section className="settings-nav"><button className="active"><SlidersHorizontal/> Chung</button><button><Bell/> Thông báo</button><button><LockKeyhole/> Riêng tư</button></section><section className="settings-panel"><h2>Học tập</h2><Setting label="Mục tiêu JLPT" control={<select><option>JLPT N4</option><option>JLPT N3</option><option>JLPT N2</option></select>}/><Setting label="Mục tiêu mỗi ngày" control={<select><option>30 phút</option><option>45 phút</option><option>60 phút</option></select>}/><Setting label="Tự động phát âm thanh" control={<Toggle value={audio} setValue={setAudio}/>}/><Setting label="Nhắc học mỗi ngày" control={<Toggle value={notice} setValue={setNotice}/>}/><button className="save-settings" onClick={()=>alert('Đã lưu cài đặt')}>Lưu thay đổi</button></section></div></Module>}

function Module({title,subtitle,children}:{title:string;subtitle:string;children:React.ReactNode}){return <div className="page"><header className="page-title"><div><span className="section-kicker">MiraGo Study</span><h1>{title}</h1><p>{subtitle}</p></div></header>{children}</div>}
function Setting({label,control}:{label:string;control:React.ReactNode}){return <div className="setting-row"><span>{label}</span>{control}</div>}
function Toggle({value,setValue}:{value:boolean;setValue:(v:boolean)=>void}){return <button aria-label="Bật tắt" className={value?'toggle on':'toggle'} onClick={()=>setValue(!value)}><i/></button>}
