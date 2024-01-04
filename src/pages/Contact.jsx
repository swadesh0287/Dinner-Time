import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const details = {
  name: 'Swadesh Kumar',
  bio: 'Frontend Developer',
  contact: {
    email: 'swadeshkumar.career@gmail.com',
    github: 'https://github.com/swadesh0287',
    linkedin: 'https://www.linkedin.com/in/swadesh-kumar',
  },
};

const Contact = () => {
  return (
    <div className='container-max min-h-screen'>
      <img className='text-2xl my-4 font-bold' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iXbo7SFGkBtFZNQ0xCMFSOfqeivJhZHrbw&usqp=CAU'/>
      <div>
        <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍🍳</h2>
        <p className='text-lg'>{details.bio}</p>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <a href={details.contact.email} className='flex items-center gap-1'>
              {details.contact.email}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Github: </span>{' '}
            <a
              href={details.contact.github}
              className='flex items-center gap-1'
            >
              {details.contact.github}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Linkedin: </span>{' '}
            <a
              href={details.contact.linkedin}
              className='flex items-center gap-1'
            >
              {details.contact.linkedin}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
