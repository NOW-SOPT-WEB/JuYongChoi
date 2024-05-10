import { postSignUp } from "@/api";
import SignUpForm from "@/components/Signup/SignupForm";
import { HTTP_STATUS_CODE } from "@/constants/api";
import { GUIDE_MESSAGE } from "@/constants/message";
import { URL_MAP } from "@/constants/url";
import { UserDataType } from "@/types/api";
import { checkPasswordValidation } from "@/utils";
import Box from "@components/common/Box/Box";
import Flex from "@components/common/Flex/Flex";
import Heading from "@components/common/Heading/Heading";
import { Theme } from "@styles/theme";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, setFocus } = useForm<UserDataType>();

  const onSubmit = handleSubmit(async (data) => {
    if (
      !data.authenticationId ||
      !data.nickname ||
      !data.password ||
      !data.phone ||
      !checkPasswordValidation(data.password) // 비밀번호 유효성 체크
    )
      return;

    try {
      const formData = {
        ...data,
        phone: data.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"), // '-' 포함시키기
      };

      await postSignUp(formData);
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
  });

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
        <SignUpForm
          register={register}
          onSubmit={onSubmit}
          onWatch={watch}
          onGoBack={뒤로가기}
          onFocus={setFocus}
        />
      </Flex>
    </Box>
  );
};

export default SignUpPage;
