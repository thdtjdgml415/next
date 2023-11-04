/**
 *
 * @param request 유저들의 요청 정보
 * @param response 유저들에게 응답 하는 값
 * @returns
 */

export default function getTime(request, response) {
  const date = new Date();
  console.log("현재시간", date);
  return response.status(200).json(date);
}
