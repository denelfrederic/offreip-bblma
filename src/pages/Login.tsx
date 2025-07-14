import React, { useState } from 'react';

/**
 * Page de connexion (mire login/mot de passe)
 * - Utilise un formulaire contrôlé pour les champs
 * - Gère l’état local pour les valeurs et les erreurs
 * - Prête à intégrer une authentification Supabase
 */
const Login: React.FC = () => {
  // États pour les champs et l’erreur
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // Ici, tu pourras intégrer l’appel à Supabase
    // Pour l’instant, simple validation locale
    if (!email || !password) {
      setError('Merci de remplir tous les champs.');
      setLoading(false);
      return;
    }
    // Simule une attente réseau
    setTimeout(() => {
      setLoading(false);
      setError('Identifiants incorrects');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Connexion à l'espace client</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-black">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 text-center"
            disabled={loading}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 