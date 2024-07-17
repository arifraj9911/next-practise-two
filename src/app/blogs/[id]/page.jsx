import BlogsDetailsPage from "@/components/BlogsDetailsPage/BlogsDetailsPage";
import { getData } from "@/hooks/useGetData";
import React from "react";

const BlogsDetails = async ({ params }) => {
  const getDetailsBlog = await getData(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  // console.log(getDetailsBlog)
  return (
    <div>
      <BlogsDetailsPage getDetailsBlog={getDetailsBlog}></BlogsDetailsPage>
    </div>
  );
};

export default BlogsDetails;
