import BaseButton from "@/components/atom/BaseButton";
import BaseInput from "@/components/atom/BaseInput";

export default function Join() {
  return (
    <div className="w-full h-full mt-60 flex justify-center align-middle">
      <div className="w-72 border-solid border-4 text-center">
        <h2 className="my-5 font-bold antialiased">회원가입</h2>
        <form name="join" action="/api/join" method="POST">
          <BaseInput
            className="border-solid border-4 m-auto mb-10"
            name="email"
            type="text"
            placeholder="아이디"
          />
          <BaseInput
            className="border-solid border-4 m-auto mb-10"
            name="password"
            type="text"
            placeholder="비밀번호"
          />
          <BaseInput
            className="border-solid border-4 m-auto mb-10"
            name="number"
            type="text"
            placeholder="전화번호"
          />
          <div className="mb-5">
            <BaseButton
              className="w-20 font-semibold border-solid border-4 bg-sky-200 border-sky-200 mr-5 antialiased rounded-lg py-2 px-1"
              type="submit"
              children="회원가입"
            />

            <BaseButton
              className="w-20 font-semibold border-solid border-4 bg-pink-200 border-pink-200 antialiased rounded-lg py-2 px-1"
              type="button"
              children="취소"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
