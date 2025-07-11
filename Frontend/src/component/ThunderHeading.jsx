import { AiFillThunderbolt } from "react-icons/ai";

const Heading = ({title})=>{
    return (
        <div className='flex items-center gap-2 bg-[#FFFFFF] w-fit py-2 px-4 rounded-[50px] border border-[#E3E3E3] mb-3'>
            <div className='bg-[#EBF5FF] p-2 rounded-full '>
                <AiFillThunderbolt className='text-[#296AD2]' />
            </div>
            <p className='text-[14px]'>{title}</p>
        </div>
    )
}

export default Heading