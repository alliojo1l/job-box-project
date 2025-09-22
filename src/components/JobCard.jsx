export default function JobCard({ title, company, location }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  );
}
