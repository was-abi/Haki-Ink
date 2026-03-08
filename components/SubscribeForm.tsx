'use client';

import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Welcome! Check your inbox.' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'error', text: 'Connection error. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
        className="mb-2 w-full rounded-[3px] border border-[var(--color-border)] bg-white px-3 py-2 font-body text-sm focus:border-[var(--color-secondary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]/30 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading || !email}
        className="w-full rounded-[3px] bg-[var(--color-secondary)] px-4 py-2 font-heading text-[0.65rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-primary)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>

      {/* Feedback message */}
      {message && (
        <p
          className={`font-body text-xs mt-2 ${
            message.type === 'success'
              ? 'text-[var(--color-secondary)]'
              : 'text-red-600'
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
