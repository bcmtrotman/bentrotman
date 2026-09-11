/** Yellow status text. The only recency signal on the site. */
export default function StatusLine({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`chrome text-yellow ${className}`}>{children}</p>;
}
