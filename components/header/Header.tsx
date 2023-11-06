import Link from "next/link";

export default async function Header() {
  return (
    <div className="fixed left-0 top-0 w-full select-none h-[60px]  bg-[#F5F5F5]">
      <div className="max-w-[57rem] w-full h-full m-auto">
        <div className="flex mt-1.5 max-h-full justify-between">
          <div className="flex items-center mr-10 min-h-60">
            <p
              className="ml-12"
              style={{ fontFamily: "Noto Sans KR", fontWeight: "200" }}
            >
              S
            </p>
          </div>
          <ul className="flex items-center p-0 m-0">
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <div className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left">
                <Link href="/">Post</Link>
              </div>
            </li>
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <div className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left">
                <Link href="/list">list</Link>
              </div>
            </li>
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <div className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left">
                <Link href="/write">write</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
