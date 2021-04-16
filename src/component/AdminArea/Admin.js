/*  
💥 Title : Admin
📃 Description : This will route Admin Contents
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

import { Route, Switch } from "react-router";
import AddServices from "./AddServices/AddServices";
import AdminOrderList from "./AdminOrderList/AdminOrderList";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageServices from "./ManageServices/ManageServices";

/*  🔥 React Dependencies 🔥 */

const Admin = () => {
  return (
    <section className="my-3 p-3">
      <Switch>
        <Route path="/dashboard/orders/">
          <AdminOrderList />
        </Route>

        <Route path="/dashboard/addservice/">
          <AddServices />
        </Route>

        <Route path="/dashboard/makeAdmin/">
          <MakeAdmin />
        </Route>

        <Route path="/dashboard/manageservice/">
          <ManageServices />
        </Route>
      </Switch>
    </section>
  );
};

export default Admin;
