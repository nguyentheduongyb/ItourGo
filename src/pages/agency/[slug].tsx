'use client'

import Link from "next/link"
import { BiChat, BiSolidDownArrow, BiSolidStar } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { GoPlus } from "react-icons/go"

const Agency = () => {
        return (
                <div className="mt-12">
                        <div className="container">
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
                                                                <button className="rounded border border-white text-white flex items-center justify-center gap-2"><GoPlus /><span>Theo dõi</span></button>
                                                                <button className="rounded border border-white text-white  flex items-center justify-center gap-2"><BiChat /><span>Chat</span></button>
                                                        </div>
                                                </div>
                                        </div>


                                        <div className="flex flex-col justify-between">
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Sản phẩm</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Đang theo</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Tỉ lệ phản hồi chat</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                        </div>

                                        <div className="flex flex-col justify-between">
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Người theo dõi</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Đánh giá</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Tham gia</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* Tab */}
                        <div className="mt-8 border-b w-full">
                                <div className="container">
                                        <div className="grid grid-flow-col justify-stretch uppercase">
                                                <Link href="" className="px-2 py-3 flex justify-center border-b border-b-2 text-red-500">
                                                        Dạo
                                                </Link>
                                                <Link href="" className="px-2 py-3 flex justify-center">
                                                        Tất cả sản phẩm
                                                </Link>
                                                <Link href="" className="px-2 py-3 flex justify-center">
                                                        Best Seller
                                                </Link>
                                                <Link href="" className="px-2 py-3 flex justify-center">
                                                        Sale upto 50%
                                                </Link>
                                                <Link href="" className="px-2 py-3 flex justify-center">
                                                        Combo
                                                </Link>
                                                <Link href="" className="px-2 py-3 flex justify-center relative flex items-center gap-4">
                                                        <p className="absolute left-0 h-2/5 border"></p>
                                                        <span>Thêm</span>
                                                        <BiSolidDownArrow size="14" />
                                                </Link>
                                        </div>
                                </div>

                        </div>

                        <div className="bg-[#ccc] py-4">
                                <div className="container">
                                        <div className="flex grid grid-cols-5 gap-8 mt-12">
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>

                                        </div>
                                </div>

                        </div>
                        <div className="container pt-12">
                                <div className='text-center'>
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Các đại lý khác</h1>
                                        <h3 className="text-5xl font-medium mb-8 capitalize">Tham khảo tour của các đại lý hàng đầu của chúng tôi</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                                <div className="flex grid grid-cols-6 gap-8 mt-12">
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                </div>
                        </div>



                </div>
        )
}
export default Agency