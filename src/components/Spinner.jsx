

const Spinner = () => {
  return (
    <div className="flex h-56 justify-center items-center">
  <div className="relative">
    <div className="w-12 h-12 rounded-full absolute
    border-8 border-solid border-gray-200" />
    <div className="w-12 h-12 rounded-full animate-spin absolute
    border-8 border-solid border-purple-500 border-t-transparent" />
  </div>
</div>

  )
}

export default Spinner