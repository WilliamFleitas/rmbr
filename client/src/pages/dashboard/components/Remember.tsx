import PostCard from "../../../components/postCards/PostCard"


const postData = [
  {
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit est amet, animi eius, a doloremque nesciunt ab quo, sapiente voluptatibus. Sint, similique voluptate! Inventore vitae beatae ",
    title: "Text descriptivo",
    date: "04/24/2024"
  },
  {
    description: "Lorem, ipsum dolor sit amet consectetur ",
    title: "Text descriptivo",
    date: "04/24/2024"
  }
]

const Remember = () => {
  return (
    <article className='w-full flex flex-col'>
      <div className='border w-full flex flex-col py-4 px-4'>
        <strong>Dont forget</strong>
      </div>
      <div className='flex flex-row text-start items-center justify-start border-y w-full h-fit mt-4 px-6 py-4 gap-4'>
        <PostCard postData={postData[0]}/>
        <PostCard postData={postData[1]}/>
      </div>
    </article>
  )
}

export default Remember
