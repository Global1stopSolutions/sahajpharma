// import React, { useEffect } from "react";
// import { Card, CardBody, Image, Input } from "@nextui-org/react";
// import { Link } from "@nextui-org/react";
// import NextImage from "next/image";
// import { JobOPeningCard } from "@/components/cards/job-opening-cards";
// import { Inputformfield } from "@/components/input/input-form-field";
// import { LATEST_POST, ARTICLE_CATEGORIES } from "@/constants";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

// export const Blog1 = () => {
//   return (
//     <>
//       <div className="grid grid-cols-12 gap-unit-md">
//         <div className="col-span-9">
//           <Image
//             radius="none"
//             as={NextImage}
//             src="/images/article.jpg"
//             alt="about"
//             height={450}
//             width={890}
//             loading="eager"
//             quality={100}
//           />
//           <Card className="border-none shadow-small rounded-none relative top-[-55px] z-10 w-[800px]">
//             <CardBody>
//               <div className="px-unit-lg pt-unit-md pb-unit-sm">
//                 <div className="flex space-x-unit-lg">
//                   <div className="flex items-center space-x-unit-xs">
//                     <i className="text-primary text-tiny ic-user" />
//                     <label className="text-content1-oldsilvertext-small text-tiny font-light">
//                       Bussiness
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-unit-xs">
//                     <i className="text-primary text-tiny ic-comments" />
//                     <label className="text-content1-oldsilvertext-small font-light text-tiny">
//                       2 comments
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-unit-xl mt-unit-lg">
//                   <h5 className="text-content1-charlestonGreen font-semibold text-3xl">
//                     Guide to HR Adviser and Clients Lessening
//                   </h5>
//                   <p className="text-content1-oldsilver font-light text-medium">
//                     Lorem ipsum is simply free dolor sit amet, consect pisicing
//                     elit. Lorem ipsum dolor sit amet, cibo mundi ea duo, v im
//                     exerci phaedrum. There are many variations of passages of
//                     Lorem Ipsum available, but the majority have alteration in
//                     some injected or words which don't look even slightly
//                     believable. If you are going to use a passage of Lorem
//                     Ipsum, you need to be sure there isn't anything embarrang
//                     hidden in the middle of text. All the Lorem Ipsum generators
//                     on the Internet tend to repeat predefined chunks as
//                     necessary, making this the first true generator on the
//                     Internet. It uses a dictionary of over 200 Latin words,
//                     combined with a handful of model sentence structures, to
//                     generate Lorem Ipsum which looks reasonable.
//                   </p>
//                   <p className="text-content1-oldsilver font-light text-medium">
//                     Lorem ipsum is simply free dolor sit amet, consect pisicing
//                     elit. Lorem ipsum dolor sit amet, cibo mundi ea duo, v im
//                     exerci phaedrum. There are many variations of passages of
//                     Lorem Ipsum available, but the majority have alteration in
//                     some injected or words which don't look even slightly
//                     believable. If you are going to use a passage of Lorem
//                     Ipsum, you need to be sure there isn't anything embarrang
//                     hidden in the middle of text. All the Lorem Ipsum generators
//                     on the Internet tend to repeat predefined chunks as
//                     necessary, making this the first true generator on the
//                     Internet. It uses a dictionary of over 200 Latin words,
//                     combined with a handful of model sentence structures, to
//                     generate Lorem Ipsum which looks reasonable.
//                   </p>
//                   <p className="text-content1-oldsilver font-light text-medium">
//                     Lorem ipsum is simply free dolor sit amet, consect pisicing
//                     elit. Lorem ipsum dolor sit amet, cibo mundi ea duo, v im
//                     exerci phaedrum. There are many variations of passages of
//                     Lorem Ipsum available, but the majority have alteration in
//                     some injected or words which don't look even slightly
//                     believable. If you are going to use a passage of Lorem
//                     Ipsum, you need to be sure there isn't anything embarrang
//                     hidden in the middle of text. All the Lorem Ipsum generators
//                     on the Internet tend to repeat predefined chunks as
//                     necessary, making this the first true generator on the
//                     Internet. It uses a dictionary of over 200 Latin words,
//                     combined with a handful of model sentence structures, to
//                     generate Lorem Ipsum which looks reasonable.
//                   </p>
//                 </div>
//                 <div className="bg-primary flex flex-col justify-center items-center absolute top-0 z-10 right-0 text-white font-base p-unit-sm leading-4">
//                   <div className="font-bold">30</div>
//                   <div className="font-normal">Aug</div>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//           <div className="flex flex-col space-y-unit-xl">
//             <div className="border border-gray-100" />
//             <h5 className="text-content1-charlestonGreen font-semibold text-3xl">
//               Current Opening
//             </h5>
//             <div>
//               <div className="grid grid-cols-2 gap-unit-md pr-unit-3xl">
//                 <JobOPeningCard jobNumber={2} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-3">
//           <Inputformfield
//             label="Name"
//             type="text"
//             labePlacement="outside"
//             placeholder="Search here"
//             radius="sm"
//             variant="text-form-field"
//             endContent={<div className="ic-search"></div>}
//             isLabelHidden={true}
//           />
//           <div className="bg-content1-antiFlashWhite px-unit-sm py-unit-lg mt-unit-lg">
//             <label className="text-content1-charlestonGreen text-2xl font-normal  pl-[15px]">
//               Latest Posts
//             </label>
//             <div className="mt-unit-lg">
//               {LATEST_POST.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex space-x-unit-md items-center p-unit-md hover:bg-white cursor-pointer transition duration-700"
//                 >
//                   <div>
//                     <Image
//                       radius="none"
//                       as={NextImage}
//                       src={item.image}
//                       alt={item.image}
//                       height={75}
//                       width={75}
//                       loading="eager"
//                       quality={100}
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <div className="flex items-center space-x-unit-xs">
//                       <i className={`text-primary ${item.icon}`} />
//                       <p className="text-content1-darkSilver text-small font-normal">
//                         {item.totalComments}
//                       </p>
//                     </div>
//                     <label className="text-content1-charlestonGreen font-semibold text-base">
//                       {item.postTitle}
//                     </label>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="bg-content1-antiFlashWhite px-unit-sm py-unit-lg mt-unit-lg">
//             <label className="text-content1-charlestonGreen text-2xl font-normal pl-[15px]">
//               Categories
//             </label>
//             <div className="mt-unit-lg">
//               {ARTICLE_CATEGORIES.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex space-x-unit-md items-center p-unit-sm hover:bg-white cursor-pointer transition duration-700"
//                 >
//                   <div>
//                     <Link
//                       href={item.link}
//                       className="cursor-pointer text-content1-darkSilver text-base"
//                     >
//                       {item.title}
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <Swiper
//             navigation={false}
//             pagination={true}
//             mousewheel={true}
//             keyboard={true}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper h-[300px]"
//           >
//             <SwiperSlide>
//               <JobOPeningCard jobNumber={1} />
//             </SwiperSlide>
//             <SwiperSlide>
//               <JobOPeningCard jobNumber={1} />
//             </SwiperSlide>
//             <SwiperSlide>
//               <JobOPeningCard jobNumber={1} />
//             </SwiperSlide>
//             <SwiperSlide>
//               <JobOPeningCard jobNumber={1} />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };
