import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";

const AllArticles = ({ data,id }) => {
  return (
    <div className="row">
      {data?.map((item) => {
     return   <ArticleItem item={item}  key={item.id} id={id}/>;
      })}
    </div>
  );
};

export default AllArticles;
