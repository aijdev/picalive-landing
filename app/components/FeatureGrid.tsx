import type { ReactNode } from "react";
import { CAPABILITIES } from "../lib/content";
import {
  PlayIcon,
  SparklesIcon,
  BoltIcon,
  ShareIcon,
  HistoryIcon,
  ShieldIcon,
} from "./Icons";

const ICONS: Record<string, ReactNode> = {
  tap: <PlayIcon className="h-6 w-6" />,
  motion: <SparklesIcon className="h-6 w-6" />,
  speed: <BoltIcon className="h-6 w-6" />,
  share: <ShareIcon className="h-6 w-6" />,
  history: <HistoryIcon className="h-6 w-6" />,
  privacy: <ShieldIcon className="h-6 w-6" />,
};

/** Grid of the app's core capabilities. Used on the home + how-it-works pages. */
export function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {CAPABILITIES.map((capability) => (
        <div
          key={capability.title}
          className="card card-hover flex flex-col gap-4 p-6"
        >
          <span className="icon-badge h-12 w-12">
            {ICONS[capability.icon] ?? <SparklesIcon className="h-6 w-6" />}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {capability.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {capability.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
