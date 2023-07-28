import useScrollTop from '@/hooks/useScrollTop'

const ButtonScrollTop = () => {
  const { showButton, scrollToTop } = useScrollTop()

  return (
    <div className={`${showButton ? 'opacity-100' : 'opacity-0'} delay-300 duration-300 fixed bottom-24 right-4 xl:right-12 z-10`}>
      <button type="button" onClick={scrollToTop} className="text-xl text-gray-600 animate-bounce p-2 w-11 h-11 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-gray-200">
        <span className="rotate-180">↓</span>
      </button>
    </div>
  )
}

export default ButtonScrollTop