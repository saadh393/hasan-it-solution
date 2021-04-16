/*  
💥 Title : ManageServices
📃 Description : Manage Services
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Table } from "react-bootstrap";

const ManageServices = () => {
  return (
    <>
      <h3>Manage Services</h3>
      <Card className="p-4 mt-4">
        <div>
          <Table>
            <TableHead />
            <tbody>
              <TableRow data={{ title: "Saad Hasan", descrition: "saadh393@gmail.com" }} />
              <TableRow data={{ title: "Saad Hasan", descrition: "saadh393@gmail.com" }} />
              <TableRow data={{ title: "Saad Hasan", descrition: "saadh393@gmail.com" }} />
              <TableRow data={{ title: "Saad Hasan", descrition: "saadh393@gmail.com" }} />
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
      <th>Service Title</th>
      <th>Servicce Descrition</th>
      <th>Status</th>
    </tr>
  </thead>
);

const TableRow = ({ data }) => (
  <tr>
    <td>{data.title}</td>
    <td>{data.descrition}</td>
    <td>
      {" "}
      <button>Delete</button>{" "}
    </td>
    {/* @TODO Pending, Done, onGoing */}
  </tr>
);

export default ManageServices;
