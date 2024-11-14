const SOCKET_URL =
  "https://eodhd.com/api/real-time/AAPL.US?api_token=673553c5459991.96944660&fmt=json";

const FUNDAMENTAL_URL =
  "https://eodhd.com/api/fundamentals/AAPL.US?api_token=demo&fmt=json";

const TEST_URL =
  "https://eodhd.com/api/fundamentals/AAPL.US?api_token=demo&fmt=json";

export default async function HomePage() {
  console.log("hello");
  const res = await fetch(SOCKET_URL);
  const repo = await res.json();
  const repoString = await JSON.stringify(repo);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {repoString}
    </main>
  );
}
