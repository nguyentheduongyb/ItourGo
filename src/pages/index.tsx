'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
const Home = () => {
  return (
    <div>

      {/* banner */}
      <div className="relative mb-[200px] py-12 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
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
        <div className="absolute w-full left-0 bottom-[-120px]">
          <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-5 gap-6 flex justify-around">
              <Link href="/hotel" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-3 pt-3 font-semibold">Khách Sạn</h5>
                  <p className="px-4 pb-2">200 khách sạn</p>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-3 pt-3 font-semibold">Nhà Hàng</h5>
                  <p className="px-4 pb-2">200 khách sạn</p>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-3 pt-3 font-semibold">Vé Máy Bay</h5>
                  <p className="px-4 pb-2">200 khách sạn</p>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-3 pt-3 font-semibold">Phương Tiện</h5>
                  <p className="px-4 pb-2">200 khách sạn</p>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-3 pt-3 font-semibold">Mã Giảm Giá</h5>
                  <p className="px-4 pb-2">200 khách sạn</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Top destination */}
      <div className="container">
        <div className="text-center">
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Điểm đến hàng đầu</h1>
          <h3 className="text-5xl font-medium mb-8 capitalize">Khám phá các điểm đến hàng đầu</h3>
          <p>Lựa chọn các điểm điểm du lịch hàng đầu với dịch vụ và khung cảnh tuyệt vời.</p>
        </div>
        <div className="flex gap-8 mt-12">
          <div className="w-2/5">
            <Link href="/tour/day-la-bai-viet-1" className="w-full h-full overflow-hidden relative rounded-2xl">
              <div className="bg-no-repeat bg-center bg-cover h-full w-full overflow-hidden rounded-2xl" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}></div>
              <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Khánh Hòa</h3>
                    <p className='text-3xl text-white font-medium line-clamp-1'>Thành phố biển Nha Trang</p>
                  </div>
                  <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                    18 giờ
                  </p>
                </div>

              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="flex grid grid-cols-2 gap-8">
              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 giờ
                    </p>
                  </div>

                </div>
              </Link>

              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 giờ
                    </p>
                  </div>

                </div>
              </Link>

              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 giờ
                    </p>
                  </div>

                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination1.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 giờ
                    </p>
                  </div>

                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* Best Tours Packages */}
      <div className="container pt-12">
        <div>
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Lựa chọn hàng đầu</h1>
          <h3 className="text-5xl font-medium mb-8 capitalize">Gói du lịch tốt nhất</h3>
          <p>Lựa chọn gói du lịch tốt nhất với chi phí phù hợp với chương trình và có được các trải nghiệm tuyệt vời.</p>
        </div>
        <div className="flex grid grid-cols-3 gap-8 mt-12">
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                  <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                  <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>

          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                  <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                  <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                  <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                  <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                  <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                  <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                  <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                  <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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

      {/* Tour Guides */}
      <div className="container pt-12">
        <div className='text-center'>
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Hướng dẫn viên du lịch</h1>
          <h3 className="text-5xl font-medium mb-8 capitalize">Gặp gỡ những hướng dẫn viên xuất sắc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="flex grid grid-cols-4 gap-8 mt-12">
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2022/11/5/photo1667607552661-16676075527751241222501.jpg")' }}>

            </div>
            <div className="bg-[color:var(--primary-color)] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Thùy Tiên</h1>
              <h3 className="text-lg font-medium capitalize">hướng dẫn viên</h3>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2022/11/5/photo1667607552661-16676075527751241222501.jpg")' }}>

            </div>
            <div className="bg-[color:var(--primary-color)] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Thùy Tiên</h1>
              <h3 className="text-lg font-medium capitalize">hướng dẫn viên</h3>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2022/11/5/photo1667607552661-16676075527751241222501.jpg")' }}>

            </div>
            <div className="bg-[color:var(--primary-color)] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Thùy Tiên</h1>
              <h3 className="text-lg font-medium capitalize">hướng dẫn viên</h3>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2022/11/5/photo1667607552661-16676075527751241222501.jpg")' }}>

            </div>
            <div className="bg-[color:var(--primary-color)] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Thùy Tiên</h1>
              <h3 className="text-lg font-medium capitalize">hướng dẫn viên</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="container pt-12">
        <div className="w-full border rounded-lg grid grid-cols-4 overflow-hidden gap-[1px]">
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>

        </div>
      </div>

      {/* Blog */}
      <div className="container pt-12">
        <div className='text-center'>
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">blog của chúng tôi</h1>
          <h3 className="text-5xl font-medium mb-8 capitalize">Các bài viết gần đây</h3>
          <p>Tìm hiểu các bài viết và trải nghiệm cảu khách du lịch thông qua bài viết của chúng tôi</p>
        </div>
        <div className="flex grid grid-cols-3 gap-8 mt-12">
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://i1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold line-clamp-2'>Trải nghiệm du lịch Nha Trang</h3>
                  <h4 className='text-3xl font-semibold line-clamp-1'>Nha Trang</h4>
                  <p className="line-clamp-3">Nha Trang, thành phố biển nằm tại vị trí trung tâm tỉnh Khánh Hòa, từ lâu đã là một trong những điểm du lịch hút khách nhất Việt Nam. Được thiên nhiên ban tặng những bãi biển, vùng vịnh đẹp cùng nhiều đảo lớn nhỏ, thành phố còn sở hữu nhiều danh lam thắng cảnh, điểm tham quan, vui chơi và cơ sở nghỉ dưỡng.</p>
                </div>

              </div>
              <div className="flex justify-between p-4">
                <div className="p-4 flex gap-2 items-center">
                  <div className="bg-center w-[36px] h-[36px] bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}></div>
                  <p>Quang Linh</p>
                </div>
                <div className='flex items-center'>
                  <button className=' bg-[color:var(--primary-color)] px-6 py-2 rounded-full text-white'>Đọc thêm</button>
                </div>
              </div>

            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://i1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold line-clamp-2'>Trải nghiệm du lịch Nha Trang</h3>
                  <h4 className='text-3xl font-semibold line-clamp-1'>Nha Trang</h4>
                  <p className="line-clamp-3">Nha Trang, thành phố biển nằm tại vị trí trung tâm tỉnh Khánh Hòa, từ lâu đã là một trong những điểm du lịch hút khách nhất Việt Nam. Được thiên nhiên ban tặng những bãi biển, vùng vịnh đẹp cùng nhiều đảo lớn nhỏ, thành phố còn sở hữu nhiều danh lam thắng cảnh, điểm tham quan, vui chơi và cơ sở nghỉ dưỡng.</p>
                </div>

              </div>
              <div className="flex justify-between p-4">
                <div className="p-4 flex gap-2 items-center">
                  <div className="bg-center w-[36px] h-[36px] bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}></div>
                  <p>Quang Linh</p>
                </div>
                <div className='flex items-center'>
                  <button className=' bg-[color:var(--primary-color)] px-6 py-2 rounded-full text-white'>Đọc thêm</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
