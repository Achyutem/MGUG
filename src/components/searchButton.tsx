import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { routeMeta } from "@/utils/routeMeta";

export default function SearchDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof routeMeta>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Filter results based on query
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = routeMeta.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.path.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  // Reset highlight index when results change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [query, results.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open || results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex(
          (prev) => (prev - 1 + results.length) % results.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = results[highlightedIndex];
        if (selected) {
          window.location.href = selected.path;
          setOpen(false);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, results, highlightedIndex, setOpen]);

  // Scroll active item into view
  useEffect(() => {
    const ref = itemRefs.current[highlightedIndex];
    if (ref) {
      ref.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [highlightedIndex]);

  // Highlight matching text
  const highlight = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <mark key={i} className="bg-orange-400/30 text-orange-300 px-1 rounded">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-xl p-0 overflow-hidden bg-blue-950 text-white border border-white/10 shadow-lg shadow-black/40"
        showCloseButton={false}
      >
        {/* Input Section */}
        <div className="border-b border-white/10 p-4 bg-blue-950/90">
          <Input
            autoFocus
            placeholder="Search anything..."
            className="text-sm bg-blue-950 text-white placeholder:text-gray-400 border-orange-400 focus-visible:ring-orange-400 focus-visible:ring-[1.5px] focus-visible:border-orange-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-2 bg-blue-950/90">
          {!query && (
            <p className="text-gray-400 text-sm">Start typing to search...</p>
          )}
          {query && results.length === 0 && (
            <p className="text-gray-400 text-sm">No results found.</p>
          )}
          {results.map((item, index) => (
            <a
              key={item.path}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`block p-3 rounded-lg transition-all ${
                index === highlightedIndex
                  ? "bg-blue-800 text-white"
                  : "bg-blue-900/60 hover:bg-blue-800"
              }`}
            >
              <div className="font-semibold text-orange-400">
                {highlight(item.title, query)}
              </div>
              <div className="text-sm text-gray-300">
                {highlight(item.path, query)}
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
