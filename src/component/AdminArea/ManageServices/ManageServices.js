/*  
💥 Title : ManageServices
📃 Description : Manage Services
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

const ManageServices = () => {
  const [serviceList, setServiceList] = useState([]);

  const handleDelete = (e, id) => {
    axios.delete("https://frozen-sierra-16673.herokuapp.com/deleteService/" + id).then(({ data }) => {
      const updatedList = serviceList.filter((service) => service._id != id);
      setServiceList(updatedList);
    });
  };

  useEffect(() => {
    axios.get("https://frozen-sierra-16673.herokuapp.com/manageServices").then(({ data }) => {
      console.log(data);
      setServiceList(data);
    });
  }, []);

  return (
    <>
      <h3>Manage Services</h3>
      <Card className="p-4 mt-4">
        <div>
          {serviceList.length ? (
            <Table>
              <TableHead />
              <tbody>
                {serviceList.map((service, index) => (
                  <TableRow data={service} key={index} deleteHan={handleDelete} />
                ))}
              </tbody>
            </Table>
          ) : (
            "Loading..."
          )}
        </div>
      </Card>
    </>
  );
};

const TableHead = () => (
  <thead>
    <tr>
      <th>Service Title</th>
      <th>Servicce Descrition</th>
      <th>Action</th>
    </tr>
  </thead>
);

const TableRow = ({ data, deleteHan }) => {
  return (
    <tr>
      <td>{data.serviceTitle}</td>
      <td>{data.serviceDescription}</td>
      <td>
        <button onClick={(e) => deleteHan(e, data._id)}>Delete</button>
      </td>
      {/* @TODO Pending, Done, onGoing */}
    </tr>
  );
};

export default ManageServices;
