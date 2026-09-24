import { BadgeCheck, FilePenLine, LockKeyhole } from 'lucide-react'
import { assurances, steps } from '../../content/landing'
import SectionHeading from './SectionHeading'

const icons = { check: BadgeCheck, edit: FilePenLine, lock: LockKeyhole }

export default function ProcessSection() {
  return <section className="landing-section process-section" id="process" aria-labelledby="process-title">
    <SectionHeading id="process-title" eyebrow="КАК МЫ РАБОТАЕМ" title={<>Всё понятно.<br />На каждом этапе.</>} description="От первого сообщения до доработок. Вы знаете, что происходит с заданием и какой шаг будет следующим." />
    <ol className="process-steps">{steps.map((step, index) => <li key={step.title}><span className="step-marker">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
    <div className="assurances" id="guarantees">{assurances.map(item => { const Icon = icons[item.icon]; return <div className="assurance" key={item.title}><Icon size={25} strokeWidth={1.6} /><div><h3>{item.title}</h3><p>{item.text}</p></div></div> })}</div>
  </section>
}
