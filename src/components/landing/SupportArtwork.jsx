import { siteUrl } from '../../lib/siteUrl.js'

export default function SupportArtwork({ active, scenes }) {
  return <div className="support-artwork" data-stage={active} aria-hidden="true">
    {scenes.map((scene, index) => <div className={`support-art-scene${active === index ? ' is-active' : ''}`} key={scene.id}>
      <img src={siteUrl(scene.artwork)} alt="" width="600" height="500" />
    </div>)}
  </div>
}
