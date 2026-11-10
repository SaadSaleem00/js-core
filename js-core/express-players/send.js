async function main() {
  const r = await fetch("http://localhost:3000/players", {
    method: "POST",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify({ name:'victory',score:300}),
  });
  console.log(r.status, await r.json());
}
main();
