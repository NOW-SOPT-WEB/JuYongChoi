import { postLogin } from "@/api";
import Img from "@/components/common/Img/Img";
import { Theme } from "@/styles/theme";
import { UserDataType } from "@/types/api";
import loginImg from "@assets/img.jpeg";
import Box from "@components/common/Box/Box";
import Button from "@components/common/Button/Button";
import Flex from "@components/common/Flex/Flex";
import Heading from "@components/common/Heading/Heading";
import Input from "@components/common/Input/Input";
import { HTTP_STATUS_CODE } from "@constants/api";
import { URL_MAP } from "@constants/url";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const 회원가입 = () => {
    navigate(URL_MAP.SIGNUP);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitted },
  } = useForm<Omit<UserDataType, "nickname" | "phone">>();

  const onSubmit: SubmitHandler<
    Omit<UserDataType, "nickname" | "phone">
  > = async (data) => {
    if (!data.authenticationId || !data.password) return;

    try {
      const { headers } = await postLogin(data);

      localStorage.setItem("memberId", headers.location);

      navigate(`/${headers.location}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response } = err;

        if (
          response?.data.code === HTTP_STATUS_CODE.BAD_REQUEST ||
          response?.data.code === HTTP_STATUS_CODE.UNAUTHORIZED ||
          response?.data.code === HTTP_STATUS_CODE.NOT_FOUND ||
          response?.data.code === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR
        ) {
          alert(response.data.message);
        }
      }
    }
  };

  return (
    <Box
      tag="section"
      styles={{
        width: "30%",
        backgroundColor: Theme.color.blue300,
        padding: Theme.spacing.spacing5,
        borderRadius: Theme.borderRadius.large,
      }}
    >
      <Flex
        tag="form"
        onSubmit={handleSubmit(onSubmit)}
        styles={{
          direction: "column",
          align: "center",
          gap: Theme.spacing.spacing4,
        }}
      >
        <Heading size="xxLarge">Login</Heading>
        <Img src={loginImg} width="260px" height="260px" shape="circle" />
        <Input
          {...register("authenticationId")}
          size="large"
          label="ID"
          supportingText={
            !watch("authenticationId") && isSubmitted
              ? "아이디는 필수입니다."
              : undefined
          }
        />
        <Input
          {...register("password")}
          size="large"
          label="PW"
          supportingText={
            !watch("password") && isSubmitted
              ? "비밀번호는 필수입니다."
              : undefined
          }
        />
        <Flex styles={{ gap: Theme.spacing.spacing4, marginTop: "12px" }}>
          <Button variant="primary" type="submit">
            로그인
          </Button>
          <Button variant="default" onClick={회원가입}>
            회원가입
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;
