'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
import { BiTransfer } from 'react-icons/bi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CiViewList } from 'react-icons/ci';
const AirlineTicket = () => {
        return (
                <div className='bg-[#ECF0F5]'>
                        {/* banner */}
                        <div className="relativepy-12 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
                                <div className="container">
                                        <div className="grid grid-cols-2 gap-12">
                                                <div className="">
                                                        <h4 className="mb-8 text-white text-5xl font-bold capitalize">Khám phá thế giới</h4>
                                                        <h1 className="mb-8 text-[#D0E3F0] text-lg font-semibold capitalize">Bắt đầu lên kế hoạch cho chuyến đi mơ ước của bạn ngay hôm nay!</h1>
                                                        <p className="mb-16">Tìm những địa điểm tuyệt vời để lưu trú, ăn uống, mua sắm hoặc ghé thăm từ các chuyên gia địa phương</p>

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

                                                <div>
                                                        <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/travel.png" alt="" />
                                                </div>
                                        </div>
                                </div>
                        </div>


                        <div className="bg-white">
                                <div className="container">
                                        <div className="flex grid grid-cols-3 py-8 gap-8">
                                                <div className="flex gap-4">
                                                        <div className="bg-no-repeat bg-center bg-cover w-12 h-12" style={{ backgroundImage: 'url("https://res.ivivu.com/flight/inbound/images/icons/plane.svg")' }}></div>
                                                        <div className="flex flex-col justify-between text-sm">
                                                                <p className="medium">Chọn chuyến bay phù hợp nhất</p>
                                                                <span className='text-xs text-gray-600'>Dễ dàng so sánh giữa các hãng hàng không</span>
                                                        </div>
                                                </div>
                                                <div className="flex gap-4">
                                                        <div className="bg-no-repeat bg-center bg-cover w-12 h-12" style={{ backgroundImage: 'url("https://res.ivivu.com/flight/inbound/images/icons/travel_ticket.svg")' }}></div>
                                                        <div className="flex flex-col justify-between text-sm">
                                                                <p className="medium">Đặt vé nhanh chóng, dễ dàng</p>
                                                                <span className='text-xs text-gray-600'>Mua vé máy bay dễ dàng, xuất vé tức thời</span>
                                                        </div>
                                                </div>
                                                <div className="flex gap-4">
                                                        <div className="bg-no-repeat bg-center bg-cover w-12 h-12" style={{ backgroundImage: 'url("https://res.ivivu.com/flight/inbound/images/icons/give-money.svg")' }}></div>
                                                        <div className="flex flex-col justify-between text-sm">
                                                                <p className="medium">Thanh toán an toàn</p>
                                                                <span className='text-xs text-gray-600'>Nhiều hình thức thanh toán</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        {/* Giá vé nội địa */}
                        <div className="container">
                                <div className="mt-8">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-2 capitalize">Giá vé Nội địa tốt nhất</h1>
                                        <h3 className="text-lg font-medium capitalize">Giá tốt nhất từ VietnamAirlines, Bamboo, Vietjet...</h3>
                                </div>
                                <div className="flex gap-8 mt-8 grid grid-cols-3">
                                        <div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div>
                                        <div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div><div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div><div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div><div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div><div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div><div className="bg-white rounded p-4">
                                                <div className="flex items-center justify-between w-full">
                                                        <div className='flex gap-4 items-center'>
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                                <BiTransfer />
                                                                <div>
                                                                        <p className='font-medium'>Hồ Chí Minh</p>
                                                                        <p className='text-sm'>11 th 10</p>
                                                                </div>
                                                        </div>
                                                        <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                </div>
                                                <div className='flex justify-between mt-6'>
                                                        <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                <span>1.234.567</span>
                                                                <span>VND</span>
                                                        </p>
                                                        <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                </div>
                                        </div>
                                </div>
                        </div>


                        {/* Giá vé nội địa */}
                        <div className="container">

                                <div className="mt-8">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-2 capitalize">Giá vé Quốc tế tốt nhất</h1>
                                        <h3 className="text-lg font-medium capitalize">Giá tốt nhất từ VietnamAirlines, Bamboo, Vietjet...</h3>
                                </div>

                                {/* Đông Nam Á */}
                                <div className="mb-8">
                                        <p className='text-2xl my-4'>Đông Nam Á</p>
                                        <div className="flex gap-8 mt-8 grid grid-cols-3">
                                                <div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div>
                                                <div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* Châu Âu, Châu Mỹ, Châu Úc và Châu Phi */}
                                <div className="mb-8">
                                        <p className='text-2xl my-4'>Châu Âu, Châu Mỹ, Châu Úc và Châu Phi</p>
                                        <div className="flex gap-8 mt-8 grid grid-cols-3">
                                                <div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div>
                                                <div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div><div className="bg-white rounded p-4">
                                                        <div className="flex items-center justify-between w-full">
                                                                <div className='flex gap-4 items-center'>
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                        <BiTransfer />
                                                                        <div>
                                                                                <p className='font-medium'>Hồ Chí Minh</p>
                                                                                <p className='text-sm'>11 th 10</p>
                                                                        </div>
                                                                </div>
                                                                <img className='w-12' src="https://res.ivivu.com/flight/inbound/images/compact/BambooAirways.webp" alt="" />
                                                        </div>
                                                        <div className='flex justify-between mt-6'>
                                                                <p className='text-2xl  font-bold text-[color:var(--primary-color)]'>
                                                                        <span>1.234.567</span>
                                                                        <span>VND</span>
                                                                </p>
                                                                <Link className="px-2 py-1 text-sm text-white bg-orange-500 rounded flex items-center justify-center" href="/airline-ticket/ha-noi-di-ho-chi-minh">Xem</Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* Kế hoạch riêng, giá đặc biệt */}
                        <div className="container pb-12">
                                <div className="">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-2 capitalize">Kế hoạch riêng, giá đặc biệt</h1>
                                        <h3 className="text-lg font-medium capitalize">Tiết kiệm chi phí - Theo đuổi ước mơ</h3>
                                </div>
                                <div className="w-full grid grid-cols-4 flex gap-12 mt-8">
                                        <Link href="/airline-ticket" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/05/23/19/chon-2.jpg")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3 flex items-center gap-8'><span>Du lịch</span><MdOutlineKeyboardArrowRight /></p>
                                                                <p className="text-sm line-clamp-2"> Đặt vé máy bay du học giá đặc biệt, không bỏ lỡ ưu đãi riêng cho du học sinh. </p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="/airline-ticket" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/05/23/19/chon-2.jpg")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3 flex items-center gap-8'><span>Định cư</span><MdOutlineKeyboardArrowRight /></p>
                                                                <p className="text-sm line-clamp-2"> Săn vé giá rẻ cho người đi định cư. Liên hệ với chúng tôi ngay hôm nay! </p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="/airline-ticket" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/05/23/19/chon-2.jpg")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3 flex items-center gap-8'><span>Làm việc</span><MdOutlineKeyboardArrowRight /></p>
                                                                <p className="text-sm line-clamp-2"> Giá vé đặc biệt cho cô dâu định cư và người đi xuất khẩu lao động. </p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="/airline-ticket" className="w-full">
                                                <div className="rounded-lg w-full bg-center bg-no-repeat bg-cover pt-[130%] relative text-white" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2023/05/23/19/chon-2.jpg")' }}>
                                                        <div className="absolute left-0 bottom-0 p-4">
                                                                <p className='font-bold text-2xl mb-3 flex items-center gap-8'><span>Săn vé</span><MdOutlineKeyboardArrowRight /></p>
                                                                <p className="text-sm line-clamp-2">  Vé máy bay giá rẻ du lịch và thăm thân Mỹ, Canada. Chat để tư vấn miễn phí. </p>
                                                        </div>
                                                </div>
                                        </Link>
                                </div>

                        </div>

                        {/* Thông tin hữu ích khi đi máy bay */}
                        <div className="container pb-12">
                                <div className="">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-2 capitalize">Thông tin hữu ích khi đi máy bay</h1>
                                        <h3 className="text-lg font-medium capitalize">Có một hành trình hơn cả mong đợi</h3>
                                </div>
                                <div className="w-full flex flex-col gap-8 mt-8">
                                        <div className="w-full grid grid-cols-3 gap-8 flex">
                                                <div className='flex flex-col items-center'>
                                                        <CiViewList size="32" className="text-[color:var(--primary-color)]" />
                                                        <span className="text-xl font-medium">Thủ tục</span>
                                                </div>
                                                <div className='flex flex-col items-center'>
                                                        <CiViewList size="32" className="text-[color:var(--primary-color)]" />
                                                        <span className="text-xl font-medium">Giấy tờ & Hành lý</span>
                                                </div>
                                                <div className='flex flex-col items-center'>
                                                        <CiViewList size="32" className="text-[color:var(--primary-color)]" />
                                                        <span className="text-xl font-medium">Lưu ý</span>
                                                </div>
                                        </div>
                                        <div className="w-full grid grid-cols-3 gap-8 flex">
                                                <div className='flex items-center p-4 bg-white rounded'>
                                                        <span className="text-lg">Tôi phải đến sân bay trước mấy tiếng?</span>
                                                </div>
                                                <div className='flex items-center p-4 bg-white rounded'>
                                                        <span className="text-lg">Đi máy bay ở Việt Nam cần mang những loại giấy tờ gì?</span>
                                                </div>
                                                <div className='flex items-center p-4 bg-white rounded'>
                                                        <span className="text-lg">Em bé (trẻ sơ sinh) bao nhiêu tháng tuổi thì được đi máy bay?</span>
                                                </div>
                                        </div>

                                </div>

                                {/* content question */}
                                <div className="flex mt-10 gap-8">
                                        <div className="flex flex-col gap-3 w-3/5">
                                                <p className="flex items-center gap-4"><span>-</span><span>Các hãng hàng không quy định mỗi trẻ em khi thực hiện chuyến bay phải có ít nhất 1 người lớn từ 18 tuổi đi cùng.</span></p>
                                                <p className="flex items-center gap-4"><span>-</span><span>Các hãng hàng không quy định mỗi trẻ em khi thực hiện chuyến bay phải có ít nhất 1 người lớn từ 18 tuổi đi cùng.</span></p>
                                                <p className="flex items-center gap-4"><span>-</span><span>Các hãng hàng không quy định mỗi trẻ em khi thực hiện chuyến bay phải có ít nhất 1 người lớn từ 18 tuổi đi cùng.</span></p>
                                        </div>
                                        <div className='flex-1'>
                                                <img className='w-full' src="https://res.ivivu.com/flight/inbound/images/home/qa13.svg" alt="" />
                                        </div>
                                </div>
                        </div>


                        {/* Đánh giá */}
                        <div className='bg-white w-full p-4'>
                                <div className="container">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-2 capitalize">Đánh giá của khách hàng sử dụng dịch vụ đặt vé iVIVU</h1>
                                        <div className="flex gap-8 items-center">
                                                <p className="px-4 py-2 bg-green-300 rounded text-white font-bold">9.3/10</p>
                                                <p className="flex gap-2 items-center text-[color:var(--primary-color)]"><span className='font-bold'>Tuyệt vời</span><i></i></p>
                                        </div>

                                </div>
                        </div>
                </div>
        );
}
export default AirlineTicket;
