export function Card({ children, className }) {
  return <div className={`rounded-lg border bg-white p-6 shadow ${className}`}>{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}