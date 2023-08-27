'use client'
import React from 'react'

import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import Search from '~/components/Search'
import SearchItem from '~/components/Search/searchTour/SearchItem'
import { BiShareAlt, BiSolidLike, BiSolidStar } from 'react-icons/bi'
import Link from 'next/link'
const SearchPage = () => {
        return (
                <div className="container mt-2">
                        <Search />
                        <div className="flex justify-between items-center py-4">
                                <div className="flex items-center gap-8">
                                        <h1 className="text-xl font-medium">Khách sạn Hà Nội</h1>
                                        <p className="flex items-center uppercase font-medium text-blue-500"><MdLocationOn /><span>Xem bản đồ</span></p>
                                </div>
                                <p>*Giá trung bình phòng 1 đêm cho 2 khách</p>
                        </div>

                        <div className="flex gap-6">

                                {/* Content left*/}
                                <div className="w-1/4">

                                        {/* Hotline hỗ trợ */}
                                        <div className="w-full border p-4 rounded">
                                                <div className="flex gap-2">
                                                        <div className="w-24 h-24 bg-no-repeat bg-center bg-cover rounded-full" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2018/12/04/09/undefined-2.png")' }}></div>
                                                        <div className="flex flex-col justify-between">
                                                                <h2 className="text-xl font-bold">Cần hỗ trợ?</h2>
                                                                <p className="flex gap-6"><span className="w-1/4 text-center">HCM</span><span className="text-orange-500">1900 1234</span></p>
                                                                <p className="flex gap-6"><span className="w-1/4 text-center">HN</span><span className="text-orange-500">1900 1234</span></p>
                                                                <p className="flex gap-6"><span className="w-1/4 text-center">HCM</span><span className="text-orange-500">1900 1234</span></p>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* Tìm khách sạn */}
                                        <div className="w-full border p-4 rounded mt-4">
                                                <div className="flex">
                                                        <div className="flex items-center border rounded w-full">
                                                                <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-sm h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder='Nhập tên khách sạn' />
                                                                <button className="border-l h-full px-3">
                                                                        <BsSearch />
                                                                </button>
                                                        </div>
                                                </div>
                                                {/* Hạng sao */}
                                                <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                        <h6 className="font-medium">Hạng sao</h6>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <div className="flex items-center gap-1">
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                </div>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <div className="flex items-center gap-1">
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                </div>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <div className="flex items-center gap-1">
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                </div>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <div className="flex items-center gap-1">
                                                                        <BiSolidStar color="#FDBF65" />
                                                                        <BiSolidStar color="#FDBF65" />
                                                                </div>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <div className="flex items-center gap-1">
                                                                        <BiSolidStar color="#FDBF65" />
                                                                </div>
                                                        </div>
                                                </div>
                                                {/* Khu vực */}
                                                <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                        <h6 className="font-medium">Khu vực</h6>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Bảo lộc (2)</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Bảo lộc (2)</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Bảo lộc (2)</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Bảo lộc (2)</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Bảo lộc (2)</p>
                                                        </div>
                                                </div>
                                                {/* Loại hình nơi ở */}
                                                <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                        <h6 className="font-medium">Loại hình nơi ở</h6>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Khu nghỉ dưỡng</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Khu nghỉ dưỡng</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Khu nghỉ dưỡng</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Khu nghỉ dưỡng</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Khu nghỉ dưỡng</p>
                                                        </div>
                                                </div>
                                                {/* Tiện ích */}
                                                <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                        <h6 className="font-medium">Tiện ích</h6>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Phòng gia đình</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Phòng gia đình</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Phòng gia đình</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Phòng gia đình</p>
                                                        </div>
                                                        <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                                <input type="checkbox" className='rounded hover:border-blue-500' />
                                                                <p>Phòng gia đình</p>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Kinh nghiệm du lịch */}
                                        <div className="w-full border rounded mt-4">
                                                <h1 className='bg-[#ccc] p-4 font-medium'>Kinh nghiệm du lịch Hà Nội</h1>
                                                <div className="p-4 text-sm flex flex-col gap-3">
                                                        <p>Ngoài những địa chỉ quen thuộc như hồ Xuân Hương, đỉnh Langbiang, dinh Bảo Đại hay thiền viện Trúc Lâm,... bạn có biết Đà Lạt còn nhiều thứ tuyệt vời khác nữa không?</p>
                                                        <p>Nhất định bạn phải thưởng thức món nem nướng, sữa đậu nành nóng hay bánh ướt lòng gà ngon nức tiếng. Chưa hết đâu, bạn còn phải đến thăm thác Voi - nơi có cầu vồng suốt ngày hay bãi Tiên Sa, hồ Đại Ninh nữa nhé. Hãy để iVIVU.com mách bạn!</p>
                                                </div>
                                        </div>
                                </div>
                                {/* Content right */}
                                <div className="flex-1">
                                        <div className="flex flex-col gap-5">
                                                <SearchItem />
                                                <SearchItem />
                                                <SearchItem />
                                                <SearchItem />
                                        </div>
                                        <div className="flex justify-center mt-6">
                                                <button className="font-bold text-[color:var(--primary-color)] px-5 py-3 rounded-lg border border-[color:var(--primary-color)]">Xem thêm 500 khách sạn</button>
                                        </div>
                                </div>
                        </div>
                        <div className="bg-[#F9F9F9] rounded p-4 my-12">
                                <div className="flex justify-between items-center mb-5">
                                        <div className="flex gap-8 items-center">
                                                <h2 className="text-3xl font-medium text-[#003C71]">Trung Hoa Cổ Kính</h2>
                                                <div className="flex gap-3">
                                                        <Link href="/tour/day-la-bai-viet-2" className="flex gap-1 text-white font-bold text-[12px] rounded-lg items-center px-2 py-1 bg-[#1877F2]">
                                                                <BiSolidLike color="white" />
                                                                <span>Thích</span>
                                                        </Link>
                                                        <Link href="/tour/day-la-bai-viet-2" className="flex gap-1 text-white font-bold text-[12px] rounded-lg items-center px-2 py-1 bg-[#1877F2]">
                                                                <BiShareAlt color="white" />
                                                                <span>Chia sẻ</span>
                                                        </Link>
                                                </div>
                                        </div>
                                        <div>
                                                <div className="flex justify-end">
                                                        <BiSolidStar color="#FDBF65" />
                                                        <BiSolidStar color="#FDBF65" />
                                                        <BiSolidStar color="#FDBF65" />
                                                        <BiSolidStar color="#FDBF65" />
                                                        <BiSolidStar color="#FDBF65" />
                                                </div>
                                                <p className="text-xs">2.9/5 trên 2121 đánh giá</p>
                                        </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                        <p>Không ít người đã đưa Đà Lạt vào danh sách những địa điểm nhất định phải đặt chân đến một lần trong đời. Lý do thì nhiều vô số kể như khí hậu mát mẻ quanh năm, không khí trong lành, rồi cảnh đẹp, đồ ăn ngon, nhiều homestay đẹp… Đà Lạt không phải là nơi đi một lần rồi thôi, Đà Lạt luôn có nhiều điều hấp dẫn không tên khiến người ta vẫn cứ muốn được quay lại hoài. Mà đi du lịch Đà Lạt thì ở đâu nhỉ? Resort, villa, khách sạn, homestay… Đà Lạt có vô vàn lựa chọn dành cho bạn, iVIVU.com đã chọn sẵn đây rồi!</p>
                                        <p>Nếu thích nghỉ dưỡng thì các resort quanh khu vực Hồ Tuyền Lâm là lý tưởng nhất, còn muốn ngắm phố phường sôi động thì bạn có thể chọn các khách sạn ở khu trung tâm thành phố, gần chợ, gần Hồ Xuân Hương. Danh sách khách sạn Đà Lạt đã khá đầy đủ trên iVIVU.com với nhiều mức giá cho bạn lựa chọn. Đặc biệt, iVIVU.com luôn đưa ra những combo khách sạn ở Đà Lạt + xe đưa đón/máy bay với mức giá “không tưởng”, giúp bạn có một chuyến du lịch tiết kiệm và thoải mái nhất.</p>
                                        <p>Tuy nhiên, vì là thành phố du lịch nên các khách sạn Đà Lạt hầu hết là kín chỗ hoặc giá tăng cao, đặc biệt là cuối tuần hoặc dịp lễ lạt. Để có nhiều lựa chọn hơn và có mức giá rẻ nhất, bạn hãy liên lạc với iVIVU.com sớm để đặt ngay khách sạn Đà Lạt nha.</p>
                                </div>
                        </div>

                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white flex gap-3 grid grid-cols-3 p-4">
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                </div>
                        </div>
                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white flex gap-3 grid grid-cols-3 p-4">
                                        <Link href="" className='text-blue-500'>Bảo Lộc</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                </div>
                        </div>
                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white flex gap-3 grid grid-cols-3 p-4">
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                </div>
                        </div>
                </div>
        )
}

export default SearchPage 
