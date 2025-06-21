// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { auth } from './firebase/config';

export default function Home() {
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUid(user.uid);
    });
    return unsubscribe;
  }, []);

  return (
    <main className="p-8 text-center">
      {uid ? (
        <h1>🎉 Welcome! You are signed in anonymously with UID: {uid}</h1>
      ) : (
        <p>Loading Firebase auth...</p>
      )}
    </main>
  );
}
