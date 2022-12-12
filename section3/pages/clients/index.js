import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: clients.id } }}
            >
              {clients.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
