const useColor = () => {
  const colors = [
    'bg-gradient-to-b from-blue-500 via-green-300 to-blue-500',
    'bg-gradient-to-b from-blue-500 via-green-300 to-blue-500',
    'bg-gradient-to-b from-blue-500 via-green-300 to-blue-500',
    'bg-gradient-to-b from-blue-500 via-green-300 to-blue-500',
  ]
  const getColor = (index) => colors[index % colors.length]
  return { getColor }
}

export default useColor
