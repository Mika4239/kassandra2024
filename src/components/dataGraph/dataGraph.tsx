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
}

const DataGraph: React.FC<DataGraphProps> = (props) => {
  const { data, graphKey } = props;

  const [graphData, setGraphData] = useState<any[]>([]);
  const [barKeys, setBarKeys] = useState<string[]>([]);

  useEffect(() => {
    setGraphData([]);
    setBarKeys([]);
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

    setBarKeys(["success", "fail"]);
    setGraphData(
      Object.keys(result).map((teamKey) => {
        return {
          team: teamKey,
          success: result[teamKey].success,
          fail: result[teamKey].fail,
        };
      })
    );
  };

  const calculateSum = () => {
    const dataKeys: string[] = [];
    const result = data.reduce((acc: GroupedData, matchData) => {
      const category = matchData.team;
      const value = findNestedValue(matchData, graphKey);
      if (!acc[category]) {
        acc[category] = Array.isArray(value)
          ? value.reduce((obj, item) => ({ ...obj, [item.toString()]: 0 }), {})
          : { [value.toString()]: 0 };
      }
      if (Array.isArray(value)) {
        value.forEach((item) => {
          dataKeys.push(item.toString());
          acc[category][item.toString()] = acc[category].hasOwnProperty(
            item.toString()
          )
            ? acc[category][item.toString()] + 1
            : 1;
        });
      } else {
        dataKeys.push(value.toString());
        acc[category][value.toString()] = acc[category].hasOwnProperty(
          value.toString()
        )
          ? acc[category][value.toString()] + 1
          : 1;
      }
      return acc;
    }, {});

    setBarKeys(
      dataKeys.filter((value, index) => dataKeys.indexOf(value) === index)
    );
    setGraphData(
      Object.keys(result).map((teamKey) => {
        return {
          team: teamKey,
          ...result[teamKey],
        };
      })
    );
  };

  return (
    <>
      <ResponsiveContainer width="80%" minHeight="500px">
        <BarChart data={graphData}>
          <CartesianGrid />
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Legend />
          {graphData.length > 0 &&
            barKeys.map((key) => (
              <Bar
                dataKey={key}
                fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DataGraph;
