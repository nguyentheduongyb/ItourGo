'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
import { MdKeyboardArrowRight } from 'react-icons/md';
const Hotel = () => {
        return (
                <div>
                        <div className="relative mb-5 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
                                <div className="container py-12 z-[20]">
                                        <div className="grid grid-cols-2 gap-12">
                                                <div className="">
                                                        <h4 className="mb-8 text-white text-5xl font-bold capitalize">Trải nghiệm kì nghỉ tuyệt vời</h4>
                                                        <h1 className="mb-8 text-[#D0E3F0] text-lg font-semibold capitalize">Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất</h1>

                                                        <form className='' action="">
                                                                <div className="w-full grid grid-cols-2 gap-8">
                                                                        <TextInput
                                                                                id="destination"
                                                                                placeholder="Điểm đến"
                                                                                required
                                                                                type="text"
                                                                                sizing="lg"
                                                                        />
                                                                        <Select
                                                                                id="countries"
                                                                                required
                                                                                sizing="lg"
                                                                        >
                                                                                <option>
                                                                                        Hà Nội
                                                                                </option>
                                                                                <option>
                                                                                        Thành phố Hồ Chí Minh
                                                                                </option>
                                                                                <option>
                                                                                        Nha Trang
                                                                                </option>
                                                                                <option>
                                                                                        Đà Nẵng
                                                                                </option>
                                                                        </Select>
                                                                </div>
                                                                <Link href="/search/search">
                                                                        <Button className="w-full mt-6" size="lg"><span className="flex items-center gap-2"><BsSearch />Tìm kiếm ngay</span></Button>
                                                                </Link>
                                                        </form>

                                                        {/* <div className="flex h-[52px] gap-4 mt-12">
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Khách sạn</span></button>
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Nhà hàng</span></button>
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Phương tiện</span></button>
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Mã giảm giá</span></button>
              </div> */}



                                                </div>

                                                <div className="flex items-center bg-[rgba(0,0,0,0.2)] rounded-xl p-4">
                                                        {/* <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/travel.png" alt="" /> */}
                                                        <Link href="">
                                                                <div className='text-white'>
                                                                        <p className='mb-2 text-lg'>Combo 3N2Đ</p>
                                                                        <h4 className="uppercase text-xl font-semibold mb-2">Amiana nha trang</h4>
                                                                        <p>Bay khứ hồi - Ăn sáng - Trái cây tươi mỗi ngày</p>
                                                                        <p>Miễn phí trẻ em - Phòng Delure Mountain View</p>
                                                                        <div className='flex items-center'>
                                                                                <span className='text-3xl font-bold text-[color:var(--primary-color)]'>3.999.000</span>
                                                                                <span>VNĐ/Khách</span>
                                                                                <button className="rounded-full bg-blue-900"><MdKeyboardArrowRight color="#fff" fontSize={40} /></button>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="container pb-12">
                                <div className="">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Hè rồi, đi du lịch thôi!</h1>
                                        <h3 className="font-medium mb-8 capitalize">Thư giãn - Nạp năng lượng - Khám phá</h3>
                                </div>
                                <div className="w-full grid grid-cols-4 flex gap-12">
                                        <Link href="" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/05/23/19/chon-2.jpg")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3'>Quốc tế</p>
                                                                <p className="">Khám phá thế giới trong tầm tay</p>
                                                                <p className="underline text-sm">64 khách sạn</p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2022/01/14/16/chon-4.jpg")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3'>Villa</p>
                                                                <p className="">Chill tại Villa -vui hè thả ga</p>
                                                                <p className="underline text-sm">64 khách sạn</p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/06/01/18/tb1.png")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3'>Team X</p>
                                                                <p className="">Nâng tầm chuyến du lịch của bạn</p>
                                                                {/* <p className="underline text-sm">64 khách sạn</p> */}
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/06/01/18/tb1.png")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3'>Gift Vourcher</p>
                                                                <p className="">Lưu giữ khoảnh khắc, trải nghiệm hành trình</p>
                                                                {/* <p className="underline text-sm">64 khách sạn</p> */}
                                                        </div>
                                                </div>
                                        </Link>
                                </div>

                        </div>


                        <div className="container pb-12">
                                <div className="">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Điểm đến yêu thích trong nước</h1>
                                        <h3 className="font-medium mb-8 capitalize">Lên rừng xuống biển. Trọn vẹn Việt Nam</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                                <div className="w-[28%]">
                                                        <Link href="">
                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-full rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                <p>200 khách sạn</p>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>
                                                <div className="flex-1 grid grid-rows-2 gap-4">
                                                        <div>
                                                                <Link href="">
                                                                        <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                        <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                        <p>200 khách sạn</p>
                                                                                </div>

                                                                        </div>
                                                                </Link>
                                                        </div>
                                                        <div className='flex grid grid-cols-2 gap-4'>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex gap-4">
                                                <div className="flex-1 grid grid-rows-2 gap-4">
                                                        <div>
                                                                <Link href="">
                                                                        <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                        <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                        <p>200 khách sạn</p>
                                                                                </div>

                                                                        </div>
                                                                </Link>
                                                        </div>
                                                        <div className='flex grid grid-cols-2 gap-4'>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="w-[28%]">
                                                        <Link href="">
                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-full rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                <p>200 khách sạn</p>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>

                        </div>

                        {/* Địa điểm yêu thích nước ngoài */}
                        <div className="container pb-12">
                                <div className="">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Địa điểm yêu thích nước ngoài</h1>
                                        <h3 className="font-medium mb-8 capitalize">Bao la thế giới. Bốn bể là nhà</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                                <div className="w-[28%]">
                                                        <Link href="">
                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-full rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                <p>200 khách sạn</p>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>
                                                <div className="flex-1 grid grid-rows-2 gap-4">
                                                        <div>
                                                                <Link href="">
                                                                        <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                        <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                        <p>200 khách sạn</p>
                                                                                </div>

                                                                        </div>
                                                                </Link>
                                                        </div>
                                                        <div className='flex grid grid-cols-2 gap-4'>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Hotel
