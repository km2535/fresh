import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // console.log(request.nextUrl.origin);
  // console.log(request.cookies);
  // console.log(request.headers);
  //사용자가 /list에 접속하였을 때 유저 정보를 출력한다.
  if (request.nextUrl.pathname.startsWith("/list")) {
    console.log(request.headers.get("sec-ch-ua-platform"));
    if (!request.cookies.has("visited")) {
      const response = NextResponse.next();
      response.cookies.set({
        name: "visited",
        value: true,
        maxAge: 3600,
        httpOnly: true,
      });
      return response;
    }
    return NextResponse.next();
  }
  //미 로그인 시 write 페이지 접근 금지시키기
  const session = await getToken({ req: request });
  if (request.nextUrl.pathname.startsWith("/write")) {
    if (session === null) {
      return NextResponse.redirect("http://localhost:3000/api/auth/signin");
    }
    return NextResponse.next();
  }

  // request.cookies.get("쿠키이름"); //출력
  // request.cookies.has("쿠키이름"); //존재확인
  // request.cookies.delete("쿠키이름"); //삭제

  if (!request.cookies.has("theme")) {
    const response = NextResponse.next();
    response.cookies.set({
      name: "theme",
      value: "light",
      maxAge: 3600,
      httpOnly: true,
    });
    return response; //쿠키생성
  }
}
