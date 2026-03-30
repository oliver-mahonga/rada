"use client";

const personas = [
  { id: '550e8400-e29b-41d4-a716-446655440001', name: 'Cyber', icon: '🛡️' },
  { id: '550e8400-e29b-41d4-a716-446655440002', name: 'AI', icon: '🤖' },
  { id: '550e8400-e29b-41d4-a716-446655440003', name: 'Fullstack', icon: '💻' },
  { id: '550e8400-e29b-41d4-a716-446655440004', name: 'Crypto', icon: '₿' },
  { id: '550e8400-e29b-41d4-a716-446655440006', name: 'Newbie', icon: '🌱' },
];

export default function PersonaSwitcher() {
  const switchUser = (id: string) => {
    // We set a fake token and the real UUID to bypass the login check
    localStorage.setItem("rada_token", "demo-token-123");
    localStorage.setItem("rada_user_id", id);
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
      {personas.map((p) => (
        <button
          key={p.id}
          onClick={() => switchUser(p.id)}
          className="px-3 py-1.5 rounded-lg hover:bg-violet-600/20 hover:text-violet-400 transition-all text-[10px] font-black uppercase tracking-tighter flex items-center gap-1"
        >
          <span>{p.icon}</span>
          <span className="hidden lg:inline">{p.name}</span>
        </button>
      ))}
    </div>
  );
}