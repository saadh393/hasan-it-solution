/*  
💥 Title : AddServices
📃 Description : Add Services
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const AddServices = () => {
  const [service, setService] = useState({});
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleService = (e) => {
    const newData = { ...service };
    newData[e.target.name] = e.target.value;
    setService(newData);
  };

  const handleImage = (e) => {
    const imageData = e.target.files[0];
    setImage(imageData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    const formData = new FormData();
    formData.append("serviceImage", image);
    formData.append("serviceTitle", service.serviceTitle);
    formData.append("serviceDescription", service.serviceDescription);

    axios
      .post("https://frozen-sierra-16673.herokuapp.com/addService", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        setIsUploading(false);
        e.target.reset();
      })
      .catch((error) => {
        setIsUploading(false);
      });
  };

  return (
    <>
      <h3>Add New Service</h3>
      <small>Home page will show last 3 Services at time</small>
      <Card className="p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <div>
                <label>Service Title</label>
                <br />
                <input type="text" name="serviceTitle" onBlur={handleService} className="form-control" required />
              </div>

              <div className="mt-3">
                <label>Service Description</label>
                <br />
                <textarea
                  type="text"
                  name="serviceDescription"
                  onBlur={handleService}
                  className="form-control"
                  required
                ></textarea>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <label>Image</label>
                <br />
                <input type="file" name="serviceImage" onBlur={handleImage} className="form-control" required />
              </div>
              <button type="submit" className="mt-4">
                Submit
                <div
                  className={`spinner-border ml-2 mb-1  spinner-border-sm ${!isUploading && "d-none"}`}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </button>
            </Col>
          </Row>
        </form>
      </Card>
    </>
  );
};

export default AddServices;
