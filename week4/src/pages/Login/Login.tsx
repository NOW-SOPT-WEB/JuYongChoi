import Box from "@components/common/Box/Box";
import Button from "@components/common/Button/Button";
import Flex from "@components/common/Flex/Flex";
import Heading from "@components/common/Heading/Heading";
import Img from "@components/common/Img/Img";
import Input from "@components/common/Input/Input";
import { Theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import img from "@assets/img.jpeg";
import { SubmitHandler, useForm } from "react-hook-form";
import { postLogin } from "@/api";
import axios from "axios";
import { HTTP_STATUS_CODE } from "@constants/api";
import { UserDataType } from "@/types/api";
import { URL_MAP } from "@constants/url";

const LoginPage = () => {
  const navigate = useNavigate();

  const 회원가입 = () => {
    navigate(URL_MAP.SIGNUP);
  };

  const { register, handleSubmit } =
    useForm<Omit<UserDataType, "nickname" | "phone">>();

  const onSubmit: SubmitHandler<
    Omit<UserDataType, "nickname" | "phone">
  > = async (data) => {
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
        <Img src={img} shape="rectangle" width="80%" height="160px" />

        <Input {...register("authenticationId")} size="large" label="ID" />
        <Input {...register("password")} size="large" label="PW" />

        <Flex styles={{ gap: Theme.spacing.spacing4 }}>
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
