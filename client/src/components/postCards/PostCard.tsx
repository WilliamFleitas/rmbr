import { useState } from 'react'

interface PostCardType {
  description: string
  title: string
  date: string
}
interface PostCardPropsType {
  postData: PostCardType
}
const PostCard = ({ postData }: PostCardPropsType) => {
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState<number | null>(
    null
  )

  const handleMouseEnterChange = (index: number) => {
    setCurrentHoveredIndex(index)
  }
  const handleMouseLeaveChange = () => {
    setCurrentHoveredIndex(null)
  }
  return (
    <div className='border border-blue-400 flex flex-col text-start items-start justify-start w-full h-fit max-h-[13rem] min-h-[13rem] max-w-[30rem] bg-red-400 overflow-y-hidden'>
      <section
        onMouseEnter={() => handleMouseEnterChange(0)}
        onMouseLeave={handleMouseLeaveChange}
        className={`bg-yellow-400 w-full flex flex-row px-4  text-start items-start justify-start  ${
          currentHoveredIndex === 1 && 'min-h-[2rem] max-h-[2rem] py-0 flex-grow h-full'
        } ${currentHoveredIndex === 0 && 'min-h-[11rem] max-h-[11rem] py-4'} ${
          currentHoveredIndex === null && 'min-h-[9rem] max-h-[9rem] py-4'
        } mb-auto overflow-hidden`}
      >
        {currentHoveredIndex === 1 ? (
          <span className='flex text-center items-center justify-center w-full'>X</span>
        ) : (
          <div className={`flex flex-col w-full h-full  ${currentHoveredIndex === null && "max-h-[7rem] overflow-y-hidden"} ${currentHoveredIndex === 0 && "max-h-[9rem] overflow-y-auto"} `}>
            <p className='text-3xl items-start font-medium w-full'>
              {postData.description}
            </p>
          </div>
        )}
      </section>
      <section
        onMouseEnter={() => handleMouseEnterChange(1)}
        onMouseLeave={handleMouseLeaveChange}
        className={`bg-purple-400 w-full flex flex-row px-4  text-start items-start justify-start   ${
          currentHoveredIndex === 0 && 'min-h-[2rem] max-h-[2rem] py-0 flex-grow h-full'
        } ${currentHoveredIndex === 1 && 'min-h-[11rem] max-h-[11rem] overflow-y-auto py-4'} ${
          currentHoveredIndex === null && 'min-h-[4rem] max-h-[4rem]'
        } mt-auto py-4`}
      >
        {currentHoveredIndex === 0 ? (
          <span className='flex text-center items-center justify-center w-full'>X</span>
        ) : (
          <div className='flex flex-row text-start items-center justify-between w-full'>
            <strong className='text-2xl font-bold'>{postData.title}</strong>
            <small className='text-lg '>{postData.date}</small>
          </div>
        )}
      </section>
    </div>
  )
}

export default PostCard
