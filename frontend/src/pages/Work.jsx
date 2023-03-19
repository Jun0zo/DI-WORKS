import Header from "src/components/work/Header";
import Contents from "src/components/work/Contents";
import Layout from "src/components/layout/Layout";

const Work = () => {
  const workInfoList = [
    {
      workId: 1,
      imageURL:
        "https://dacon.s3.ap-northeast-2.amazonaws.com/competition/236071/card_cpt.jpg?20220808",
      title: "창의적 에세이 레이블링",
      hashTagList: ["에세이", "자연어"],
      progressInfo: {
        currentCount: "175",
        totalCount: "1850",
        percentage: "9",
      },
    },
    {
      workId: 2,
      imageURL:
        "https://zin.co.kr/data/editor/2107/4705620e9e0b09c6bfc2809471a88f5c_1626248489_9673.jpg",
      title: "작물 병해 진단 레이블링",
      hashTagList: ["영상처리", "h2"],
      progressInfo: {
        currentCount: "2692",
        totalCount: "3294",
        percentage: "81",
      },
    },
    {
      workId: 3,
      imageURL: "https://www.elec4.co.kr/photo/2016/201606090.jpg",
      title: "자율주행 학습용 데이터",
      hashTagList: ["영상처리", "h2"],
      progressInfo: {
        currentCount: "5477",
        totalCount: "11820",
        percentage: "46",
      },
    },
    {
      workId: 4,
      imageURL:
        "https://image.ajunews.com/content/image/2022/03/07/20220307160204920950.jpg",
      title: "멀티에이전트 학습 데이터",
      hashTagList: ["강화학습", "멀티에이전트"],
      progressInfo: {
        currentCount: "221",
        totalCount: "310",
        percentage: "71",
      },
    },
  ];

  return (
    <div>
      <Layout>
        <Header />
        <Contents workInfoList={workInfoList} />
      </Layout>
    </div>
  );
};

export default Work;
