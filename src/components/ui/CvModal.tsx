import { FiDownload, FiX } from 'react-icons/fi'

type CvModalProps = {
  cvUrl: string
  isOpen: boolean
  onClose: () => void
}

function CvModal({ cvUrl, isOpen, onClose }: CvModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="CV viewer"
    >
      <div className="glass-card flex h-[90svh] w-full max-w-5xl flex-col overflow-hidden">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/8 p-4" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div>
            <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.22em] text-[#a3e635]">
              CV Preview
            </p>
            <h2 className="mt-1 font-heading text-lg font-bold text-white">
              Boris Matthew O. Dairo
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cvUrl}
              download
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-[#666] transition hover:border-[#a3e635]/40 hover:text-[#a3e635]"
              aria-label="Download CV"
            >
              <FiDownload className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-[#666] transition hover:border-white/25 hover:text-white"
              onClick={onClose}
              aria-label="Close CV viewer"
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <iframe
          title="Boris Matthew O. Dairo CV"
          src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
          className="h-full w-full border-0 bg-white"
        />
      </div>
    </div>
  )
}

export default CvModal
