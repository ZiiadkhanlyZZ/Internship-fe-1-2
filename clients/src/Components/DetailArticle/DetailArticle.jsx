import  { useEffect, useState } from 'react';
import './DetailArticle.scss';
import { useParams } from 'react-router-dom';
import { data } from '../../fakedata/data';

const DetailArticle = () => {
  const { id } = useParams();
  const [dataId, setDataId] = useState({});
  useEffect(() => {
    const article = data.find((item) => item.id == id);
    setDataId(article);
  }, [id]);
  return (
    <div className="all-details">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <figure className="detail-image">
              <img src={dataId?.imageUrl} alt={dataId?.title} />
            </figure>
          </div>
          <div className="col-12 col-lg-6">
            <article className="detail-article">
              <h3>{dataId?.title}</h3>
              <p>{dataId?.description} </p>
            </article>
          </div>
          <div className="col-12 col-lg-6">
            <div className="experts-comment">
              <h4>Expert comment</h4>
              <p>{dataId?.expertComment} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;
