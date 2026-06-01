import { FiX } from 'react-icons/fi'

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
      className="fixed inset-0 z-80 flex items-center justify-center bg-[#0d0c0b]/88 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="CV viewer"
    >
      <div className="flex h-[88svh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/8 bg-[#1c1a18] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/8 p-4">
          <div>
            <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.18em] text-[#f59e0b]">
              CV Preview
            </p>
            <h2 className="mt-1 font-heading text-lg font-bold text-[#f5f0e8]">
              Boris Matthew O. Dairo
            </h2>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 text-[#c4b5a0] hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
            onClick={onClose}
            aria-label="Close CV viewer"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
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
