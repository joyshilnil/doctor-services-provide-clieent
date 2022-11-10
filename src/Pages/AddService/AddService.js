import React from "react";
import useTitle from "../../hooks/useTitle";

const AddService = () => {



    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const image = form.image.value;
        const body = form.body.value;

        const service = {
            name,
            image,
            rating,
            price,            
            body
        }

        fetch('http://localhost:4000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Service added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }



  useTitle("Add Service");
  return (
    <div className="container">
      <div className="hero py-10 w-50 m-auto mt-5 shadow">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">
            <h1 className="text-5xl font-bold text-center">Add New Service</h1>
            <form onSubmit={handleAddService} className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title:-</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Title"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Photo URL:-</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Photo URL"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  required
                />
              </div>
              
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description:-</span>
                </label>
                <input
                  type="text"
                  name="body"
                  placeholder="Description"
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
                  placeholder="Rating"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  required
                />
              </div>
              
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Price:-</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-100 p-2 mt-2 rounded mb-2"
                  required
                />
              </div>
              <div className="mt-6">
              <button className="btn btn-primary" type="submit">
                Add Service
              </button>
            </div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
