'use client'

const Agency = () => {


        return (
                <div className="container mt-12">
                        <div className="flex gap-8 grid grid-cols-3">
                                <div className="rounded-lg bg-no-repeat bg-center relative bg-cover w-full h-36 overflow-hidden" style={{ backgroundImage: 'url("https://down-ws-vn.img.susercontent.com/vn-11134210-7qukw-lgnjqt6ihlgz60_tn.webp")' }}>
                                        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
                                        <div className="flex flex-col justify-between w-full h-full px-4 py-3 absolute">
                                                <div className="flex gap-3">
                                                        <div className="bg-no-repeat bg-center bg-cover h-20 w-20 rounded-full border-4" style={{ backgroundImage: 'url("https://down-ws-vn.img.susercontent.com/38bedd074aad08703440ad8acd596309_tn")' }}></div>
                                                        <div className="">
                                                                <p className="uppercase text-2xl font-medium text-white">365 Travel</p>
                                                                <p className="text-xs text-gray-400">Online 5 phút trước</p>
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 grid grid-cols-2">
                                                        <button className="rounded border border-white text-white">Theo dõi</button>
                                                        <button className="rounded border border-white text-white">Chat</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
export default Agency