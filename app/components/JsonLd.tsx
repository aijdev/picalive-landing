/**
 * Renders a JSON-LD structured-data block. Server component — the JSON is
 * serialized at build/render time and injected as a script tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
