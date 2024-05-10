import { getMemberInfo } from "@/api";
import Box from "@/components/common/Box/Box";
import Button from "@/components/common/Button/Button";
import Flex from "@/components/common/Flex/Flex";
import Heading from "@/components/common/Heading/Heading";
import InfoRow from "@/components/mypage/InfoRow/InfoRow";
import InfoTable from "@/components/mypage/InfoTable/InfoTable";
import NewPassword from "@/components/mypage/NewPassword/NewPassword";
import { useOverlay } from "@/hooks/useOverlay";
import { Theme } from "@/styles/theme";
import { UserDataType } from "@/types/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const { authenticationId } = useParams();

  const { isOpen, toggle } = useOverlay();
  const [userInfo, setUserInfo] = useState<Omit<UserDataType, "password">>({
    authenticationId: 0,
    nickname: "",
    phone: "",
  });

  useEffect(() => {
    (async () => {
      const response = await getMemberInfo();

      setUserInfo(response.data);
    })();
  }, [authenticationId]);

  const LABEL_BY_KEY: { [key: string]: string } = {
    authenticationId: "ID",
    nickname: "닉네임",
    phone: "전화번호",
  } as const;

  return (
    <Box
      tag="section"
      styles={{
        width: "40%",
        padding: Theme.spacing.spacing5,
        backgroundColor: Theme.color.blue300,
        borderRadius: Theme.borderRadius.large,
      }}
    >
      <Flex
        styles={{
          direction: "column",
          align: "center",
          gap: "12px",
        }}
      >
        <Heading>마이 페이지</Heading>
        <InfoTable>
          {Object.entries(userInfo).map((data) => (
            <InfoRow
              key={data[0]}
              field={LABEL_BY_KEY[data[0]]}
              value={data[1]}
            />
          ))}
        </InfoTable>
        <NewPassword isOpen={isOpen} onSelectClick={toggle} />
        <Button
          variant="primary"
          onClick={() => navigate(`/${authenticationId}`)}
        >
          홈으로
        </Button>
      </Flex>
    </Box>
  );
};

export default MyPage;
