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
  const [isLoading, setisLoading] = useState("");

  const handleActionChange = (e, email, id) => {
    const action = e.target.value;
    setisLoading(true);
    axios.put("https://frozen-sierra-16673.herokuapp.com/updateAction", { action, email, id }).then(({ data }) => {
      console.log(data);
      setisLoading(false);
    });
  };

  useEffect(() => {
    axios.get("https://frozen-sierra-16673.herokuapp.com/allClients").then(({ data }) => {
      // console.log(data);

      let filteredList = {};
      const temArr = [];
      data.map((order) => {
        if (order.purchases) {
          order.purchases.forEach((eachOrder) => {
            filteredList = {
              action: eachOrder.action,
              serviceTitle: eachOrder.serviceTitle,
              _id: eachOrder._id,
              email: order.email,
              name: order.name,
            };
            temArr.push(filteredList);
          });
        }
      });

      setOrderList(temArr);
    });
  }, []);

  return (
    <>
      <h3>
        Order List{" "}
        {isLoading && (
          <div class="spinner-border text-danger spinner-border-sm ml-3 mb-2" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </h3>
      <Card className="adminOrder-card">
        <div>
          {orderList.length ? (
            <Table>
              <TableHead />
              <tbody>
                {orderList.map((data, index) => (
                  <TableRow data={data} key={index} handle={handleActionChange} />
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
      <th>Name</th>
      <th>Email</th>
      <th>Service</th>
      <th>Status</th>
    </tr>
  </thead>
);

const TableRow = ({ data, handle }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.serviceTitle}</td>
      <td>
        <select className="form-select" onChange={(e) => handle(e, data.email, data._id)}>
          {["Pending", "Done", "On Going"].map((action) => {
            const ifSelected = data.action.toLowerCase() === action.toLowerCase() ? true : false;
            return (
              <option selected={ifSelected} value={action}>
                {action}
              </option>
            );
          })}
        </select>
      </td>
      {/* @TODO Pending, Done, onGoing */}
    </tr>
  );
};

export default AdminOrderList;
