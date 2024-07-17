import { getData } from "@/hooks/useGetData";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

const Blogs = async () => {
  const getBlogsData = await getData(
    "https://jsonplaceholder.typicode.com/users"
  );
  //   const router = useRouter();
  // console.log(getBlogsData)
  return (
    <div>
      <h2 className="text-2xl mb-8">
        User Data Loaded: {getBlogsData?.length}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {getBlogsData?.map((blog) => (
          <div className="border p-4 rounded-lg " key={blog.id}>
            <h4 className="text-xl">Name:{blog.name}</h4>
            <p className="my-2">Email:{blog.email}</p>
            <p>Phone:{blog.phone}</p>
            <Link className="" href={`/blogs/${blog.id}`}>
              <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-black mt-4 duration-300 ease-in-out">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
