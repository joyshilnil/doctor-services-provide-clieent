
import React from "react";
import Card from "react-bootstrap/Card";
const Blog = () => {
  return (
    <div className="container">
      <div className="section-title text-center py-3">
        <h1>My Blog</h1>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. <br />3 wolf moon officia aute, non
          cupidatat skateboard dolor brunch.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <Card>
            <Card.Img variant="top" src='https://image5.slideserve.com/10633994/slide1-n.jpg' />
            <Card.Body>
              <Card.Title>
              Difference between SQL and NoSQL?
              </Card.Title>
              <Card.Text>
              SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3">
          <Card>
            <Card.Img variant="top" src='https://www.appknox.com/hs-fs/hubfs/JWT.jpg?width=1999&name=JWT.jpg' />
            <Card.Body>
              <Card.Title>
              What is JWT, and how does it work?
              </Card.Title>
              <Card.Text>
              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3">
          <Card>
            <Card.Img variant="top" src='https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp' />
            <Card.Body>
              <Card.Title>
              What is the difference between javascript and NodeJS?
              </Card.Title>
              <Card.Text>
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3">
          <Card>
            <Card.Img variant="top" src='https://res.cloudinary.com/practicaldev/image/fetch/s--hZoNBulP--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rgknb64pga63bv15q80e.png' />
            <Card.Body>
              <Card.Title>
              How does NodeJS handle multiple requests at the same time?
              </Card.Title>
              <Card.Text>
              How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
