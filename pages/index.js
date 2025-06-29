import { useState, useEffect } from 'react';

export default function Home() {
  const [headline, setHeadline] = useState('Zemní a výkopové práce');
  const [subtext, setSubtext] = useState('Výkopy, zásypy a terénní úpravy s profesionálním přístupem.');
  const [editMode, setEditMode] = useState(false);
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (window.location.pathname.includes('/admin')) {
      setEditMode(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'bagry' && password === 'bagry') {
      setAuth(true);
    } else {
      alert('Nesprávné přihlašovací údaje');
    }
  };

  return (
    <div className="min-h-screen p-10 font-sans bg-yellow-50 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-6">{headline}</h1>
      <p className="text-lg text-center mb-10">{subtext}</p>

      {editMode && !auth && (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
          <input className="w-full p-2 border" placeholder="Uživatelské jméno" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="w-full p-2 border" type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full p-2 bg-black text-white">Přihlásit se</button>
        </form>
      )}

      {editMode && auth && (
        <div className="max-w-xl mx-auto space-y-4">
          <input className="w-full p-2 border" value={headline} onChange={(e) => setHeadline(e.target.value)} />
          <textarea className="w-full p-2 border" value={subtext} onChange={(e) => setSubtext(e.target.value)} />
        </div>
      )}

      <div className="mt-20 text-center text-sm text-gray-500">© {new Date().getFullYear()} Zevyp.cz</div>
    </div>
  );
}