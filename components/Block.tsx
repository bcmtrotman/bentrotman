import type { BlockColour } from "@/lib/sections";

const fill: Record<BlockColour, string> = {
  cyan: "bg-cyan text-bg",
  yellow: "bg-yellow text-bg",
  green: "bg-green text-bg",
  red: "bg-red text-fg",
  blue: "bg-blue text-fg",
};

/** Block colour heading. Cyan, yellow, green carry black text. Red, blue carry white. */
export default function Block({
  colour,
  children,
  as: Tag = "div",
  className = "",
}: {
  colour: BlockColour;
  children: React.ReactNode;
  as?: "div" | "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={`chrome-block inline-block px-2 py-1 ${fill[colour]} ${className}`}>{children}</Tag>
  );
}
