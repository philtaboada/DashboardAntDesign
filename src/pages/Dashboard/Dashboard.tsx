import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                fontSize: "32px",
                color: "#747474",
              }}
            />
          }
          title={"Orders"}
          value={15000}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                fontSize: "32px",
                color: "#08c",
              }}
            />
          }
          title={"Customers"}
          value={10805}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                fontSize: "32px",
                color: "#00cc11",
              }}
            />
          }
          title={"Inventory"}
          value={10504}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                fontSize: "32px",
                color: "#f02f2f",
              }}
            />
          }
          title={"Revenue"}
          value={14040}
        />
      </Space>
    </div>
  );
};

function DashboardCard({ title, value, icon }: any) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Dashboard;
