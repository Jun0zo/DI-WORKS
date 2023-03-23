import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Rating, Button } from "@mui/material";

import Layout from "src/components/layout/Layout";

import { useTheme } from "@mui/material/styles";

import Evaluation from "src/components/work/tool/Evaluation";

import Card from "src/components/work/tool/Card";
import Overview from "src/components/work/tool/Overview";
import Header from "src/components/work/tool/Header";
import Article from "src/components/work/tool/Article";

const esssayData = {
  English: [
    {
      s1: "Certain materials being removed from libraries such as books, music and magazines, shouldn't be removed from the libraries",
    },
    {
      s2: "It gives people a chance to understand how the real world @CAPS2",
    },
    {
      s3: "Having certain materials such as books and music definitly should not be removed, because most books and music can show most people how bad the statement in the book @CAPS2 or how bad the lyrics are in a song, and help that person to avoid that type of thing that the book or song @CAPS2 saying to the reader or listener",
    },
    {
      s4: "People should give every type of music at least a try and not always doubt what they hear about what people say about that type of music",
    },
    {
      s5: "I always hear about people saying how bad the band @PERSON1 AM",
    },
    {
      s6: "@CAPS2, just because in the lyrics it talks about drugs and how much cursing each song has",
    },
    {
      s7: "Really the band @CAPS2 talking about one mans life and how he turns his life from being a drug addict to having the best life someone could ever live",
    },
    {
      s8: "People always doubted him and never gave his music a chance",
    },
    {
      s9: "Another example would be @PERSON1's book, '@CAPS1 @CAPS2 @CAPS3 @CAPS4' for it talks about drug addicts, homeless people, people who have been born with disfigured arms or even someone who lost there legs, and telling how beautiful each and everyone of them really are",
    },
    {
      s10: "His book taught me a few things and made me think different about people",
    },
    {
      s11: "It doesn't matter how they look or how they talk, no matter what, that person @CAPS2 beautiful",
    },
    {
      s12: "As far as movies and magazines has gone within the last few years, I think that the also shouldn't be taken from libraries",
    },
    {
      s13: "I think @CAPS1 for the same reason of how I feel about the books and music",
    },
    {
      s14: "Of course we see previews of movies and think that they @MONTH1 not be good, but libraries shouldn't keep leave them out",
    },
    {
      s15: "Movies @CAPS2 a great way to learn how to treat others and how to act around other people when you don't know how to act",
    },
    {
      s16: "If you act differently around people that you've never been around before, then you could feel embarassed or maybe even get @CAPS4",
    },
    {
      s17: "Movies can help people learn about the real world by seeing how to do those type of things as we get older",
    },
    {
      s18: "Same goes with the magazines, they also help people see what not to do or to help them understand the consequences of something that shouldn't be done",
    },
    {
      s19: "Knowing what to do from a magazine could possible save your life or perhaps maybe even someone elses life",
    },
    {
      s20: "I don't understand why some libraries would want to banned certain materials to help people understand the things that happen in someone elses life and to help them not make the same mistakes as that person once did",
    },
  ],
  Korean: [
    {
      s1: "도서, 음악, 잡지와 같은 도서관에서 제거되고 있는 특정 자료들은 도서관에서 제거되어서는 안 된다",
    },
    {
      s2: "그것은 사람들에게 현실 세계 @CAPS2를 이해시키는데 도움을 준다",
    },
    {
      s3: "대부분 책과 음악은 대부분 사람들에게 @CAPS2 책에서 진술이 얼마나 나쁜지 또는 노래에서 가사가 얼마나 나쁜지를 보여줄 수 있고, 그 사람이 그 책이나 노래 @CAPS2가 독자나 청취자에게 말하는 그런 종류의 것을 피하도록 도울 수 있기 때문에, 책이나 음악과 같은 특정한 자료를 갖는 것은 확실히 제거되어서는 안 된다",
    },
    {
      s4: "사람들은 적어도 모든 종류의 음악을 들어봐야 하고, 사람들이 그런 종류의 음악에 대해 말하는 것에 대해 의심해서는 안 된다",
    },
    {
      s5: "저는 항상 사람들이 @PERSON1 AM라는 밴드가 얼마나 나쁜지 말하는 것을 듣는다",
    },
    {
      s6: "@CAPS2, 단지 가사에 마약에 관한 이야기이고 각 노래에 얼마나 많은 욕이 있는지 이야기하기 때문이다",
    },
    {
      s7: "실제로 밴드 @CAPS2는 한 남자의 삶과 그가 어떻게 그의 삶을 마약 중독자에서 누군가가 살 수 있는 최고의 삶을 사는 것으로 바꾸는지에 대해 이야기한다",
    },
    {
      s8: "사람들은 항상 그를 의심했고 그의 음악에 절대 기회를 주지 않았다",
    },
    {
      s9: "또 다른 예는 '@PERSON1'의 책 '@CAPS1 @CAPS2 @CAPS3 @CAPS4'가 될 것이다",
    },
    {
      s10: "이 책은 마약 중독자, 노숙자, 팔이 손상되거나 다리를 잃은 사람들에 관해 이야기하며, 그들 각각이 정말 얼마나 아름다운지 이야기한다",
    },
    {
      s11: "그의 책은 나에게 몇 가지를 가르쳐 주었고 사람들에 대해 다르게 생각하게 하였습니다",
    },
    {
      s12: "그들이 어떻게 생겼든, 어떻게 말하든, 어떤 사람이든, 그 사람 @CAPS2는 아름답습니다",
    },
    {
      s13: "지난 몇 년 동안 영화와 잡지가 출판된 것에 관한 한, 나는 또한 도서관에서 가져가지 말아야 한다고 생각한다",
    },
    {
      s14: "@CAPS1은 내가 책과 음악에 대해 느끼는 것과 같은 이유이다",
    },
    {
      s15: "물론 우리는 영화 시사회를 보고 @MONTH1이 좋지 않다고 생각하지만, 도서관은 계속해서 영화 시사회를 빼놓아서는 안 된다",
    },
    {
      s16: "영화 @CAPS2는 여러분이 어떻게 행동해야 할지 모를 때 다른 사람들을 대하는 방법과 다른 사람들 주변에서 행동하는 방법을 배울 수 있는 좋은 방법입니다",
    },
    {
      s17: "영화는 우리가 나이가 들면서 그런 종류의 것들을 하는 방법을 봄으로써 사람들이 현실 세계에 대해 배우는 것을 도울 수 있다",
    },
    {
      s18: "잡지도 마찬가지인데, 잡지들은 또한 사람들이 하지 말아야 할 것을 보거나 해서는 안 되는 일의 결과를 이해하도록 돕습니다",
    },
    {
      s19: "잡지에서 무엇을 해야 하는지 아는 것은 여러분의 생명을 구할 수도 있고, 어쩌면 다른 누군가가 목숨을 구할 수도 있습니다",
    },
    {
      s20: "나는 왜 몇몇 도서관들이 사람들이 다른 사람의 삶에서 일어나는 일들을 이해하도록 돕고 그들이 그 사람이 예전에 했던 것과 같은 실수를 하지 않도록 돕기 위해 특정 자료들을 금지하기를 원하는지 이해할 수 없다",
    },
  ],
};

const Tool = () => {
  const { projectIdx, dataIdx } = useParams();
  // const projectIdx = 1;
  let [projectTitleOverviewData, setProjectTitleOverviewData] = useState({
    title: "",
    tags: [],
    dateRange: ["", ""],
    perticitanpts: -1,
    lastDats: -1,
  });
  let [error, setError] = useState(null);
  // let [userInfo, setUserInfo] = recoil
  const userInfo = {
    id: 1,
    name: "평가자 1",
  };

  const theme = useTheme();

  useEffect(() => {
    try {
      // const data = getData(projectIdx);
      const titleOverviewData = {
        title: "창의적 에세이 라벨링",
        tags: ["자연어", "스코어링"],
        dateRange: ["2023.03.01", "2024.03.01"],
        perticitanpts: 4,
        lastDays: 312,
      };

      setProjectTitleOverviewData(titleOverviewData);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingBottom: "20px",
          height: "100%",
        }}
      >
        <Grid container sx={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            sx={{
              height: "200px",
              padding: "15px 10px",
            }}
          >
            <Header overviewData={projectTitleOverviewData} />
          </Grid>
          <Grid item xs={12} md={8} sx={{ height: "70vh", padding: "10px" }}>
            <Card title="에세이 본문">
              <Article
                korean={esssayData["Korean"]}
                english={esssayData["English"]}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              item
              xs={12}
              sx={{
                padding: "10px",
              }}
            >
              <Card title="에세이 정보">
                <Overview />
              </Card>
            </Grid>

            <Grid item xs={12} sx={{ padding: "10px" }}>
              <Card title="레이블링">
                <Evaluation userName={userInfo.name} />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Tool;
