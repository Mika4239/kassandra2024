import { useEffect, useState } from "react";
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

interface GroupedData {
  [key: string]: any;
};

const DataGraph: React.FC<DataGraphProps> = (props) => {
  const { data, graphKey } = props;

  const [graphData, setGraphData] = useState<any[]>([]);

  useEffect(() => {
    setGraphData([]);
    const useAverage = graphKey.includes("amp") || graphKey.includes("speaker");
    useAverage ? calculateAvg() : calculateSum();
  }, [graphKey]);

  const findNestedValue = (object: any, key: string) => {
    const keys = key.split(".");
    let value = object;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }
    return value;
  };

  const calculateAvg = () => {
    const result = data.reduce((acc: GroupedData, matchData) => {
      const category = matchData.team;
      if (!acc[category]) {
        acc[category] = { successSum: 0, failSum: 0, count: 0 };
      }
      acc[category].successSum += findNestedValue(matchData, graphKey).success;
      acc[category].failSum += findNestedValue(matchData, graphKey).fail;
      acc[category].count++;
      acc[category].success = acc[category].successSum / acc[category].count;
      acc[category].fail = acc[category].failSum / acc[category].count;
      return acc;
    }, {});
    
    setGraphData(Object.keys(result).map((teamKey) => {
      return {
        team: teamKey,
        success: result[teamKey].success,
        fail: result[teamKey].fail
      }
    }))
  };

  const calculateSum = () => {};

  return (
    <>
      <ResponsiveContainer width="80%" minHeight="500px">
        <BarChart
          data={graphData}
        >
          <CartesianGrid />
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={'fail'} fill="#aa9c34" />
          <Bar dataKey={'success'} fill="#ff9c34" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DataGraph;
