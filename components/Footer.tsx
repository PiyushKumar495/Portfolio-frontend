'use client';

import type { Profile } from '@/types';

export default function Footer({ profile }: { profile: Profile | null }) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} {profile?.name || 'Piyush Kumar'}. All rights reserved.
        </p>
        {profile && (
          <div className="flex justify-center gap-6">
            <a
              href={profile.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-400 hover:text-accent-500 transition-colors"
            >
              Email
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
