export async function GET() {
  return Response.json(comments,{
    headers:{
        "Set-Cookie":"theme=dark"
    }
  });
}

export async function POST(request) {
  const newComments = await request.json();
  comments.push(newComments);
  return Response.json({
    comments,
  });
}

const comments = [
  {
    id: 1,
    text: "comments 1",
  },
  {
    id: 2,
    text: "comments 2",
  },
  {
    id: 3,
    text: "comments 3",
  },
];
