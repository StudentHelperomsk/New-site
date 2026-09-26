// Replace each scene with final artwork through supportStory[].artwork.
// These flat vector studies use the brand palette and stay editable in code.
export default function SupportArtwork({ active, scenes }) {
  return <div className="support-artwork" data-stage={active} aria-hidden="true">
    {scenes.map((scene, index) => <div className={`support-art-scene${active === index ? ' is-active' : ''}`} key={scene.id}>
      {scene.artwork ? <img src={scene.artwork} alt="" width="600" height="500" /> : <svg viewBox="0 0 600 500" fill="none">
        {index === 0 && <>
          <path d="M48 341V177C48 61 156 30 244 83L466 216V425H149C93 425 48 395 48 341Z" fill="#DDF1E6" />
          <path d="M76 292C70 208 144 160 266 182C384 203 493 244 504 324L479 408L84 397Z" fill="#008657" />
          <g transform="rotate(18 404 173)"><path d="M345 58H441L481 98V282H345Z" fill="#B8E3CE" /><path d="M441 58V98H481" fill="#00A56C" /><path d="M370 137H447M370 162H431" stroke="#1D3027" strokeWidth="9" strokeLinecap="round" /></g>
          <g transform="rotate(-12 275 267)"><path d="M176 128H327L378 179V383H176Z" fill="white" /><path d="M327 128V179H378" fill="#00A56C" /><path d="M210 224H335M210 254H335M210 284H296" stroke="#1D3027" strokeWidth="11" strokeLinecap="round" /></g>
          <path d="M76 292C102 350 398 411 504 324C514 378 458 435 334 449H174L101 477L109 421C79 394 67 346 76 292Z" fill="#00A56C" />
          <path d="M129 307L141 320M144 287L158 295" stroke="#1D3027" strokeWidth="6" strokeLinecap="round" />
        </>}
        {index === 1 && <>
          <rect x="134" y="70" width="357" height="345" rx="78" transform="rotate(-8 310 240)" fill="#DDF1E6" />
          <path d="M83 93C83 64 103 47 133 47H325C355 47 376 68 376 98V190C376 221 355 241 324 241H175L111 283L118 240C96 234 83 215 83 190Z" fill="#00A56C" />
          <path d="M130 105H294M130 138H251" stroke="#DDF1E6" strokeWidth="12" strokeLinecap="round" />
          <path d="M316 240H497C526 240 545 261 545 291V376C545 403 528 424 501 427L508 463L457 428H316C288 428 271 408 271 380V287C271 259 288 240 316 240Z" fill="white" stroke="#1D3027" strokeWidth="5" />
          <path d="M328 338H483M328 370H444" stroke="#1D3027" strokeWidth="10" strokeLinecap="round" />
          <g transform="rotate(-12 258 255)"><path d="M176 159H303L341 197V346H176Z" fill="white" /><path d="M303 159V197H341" fill="#B8E3CE" /><path d="M202 223H286" stroke="#BECAC3" strokeWidth="8" strokeLinecap="round" /><path d="M198 230L296 216" stroke="#73867B" strokeWidth="3" strokeLinecap="round" /><path d="M202 262H265" stroke="#00A56C" strokeWidth="8" strokeLinecap="round" /><path d="M275 292L289 306L315 276" stroke="#00A56C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></g>
          <path d="M419 161L425 142M443 179L462 169" stroke="#00A56C" strokeWidth="6" strokeLinecap="round" />
        </>}
        {index === 2 && <>
          <path d="M173 399C92 322 123 184 221 97C305 23 440 20 515 84V318C410 340 284 442 173 399Z" fill="#DDF1E6" />
          <path d="M158 112C40 165 34 322 145 389C272 466 464 417 528 333" stroke="#B8E3CE" strokeWidth="24" strokeLinecap="round" />
          <g transform="rotate(14 365 257)"><path d="M303 126H419L461 168V371H303Z" fill="#B8E3CE" /><path d="M320 136H413L451 174V352H320Z" fill="white" /><path d="M413 136V174H451" fill="#00A56C" /><path d="M345 229H414M345 257H414M345 285H390" stroke="#BBCBC1" strokeWidth="9" strokeLinecap="round" /></g>
          <g transform="rotate(-11 238 246)"><path d="M143 117H283L325 159V369H143Z" fill="white" /><path d="M283 117V159H325" fill="#B8E3CE" /><path d="M176 193H277M176 222H277M176 251H238" stroke="#1D3027" strokeWidth="10" strokeLinecap="round" /></g>
          <path d="M262 299L298 335L383 230" stroke="#00A56C" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M158 112C48 165 42 301 152 369C279 446 459 395 520 313" stroke="#00A56C" strokeWidth="19" strokeLinecap="round" /><circle cx="520" cy="313" r="15" fill="#1D3027" />
        </>}
      </svg>}
    </div>)}
  </div>
}
