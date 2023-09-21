'use client'

import { useState } from 'react'
import Link from "next/link"
import { BiChat, BiSolidDownArrow, BiSolidStar } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { GoPlus } from "react-icons/go"

const Agency = () => {

        const [tab, setTab] = useState(1)

        const handleChangeTab = (e: any) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="mt-8">
                        {/* Tab */}
                        <div className="mt-8 border-b w-full">
                                <div className="container">
                                        <div className="grid grid-flow-col justify-stretch uppercase">
                                                <button id={`1`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 1 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Giới thiệu
                                                </button>
                                                <button id={`2`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 2 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Kiểm tra Tour đã đặt
                                                </button>
                                                <button id={`3`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 3 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Câu hỏi thường gặp
                                                </button>
                                                <button id={`4`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 4 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Điều khoản sử dụng
                                                </button>
                                                <button id={`5`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 5 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Chính sách bảo mật
                                                </button>

                                        </div>
                                </div>

                        </div>

                        <div className="">
                                <div>
                                        <div className={`${tab == 1 ? "block" : "hidden"} py-12`}>
                                                <div className="container">
                                                        <div className='text-center px-40'>
                                                                <h3 className="text-2xl font-bold">PNG SOFT</h3>
                                                                <p className="mt-8">Website Planet là trung tâm hàng đầu của thế giới web dành cho các cá nhân và doanh nghiệp đang tìm cách tạo dựng, quảng bá hoặc mở rộng sự hiện diện trực tuyến của họ. Chúng tôi cung cấp các đánh giá có căn cứ, các so sánh chuyên sâu, các hướng dẫn dễ hiểu và các công cụ mạnh mẽ để giúp bạn đạt được tham vọng kỹ thuật số của mình.</p>
                                                                <img className="w-1/2 mx-auto mt-12" src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/07/AboutUsMainGlobe.png" alt="" />
                                                        </div>
                                                        <div className='flex mt-12 gap-8'>
                                                                <div className='w-1/5'>
                                                                        <h6 className='text-3xl font-medium border-b border-b-4 border-b-red-500 pb-4'>Câu chuyện của chúng tôi</h6>

                                                                </div>
                                                                <div className='flex-1 flex flex-col gap-4'>
                                                                        <p>Website Planet được trình làng vào năm 2013 bởi hai nhà phát triển web nhiệt huyết. Những nhà tiên phong ban đầu này bị thất vọng bởi sự thiếu thốn các thông tin trực tuyến dựa trên nghiên cứu, dễ tiếp cận về những sản phẩm và dịch vụ kỹ thuật số có thể thực sự giúp cho các cá nhân và doanh nghiệp tạo dựng một website chuyên nghiệp.</p>
                                                                        <p>Kể từ đó, rất nhiều thứ đã thay đổi trên thế giới web và rất nhiều thứ đã thay đổi tại Website Planet. Do nhu cầu của độc giả ngày càng phát triển, nên đội ngũ của chúng tôi cũng vậy. Chúng tôi hiện có các chuyên gia về lĩnh vực lưu trữ web, thiết kế web, tiếp thị kỹ thuật số, SEO, xử lý thanh toán, chiến lược kinh doanh, v.v.</p>
                                                                        <p>Trang web khởi đầu như một dự án phụ nhằm khám phá các công cụ phát triển web tốt nhất (và tệ nhất) nay đã trở thành điểm đến cuối cùng cho các doanh nghiệp thuộc mọi quy mô và ngành nghề để tìm thấy những gì họ cần cho việc xây dựng, tiếp thị và duy trì sự hiện diện trực tuyến có khả năng sinh lợi.</p>
                                                                </div>
                                                        </div>

                                                        <div className='bg-[#F7F8FC] pb-12'>
                                                                <div className='mx-60 text-center flex flex-col items-center gap-6'>
                                                                        <div className='w-3 h-12 bg-orange-400'></div>
                                                                        <h6 className='text-3xl font-medium'>Chúng tôi ở đâu</h6>
                                                                        <p>Với thiên tư về lĩnh vực kỹ thuật số, chúng tôi thấy không có lý do gì để giới hạn bản thân trong việc tuyển dụng nhân tài chỉ từ một nơi trên thế giới. </p>
                                                                        <p>Đó là lý do tại sao chúng tôi tự hào nói rằng Website Planet được vận hành bởi nhiều chuyên gia tận tụy đang sinh sống và làm việc trên khắp 6 châu lục. Điều này không chỉ thúc đẩy việc học hỏi liên tục trong đội ngũ mà còn cho phép chúng tôi cung cấp một góc nhìn toàn diện, mang tính toàn cầu hơn cho các độc giả đa dạng của chúng tôi trên khắp thế giới.</p>
                                                                        <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/06/location-image-1-850x334.png" alt="" />
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="w-full border-y-4 border-y-orange-500 flex grid grid-cols-2">
                                                        <div className="bg-white">
                                                                <div className="py-8 w-2/3 mr-8 ml-auto">
                                                                        <h6 className="text-2xl font-bold">Sứ mệnh của chúng tôi</h6>
                                                                        <div className='mt-10'>
                                                                                <p className='mb-6'>Chúng tôi thường xuyên đánh giá lại tất cả các sản phẩm mình đã đánh giá để đảm bảo bạn luôn nhận được thông tin cập nhật nhất. Điều này có nghĩa là chúng tôi luôn cập nhật những diễn biến mới nhất về giá cả, tính năng và dịch vụ khách hàng, để bạn biết chính xác nên mong đợi điều gì với số tiền bỏ ra.</p>
                                                                                <p className='mb-6'>Chúng tôi cũng tận tâm như vậy trong việc luôn cập nhật các xu hướng sản phẩm mới nhất. Nếu có một loại công cụ hoặc dịch vụ kỹ thuật số mới nào có thể giúp mang lại cho doanh nghiệp một lợi thế cạnh tranh trực tuyến, thì chúng tôi muốn tìm hiểu về nó. Tầm nhìn của chúng tôi về Website Planet là nó sẽ đóng vai trò như một trung tâm tài nguyên toàn diện, đó là lý do tại sao chúng tôi tìm kiếm và đánh giá tất cả các sản phẩm dịch vụ mới nhất khi chúng tham gia vào thị trường kỹ thuật số.</p>
                                                                                <p className='mb-6'>Ngoài những thông tin chuyên sâu chúng tôi còn cung cấp một bộ công cụ phát triển web miễn phí trực tiếp ngay trên website của mình. Từ trình tạo tên miền, trình biểu tượng website đến trình kiểm tra SSL, trình kiểm tra tính đáp ứng của website, Website Planet cung cấp phong phú các công cụ bạn cần để thiết lập và cải thiện sự hiện diện trực tuyến của mình.</p>
                                                                                <p className='mb-6'>Nếu Website Planet trang bị cho bạn tất cả các tài nguyên bạn cần để thành công trực tuyến, thì sứ mệnh của chúng tôi hoàn thành!</p>
                                                                        </div>
                                                                </div>

                                                        </div>
                                                        <div className="bg-orange-500">
                                                                <div className="py-8 w-2/3 ml-8 mr-auto  text-white">
                                                                        <h6 className="text-2xl font-bold">Sứ mệnh của chúng tôi</h6>
                                                                        <div className='mt-10'>
                                                                                <p className='mb-6'>Trên hết thảy, chúng tôi tin rằng tất cả mọi người đều có thể đạt được sự hiện diện trực tuyến chuyên nghiệp – chứ không chỉ những người am hiểu công nghệ nhất và những người có hầu bao rủng rỉnh. Chúng tôi hiểu rằng điều này chỉ có thể đạt được thông qua khả năng tiếp cận miễn phí các bài đánh giá và so sánh trung thực, lấy người dùng làm trung tâm về vô số dịch vụ đang tranh nhau thu hút sự chú ý (cũng như thông tin thẻ tín dụng) của bạn.</p>
                                                                                <p className='mb-6'>Đó là lý do tại sao chúng tôi luôn cố gắng làm cho bài viết của mình trở nên hữu ích và dễ hiểu nhất có thể, dịch nó sang tận 29 ngôn ngữ. Đó cũng là lý do tại sao chúng tôi hoàn toàn minh bạch về quy trình đánh giá đằng sau mỗi bài đánh giá mà chúng tôi đăng tải.</p>
                                                                                <p className='mb-6'>Tài sản quý giá nhất của chúng tôi là danh tiếng như một nguồn thông tin đáng tin cậy, nhắc nhở chúng tôi đặt tính chính trực làm cốt lõi trong mọi việc mình làm. Chúng tôi không bao giờ đồng ý nhận tiền để đánh giá một sản phẩm hoặc dịch vụ, chúng tôi cũng không giới thiệu bất kỳ dịch vụ nào mà đích thân chúng tôi chưa từng sử dụng.</p>
                                                                                <p className='mb-6'>Để duy trì nội dung miễn phí cho độc giả, chúng tôi trang trải chi phí thông qua hoa hồng tiếp thị liên kết. Nếu bạn mua hàng sau khi nhấp vào liên kết trên trang web của chúng tôi, chúng tôi có thể nhận được hoa hồng cho giao dịch mua đó. Thỏa thuận này cho phép chúng tôi duy trì tính độc lập của mình, mặc dù thứ hạng chúng tôi đưa ra trên các trang danh sách có thể tính đến phản hồi của độc giả và thỏa thuận thương mại của chúng tôi với các nhà cung cấp.</p>
                                                                                <p className='mb-6'>Cuối cùng, ưu tiên số một của chúng tôi là giúp bạn tìm thấy chính xác những gì bạn cần để thành công trực tuyến. Bất kể bạn sắp bắt đầu một doanh nghiệp mới, ra mắt trang web đầu tiên của mình, xây dựng thương hiệu và tiếp thị một trang web hiện có hay thiết lập quy trình xử lý thanh toán của bạn, Website Planet luôn sẵn sàng trợ giúp.</p>
                                                                        </div>
                                                                </div>

                                                        </div>
                                                </div>

                                                <div className="container py-8">
                                                        <h6 className='text-2xl font-bold text-center'>Đội Ngũ</h6>
                                                        <div className="flex gap-6 grid grid-cols-5 mt-12">
                                                                <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                        <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                        <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                        <p className='text-xs'>Developer</p>
                                                                </div>
                                                                <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                        <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                        <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                        <p className='text-xs'>Developer</p>
                                                                </div>
                                                                <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                        <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                        <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                        <p className='text-xs'>Developer</p>
                                                                </div>
                                                                <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                        <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                        <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                        <p className='text-xs'>Developer</p>
                                                                </div>
                                                                <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                        <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                        <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                        <p className='text-xs'>Developer</p>
                                                                </div>
                                                                <div className="rounded p-4 flex flex-col items-center justify-center gap-3 bg-[#ccc]">
                                                                        <div className="w-16 h-16 rounded-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2023/06/Joshua_Bromley-1-150x150.webp")' }}></div>
                                                                        <p className='font-medium text-sm'>Nguyễn Thế Dương</p>
                                                                        <p className='text-xs'>Developer</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={`${tab == 2 ? "flex" : "hidden"} grid grid-cols-5 gap-8 py-12`}>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
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
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
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
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
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
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
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
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
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
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
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



                </div >
        )
}
export default Agency