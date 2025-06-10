export async function GET() {
  let posts = [{ id: 1, title: "hello", body: "world" }];
  return Response.json(posts);
}
