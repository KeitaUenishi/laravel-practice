import { memo } from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

export type ModalProps = {
  title: string;
  buttonType?: "primary" | "secondary" | "danger";
  buttonText: string;
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

export const ModalBase = memo((props: ModalProps) => {
  const { title, children, isOpen, closeModal } = props;

  if (!isOpen) return null;

  // TODO: アクセシビリティ フォーカスについての検討 https://zenn.dev/yend724/articles/20220511-pc51v32llyzu8kws
  // TODO: モーダルが縦長になった際のスクロール対応
  return createPortal(
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[rgb(0_0_0_/0.6)]"
      onClick={closeModal}
    >
      <div
        className="w-full max-h-[600px] max-w-[540px] overflow-y-auto rounded-lg bg-white py-4 px-8 mx-6"
        // MEMO: stopPropagation -> キャプキャ及びバブリング段階において現在のイベントが処理されるのを阻止する。
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full items-center justify-between border-b pb-4">
          <div />
          <div className="gap-4">
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
          <button onClick={closeModal}>
            <RxCross1 width={24} height={24} className="fill-gray-500" />
          </button>
        </div>
        <div className="py-4">{children}</div>
      </div>
    </div>,
    document.getElementById("__next")!
  );
});

ModalBase.displayName = "Modal";
