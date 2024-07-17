export async function PATCH(request, { params }) {
  //   console.log(typeof params.id);
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  comments[index] = {
    text: body.text,
  };
  return Response.json({
    comments,
  });
}

export async function DELETE(request,{ params }) {
  const newComments = comments.filter((c) => c.id !== parseInt(params.id));
  return Response.json({
    newComments,
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
