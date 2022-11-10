import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const EditReview = () => {
    const router = useParams();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();    
  const [review, setReview] = useState({});
    const { id } = router;

    useEffect(() => {
        fetch(`http://localhost:4000/reviews/${id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
                setReview(data.data);
            } else {
              console.error(data.error);
            }
          })
          .catch((err) => console.error(err.message));
      }, [id]);






    const handleUpdateReview = async (e) => {
        e.preventDefault();

        const review = {
            message: e.target.message.value,
            rating: e.target.rating.value,
        }
    
        fetch(`http://localhost:4000/reviews/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(review)
        }).then(res => res.json())
        .then(data => {
          if(data.success){
            alert(data.message);
            navigate("/myreview")
          } else {
            console(data.error)
          }
        })
        .catch(err => console.error(err.message))
      }










    return (
        
    <div className="container">

    <div className="hero py-10 w-50 m-auto mt-5 shadow">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">
          <h1 className="text-5xl font-bold text-center">Add New Review</h1>
          <form onSubmit={handleUpdateReview} className="card-body">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">User Name:-</span>
              </label>
              <input
                type="text"
                name="displayName"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                defaultValue={user?.displayName}
                readOnly
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">User Photo URL:-</span>
              </label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                defaultValue={user?.photoURL}
                readOnly
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Write a review:-</span>
              </label>
              <input
                type="text"
                name="message"
                defaultValue={review?.message}
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Rating:-</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={review?.rating}
                className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                required
              />
            </div>

            <div className="mt-6">
              <button className="btn btn-primary" type="submit">
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    );
};

export default EditReview;