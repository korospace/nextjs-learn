import { ApiRes } from "@/lib/model/types";

const Register = async (data: any): Promise<ApiRes> => {
  try {
    const url = `http://localhost:3000/api/auth/register`;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        full_name: data.full_name.value,
        email: data.email.value,
        password: data.password.value,
      }),
    });

    return res.json();
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};

export { Register };
