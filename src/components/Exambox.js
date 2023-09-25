import Image from "next/image";
import Link from "next/link";
import { Popover } from "antd";


//popover menu
const content = (
  <div className="flex flex-col text-right">
    <a href="#" className="text-textcolor text-textcolor hover:text-linkhovercolor">لینک شماره 1</a>
    <a href="#" className="text-textcolor text-textcolor hover:text-linkhovercolor">لینک شماره 2</a>
  </div>
);


const Exambox = () => {
  return (
    <div className="flex flex-col w-1/5">

      <div className="flex ">
        <div className=" justify-betweem mx-2 rounded-2xl flex flex-col shadow-lg">
          <div className="">
            <Image
              src="/assets/img/image1.png"
              width={400}
              height={500}
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              alt="exam image"
            />
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse my-2 items-center">
            <div className="text-textcolor">عنوان امتحان 1</div>
            <div className="">
              <Popover
                content={content}
                title="عنوان"
                className="text-textcolor"
                trigger="click"
                
              >
                <img
                  src="/assets/icon/verticalmenupoints.svg"
                  alt="verticalmenu"
                />
              </Popover>
            </div>
          </div>
          <div className="flex justify-between mx-2 flex-row-reverse mb-3 mt-1 items-center">
            <div className="text-datecolor">1400/10/23</div>
            <div className="text-timecolor">16:00</div>
            <div className="">
              <img src="/assets/icon/heart.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exambox;
