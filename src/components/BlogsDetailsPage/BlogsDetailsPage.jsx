// import { getData } from '@/hooks/useGetData';
import React from "react";

const BlogsDetailsPage = ({ getDetailsBlog }) => {
  const { id, name, username, email, phone } = getDetailsBlog;
  // console.log(getDetailsBlog);
  return (
    <div>
      <p>ID: {id}</p>
      <h4 className="text-xl">
        Name: {name} ({username})
      </h4>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
    </div>
  );
};

export default BlogsDetailsPage;
