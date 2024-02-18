import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DataGraph: React.FC<DataGraphProps> = (props) => {
  const { data } = props;

  return (
    <>
      <ResponsiveContainer width='80%' minHeight='500px'>
        <BarChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="#ff9c34" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DataGraph;
