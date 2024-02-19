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
    data.forEach((matchData) => {
      const value = findNestedValue(matchData, graphKey);
      console.log(graphData)
      const teamDataIndex = graphData.findIndex(
        (obj) => obj["team"] === matchData.team
      );
      console.log(teamDataIndex)
      if (teamDataIndex !== -1) {
        setGraphData(prev => prev.map((item, index) => {
          if(index === teamDataIndex){
            item.sum += 1;
            item.success += value.success;
            item.fail += value.fail;
          }
          return item;
        }));

      } else {
        setGraphData(prev => [...prev, {
          team: matchData.team,
          success: value.success,
          fail: value.fail,
          sum: 1,
        }]);
      }
    });
    setGraphData(prev => prev.map((teamData) => {
      teamData.success = teamData.success / teamData.sum;
      teamData.fail = teamData.fail / teamData.sum;
      delete teamData["sum"];

      return teamData;
    }));
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
