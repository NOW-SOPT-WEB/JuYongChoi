import { GUIDE_MESSAGE } from "@/constants/message";
import { UserDataType } from "@/types/api";
import { FormEvent, HTMLAttributes, useEffect, useState } from "react";
import {
  UseFormRegister,
  UseFormSetFocus,
  UseFormWatch,
} from "react-hook-form";
import Button from "../common/Button/Button";
import Flex from "../common/Flex/Flex";
import Input from "../common/Input/Input";
import { formStyle } from "./Signup.style";

interface SignUpFormProps
  extends Omit<HTMLAttributes<HTMLFormElement>, "onFocus"> {
  register: UseFormRegister<UserDataType>;
  onWatch: UseFormWatch<UserDataType>;
  onGoBack: () => void;
  onFocus: UseFormSetFocus<UserDataType>;
}

type formType = "authenticationId" | "password" | "nickname" | "phone";

const SignUpForm = ({
  register,
  onWatch,
  onSubmit,
  onGoBack,
  onFocus,
}: SignUpFormProps) => {
  const [phoneNum, setPhoneNum] = useState("");
  const { ref, name, onChange } = register("phone");
  const [errorInput, setErrorInput] = useState<formType>();

  /** 전화번호 '-' 자동완성 */
  useEffect(() => {
    if (phoneNum.length === 11) {
      setPhoneNum((prev) => prev.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    }
  }, [phoneNum]);

  /** 빈 Input 요소 onFocus */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const watchList: formType[] = [
      "authenticationId",
      "password",
      "nickname",
      "phone",
    ];
    let isError = false;

    watchList.forEach((data) => {
      if (!onWatch(data) && !isError) {
        setErrorInput(data);
        onFocus(data);
        isError = true;
        return;
      }
    });

    onSubmit?.(e);
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <Input
        {...register("authenticationId")}
        size="large"
        label="ID"
        isError={
          !onWatch("authenticationId") && errorInput === "authenticationId"
        }
      />
      <Input
        supportingText={GUIDE_MESSAGE.PASSWORD}
        {...register("password")}
        size="large"
        label="비밀번호"
        isError={!onWatch("password") && errorInput === "password"}
      />
      <Input
        {...register("nickname")}
        size="large"
        label="닉네임"
        isError={!onWatch("nickname") && errorInput === "nickname"}
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
        isError={!onWatch("phone") && errorInput === "phone"}
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
