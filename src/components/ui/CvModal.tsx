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
      className="fixed inset-0 z-80 flex items-center justify-center bg-[#010f1f]/92 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="CV viewer"
    >
      <div className="flex h-[88svh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-white/10 bg-[#051424] shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
          <div>
            <p className="font-mono-label text-[10px] font-bold uppercase tracking-[0.18em] text-[#00f2ea]">
              CV Preview
            </p>
            <h2 className="mt-1 font-heading text-lg font-bold text-[#d4e4fa]">
              Boris Matthew O. Dairo
            </h2>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#d4e4fa] hover:border-[#00f2ea]/50 hover:text-[#00f2ea]"
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
