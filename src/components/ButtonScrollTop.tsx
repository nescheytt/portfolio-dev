import useScrollTop from "@/hooks/useScrollTop"

const ButtonScrollTop = () => {
  const { showButton, scrollToTop } = useScrollTop()

  return (
    <div
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } fixed bottom-24 right-4 z-10 delay-300 duration-300 xl:right-12`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="flex h-11 w-11 animate-bounce items-center justify-center rounded-full border border-gray-600 p-2 text-xl text-gray-600 hover:bg-gray-900 hover:text-gray-200"
      >
        <span className="rotate-180">↓</span>
      </button>
    </div>
  )
}

export default ButtonScrollTop
