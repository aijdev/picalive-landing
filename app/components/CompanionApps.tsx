import { COMPANION_APPS } from "../lib/content";

/** Cross-promotion strip for the wider AI Journey app family. */
export function CompanionApps() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {COMPANION_APPS.map((app) => (
        <div
          key={app.name}
          className="card flex flex-col items-center gap-2 p-6 text-center"
        >
          <span className="text-3xl" aria-hidden="true">
            {app.emoji}
          </span>
          <span className="font-semibold tracking-tight">{app.name}</span>
          <span className="text-xs text-muted">{app.what}</span>
        </div>
      ))}
    </div>
  );
}
