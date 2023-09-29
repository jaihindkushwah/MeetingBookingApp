import Link from "next/link"

export default function ForgetPasswordPage(){  
  return(
      <div className="flex justify-center items-center w-screen min-h-screen">
              <div className="flex flex-col justify-center gap-3 bg-zinc-600 sm:p-16 p-10 rounded">
                  <h2 className="w-full text-center mb-2 p-1 text-gray-300 text-lg">Forget Password Form</h2>
                  <input className="w-full h-10 focus:outline-none pl-2 pr-1 rounded" type="text" placeholder="Email"/>
                  <button className="w-full mt-2 p-1 rounded-md bg-slate-100 hover:bg-slate-500 hover:text-white cursor-pointer" >Submit</button>
                  <div className="text-[12px] flex flex-col font-sans gap-0 text-white">
                      <Link className="text-blue-300" href={"/signup"}>Already an account?</Link>
                  </div>
              </div>
      </div>
  )
}
