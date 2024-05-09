import { UserDataType } from "@/types/api";
import {
  UseFormRegister,
  UseFormSetFocus,
  UseFormWatch,
} from "react-hook-form";
import Input from "../common/Input/Input";
import { formStyle } from "./Signup.style";
import { GUIDE_MESSAGE } from "@/constants/message";
import { FormEvent, HTMLAttributes, useEffect, useState } from "react";
import Flex from "../common/Flex/Flex";
import Button from "../common/Button/Button";

interface SignUpFormProps
  extends Omit<HTMLAttributes<HTMLFormElement>, "onFocus"> {
  register: UseFormRegister<UserDataType>;
  onWatch: UseFormWatch<UserDataType>;
  onGoBack: () => void;
  onFocus: UseFormSetFocus<UserDataType>;
}

const SignUpForm = ({
  register,
  onWatch,
  onSubmit,
  onGoBack,
  onFocus,
}: SignUpFormProps) => {
  const [phoneNum, setPhoneNum] = useState("");
  const { ref, name, onChange } = register("phone");

  /** 전화번호 '-' 자동완성 */
  useEffect(() => {
    if (phoneNum.length === 11) {
      setPhoneNum((prev) => prev.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    }
  }, [phoneNum]);

  /** 빈 Input 요소 onFocus */
  const handleEmptyInputFocus = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onWatch("authenticationId")) {
      onFocus("authenticationId");
      return;
    }
    if (!onWatch("password")) {
      onFocus("password");
      return;
    }
    if (!onWatch("nickname")) {
      onFocus("nickname");
      return;
    }
    if (!onWatch("phone")) {
      onFocus("phone");
      return;
    }

    onSubmit?.(e);
  };

  return (
    <form css={formStyle} onSubmit={handleEmptyInputFocus}>
      <Input
        {...register("authenticationId")}
        size="large"
        label="ID"
        isError={!!!onWatch("authenticationId")}
      />
      <Input
        supportingText={GUIDE_MESSAGE.PASSWORD}
        {...register("password")}
        size="large"
        label="비밀번호"
        isError={!!!onWatch("password")}
      />
      <Input
        {...register("nickname")}
        size="large"
        label="닉네임"
        isError={!!!onWatch("nickname")}
      />
      <Input
        ref={ref}
        name={name}
        value={phoneNum}
        onChange={(e) => {
          onChange(e);
          setPhoneNum(e.target.value);
        }}
        size="large"
        label="전화번호"
        isError={!!!onWatch("phone")}
        supportingText={GUIDE_MESSAGE.PHONENUM}
      />
      <Flex styles={{ justify: "center", gap: "16px", marginTop: "10px" }}>
        <Button type="submit" variant="primary">
          회원가입
        </Button>
        <Button variant="secondary" onClick={onGoBack}>
          뒤로가기
        </Button>
      </Flex>
    </form>
  );
};

export default SignUpForm;
