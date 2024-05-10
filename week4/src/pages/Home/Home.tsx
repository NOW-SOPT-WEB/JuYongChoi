import Box from "@components/common/Box/Box";
import Button from "@components/common/Button/Button";
import Flex from "@components/common/Flex/Flex";
import { Theme } from "@/styles/theme";
import { useNavigate, useParams } from "react-router-dom";
import { URL_MAP } from "@/constants/url";
import Video from "@/components/common/Video/Video";
import { useEffect, useRef, useState } from "react";
import mainVideo from "@assets/Example.mp4";

const HomePage = () => {
  const navigate = useNavigate();
  const { authenticationId } = useParams();

  const [isVideoHover, setIsVideoHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  /** Space로 재생, 멈춤 제어하는 함수 */
  const handleKeyDown = (e: KeyboardEvent) => {
    const { code } = e;

    if (!videoRef.current) return;
    if (code === "Space") {
      videoRef.current?.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyDown);

    return () => window.removeEventListener("keypress", handleKeyDown);
  });

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
        <Video
          ref={videoRef}
          onMouseOver={() => setIsVideoHover(true)}
          onMouseLeave={() => setIsVideoHover(false)}
          controls={isVideoHover}
          width={"400px"}
          height={"300px"}
          autoplay
          src={mainVideo}
        />
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
