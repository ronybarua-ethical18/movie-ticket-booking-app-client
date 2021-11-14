import { Container } from "@material-ui/core";
import React from "react";
import Meta from "../../../components/Meta";
import AdminLayout from "../Layout/AdminLayout";

const AdminDashboardHome = () => {
  return (
    <AdminLayout>
      <Meta title="Admin Dashboard"/>
      <Container>
          <h1>This is Dashboard home</h1>
      </Container>
    </AdminLayout>
  );
};

export default AdminDashboardHome;
