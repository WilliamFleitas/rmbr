import PostCard from '../../../components/postCards/PostCard'
import '../../../App.css'
import './rememberAssets/postCard.css'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const HoverExpandSections = () => {
  return (
    <div className='customBox container'>
      <section className='section section-1'>
        <div className='content'>
          <strong>Section 1</strong>
        </div>
        <div className='placeholder'>
          <TiArrowSortedDown className='w-6 h-6' />
        </div>
      </section>

      <section className='section section-2'>
        <div className='content'>
          <strong>Section 2</strong>
        </div>
        <div className='placeholder'>
          <TiArrowSortedUp className='w-6 h-6' />
        </div>
      </section>
    </div>
  )
}

const postData = [
  {
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit est amet, animi eius, a doloremque nesciunt ab quo, sapiente voluptatibus. Sint, similique voluptate! Inventore vitae beatae ',
    title: 'Text descriptivo',
    date: '04/24/2024'
  },
  {
    description: 'Lorem, ipsum dolor sit amet consectetur ',
    title: 'Text descriptivo',
    date: '04/24/2024'
  }
]

const Remember = () => {
  const handlePingPongClick = () => {
    window.api.pingPong('Hello from Renderer').then((response: any) => {
      console.log('Respuesta desde el proceso principal:', response)
    })
  }
  return (
    <article className='w-full flex flex-col'>
      <div className='border w-full flex flex-col py-4 px-4'>
        <strong>Dont forget</strong>
      </div>
      <div className='customInnerBoxShadow flex flex-row text-start items-center justify-start  w-full h-fit mt-4 px-6 py-10 gap-14'>
        <div className='customBox'>
          <span></span>
        </div>
        <PostCard postData={postData[0]} />
        <HoverExpandSections />
      </div>
      <div>
        <button type='button' onClick={handlePingPongClick}>
          Asd
        </button>
      </div>
    </article>
  )
}

export default Remember
