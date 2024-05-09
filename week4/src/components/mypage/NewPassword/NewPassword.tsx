import Flex from "@components/common/Flex/Flex";
import Img from "@components/common/Img/Img";
import Input from "@components/common/Input/Input";
import Text from "@components/common/Text/Text";
import Box from "@components/common/Box/Box";
import Button from "@components/common/Button/Button";

import { Theme } from "@styles/theme";

import upimg from "@assets/up.svg";
import downimg from "@assets/down.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { formStyle } from "./NewPassword.style";
import { patchPassword } from "@/api";
import axios from "axios";
import { HTTP_STATUS_CODE } from "@constants/api";
import { ChangePwdType } from "@/types/api";

interface NewPasswordProps {
  isOpen?: boolean;
  onSelectClick?: () => void;
}

const NewPassword = ({ isOpen, onSelectClick }: NewPasswordProps) => {
  const { register, handleSubmit, reset } = useForm<ChangePwdType>();

  const onSubmit: SubmitHandler<ChangePwdType> = async (data) => {
    if (
      !data.newPassword ||
      !data.newPasswordVerification ||
      !data.previousPassword
    )
      return;
    try {
      const response = await patchPassword(data);
      alert(response.message);
      reset();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response } = err;
        if (
          response?.data.code === HTTP_STATUS_CODE.BAD_REQUEST ||
          response?.data.code === HTTP_STATUS_CODE.FORBIDDEN ||
          response?.data.code === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR
        ) {
          alert(response.data.message);
        }
      }
    }
  };

  return (
    <Flex
      styles={{
        direction: "column",
        align: "center",
        gap: Theme.spacing.spacing2,
        width: "100%",
      }}
    >
      <Flex
        styles={{
          align: "center",
        }}
        onClick={onSelectClick}
      >
        <Text size="medium">비밀번호 변경</Text>
        <Img width="20px" height="20px" src={isOpen ? upimg : downimg} />
      </Flex>

      {isOpen ? (
        <Flex tag="form" onSubmit={handleSubmit(onSubmit)} css={formStyle}>
          <Input {...register("previousPassword")} label="기존 비밀번호" />
          <Input {...register("newPassword")} label="새로운 비밀번호" />
          <Input
            {...register("newPasswordVerification")}
            label="비밀번호 확인"
          />
          <Button type="submit">비밀번호 변경</Button>
        </Flex>
      ) : (
        <Box styles={{ height: "360px" }}></Box>
      )}
    </Flex>
  );
};

export default NewPassword;
