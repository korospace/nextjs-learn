import { ApiRes } from "@/lib/model/types";
import { signIn } from "next-auth/react";

const Login = async (data: any, searchParams: any): Promise<ApiRes> => {
  // fetch("/api/login",{
  //     method: "POST",
  //     body: JSON.stringify({
  //         "email": data.email.value,
  //         "password": data.password.value,
  //     })
  // })

  try {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email.value,
      password: data.password.value,
      callbackUrl: searchParams.callbackUrl,
    });

    if (!res?.error) {
      return {
        status: true,
        message: "login success",
      };
    } else {
      return {
        status: false,
        message: res?.error,
      };
    }
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};

export { Login };
