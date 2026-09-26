import { UsersRound, GraduationCap, Star, ShieldCheck } from 'lucide-react'
import { statistics } from '../content/home'

const icons = { users: UsersRound, cap: GraduationCap, star: Star, shield: ShieldCheck }
export default function StatsBar() {
  return <section className="statistics" id="statistics" aria-label="Student Helper в цифрах">
    {statistics.map(({ icon, value, label }, index) => { const Icon = icons[icon]; return <div className="stat" key={icon} data-reveal="stat" style={{ '--reveal-delay': `${index * 70}ms` }}><Icon size={37} strokeWidth={1.5} /><div><strong>{value}</strong><span>{label}</span></div></div> })}
  </section>
}
