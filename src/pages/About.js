import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Добро пожаловать в Агентство недвижимости Sunrise</Typography>
        <p>
          В Агентстве недвижимости Sunrise мы гордимся тем, что предоставляем нашим клиентам исключительный сервис! Арендуете или покупаете вы в Варшаве и окрестностях, мы поможем сделать ваше путешествие по недвижимости максимально гладким.
        </p>
        <br />
        <p>
          Мы больше и лучше чем когда-либо раньше! 💪

          Наша команда расширилась и наш офис тоже. С большим количеством специалистов и пространства мы готовы брать на себя ещё большие проекты и предоставлять исключительный сервис нашим клиентам. 🔥

          Мы гарантируем, что промежуток от момента подачи заявки, до момента подписания договора будет не больше 48 часов.⏱

          Насколько бы трудной не казалась вам ваша ситуация, наши специалисты всегда готовы к новым вызовам и креативным решениям!🎉

          Мы сопровождаем вас на каждом этапе процесса. Ваши сложности - наши решения. 👏

          Перепроверяем каждую строчку договора, чтобы всё было в максимальной степени чисто и прозрачно для вас.🥰

          Помогаем подготовить пакет документов, для различных типов договоров аренды.😉

          Приходите и убедитесь сами! 👆
        </p>
      </Box>
    </Layout>
  );
};

export default About;