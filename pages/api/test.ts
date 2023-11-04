/**
 *
 * @param request 유저들의 요청 정보
 * @param response 유저들에게 응답 하는 값
 * @returns
 */

export default function handler(request, response) {
  console.log("123");
  return response.status(200).json("처리완료");
}
