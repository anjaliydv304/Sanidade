import React, { useState, useEffect } from "react";
import "./details.css";
import "../../components/header/header.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const foundBlog = blog.find((b) => b.id === parseInt(id));
    if (foundBlog) {
      setBlogs(foundBlog);
    } else {
      setBlogs(null); // Handle case where blog is not found
    }
  }, [id]);

  return (
    <div className="details-page">
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt={blogs.title} />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button">
                  <BsPencilSquare />
                </button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>Category: {blogs.category}</p>
              <p>Date: {blogs.date}</p>
              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : (
        <p>Blog not found. Please check the ID and try again.</p>
      )}
    </div>
  );
};
