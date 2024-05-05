import { postSignUp } from "@/api";
import Box from "@components/common/Box/Box";
import Button from "@components/common/Button/Button";
import Flex from "@components/common/Flex/Flex";
import Heading from "@components/common/Heading/Heading";
import Input from "@components/common/Input/Input";
import { Theme } from "@styles/theme";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formStyle } from "./Signup.style";
import { UserDataType } from "@/types/api";
import { HTTP_STATUS_CODE } from "@/constants/api";
import { URL_MAP } from "@/constants/url";
import { GUIDE_MESSAGE } from "@/constants/message";

const SignUpPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<UserDataType>();

  const onSubmit: SubmitHandler<UserDataType> = async (data) => {
    try {
      await postSignUp(data);
      alert(GUIDE_MESSAGE.COMPLETE_SIGNUP);
      navigate(URL_MAP.LOGIN);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;

        if (
          response?.data.code === HTTP_STATUS_CODE.BAD_REQUEST ||
          response?.data.code === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR
        ) {
          alert(response.data.message);
        }
      }
    }
  };

  const 뒤로가기 = () => {
    navigate(-1);
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
        styles={{
          direction: "column",
          align: "center",
        }}
      >
        <Heading size="xxLarge">회원가입 페이지</Heading>

        <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("authenticationId")} size="large" label="ID" />
          <Input
            supportingText={GUIDE_MESSAGE.PASSWORD}
            {...register("password")}
            size="large"
            label="비밀번호"
          />
          <Input {...register("nickname")} size="large" label="닉네임" />
          <Input
            supportingText={GUIDE_MESSAGE.PHONENUM}
            {...register("phone")}
            size="large"
            label="전화번호"
          />
          <Flex styles={{ justify: "center", gap: "16px", marginTop: "10px" }}>
            <Button type="submit" variant="primary">
              회원가입
            </Button>
            <Button variant="secondary" onClick={뒤로가기}>
              뒤로가기
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUpPage;
