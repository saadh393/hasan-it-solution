/*  
💥 Title : AdminOrderList
📃 Description : All Orders will be shown here
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

const AdminOrderList = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/allClients").then(({ data }) => {
      console.log(data);
      const orders = {};
      data.map((order) => {
        // if (order.purchases.length) {
        //   orders.serviceName = order.serviceName;
        //   orders.email = data.email;
        //   orders.name = order.name;
        //   orders.action = data.action;
        //   setOrderList([...orderList, orders]);
        // }
      });
    });
  }, []);

  return (
    <>
      <h3>Order List </h3>
      <Card className="p-4">
        <div>
          <Table>
            <TableHead />
            <tbody>
              <TableRow
                data={{ name: "Saad Hasan", email: "saadh393@gmail.com", service: "Hack Nasa", status: "Done" }}
              />
              <TableRow
                data={{ name: "Saad Hasan", email: "saadh393@gmail.com", service: "Hack Nasa", status: "Done" }}
              />
              <TableRow
                data={{ name: "Saad Hasan", email: "saadh393@gmail.com", service: "Hack Nasa", status: "Done" }}
              />
              <TableRow
                data={{ name: "Saad Hasan", email: "saadh393@gmail.com", service: "Hack Nasa", status: "Done" }}
              />
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
};

const TableHead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Service</th>
      <th>Status</th>
    </tr>
  </thead>
);

const TableRow = ({ data }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.service}</td>
    <td>
      <select className="form-select">
        <option>Actions</option>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
        <option value="On Going">Actions</option>
      </select>
    </td>
    {/* @TODO Pending, Done, onGoing */}
  </tr>
);

export default AdminOrderList;
