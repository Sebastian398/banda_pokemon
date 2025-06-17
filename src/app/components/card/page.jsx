'use client';
export default function Card({ title, children }) {
  return (
    <div className="border rounded-lg shadow-lg p-6 mb-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
