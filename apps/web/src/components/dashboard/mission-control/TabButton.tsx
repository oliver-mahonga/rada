type TabButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function TabButton({
  label,
  active,
  onClick,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-[3px] transition-all border ${
        active
          ? "bg-white text-black border-white"
          : "bg-white/[0.03] text-white/60 border-white/10 hover:text-white hover:border-violet-500/30"
      }`}
    >
      {label}
    </button>
  );
}