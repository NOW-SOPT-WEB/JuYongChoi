import Box from "@components/common/Box/Box";
import Button from "@components/common/Button/Button";
import Flex from "@components/common/Flex/Flex";
import Img from "@components/common/Img/Img";
import { Theme } from "@/styles/theme";
import { useNavigate, useParams } from "react-router-dom";
import img from "@assets/img.jpeg";
import { URL_MAP } from "@/constants/url";

const HomePage = () => {
  const navigate = useNavigate();
  const { authenticationId } = useParams();

  const 마이페이지가기 = () => {
    navigate(`${URL_MAP.MYPAGE}/${authenticationId}`);
  };

  const 회원가입페이지가기 = () => {
    navigate(URL_MAP.SIGNUP);
  };

  return (
    <Box
      tag="section"
      styles={{
        backgroundColor: Theme.color.blue300,
        padding: Theme.spacing.spacing8,
        borderRadius: Theme.borderRadius.large,
      }}
    >
      <Flex styles={{ direction: "column", align: "center", gap: "12px" }}>
        <Img src={img} shape="circle" width="300px" height="300px" />
        <Flex styles={{ gap: "16px", marginTop: "12px" }}>
          <Button variant="primary" onClick={마이페이지가기}>
            내 정보
          </Button>
          <Button variant="default" onClick={회원가입페이지가기}>
            회원가입
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePage;
