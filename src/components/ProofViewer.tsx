import { ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Proof } from "../data/competitions";
import { assetPath } from "../lib/assetPath";

export default function ProofViewer({ proof, label = "查看证明" }: { proof: Proof; label?: string }) {
  const [open, setOpen] = useState(false);
  const url = assetPath(proof.path);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  if (proof.type !== "image") {
    return <a href={url} target="_blank" rel="noreferrer" className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-academic-600 hover:text-academic-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400">{label}<ExternalLink size={13} /></a>;
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-academic-600 hover:text-academic-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400">{label}</button>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="获奖证明预览" onClick={() => setOpen(false)} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm">
          <div onClick={(event) => event.stopPropagation()} className="relative flex max-h-[92vh] max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
              <a href={url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 rounded text-sm font-medium text-academic-600 dark:text-blue-400">在新标签页打开<ExternalLink size={15} /></a>
              <button type="button" onClick={() => setOpen(false)} aria-label="关闭预览" className="focus-ring rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><X size={19} /></button>
            </div>
            <img src={url} alt="获奖证明" className="max-h-[calc(92vh-58px)] w-auto object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
