import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import TranslateIcon from "@mui/icons-material/Translate";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LinkIcon from "@mui/icons-material/Link";
import CategoryIcon from "@mui/icons-material/Category";
import SubjectIcon from "@mui/icons-material/Subject";

import "./Overview.css";

const Overview = () => {
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        <li className="overview-item">
          <ScoreboardIcon /> <span className="key">에세이 점수</span>{" "}
          <span className="value">4</span>
        </li>
        <li className="overview-item">
          <TranslateIcon /> <span className="key">번역자</span>{" "}
          <span className="value">유대곤</span>
        </li>
        <li className="overview-item">
          <DateRangeIcon /> <span className="key">번역날짜</span>{" "}
          <span className="value">2022.11.13</span>
        </li>
        <li className="overview-item">
          <LinkIcon /> <span className="key">출처</span>{" "}
          <span className="value">ASAP</span>
        </li>
        <li className="overview-item">
          <CategoryIcon /> <span className="key">분류</span>{" "}
          <span className="value">정보글 또는 논설문</span>
        </li>
        <li className="overview-item">
          <SubjectIcon /> <span className="key">주제</span>{" "}
          <span className="value">나의 성공담</span>
        </li>
      </ul>
    </div>
  );
};

export default Overview;
