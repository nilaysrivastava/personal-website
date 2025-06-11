import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { subDays, format, parseISO } from "date-fns";
import { request, gql } from "graphql-request";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const RealHeatmap = ({ username }) => {
  const [data, setData] = useState([]);

  const fetchSubmissions = async () => {
    const endpoint = "https://leetcode.com/graphql";
    const query = gql`
      query userCalendar($username: String!) {
        userCalendar(username: $username) {
          submissionCalendar
        }
      }
    `;

    try {
      const res = await request(endpoint, query, { username });
      const rawData = JSON.parse(res.userCalendar.submissionCalendar);
      const parsed = Object.entries(rawData).map(([timestamp, count]) => ({
        date: format(new Date(Number(timestamp) * 1000), "yyyy-MM-dd"),
        count: Number(count),
      }));
      setData(parsed);
    } catch (error) {
      console.error("Error fetching LeetCode data:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [username]);

  const today = new Date();
  const startDate = subDays(today, 365);

  return (
    <div className="bg-black/40 p-5 rounded-2xl mt-8 text-white text-center border border-purple-600 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-purple-300">
        LeetCode Submission Heatmap
      </h3>
      <CalendarHeatmap
        startDate={startDate}
        endDate={today}
        values={data}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          if (value.count === 1) return "color-scale-1";
          if (value.count === 2) return "color-scale-2";
          if (value.count === 3) return "color-scale-3";
          return "color-scale-4";
        }}
        showWeekdayLabels={true}
        gutterSize={2}
        horizontal={true}
        showMonthLabels={true}
        tooltipDataAttrs={(value) =>
          value.date
            ? {
                "data-tip": `${value.date} — ${value.count} submission${
                  value.count > 1 ? "s" : ""
                }`,
              }
            : {}
        }
      />
      <ReactTooltip />
    </div>
  );
};

export default RealHeatmap;
